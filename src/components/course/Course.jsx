import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Lock, Check, ChevronRight, ArrowLeft, ArrowRight, BookOpen, Target, Scale, Award,
  Clock, MessageCircle, Printer, ListChecks, Sparkles, RotateCcw, Flag,
} from 'lucide-react';
import { renderRich } from '../../richText.jsx';
import LicensePath from '../LicensePath.jsx';

// ============================================================
// POST-LICENSING COURSE — the guided path
// Orientation → Units 1–14 (overview → lessons + checks → summary → unit quiz)
// → Practice exam → Final mock exam (exam rules) → Completion certificate
// Progress lives in prog.course.
// ============================================================

const PASS = 75;
const UNIT_QUIZ_TARGET = 70;
const FINAL_Q = 100, FINAL_MIN = 180;

const shuffle = (a) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const unlockAll = (() => { try { return new URLSearchParams(window.location.search).get('unlock') === '1'; } catch { return false; } })();

export const emptyCourse = () => ({ oriented: false, lessons: {}, units: {}, practice: null, final: null });

// ---------- completion logic (exported so the dashboard can show progress) ----------
export const courseState = (sections, course = emptyCourse()) => {
  const lessonDone = (u, l) => !!course.lessons?.[`${u.id}:${l.id}`]?.done;
  const unitDone = (u) => u.sections.every(l => lessonDone(u, l)) && !!course.units?.[u.id]?.quizTaken;
  const units = sections.map((u, i) => ({
    u,
    lessonsDone: u.sections.filter(l => lessonDone(u, l)).length,
    done: unitDone(u),
    unlocked: unlockAll || (course.oriented && (i === 0 || unitDone(sections[i - 1]))),
    quizBest: course.units?.[u.id]?.quizBest ?? null,
  }));
  const allUnits = units.every(x => x.done);
  const practiceUnlocked = unlockAll || allUnits;
  const finalUnlocked = unlockAll || (allUnits && !!course.practice);
  const finalPassed = (course.final?.best ?? 0) >= PASS;
  const steps = 1 + units.length + 2;
  const doneSteps = (course.oriented ? 1 : 0) + units.filter(x => x.done).length + (course.practice ? 1 : 0) + (finalPassed ? 1 : 0);
  const next = !course.oriented ? { kind: 'orientation' }
    : units.find(x => !x.done) ? (() => { const x = units.find(y => !y.done); const l = x.u.sections.find(s => !lessonDone(x.u, s)); return l ? { kind: 'lesson', uid: x.u.id, lid: l.id, label: `Unit ${x.u.num} · ${l.title}` } : { kind: 'quiz', uid: x.u.id, label: `Unit ${x.u.num} quiz` }; })()
    : !course.practice ? { kind: 'practice', label: 'Practice exam' }
    : !finalPassed ? { kind: 'final', label: 'Final mock exam' } : { kind: 'certificate', label: 'Your certificate' };
  return { units, lessonDone, practiceUnlocked, finalUnlocked, finalPassed, pct: Math.round((doneSteps / steps) * 100), doneSteps, steps, next };
};

// ============================================================
// QUIZ RUNNER — learn mode (instant feedback) or exam mode (score at end)
// ============================================================
function QuizRunner({ title, questions, mode = 'learn', allowBack = true, minutes = 0, passPct = PASS, onFinish, onExit, onRecord }) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState({});
  const [done, setDone] = useState(null);
  const [left, setLeft] = useState(minutes * 60);
  const [flags, setFlags] = useState({});
  const finishRef = useRef(null);

  const finish = () => {
    if (done) return;
    let correct = 0;
    questions.forEach((q, i) => { const ok = answers[i] === q.correct; if (ok) correct++; if (mode === 'exam') onRecord?.(q, ok); });
    const res = { correct, total: questions.length, pct: Math.round((correct / questions.length) * 100), answers };
    setDone(res);
    onFinish?.(res);
  };
  finishRef.current = finish;

  useEffect(() => {
    if (!minutes || done) return;
    const t = setInterval(() => setLeft(s => { if (s <= 1) { clearInterval(t); setTimeout(() => finishRef.current(), 0); return 0; } return s - 1; }), 1000);
    return () => clearInterval(t);
  }, [minutes, done]);

  const fmt = (s) => `${Math.floor(s / 3600)}:${String(Math.floor((s % 3600) / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  if (done) {
    const missed = questions.map((q, i) => ({ q, i })).filter(({ q, i }) => answers[i] !== q.correct);
    const passed = done.pct >= passPct;
    return (
      <motion.div className="space-y-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="glass-card p-6 text-center">
          <div className={'text-5xl font-display font-bold ' + (passed ? 'text-emerald-400' : 'text-amber-400')}>{done.pct}%</div>
          <p className="text-surface-300 mt-2">{done.correct} of {done.total} correct · {passed ? 'passed' : `${passPct}% needed`}</p>
          <p className="text-surface-500 text-sm mt-1">{title}</p>
        </div>
        {missed.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-display font-semibold text-surface-100">Review what you missed ({missed.length})</h3>
            {missed.map(({ q, i }) => (
              <div key={i} className="glass-card p-4 space-y-2">
                <p className="text-surface-100 text-sm font-medium">{renderRich(q.question)}</p>
                {answers[i] !== undefined && <p className="text-red-300 text-sm">Your answer: {q.options[answers[i]]}</p>}
                <p className="text-emerald-300 text-sm">Correct: {q.options[q.correct]}</p>
                <p className="text-surface-400 text-sm">{renderRich(q.explanation)}</p>
                {q.st && <p className="text-surface-500 text-xs">{q.st}</p>}
              </div>
            ))}
          </div>
        )}
        <button onClick={onExit} className="btn-primary w-full">Back to the course</button>
      </motion.div>
    );
  }

  const q = questions[idx];
  const chosen = answers[idx];
  const show = mode === 'learn' && revealed[idx];
  const answeredCount = Object.keys(answers).length;
  const choose = (oi) => {
    if (show) return;
    setAnswers(a => ({ ...a, [idx]: oi }));
    if (mode === 'learn') { setRevealed(r => ({ ...r, [idx]: true })); onRecord?.(q, oi === q.correct); }
  };
  const last = idx === questions.length - 1;
  const canNext = chosen !== undefined;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button onClick={() => { if (mode === 'learn' || confirm('Leave the exam? Your answers will be lost.')) onExit(); }} className="btn-ghost flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Exit</button>
        <div className="text-sm text-surface-400 flex items-center gap-3">
          {minutes > 0 && <span className={'flex items-center gap-1 ' + (left < 600 ? 'text-red-400' : '')}><Clock className="w-4 h-4" />{fmt(left)}</span>}
          <span>{idx + 1} / {questions.length}</span>
        </div>
      </div>
      <div className="progress-track"><div className="progress-fill" style={{ width: ((idx + 1) / questions.length) * 100 + '%' }} /></div>
      <div className="glass-card p-6 space-y-4">
        <div className="flex justify-between gap-3">
          <p className="text-surface-100 font-medium leading-relaxed">{renderRich(q.question)}</p>
          {mode === 'exam' && allowBack && <button onClick={() => setFlags(f => ({ ...f, [idx]: !f[idx] }))} title="Flag for review" className={'shrink-0 ' + (flags[idx] ? 'text-amber-400' : 'text-surface-600')}><Flag className="w-4 h-4" /></button>}
        </div>
        <div className="space-y-2">
          {q.options.map((o, oi) => {
            let cls = 'w-full text-left p-3 rounded-xl border text-sm transition-colors ';
            if (show) cls += oi === q.correct ? 'border-emerald-500 bg-emerald-500/15 text-emerald-200' : oi === chosen ? 'border-red-500 bg-red-500/15 text-red-200' : 'border-surface-700 text-surface-400';
            else cls += oi === chosen ? 'border-brand-500 bg-brand-500/15 text-surface-100' : 'border-surface-700 hover:border-surface-500 text-surface-200';
            return <button key={oi} onClick={() => choose(oi)} className={cls}><span className="font-semibold mr-2">{String.fromCharCode(65 + oi)})</span>{o}</button>;
          })}
        </div>
        {show && <div className={'rounded-xl p-3 text-sm ' + (chosen === q.correct ? 'bg-emerald-500/10 text-emerald-200' : 'bg-amber-500/10 text-amber-200')}><strong>{chosen === q.correct ? 'Correct. ' : 'Not quite. '}</strong>{renderRich(q.explanation)}</div>}
      </div>
      <div className="flex gap-3">
        {allowBack && idx > 0 && <button onClick={() => setIdx(i => i - 1)} className="btn-secondary flex-1">Previous</button>}
        {!last && <button disabled={!canNext} onClick={() => setIdx(i => i + 1)} className="btn-primary flex-1 disabled:opacity-40">Next</button>}
        {last && <button disabled={!canNext} onClick={() => { if (mode === 'exam' && answeredCount < questions.length && !confirm(`${questions.length - answeredCount} unanswered. Submit anyway?`)) return; finish(); }} className="btn-primary flex-1 disabled:opacity-40">{mode === 'exam' ? 'Submit exam' : 'Finish'}</button>}
      </div>
      {mode === 'exam' && allowBack && (
        <div className="flex flex-wrap gap-1">
          {questions.map((_, i) => <button key={i} onClick={() => setIdx(i)} className={'w-7 h-7 rounded text-xs ' + (i === idx ? 'bg-brand-500 text-surface-950' : flags[i] ? 'bg-amber-500/30 text-amber-200' : answers[i] !== undefined ? 'bg-surface-600 text-surface-200' : 'bg-surface-800 text-surface-500')}>{i + 1}</button>)}
        </div>
      )}
      {mode === 'exam' && !allowBack && <p className="text-xs text-surface-500 text-center">Exam rules: no going back. Answer, then move on.</p>}
    </div>
  );
}

// ============================================================
// LESSON CHECK — 2–3 quick questions under each lesson
// ============================================================
function LessonCheck({ checks, saved, onComplete }) {
  const [ans, setAns] = useState(saved?.answers || {});
  const doneCount = Object.keys(ans).length;
  useEffect(() => {
    if (doneCount === checks.length && !saved?.done) {
      const score = checks.filter((c, i) => ans[i] === c.correct).length;
      onComplete({ done: true, answers: ans, score, of: checks.length });
    }
  }, [doneCount]);
  return (
    <div className="glass-card p-5 space-y-4 border border-brand-500/20">
      <div className="flex items-center gap-2 text-brand-400 font-display font-semibold"><ListChecks className="w-5 h-5" /> Lesson check</div>
      {checks.map((c, i) => {
        const a = ans[i];
        return (
          <div key={i} className="space-y-2">
            <p className="text-surface-100 text-sm font-medium">{i + 1}. {renderRich(c.question)}</p>
            <div className={c.options.length === 2 ? 'grid grid-cols-2 gap-2' : 'space-y-2'}>
              {c.options.map((o, oi) => {
                let cls = 'w-full text-left p-2.5 rounded-lg border text-sm ';
                if (a !== undefined) cls += oi === c.correct ? 'border-emerald-500 bg-emerald-500/15 text-emerald-200' : oi === a ? 'border-red-500 bg-red-500/15 text-red-200' : 'border-surface-700 text-surface-500';
                else cls += 'border-surface-700 hover:border-surface-500 text-surface-200';
                return <button key={oi} disabled={a !== undefined} onClick={() => setAns(s => ({ ...s, [i]: oi }))} className={cls}>{o}</button>;
              })}
            </div>
            {a !== undefined && <p className={'text-sm ' + (a === c.correct ? 'text-emerald-300' : 'text-amber-200')}>{a === c.correct ? '✓ ' : '✗ '}{renderRich(c.explanation)}</p>}
          </div>
        );
      })}
    </div>
  );
}

// ============================================================
// COURSE
// ============================================================
export default function Course({ sections, prog, setProg, onRecord, addXP, updateStreak, askTutor, jump, clearJump, userName, isPost }) {
  const course = prog.course || emptyCourse();
  const st = useMemo(() => courseState(sections, course), [sections, prog.course]);
  const [view, setView] = useState({ kind: 'home' });
  const top = () => { try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch {} };
  const go = (v) => { setView(v); top(); };

  const patch = (fn) => setProg(p => { const c = p.course || emptyCourse(); return { ...p, course: fn(c) }; });

  // External navigation (search results, dashboard "continue")
  useEffect(() => {
    if (!jump) return;
    if (jump.kind === 'lesson') go({ kind: 'lesson', uid: jump.uid, lid: jump.lid });
    else if (jump.kind === 'unit') go({ kind: 'unit', uid: jump.uid });
    else if (jump.kind) go({ kind: jump.kind, uid: jump.uid });
    clearJump?.();
  }, [jump]);

  const unitById = (id) => sections.find(s => s.id === id);

  // Build quiz/exam question sets once per view (not on every progress update).
  const runQs = useMemo(() => {
    if (view.kind === 'quiz') {
      const u = sections.find(s => s.id === view.uid);
      return u ? shuffle(u.practiceQuestions.slice(0, u.unitQuizCount).map((q, i) => ({ ...q, sid: u.id, qi: i, st: u.title }))) : [];
    }
    if (view.kind === 'practice' || view.kind === 'final') {
      const pick = [];
      sections.forEach(s => {
        const n = Math.max(1, Math.round((s.percentage / 100) * FINAL_Q));
        pick.push(...shuffle(s.practiceQuestions.map((q, i) => ({ ...q, sid: s.id, qi: i, st: s.title }))).slice(0, n));
      });
      return shuffle(pick).slice(0, FINAL_Q);
    }
    return [];
  }, [view, sections]);
  const unitState = (id) => st.units.find(x => x.u.id === id);

  // ---------------- Orientation ----------------
  if (view.kind === 'orientation') {
    const pts = [
      ['How the course works', `${sections.length} units in order. Each unit opens with objectives and key terms, then lessons with a short check, a one-screen summary and a unit quiz.`],
      ['What "complete" means', 'Read every lesson and answer its check, then take the unit quiz. That unlocks the next unit. Aim for 70%+ on each unit quiz; you can retake it any time.'],
      ['The finish line', 'After Unit 14: a practice exam (go back and change answers, flag questions), then the final mock exam under real rules — 100 questions, 3 hours, no going back, 75% to pass.'],
      ['Your tools', 'Cards (spaced repetition), Quiz (adaptive to your weak units), Guide (numbers to know) and the AI Tutor. The Tutor takes typed questions and screenshots and points you to the lesson that covers it. Search (top right) finds any topic.'],
      ['Saved everywhere', 'Progress saves on this device and, when you sign in, to your account — pick up on your phone where you left off on your laptop.'],
    ];
    return (
      <motion.div className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <button onClick={() => go({ kind: 'home' })} className="btn-ghost flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Course home</button>
        <div className="glass-card p-6">
          <h1 className="text-2xl font-display font-bold text-surface-100">Orientation</h1>
          <p className="text-surface-400 mt-1 text-sm">Five minutes now saves hours later.</p>
        </div>
        {pts.map(([h, b], i) => (
          <div key={i} className="glass-card p-5 flex gap-4">
            <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 font-bold flex items-center justify-center shrink-0">{i + 1}</div>
            <div><h3 className="font-display font-semibold text-surface-100">{h}</h3><p className="text-surface-300 text-sm mt-1 leading-relaxed">{b}</p></div>
          </div>
        ))}
        <div className="glass-card p-5 text-sm text-surface-400 leading-relaxed">
          <strong className="text-surface-200">About credit.</strong> This is a study course that prepares you for the 45-hour post-licensing end-of-course exam. Florida credit is granted only by a FREC-approved school's course and exam; your completion certificate here is a study record.
        </div>
        <button onClick={() => { patch(c => ({ ...c, oriented: true })); addXP?.(25, 'Orientation'); go({ kind: 'unit', uid: sections[0].id }); }} className="btn-primary w-full flex items-center justify-center gap-2">I'm ready — start Unit 1 <ArrowRight className="w-4 h-4" /></button>
      </motion.div>
    );
  }

  // ---------------- Unit overview ----------------
  if (view.kind === 'unit') {
    const u = unitById(view.uid); const us = unitState(view.uid);
    if (!u) return null;
    const qb = course.units?.[u.id];
    return (
      <motion.div className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <button onClick={() => go({ kind: 'home' })} className="btn-ghost flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Course home</button>
        <div className="glass-card p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold" style={{ backgroundColor: u.color }}>U{u.num}</div>
            <div><h1 className="text-xl font-display font-bold text-surface-100">{u.shortTitle}</h1><p className="text-surface-400 text-sm">{u.content}</p></div>
          </div>
          <div className="mt-4">
            <h4 className="text-xs uppercase tracking-wide text-surface-500 mb-2">You will be able to</h4>
            <ul className="space-y-1">{u.objectives.map((o, i) => <li key={i} className="text-surface-300 text-sm flex gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />{o}</li>)}</ul>
          </div>
        </div>
        {u.keyTerms?.length > 0 && (
          <details className="glass-card p-5">
            <summary className="cursor-pointer font-display font-semibold text-surface-100">Key terms ({u.keyTerms.length})</summary>
            <div className="mt-3 divide-y divide-surface-700/50">{u.keyTerms.map((t, i) => <div key={i} className="py-2 text-sm"><span className="text-brand-300 font-semibold">{t.term}</span><span className="text-surface-400"> — {t.def}</span></div>)}</div>
          </details>
        )}
        <div className="glass-card p-2">
          {u.sections.map((l, i) => {
            const done = st.lessonDone(u, l);
            const open = unlockAll || i === 0 || st.lessonDone(u, u.sections[i - 1]);
            const sc = course.lessons?.[`${u.id}:${l.id}`];
            return (
              <button key={l.id} disabled={!open} onClick={() => go({ kind: 'lesson', uid: u.id, lid: l.id })} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-surface-800/60 disabled:opacity-40 text-left">
                <div className={'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ' + (done ? 'bg-emerald-500/20 text-emerald-400' : 'bg-surface-800 text-surface-400')}>{done ? <Check className="w-4 h-4" /> : open ? <BookOpen className="w-4 h-4" /> : <Lock className="w-4 h-4" />}</div>
                <div className="flex-1"><div className="text-surface-100 text-sm font-medium">Lesson {l.id.replace(/^l/, '')} · {l.title}</div>{sc?.done && <div className="text-xs text-surface-500">Check: {sc.score}/{sc.of}</div>}</div>
                <ChevronRight className="w-4 h-4 text-surface-500" />
              </button>
            );
          })}
          <button disabled={!unlockAll && us.lessonsDone < u.sections.length} onClick={() => go({ kind: 'summary', uid: u.id })} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-surface-800/60 disabled:opacity-40 text-left">
            <div className="w-8 h-8 rounded-lg bg-surface-800 text-surface-400 flex items-center justify-center"><Sparkles className="w-4 h-4" /></div>
            <div className="flex-1 text-surface-100 text-sm font-medium">Unit summary</div><ChevronRight className="w-4 h-4 text-surface-500" />
          </button>
          <button disabled={!unlockAll && us.lessonsDone < u.sections.length} onClick={() => go({ kind: 'quiz', uid: u.id, n: Date.now() })} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-surface-800/60 disabled:opacity-40 text-left">
            <div className={'w-8 h-8 rounded-lg flex items-center justify-center ' + (qb?.quizTaken ? 'bg-emerald-500/20 text-emerald-400' : 'bg-surface-800 text-surface-400')}>{qb?.quizTaken ? <Check className="w-4 h-4" /> : <Target className="w-4 h-4" />}</div>
            <div className="flex-1"><div className="text-surface-100 text-sm font-medium">Unit {u.num} quiz · {u.unitQuizCount} questions</div>{qb?.quizTaken && <div className="text-xs text-surface-500">Best {qb.quizBest}%{qb.quizBest < UNIT_QUIZ_TARGET ? ' · retake to reach 70%' : ''}</div>}</div>
            <ChevronRight className="w-4 h-4 text-surface-500" />
          </button>
        </div>
      </motion.div>
    );
  }

  // ---------------- Lesson ----------------
  if (view.kind === 'lesson') {
    const u = unitById(view.uid); if (!u) return null;
    const li = u.sections.findIndex(l => l.id === view.lid); const l = u.sections[li]; if (!l) return null;
    const key = `${u.id}:${l.id}`;
    const saved = course.lessons?.[key];
    const nextLesson = u.sections[li + 1];
    const done = !!saved?.done;
    return (
      <motion.div key={key} className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex items-center justify-between">
          <button onClick={() => go({ kind: 'unit', uid: u.id })} className="btn-ghost flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Unit {u.num}</button>
          <span className="text-xs text-surface-500">Lesson {li + 1} of {u.sections.length}</span>
        </div>
        <div className="glass-card p-6 space-y-3">
          <p className="text-xs uppercase tracking-wide" style={{ color: u.color }}>Unit {u.num} · {u.shortTitle}</p>
          <h1 className="text-xl font-display font-bold text-surface-100">{l.title}</h1>
          {l.body.map((p, i) => <p key={i} className="text-surface-300 text-sm leading-relaxed">{renderRich(p)}</p>)}
        </div>
        {l.keyPoints?.length > 0 && (
          <div className="rounded-xl p-4 bg-brand-500/10 border border-brand-500/20">
            <div className="text-brand-400 text-xs font-semibold uppercase tracking-wide mb-2">Key points</div>
            <ul className="space-y-1">{l.keyPoints.map((k, i) => <li key={i} className="text-surface-200 text-sm">• {renderRich(k)}</li>)}</ul>
          </div>
        )}
        {l.examTips?.map((t, i) => <div key={i} className="rounded-xl p-3 bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm"><span className="font-semibold">Exam trap: </span>{renderRich(t)}</div>)}
        <LessonCheck key={key} checks={l.check} saved={saved} onComplete={(r) => { patch(c => ({ ...c, lessons: { ...c.lessons, [key]: r } })); addXP?.(10 + r.score * 5, 'Lesson complete'); updateStreak?.(); }} />
        <div className="flex gap-3">
          <button onClick={() => askTutor?.(`I'm on the lesson "${l.title}" (Unit ${u.num}). Explain the most testable points in plain language and give me one practice question.`, true)} className="btn-secondary flex items-center justify-center gap-2 flex-1"><MessageCircle className="w-4 h-4" /> Ask the tutor</button>
          <button disabled={!done && !unlockAll} onClick={() => nextLesson ? go({ kind: 'lesson', uid: u.id, lid: nextLesson.id }) : go({ kind: 'summary', uid: u.id })} className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-40">{nextLesson ? 'Next lesson' : 'Unit summary'} <ArrowRight className="w-4 h-4" /></button>
        </div>
        {!done && <p className="text-xs text-surface-500 text-center">Answer the lesson check to continue.</p>}
      </motion.div>
    );
  }

  // ---------------- Summary ----------------
  if (view.kind === 'summary') {
    const u = unitById(view.uid); if (!u) return null;
    return (
      <motion.div className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <button onClick={() => go({ kind: 'unit', uid: u.id })} className="btn-ghost flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Unit {u.num}</button>
        <div className="glass-card p-6 space-y-3">
          <h1 className="text-xl font-display font-bold text-surface-100">Unit {u.num} summary</h1>
          <ul className="space-y-2">{u.summary.map((s, i) => <li key={i} className="text-surface-300 text-sm leading-relaxed flex gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span>{renderRich(s)}</span></li>)}</ul>
        </div>
        <button onClick={() => go({ kind: 'quiz', uid: u.id })} className="btn-primary w-full flex items-center justify-center gap-2"><Target className="w-4 h-4" /> Take the Unit {u.num} quiz</button>
      </motion.div>
    );
  }

  // ---------------- Unit quiz ----------------
  if (view.kind === 'quiz') {
    const u = unitById(view.uid); if (!u) return null;
    const qs = runQs;
    return <QuizRunner key={'q' + u.id + (view.n || 0)} title={`Unit ${u.num} quiz`} questions={qs} mode="learn" passPct={UNIT_QUIZ_TARGET}
      onRecord={(q, ok) => onRecord(q.sid, q.qi, ok)}
      onFinish={(r) => {
        patch(c => ({ ...c, units: { ...c.units, [u.id]: { quizTaken: true, quizBest: Math.max(c.units?.[u.id]?.quizBest || 0, r.pct), lastAt: new Date().toISOString() } } }));
        addXP?.(20 + r.correct * 3, r.pct >= UNIT_QUIZ_TARGET ? `Unit ${u.num} complete` : 'Unit quiz');
        updateStreak?.();
      }}
      onExit={() => go({ kind: 'home' })} />;
  }

  // ---------------- Practice / Final ----------------
  if (view.kind === 'practice' || view.kind === 'final') {
    const isFinal = view.kind === 'final';
    const qs = runQs;
    return <QuizRunner key={view.kind + (view.n || 0)} title={isFinal ? 'Final mock exam' : 'Practice exam'} questions={qs} mode="exam" allowBack={!isFinal} minutes={FINAL_MIN}
      onRecord={(q, ok) => onRecord(q.sid, q.qi, ok)}
      onFinish={(r) => {
        patch(c => {
          const prev = c[view.kind] || { attempts: 0, best: 0 };
          return { ...c, [view.kind]: { attempts: prev.attempts + 1, best: Math.max(prev.best, r.pct), last: r.pct, at: new Date().toISOString(), passedAt: prev.passedAt || (r.pct >= PASS ? new Date().toISOString() : null) } };
        });
        setProg(p => ({ ...p, stats: { ...p.stats, examsTaken: (p.stats.examsTaken || 0) + 1, examsPassed: (p.stats.examsPassed || 0) + (r.pct >= PASS ? 1 : 0), examHighScore: Math.max(p.stats.examHighScore || 0, r.pct) } }));
        addXP?.(50 + r.correct * 2 + (r.pct >= PASS ? 200 : 0), r.pct >= PASS ? (isFinal ? 'Course complete!' : 'Practice passed') : 'Exam complete');
        updateStreak?.();
      }}
      onExit={() => go({ kind: (isFinal && (course.final?.best ?? 0) >= PASS) ? 'certificate' : 'home' })} />;
  }

  // ---------------- Certificate ----------------
  if (view.kind === 'certificate') {
    const f = course.final || {};
    const date = f.passedAt ? new Date(f.passedAt) : new Date();
    return (
      <div className="space-y-4">
        <button onClick={() => go({ kind: 'home' })} className="btn-ghost flex items-center gap-2 print:hidden"><ArrowLeft className="w-4 h-4" /> Course home</button>
        <div id="certificate" className="rounded-2xl p-8 text-center border-2" style={{ borderColor: '#eab308', background: 'linear-gradient(135deg, rgba(234,179,8,.08), rgba(15,23,42,.6))' }}>
          <Award className="w-14 h-14 mx-auto text-brand-400" />
          <p className="uppercase tracking-[0.2em] text-xs text-surface-400 mt-4">Certificate of study completion</p>
          <h1 className="text-3xl font-display font-bold text-surface-50 mt-3">{userName || 'Student'}</h1>
          <p className="text-surface-300 mt-3">completed all {sections.length} units of the</p>
          <p className="text-xl font-display font-semibold text-brand-300 mt-1">Florida Sales Associate Post-Licensing 45 — Exam Prep</p>
          <p className="text-surface-300 mt-3">and passed the final mock exam with <strong className="text-surface-50">{f.best}%</strong></p>
          <p className="text-surface-500 text-sm mt-4">{date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · FL RE ADAPT · Main Street Group</p>
          <p className="text-surface-600 text-xs mt-6 max-w-md mx-auto">A study record. Florida post-licensing credit is issued only by a FREC-approved school after its end-of-course exam.</p>
        </div>
        <button onClick={() => window.print()} className="btn-primary w-full flex items-center justify-center gap-2 print:hidden"><Printer className="w-4 h-4" /> Print or save as PDF</button>
      </div>
    );
  }

  // ---------------- Course home ----------------
  const Row = ({ icon: Icon, title, sub, done, locked, onClick, color }) => (
    <button disabled={locked} onClick={onClick} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-surface-800/60 disabled:opacity-40 text-left">
      <div className={'w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold ' + (done ? 'bg-emerald-500/20 text-emerald-400' : 'bg-surface-800 text-surface-300')} style={!done && color && !locked ? { backgroundColor: color + '33', color } : undefined}>
        {done ? <Check className="w-5 h-5" /> : locked ? <Lock className="w-4 h-4" /> : <Icon className="w-5 h-5" />}
      </div>
      <div className="flex-1 min-w-0"><div className="text-surface-100 text-sm font-medium truncate">{title}</div>{sub && <div className="text-xs text-surface-500">{sub}</div>}</div>
      {!locked && <ChevronRight className="w-4 h-4 text-surface-500" />}
    </button>
  );
  const goNext = () => { const n = st.next; if (n.kind === 'orientation') go({ kind: 'orientation' }); else if (n.kind === 'lesson') go({ kind: 'lesson', uid: n.uid, lid: n.lid }); else go({ kind: n.kind, uid: n.uid }); };

  return (
    <motion.div className="space-y-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="glass-card p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-display font-bold text-surface-100">Your course</h1>
            <p className="text-surface-400 text-sm mt-1">{st.doneSteps} of {st.steps} requirements complete</p>
          </div>
          <div className="text-3xl font-display font-bold text-brand-400">{st.pct}%</div>
        </div>
        <div className="progress-track mt-3"><div className="progress-fill" style={{ width: st.pct + '%' }} /></div>
        <button onClick={goNext} className="btn-primary w-full mt-4 flex items-center justify-center gap-2">{st.next.kind === 'orientation' ? 'Start orientation' : st.next.kind === 'certificate' ? 'View certificate' : `Continue: ${st.next.label}`} <ArrowRight className="w-4 h-4" /></button>
        {unlockAll && <p className="text-xs text-amber-400 mt-2 text-center">Preview mode: all steps unlocked (?unlock=1)</p>}
      </div>

      <LicensePath current="post" compact />

      <div>
        <h3 className="text-xs uppercase tracking-wide text-surface-500 mb-2 px-1">Required for completion</h3>
        <div className="glass-card p-2">
          <Row icon={Sparkles} title="Orientation" sub="How the course works · 5 min" done={course.oriented} onClick={() => go({ kind: 'orientation' })} />
          {st.units.map(x => (
            <Row key={x.u.id} icon={BookOpen} color={x.u.color} title={`Unit ${x.u.num}: ${x.u.shortTitle}`}
              sub={`${x.lessonsDone}/${x.u.sections.length} lessons${x.quizBest !== null ? ` · quiz best ${x.quizBest}%` : ''}`}
              done={x.done} locked={!x.unlocked} onClick={() => go({ kind: 'unit', uid: x.u.id })} />
          ))}
          <Row icon={Target} title="Practice exam" sub={course.practice ? `Best ${course.practice.best}% · ${course.practice.attempts} attempt(s)` : '100 questions · 3 hrs · review & flag allowed'} done={!!course.practice} locked={!st.practiceUnlocked} onClick={() => go({ kind: 'practice', n: Date.now() })} />
          <Row icon={Scale} title="Final mock exam" sub={course.final ? `Best ${course.final.best}% · ${course.final.attempts} attempt(s) · 75% to pass` : '100 questions · 3 hrs · no going back · 75% to pass'} done={st.finalPassed} locked={!st.finalUnlocked} onClick={() => go({ kind: 'final', n: Date.now() })} />
          <Row icon={Award} title="Completion certificate" sub="Unlocks when you pass the final mock" done={false} locked={!st.finalPassed} onClick={() => go({ kind: 'certificate' })} />
        </div>
      </div>
      {course.oriented && (
        <button onClick={() => { if (confirm('Reset all course progress (lessons, unit quizzes, exams)? Your flashcards and stats are kept.')) patch(() => emptyCourse()); }} className="text-xs text-surface-600 hover:text-surface-400 flex items-center gap-1 mx-auto"><RotateCcw className="w-3 h-3" /> Reset course progress</button>
      )}
    </motion.div>
  );
}
