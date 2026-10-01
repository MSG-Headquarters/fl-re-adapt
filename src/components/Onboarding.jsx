import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, LayoutDashboard, Search, MessageCircle, Cloud, Repeat, ArrowRight } from 'lucide-react';

// First-run guided tour (once per track per device).
const KEY = (track) => `fl-re-tour-${track}`;
export const tourSeen = (track) => { try { return localStorage.getItem(KEY(track)) === '1'; } catch { return true; } };
const markSeen = (track) => { try { localStorage.setItem(KEY(track), '1'); } catch {} };

export default function Onboarding({ track, isPost, onDone, onSignIn }) {
  const steps = [
    {
      icon: GraduationCap,
      title: isPost ? 'Welcome to Post-Licensing 45' : 'Welcome to FL Real Estate Exam prep',
      body: isPost
        ? 'Your first renewal requires the 45-hour post-licensing course. This track walks you through all 14 units in order and gets you ready for the 75% end-of-course exam.'
        : 'Everything you need for the Florida sales associate state exam: 19 sections, adaptive quizzes, flashcards and a full timed practice exam.',
    },
    {
      icon: LayoutDashboard,
      title: 'Find your way around',
      body: isPost
        ? 'The bottom bar: Home · Course (your guided path) · Cards (spaced repetition) · Quiz (adapts to weak units) · Exam · Guide (numbers to know) · Tutor · Profile.'
        : 'The bottom bar: Home · Cards (spaced repetition) · Study · Guide · Quiz (adapts to weak areas) · Exam · Tutor · Profile.',
    },
    {
      icon: Search,
      title: 'Search anything, anytime',
      body: 'Tap the magnifier at the top to search every lesson — "doc stamps", "PMI", "escrow dispute". Results open right where the topic is taught.',
    },
    {
      icon: MessageCircle,
      title: 'Ask the AI Tutor',
      body: 'Type a question or attach a screenshot of a practice question. The Tutor explains it, shows the math step by step, and links the lesson that covers it.',
    },
    {
      icon: Repeat,
      title: 'One account, both tracks',
      body: 'Switch between pre-license and post-licensing from the header. Enter your license date once and we\'ll show your real post-licensing deadline.',
    },
    {
      icon: Cloud,
      title: 'Save your progress',
      body: 'Progress saves on this device automatically. Sign in to sync it to your account and continue on any device.',
    },
  ];
  const [i, setI] = useState(0);
  const s = steps[i];
  const Icon = s.icon;
  const close = () => { markSeen(track); onDone(); };
  const last = i === steps.length - 1;

  return (
    <div className="fixed inset-0 z-[70] bg-surface-950/85 backdrop-blur-sm flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="glass-card p-7 max-w-md w-full">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #eab308, #f59e0b)' }}><Icon className="w-7 h-7 text-surface-950" /></div>
          <h2 className="text-xl font-display font-bold text-surface-100 mt-4">{s.title}</h2>
          <p className="text-surface-300 text-sm mt-2 leading-relaxed">{s.body}</p>
          <div className="flex gap-1.5 mt-5">{steps.map((_, k) => <div key={k} className={'h-1.5 rounded-full transition-all ' + (k === i ? 'w-6 bg-brand-400' : 'w-1.5 bg-surface-700')} />)}</div>
          <div className="flex gap-3 mt-6">
            <button onClick={close} className="btn-ghost text-sm">Skip</button>
            <div className="flex-1" />
            {last && onSignIn && <button onClick={() => { close(); onSignIn(); }} className="btn-secondary text-sm">Sign in</button>}
            <button onClick={() => last ? close() : setI(i + 1)} className="btn-primary text-sm flex items-center gap-1">{last ? 'Start' : 'Next'} <ArrowRight className="w-4 h-4" /></button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
