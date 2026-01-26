import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Brain, BookOpen, Target, FileText, Scale, Trophy,
  Flame, Star, Zap, ChevronRight, Check, X, Clock, TrendingUp,
  Award, Calendar, BarChart3, GraduationCap, Sparkles, Play, Pause,
  RotateCcw, ArrowRight, ArrowLeft, Home, Settings, User, Info
} from 'lucide-react';
import { HISTORICAL_TIMELINE, CASE_STUDIES, EXAM_SECTIONS, EXAM_STATS } from './examData.js';
import { CHAPTERS, getChapterById } from './data/chapters';
import ChapterContent from './components/chapters/ChapterContent';

// ============================================================
// FL REAL ESTATE EXAM - ADAPTIVE STUDY PLATFORM v3.0 POLISHED
// ============================================================

const TIMELINE_DATA = HISTORICAL_TIMELINE || [];
const CASES_DATA = CASE_STUDIES || [];
const SECTIONS_DATA = EXAM_SECTIONS || [];

const ACHIEVEMENTS = [
  { id: 'first_quiz', name: 'First Steps', desc: 'Complete your first quiz', icon: '🎯', xp: 50, check: (s) => s.quizzesTaken >= 1 },
  { id: 'quiz_5', name: 'Getting Started', desc: 'Complete 5 quizzes', icon: '📝', xp: 100, check: (s) => s.quizzesTaken >= 5 },
  { id: 'quiz_25', name: 'Quiz Master', desc: 'Complete 25 quizzes', icon: '🏅', xp: 250, check: (s) => s.quizzesTaken >= 25 },
  { id: 'quiz_100', name: 'Quiz Legend', desc: 'Complete 100 quizzes', icon: '👑', xp: 500, check: (s) => s.quizzesTaken >= 100 },
  { id: 'perfect_quiz', name: 'Perfect Score', desc: 'Get 100% on a quiz', icon: '💯', xp: 150, check: (s) => s.perfectQuizzes >= 1 },
  { id: 'perfect_5', name: 'Perfectionist', desc: '5 perfect quizzes', icon: '✨', xp: 300, check: (s) => s.perfectQuizzes >= 5 },
  { id: 'streak_3', name: 'On Fire', desc: '3 day streak', icon: '🔥', xp: 75, check: (s, st) => st.current >= 3 || st.longest >= 3 },
  { id: 'streak_7', name: 'Week Warrior', desc: '7 day streak', icon: '⚡', xp: 200, check: (s, st) => st.current >= 7 || st.longest >= 7 },
  { id: 'streak_30', name: 'Monthly Master', desc: '30 day streak', icon: '🌟', xp: 500, check: (s, st) => st.current >= 30 || st.longest >= 30 },
  { id: 'cards_50', name: 'Card Collector', desc: 'Review 50 flashcards', icon: '🃏', xp: 100, check: (s) => s.cardsReviewed >= 50 },
  { id: 'cards_500', name: 'Memory Master', desc: 'Review 500 flashcards', icon: '🧠', xp: 400, check: (s) => s.cardsReviewed >= 500 },
  { id: 'exam_pass', name: 'Exam Ready', desc: 'Pass a practice exam', icon: '📋', xp: 300, check: (s) => s.examsPassed >= 1 },
  { id: 'exam_90', name: 'High Scorer', desc: 'Score 90%+ on exam', icon: '🏆', xp: 500, check: (s) => s.examHighScore >= 90 },
  { id: 'level_5', name: 'Rising Star', desc: 'Reach level 5', icon: '⭐', xp: 0, check: (s) => s.level >= 5 },
  { id: 'level_10', name: 'Dedicated', desc: 'Reach level 10', icon: '💪', xp: 0, check: (s) => s.level >= 10 },
  { id: 'level_25', name: 'Expert', desc: 'Reach level 25', icon: '🎓', xp: 0, check: (s) => s.level >= 25 },
  { id: 'mastery_50', name: 'Half Way', desc: '50% overall mastery', icon: '📈', xp: 200, check: (s) => s.overallMastery >= 50 },
  { id: 'mastery_75', name: 'Almost There', desc: '75% overall mastery', icon: '🚀', xp: 350, check: (s) => s.overallMastery >= 75 },
  { id: 'mastery_90', name: 'Master Scholar', desc: '90% overall mastery', icon: '🎖️', xp: 500, check: (s) => s.overallMastery >= 90 },
  { id: 'questions_100', name: 'Century', desc: 'Answer 100 questions', icon: '💯', xp: 150, check: (s) => s.questionsAnswered >= 100 },
  { id: 'accuracy_80', name: 'Sharp Mind', desc: '80% accuracy (100+ questions)', icon: '🎯', xp: 250, check: (s) => s.questionsAnswered >= 100 && (s.correctAnswers / s.questionsAnswered) >= 0.8 },
];

const createProgress = () => ({
  sections: {}, questions: {}, flashcards: {},
  streaks: { current: 0, longest: 0, lastStudy: null },
  stats: {
    totalXP: 0, level: 1, quizzesTaken: 0, questionsAnswered: 0,
    correctAnswers: 0, cardsReviewed: 0, examsTaken: 0, examsPassed: 0,
    examHighScore: 0, perfectQuizzes: 0, studyDays: [], achievements: [],
    overallMastery: 0, joinDate: new Date().toISOString()
  }
});

const getXPForLevel = (level) => Math.floor(100 * Math.pow(1.5, level - 1));

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 } };
const scaleIn = { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } };
const staggerChildren = { animate: { transition: { staggerChildren: 0.05 } } };

export default function App() {
  const [tab, setTab] = useState('dashboard');
  const [prog, setProg] = useState(() => {
    const saved = localStorage.getItem('fl-re-v3');
    return saved ? JSON.parse(saved) : createProgress();
  });
  
  const [section, setSection] = useState(null);
  const [quiz, setQuiz] = useState([]);
  const [qIdx, setQIdx] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [showExp, setShowExp] = useState(false);
  const [score, setScore] = useState({ c: 0, t: 0 });
  const [histSel, setHistSel] = useState(null);
  const [caseCat, setCaseCat] = useState('all');
  const [aiQuery, setAiRes] = useState('');
  const [ai, setAi] = useState('');
  
  const [srsMode, setSrsMode] = useState(false);
  const [srsDeck, setSrsDeck] = useState([]);
  const [srsIdx, setSrsIdx] = useState(0);
  const [srsFlipped, setSrsFlipped] = useState(false);
  const [srsStats, setSrsStats] = useState({ reviewed: 0, correct: 0 });
  
  const [examMode, setExamMode] = useState(false);
  const [examQuestions, setExamQuestions] = useState([]);
  const [examAnswers, setExamAnswers] = useState({});
  const [examTime, setExamTime] = useState(210 * 60);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examTimerActive, setExamTimerActive] = useState(false);
  
  const [xpPopup, setXpPopup] = useState(null);
  const [levelUp, setLevelUp] = useState(null);
  const [newAchievement, setNewAchievement] = useState(null);
  
  const examTimerRef = useRef(null);

  useEffect(() => { localStorage.setItem('fl-re-v3', JSON.stringify(prog)); }, [prog]);

  useEffect(() => {
    if (examTimerActive && examTime > 0 && !examSubmitted) {
      examTimerRef.current = setInterval(() => {
        setExamTime(t => { if (t <= 1) { clearInterval(examTimerRef.current); submitExam(); return 0; } return t - 1; });
      }, 1000);
    }
    return () => clearInterval(examTimerRef.current);
  }, [examTimerActive, examSubmitted]);

  const overall = useCallback(() => {
    const secs = Object.values(prog.sections);
    return secs.length === 0 ? 0 : Math.round(secs.reduce((a, s) => a + (s.mastery || 0), 0) / SECTIONS_DATA.length);
  }, [prog.sections]);

  const weak = useCallback(() => {
    return SECTIONS_DATA.map(s => ({ ...s, m: prog.sections[s.id]?.mastery || 0 }))
      .filter(s => s.m < 70).sort((a, b) => a.m - b.m).slice(0, 5);
  }, [prog.sections]);

  const addXP = useCallback((amount, reason = '') => {
    setXpPopup({ amount, reason });
    setTimeout(() => setXpPopup(null), 2000);
    setProg(p => {
      const newXP = (p.stats.totalXP || 0) + amount;
      let newLevel = p.stats.level || 1;
      let totalRequired = 0;
      while (true) { totalRequired += getXPForLevel(newLevel); if (newXP < totalRequired) break; newLevel++; }
      if (newLevel > (p.stats.level || 1)) { setTimeout(() => { setLevelUp(newLevel); setTimeout(() => setLevelUp(null), 3000); }, 500); }
      return { ...p, stats: { ...p.stats, totalXP: newXP, level: newLevel } };
    });
  }, []);

  const updateStreak = useCallback(() => {
    const today = new Date().toDateString();
    setProg(p => {
      const streaks = p.streaks || { current: 0, longest: 0, lastStudy: null };
      const studyDays = p.stats.studyDays || [];
      if (streaks.lastStudy === today) return p;
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      let newCurrent = streaks.lastStudy === yesterday ? streaks.current + 1 : 1;
      const newLongest = Math.max(streaks.longest, newCurrent);
      return { ...p, streaks: { current: newCurrent, longest: newLongest, lastStudy: today }, stats: { ...p.stats, studyDays: studyDays.includes(today) ? studyDays : [...studyDays, today] } };
    });
  }, []);

  const checkAchievements = useCallback(() => {
    if (!prog.stats) return; // Safety check
    const stats = { 
      quizzesTaken: 0,
      perfectQuizzes: 0,
      cardsReviewed: 0,
      examsPassed: 0,
      examHighScore: 0,
      questionsAnswered: 0,
      correctAnswers: 0,
      level: 1,
      achievements: [],
      ...prog.stats, 
      overallMastery: overall() 
    };
    const streaks = prog.streaks || { current: 0, longest: 0 };
    const earned = stats.achievements || [];
    ACHIEVEMENTS.forEach(ach => {
      if (!earned.includes(ach.id) && ach.check(stats, streaks)) {
        setProg(p => ({ ...p, stats: { ...p.stats, achievements: [...(p.stats.achievements || []), ach.id] } }));
        if (ach.xp > 0) addXP(ach.xp, ach.name);
        setNewAchievement(ach);
        setTimeout(() => setNewAchievement(null), 4000);
      }
    });
  }, [prog, overall, addXP]);

 useEffect(() => { 
  if (prog.stats) checkAchievements(); 
}, [prog.stats, prog.streaks?.current, checkAchievements]);
  const getEarnedAchievements = useCallback(() => {
    const earned = prog.stats?.achievements || [];
    return ACHIEVEMENTS.filter(a => earned.includes(a.id));
  }, [prog.stats?.achievements]);

  const getNextAchievements = useCallback(() => {
    const earned = prog.stats?.achievements || [];
    return ACHIEVEMENTS.filter(a => !earned.includes(a.id)).slice(0, 3);
  }, [prog.stats?.achievements]);

  const getSrsStats = useCallback(() => {
    const now = new Date();
    let dueNow = 0, newCards = 0, learning = 0, mature = 0;
    SECTIONS_DATA.forEach(section => {
      section.flashcards?.forEach((_, idx) => {
        const key = section.id + '-' + idx;
        const card = prog.flashcards[key];
        if (!card) newCards++;
        else { const dueDate = new Date(card.dueDate); if (dueDate <= now) dueNow++; if (card.interval < 21) learning++; else mature++; }
      });
    });
    const total = SECTIONS_DATA.reduce((sum, s) => sum + (s.flashcards?.length || 0), 0);
    return { dueNow, newCards, learning, mature, total };
  }, [prog.flashcards]);

  const startSrsSession = useCallback(() => {
    const now = new Date();
    const deck = [];
    SECTIONS_DATA.forEach(section => {
      section.flashcards?.forEach((card, idx) => {
        const key = section.id + '-' + idx;
        const srsData = prog.flashcards[key];
        if (srsData) { const dueDate = new Date(srsData.dueDate); if (dueDate <= now) deck.push({ ...card, key, sectionId: section.id, sectionTitle: section.title, isNew: false, interval: srsData.interval }); }
      });
    });
    let newAdded = 0;
    SECTIONS_DATA.forEach(section => {
      if (newAdded >= 10) return;
      section.flashcards?.forEach((card, idx) => {
        if (newAdded >= 10) return;
        const key = section.id + '-' + idx;
        if (!prog.flashcards[key]) { deck.push({ ...card, key, sectionId: section.id, sectionTitle: section.title, isNew: true, interval: 0 }); newAdded++; }
      });
    });
    const shuffled = deck.sort(() => Math.random() - 0.5).slice(0, 30);
    setSrsDeck(shuffled); setSrsIdx(0); setSrsFlipped(false); setSrsStats({ reviewed: 0, correct: 0 }); setSrsMode(true); updateStreak();
  }, [prog.flashcards, updateStreak]);

  const recordSrsResponse = useCallback((key, quality) => {
    setProg(p => {
      const card = p.flashcards[key] || { ease: 2.5, interval: 0, repetitions: 0, dueDate: new Date().toISOString(), lastReview: null };
      let { ease, interval, repetitions } = card;
      if (quality < 2) { repetitions = 0; interval = 1; }
      else { if (repetitions === 0) interval = 1; else if (repetitions === 1) interval = 6; else interval = Math.round(interval * ease); repetitions++; ease = Math.max(1.3, ease + (0.1 - (3 - quality) * (0.08 + (3 - quality) * 0.02))); }
      const dueDate = new Date(Date.now() + interval * 86400000).toISOString();
      return { ...p, flashcards: { ...p.flashcards, [key]: { ease, interval, repetitions, dueDate, lastReview: new Date().toISOString() } }, stats: { ...p.stats, cardsReviewed: (p.stats.cardsReviewed || 0) + 1 } };
    });
    if (quality >= 2) addXP(5);
  }, [addXP]);

  const recordQuizComplete = useCallback((correct, total) => {
    const pct = Math.round((correct / total) * 100);
    const isPerfect = pct === 100;
    setProg(p => ({ ...p, stats: { ...p.stats, quizzesTaken: (p.stats.quizzesTaken || 0) + 1, perfectQuizzes: (p.stats.perfectQuizzes || 0) + (isPerfect ? 1 : 0), overallMastery: overall() } }));
    const xpEarned = 10 + (correct * 5) + (isPerfect ? 50 : 0);
    addXP(xpEarned, isPerfect ? 'Perfect Quiz!' : 'Quiz Complete');
    updateStreak();
  }, [addXP, updateStreak, overall]);

  const record = useCallback((sid, qi, correct) => {
    setProg(p => {
      const k = sid + '-' + qi;
      const q = p.questions[k] || { mastery: 0, attempts: 0 };
      const nm = correct ? Math.min(100, q.mastery + 20) : Math.max(0, q.mastery - 10);
      const sec = p.sections[sid] || { mastery: 0, correct: 0, total: 0 };
      const nc = sec.correct + (correct ? 1 : 0);
      const nt = sec.total + 1;
      return { ...p, questions: { ...p.questions, [k]: { mastery: nm, attempts: q.attempts + 1 } }, sections: { ...p.sections, [sid]: { mastery: Math.round((nc / nt) * 100), correct: nc, total: nt } }, stats: { ...p.stats, questionsAnswered: (p.stats.questionsAnswered || 0) + 1, correctAnswers: (p.stats.correctAnswers || 0) + (correct ? 1 : 0) } };
    });
  }, []);

  const genQuiz = useCallback((n = 25) => {
    const w = weak();
    const all = SECTIONS_DATA.flatMap(s => (s.practiceQuestions || []).map((q, i) => ({ ...q, sid: s.id, st: s.title, qi: i, pri: (100 - (prog.questions[s.id + '-' + i]?.mastery || 0)) * (w.some(x => x.id === s.id) ? 3 : 1) * (s.percentage / 10) })));
    all.sort((a, b) => b.pri - a.pri);
    const sc = {};
    return all.filter(q => { sc[q.sid] = (sc[q.sid] || 0) + 1; return sc[q.sid] <= Math.ceil(n / 5); }).slice(0, n).sort(() => Math.random() - 0.5);
  }, [weak, prog.questions]);

const startExam = useCallback(() => {
    // Build weighted question pool based on DBPR percentages
    const weightedQuestions = [];
    
    SECTIONS_DATA.forEach(section => {
      const questions = (section.practiceQuestions || []).map((q, i) => ({ 
        ...q, 
        sid: section.id, 
        st: section.title, 
        qi: i 
      }));
      
      // Calculate how many questions this section should contribute
      // Based on its percentage (e.g., 12% = 12 questions out of 100)
      const targetCount = Math.round(section.percentage);
      
      // Shuffle section questions and take up to targetCount
      const shuffled = questions.sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, Math.min(targetCount, shuffled.length));
      
      // If we don't have enough questions, repeat some (with flag)
      while (selected.length < targetCount && questions.length > 0) {
        const additional = questions[Math.floor(Math.random() * questions.length)];
        selected.push({ ...additional, repeated: true });
      }
      
      weightedQuestions.push(...selected);
    });
    
    // Shuffle final exam and ensure exactly 100 questions
    const finalExam = weightedQuestions.sort(() => Math.random() - 0.5).slice(0, 100);
    
    // If we have less than 100, fill with random questions from high-weight sections
    while (finalExam.length < 100) {
      const highWeightSections = SECTIONS_DATA.filter(s => s.percentage >= 6);
      const randomSection = highWeightSections[Math.floor(Math.random() * highWeightSections.length)];
      const sectionQs = (randomSection.practiceQuestions || []).map((q, i) => ({ 
        ...q, 
        sid: randomSection.id, 
        st: randomSection.title, 
        qi: i 
      }));
      if (sectionQs.length > 0) {
        finalExam.push(sectionQs[Math.floor(Math.random() * sectionQs.length)]);
      }
    }
    
    setExamQuestions(finalExam);
    setExamAnswers({});
    setExamTime(210 * 60);
    setExamSubmitted(false);
    setExamMode(true);
    setExamTimerActive(true);
    setQIdx(0);
  }, []);

  const submitExam = useCallback(() => {
    clearInterval(examTimerRef.current);
    setExamTimerActive(false);
    setExamSubmitted(true);
    let correct = 0;
    examQuestions.forEach((q, i) => { if (examAnswers[i] === q.correct) correct++; record(q.sid, q.qi, examAnswers[i] === q.correct); });
    const pct = Math.round((correct / examQuestions.length) * 100);
    const passed = pct >= 75;
    setProg(p => ({ ...p, stats: { ...p.stats, examsTaken: (p.stats.examsTaken || 0) + 1, examsPassed: (p.stats.examsPassed || 0) + (passed ? 1 : 0), examHighScore: Math.max(p.stats.examHighScore || 0, pct) } }));
    const xpEarned = 50 + (correct * 2) + (passed ? 200 : 0) + (pct >= 90 ? 100 : 0);
    addXP(xpEarned, passed ? 'Exam Passed!' : 'Exam Complete');
    updateStreak();
  }, [examQuestions, examAnswers, record, addXP, updateStreak]);

  const formatTime = (seconds) => { const h = Math.floor(seconds / 3600); const m = Math.floor((seconds % 3600) / 60); const s = seconds % 60; return h + ':' + m.toString().padStart(2, '0') + ':' + s.toString().padStart(2, '0'); };

  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Home' },
    { id: 'chapters', icon: GraduationCap, label: 'Course' },
    { id: 'srs', icon: Brain, label: 'Cards' },
    { id: 'study', icon: BookOpen, label: 'Study' },
    { id: 'quiz', icon: Target, label: 'Quiz' },
    { id: 'exam', icon: FileText, label: 'Exam' },
    { id: 'cases', icon: Scale, label: 'Cases' },
    { id: 'profile', icon: Trophy, label: 'Profile' },
  ];

  // ============================================================
  // DASHBOARD COMPONENT
  // ============================================================
  const Dashboard = () => {
    const stats = prog.stats || {};
    const streaks = prog.streaks || { current: 0, longest: 0 };
    const level = stats.level || 1;
    const totalXP = stats.totalXP || 0;
    const currentLevelXP = level > 1 ? Array.from({length: level - 1}, (_, i) => getXPForLevel(i + 1)).reduce((a, b) => a + b, 0) : 0;
    const nextLevelXP = getXPForLevel(level);
    const progressToNext = totalXP - currentLevelXP;
    const earnedAchievements = getEarnedAchievements();
    const accuracy = stats.questionsAnswered > 0 ? Math.round((stats.correctAnswers / stats.questionsAnswered) * 100) : 0;
    const srsStatsData = getSrsStats();

    return (
      <motion.div className="space-y-6" initial="initial" animate="animate" variants={staggerChildren}>
        {/* Hero Card */}
        <motion.div variants={fadeInUp} className="relative overflow-hidden rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, rgba(245, 158, 11, 0.1) 50%, rgba(234, 179, 8, 0.05) 100%)', border: '1px solid rgba(234, 179, 8, 0.2)' }}>
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-400 to-transparent rounded-full blur-3xl" />
          </div>
          <div className="relative flex justify-between items-start">
            <div className="flex items-center gap-4">
              <motion.div className="w-20 h-20 rounded-2xl flex items-center justify-center font-display font-bold text-3xl text-surface-950" style={{ background: 'linear-gradient(135deg, #eab308, #f59e0b)' }} whileHover={{ scale: 1.05, rotate: 5 }}>
                {level}
              </motion.div>
              <div>
                <p className="text-surface-400 text-sm">Level {level}</p>
                <h2 className="text-2xl font-display font-bold text-surface-50">{totalXP.toLocaleString()} XP</h2>
                <div className="mt-2 w-48">
                  <div className="progress-track">
                    <motion.div className="progress-fill" initial={{ width: 0 }} animate={{ width: Math.min(100, (progressToNext / nextLevelXP) * 100) + '%' }} transition={{ duration: 1 }} />
                  </div>
                  <p className="text-xs text-surface-500 mt-1">{progressToNext} / {nextLevelXP} to level {level + 1}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 justify-end">
                <span className="streak-fire text-3xl">🔥</span>
                <span className="text-4xl font-display font-bold text-brand-400">{streaks.current}</span>
              </div>
              <p className="text-surface-400 text-sm">day streak</p>
              <p className="text-surface-500 text-xs mt-1">Best: {streaks.longest} days</p>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div variants={fadeInUp} className="grid grid-cols-4 gap-3">
          {[{ value: overall() + '%', label: 'Mastery', color: 'text-blue-400' }, { value: stats.quizzesTaken || 0, label: 'Quizzes', color: 'text-emerald-400' }, { value: accuracy + '%', label: 'Accuracy', color: 'text-purple-400' }, { value: earnedAchievements.length, label: 'Badges', color: 'text-brand-400' }].map((stat, i) => (
            <motion.div key={i} className="stat-card" whileHover={{ scale: 1.05 }}>
              <div className={'stat-value ' + stat.color}>{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* SRS Card */}
        {(srsStatsData.dueNow > 0 || srsStatsData.newCards > 0) && (
          <motion.div variants={fadeInUp} className="glass-card p-5 cursor-pointer" onClick={() => { startSrsSession(); setTab('srs'); }} whileHover={{ scale: 1.01 }}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-surface-100">Spaced Repetition</h3>
                  <p className="text-surface-400 text-sm">{srsStatsData.dueNow} cards due • {srsStatsData.newCards} new</p>
                </div>
              </div>
              <div className="btn-primary flex items-center gap-2">Study Now <ArrowRight className="w-4 h-4" /></div>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {[{ label: 'Due', value: srsStatsData.dueNow, color: 'bg-red-500/20 text-red-400' }, { label: 'New', value: srsStatsData.newCards, color: 'bg-purple-500/20 text-purple-400' }, { label: 'Learning', value: srsStatsData.learning, color: 'bg-amber-500/20 text-amber-400' }, { label: 'Mastered', value: srsStatsData.mature, color: 'bg-emerald-500/20 text-emerald-400' }].map((item, i) => (
                <div key={i} className={'rounded-lg p-2 text-center ' + item.color}><div className="font-bold">{item.value}</div><div className="text-xs opacity-80">{item.label}</div></div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Weak Areas */}
        {weak().length > 0 && weak()[0].m < 70 && (
          <motion.div variants={fadeInUp} className="glass-card p-5 border-amber-500/30">
            <div className="flex items-center gap-2 mb-4"><TrendingUp className="w-5 h-5 text-amber-400" /><h3 className="font-display font-semibold text-amber-400">Focus Areas</h3></div>
            <div className="space-y-3">
              {weak().slice(0, 3).map((area, i) => (
                <motion.div key={i} className="flex items-center justify-between p-3 rounded-xl bg-surface-800/50 hover:bg-surface-700/50 cursor-pointer" onClick={() => { setSection(area.id); setTab('study'); }} whileHover={{ x: 5 }}>
                  <span className="text-surface-200">{area.title}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-surface-700 rounded-full overflow-hidden"><div className="h-full bg-amber-500 rounded-full" style={{ width: area.m + '%' }} /></div>
                    <span className="text-amber-400 text-sm font-medium w-10 text-right">{area.m}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Achievements Preview */}
        {earnedAchievements.length > 0 && (
          <motion.div variants={fadeInUp} className="glass-card p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display font-semibold text-surface-100 flex items-center gap-2"><Trophy className="w-5 h-5 text-brand-400" /> Recent Achievements</h3>
              <button onClick={() => setTab('profile')} className="text-sm text-brand-400 hover:text-brand-300">View All →</button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {earnedAchievements.slice(-5).reverse().map(a => (
                <motion.div key={a.id} className="flex-shrink-0 achievement-card earned min-w-[100px]" whileHover={{ scale: 1.05 }}>
                  <div className="text-3xl mb-2">{a.icon}</div>
                  <div className="text-xs font-medium text-brand-300">{a.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Quick Actions */}
        <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3">
          <motion.button onClick={() => { setQuiz(genQuiz()); setQIdx(0); setScore({ c: 0, t: 0 }); setAnswer(null); setShowExp(false); setTab('quiz'); }} className="glass-card-hover p-5 text-left" whileHover={{ scale: 1.02 }}>
            <Target className="w-8 h-8 text-emerald-400 mb-3" />
            <h3 className="font-display font-semibold text-surface-100">Quick Quiz</h3>
            <p className="text-sm text-surface-400 mt-1">25 adaptive questions</p>
          </motion.button>
          <motion.button onClick={() => { startExam(); setTab('exam'); }} className="glass-card-hover p-5 text-left" whileHover={{ scale: 1.02 }}>
            <FileText className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="font-display font-semibold text-surface-100">Practice Exam</h3>
            <p className="text-sm text-surface-400 mt-1">100 questions, 3.5 hours</p>
          </motion.button>
        </motion.div>
      </motion.div>
    );
  };

  // ============================================================
  // PROFILE COMPONENT
  // ============================================================
  const Profile = () => {
    const stats = prog.stats || {};
    const streaks = prog.streaks || { current: 0, longest: 0 };
    const level = stats.level || 1;
    const totalXP = stats.totalXP || 0;
    const earnedAchievements = getEarnedAchievements();
    const accuracy = stats.questionsAnswered > 0 ? Math.round((stats.correctAnswers / stats.questionsAnswered) * 100) : 0;
    const studyDays = stats.studyDays || [];
    const thisMonth = new Date().getMonth();
    const thisYear = new Date().getFullYear();
    const daysThisMonth = studyDays.filter(d => { const date = new Date(d); return date.getMonth() === thisMonth && date.getFullYear() === thisYear; }).length;

    return (
      <motion.div className="space-y-6" initial="initial" animate="animate" variants={staggerChildren}>
        {/* Profile Header */}
        <motion.div variants={fadeInUp} className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-display font-bold" style={{ background: 'linear-gradient(135deg, #eab308, #f59e0b)', color: '#0f172a' }}>{level}</div>
            <div>
              <h1 className="text-3xl font-display font-bold">Level {level} Scholar</h1>
              <p className="text-surface-400">{totalXP.toLocaleString()} Total XP</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[{ icon: '🔥', value: streaks.current, label: 'Current Streak' }, { icon: '⭐', value: streaks.longest, label: 'Best Streak' }, { icon: '📊', value: accuracy + '%', label: 'Accuracy' }, { icon: '📅', value: daysThisMonth, label: 'Days This Month' }].map((s, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-2xl font-bold">{s.icon} {s.value}</div>
                <div className="text-xs text-surface-400">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeInUp} className="glass-card p-6">
          <h2 className="font-display font-bold text-surface-100 mb-4 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-blue-400" /> Statistics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              {[{ label: 'Quizzes Taken', value: stats.quizzesTaken || 0 }, { label: 'Perfect Quizzes', value: stats.perfectQuizzes || 0 }, { label: 'Exams Passed', value: (stats.examsPassed || 0) + '/' + (stats.examsTaken || 0) }].map((s, i) => (
                <div key={i} className="flex justify-between"><span className="text-surface-400">{s.label}</span><span className="font-bold text-surface-100">{s.value}</span></div>
              ))}
            </div>
            <div className="space-y-3">
              {[{ label: 'Questions Answered', value: stats.questionsAnswered || 0 }, { label: 'Correct Answers', value: stats.correctAnswers || 0 }, { label: 'Cards Reviewed', value: stats.cardsReviewed || 0 }].map((s, i) => (
                <div key={i} className="flex justify-between"><span className="text-surface-400">{s.label}</span><span className="font-bold text-surface-100">{s.value}</span></div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div variants={fadeInUp} className="glass-card p-6">
          <h2 className="font-display font-bold text-surface-100 mb-4">🏆 Achievements ({earnedAchievements.length}/{ACHIEVEMENTS.length})</h2>
          <div className="grid grid-cols-3 gap-3">
            {ACHIEVEMENTS.map(ach => {
              const earned = earnedAchievements.find(a => a.id === ach.id);
              return (
                <motion.div key={ach.id} className={'achievement-card ' + (earned ? 'earned' : 'locked')} whileHover={earned ? { scale: 1.05 } : {}}>
                  <div className={'text-3xl mb-2 ' + (!earned ? 'grayscale opacity-50' : '')}>{ach.icon}</div>
                  <div className={'font-bold text-sm ' + (earned ? 'text-brand-300' : 'text-surface-500')}>{ach.name}</div>
                  <div className="text-xs text-surface-500 mt-1">{ach.desc}</div>
                  {ach.xp > 0 && <div className="text-xs text-brand-400 mt-1">+{ach.xp} XP</div>}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Study Calendar */}
        <motion.div variants={fadeInUp} className="glass-card p-6">
          <h2 className="font-display font-bold text-surface-100 mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-emerald-400" /> Study Calendar (Last 30 Days)</h2>
          <div className="grid grid-cols-7 gap-1">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (<div key={i} className="text-center text-xs text-surface-500 font-medium py-1">{d}</div>))}
            {Array.from({ length: 30 }, (_, i) => {
              const date = new Date(Date.now() - (29 - i) * 86400000);
              const dateStr = date.toDateString();
              const studied = studyDays.includes(dateStr);
              const isToday = dateStr === new Date().toDateString();
              return (<div key={i} className={'calendar-day ' + (studied ? 'studied' : 'bg-surface-800') + (isToday ? ' today' : '')} title={date.toLocaleDateString()}>{date.getDate()}</div>);
            })}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // ============================================================
  // STUDY COMPONENT
  // ============================================================
  const Study = () => {
    const selectedSection = section ? SECTIONS_DATA.find(s => s.id === section) : null;

    if (selectedSection) {
      return (
        <motion.div className="space-y-6" initial="initial" animate="animate" variants={fadeInUp}>
          <button onClick={() => setSection(null)} className="btn-ghost flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Back to Topics</button>
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold" style={{ backgroundColor: selectedSection.color }}>{selectedSection.percentage}%</div>
              <div><h2 className="text-xl font-display font-bold text-surface-100">{selectedSection.title}</h2><p className="text-surface-400 text-sm">{selectedSection.topics?.join(' • ')}</p></div>
            </div>
            <div className="bg-surface-800/50 rounded-xl p-4 mb-4"><p className="text-surface-300 text-sm leading-relaxed">{selectedSection.content}</p></div>
            <div className="flex gap-3">
              <button onClick={() => { const q = (selectedSection.practiceQuestions || []).map((x, i) => ({ ...x, sid: selectedSection.id, st: selectedSection.title, qi: i })); setQuiz(q.sort(() => Math.random() - 0.5)); setQIdx(0); setScore({ c: 0, t: 0 }); setAnswer(null); setShowExp(false); setTab('quiz'); }} className="btn-primary flex-1">Quiz This Topic</button>
            </div>
          </div>
          {selectedSection.flashcards?.length > 0 && (
            <div className="glass-card p-6">
              <h3 className="font-display font-semibold text-surface-100 mb-4">📚 Key Flashcards ({selectedSection.flashcards.length})</h3>
              <div className="space-y-3">
                {selectedSection.flashcards.slice(0, 5).map((card, i) => (
                  <div key={i} className="bg-surface-800/50 rounded-xl p-4">
                    <div className="font-medium text-surface-200 mb-2">{card.front}</div>
                    <div className="text-surface-400 text-sm">{card.back}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      );
    }

    return (
      <motion.div className="space-y-6" initial="initial" animate="animate" variants={staggerChildren}>
        <motion.div variants={fadeInUp} className="text-center py-4">
          <h1 className="text-2xl font-display font-bold text-surface-100">Study Topics</h1>
          <p className="text-surface-400 mt-1">19 sections covering all exam content</p>
        </motion.div>
        <motion.div variants={fadeInUp} className="space-y-3">
          {SECTIONS_DATA.map(s => {
            const mastery = prog.sections[s.id]?.mastery || 0;
            return (
              <motion.div key={s.id} onClick={() => setSection(s.id)} className="glass-card-hover p-4 cursor-pointer" whileHover={{ x: 5 }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: s.color }}>{s.percentage}%</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-surface-100 truncate">{s.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-2 bg-surface-700 rounded-full overflow-hidden"><div className="h-full rounded-full transition-all" style={{ width: mastery + '%', backgroundColor: s.color }} /></div>
                      <span className="text-sm text-surface-400 w-10 text-right">{mastery}%</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-surface-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    );
  };

  // ============================================================
  // QUIZ COMPONENT
  // ============================================================
  const Quiz = () => {
    if (quiz.length === 0) {
      return (
        <motion.div className="max-w-md mx-auto space-y-6" initial="initial" animate="animate" variants={fadeInUp}>
          <div className="text-center py-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center"><Target className="w-10 h-10 text-white" /></div>
            <h1 className="text-2xl font-display font-bold text-surface-100">Adaptive Quiz</h1>
            <p className="text-surface-400 mt-2">Questions prioritized by your weak areas</p>
          </div>
          <div className="glass-card p-6 space-y-4">
            <button onClick={() => { setQuiz(genQuiz(10)); setQIdx(0); setScore({ c: 0, t: 0 }); setAnswer(null); setShowExp(false); }} className="btn-secondary w-full">Quick 10 Questions</button>
            <button onClick={() => { setQuiz(genQuiz(25)); setQIdx(0); setScore({ c: 0, t: 0 }); setAnswer(null); setShowExp(false); }} className="btn-primary w-full">Standard 25 Questions</button>
            <button onClick={() => { setQuiz(genQuiz(50)); setQIdx(0); setScore({ c: 0, t: 0 }); setAnswer(null); setShowExp(false); }} className="btn-secondary w-full">Extended 50 Questions</button>
          </div>
        </motion.div>
      );
    }

    if (qIdx >= quiz.length) {
      const p = Math.round((score.c / score.t) * 100);
      if (score.t > 0 && !quiz.recorded) { quiz.recorded = true; recordQuizComplete(score.c, score.t); }
      const xpEarned = 10 + (score.c * 5) + (p === 100 ? 50 : 0);
      return (
        <motion.div className="max-w-md mx-auto space-y-6" initial="initial" animate="animate" variants={scaleIn}>
          <div className={'rounded-2xl p-8 text-center ' + (p >= 75 ? 'bg-gradient-to-br from-emerald-600 to-green-700' : 'bg-gradient-to-br from-amber-600 to-orange-700')}>
            <motion.div className="text-6xl mb-4" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', bounce: 0.5 }}>{p >= 75 ? '🏆' : '📚'}</motion.div>
            <h2 className="text-3xl font-display font-bold text-white mb-2">{p >= 75 ? 'Excellent!' : 'Keep Practicing!'}</h2>
            <p className="text-xl text-white/90">{score.c}/{score.t} correct ({p}%)</p>
            <div className="mt-4 inline-block px-6 py-2 bg-white/20 rounded-full text-white font-medium">+{xpEarned} XP earned!</div>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setQuiz([])} className="btn-secondary flex-1">Back</button>
            <button onClick={() => { setQuiz(genQuiz()); setQIdx(0); setScore({ c: 0, t: 0 }); setAnswer(null); setShowExp(false); }} className="btn-primary flex-1">New Quiz</button>
          </div>
        </motion.div>
      );
    }

    const q = quiz[qIdx];
    return (
      <motion.div className="max-w-md mx-auto space-y-4" key={qIdx} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
        <div className="flex justify-between text-surface-400 text-sm"><span>Question {qIdx + 1} of {quiz.length}</span><span className="text-emerald-400">✓ {score.c}</span></div>
        <div className="progress-track"><div className="progress-fill" style={{ width: ((qIdx + 1) / quiz.length) * 100 + '%' }} /></div>
        <div className="glass-card p-6">
          <span className="badge badge-info mb-3">{q.st}</span>
          <h3 className="font-display font-semibold text-surface-100 text-lg mb-4">{q.question}</h3>
          <div className="space-y-3">
            {q.options.map((o, i) => (
              <button key={i} onClick={() => !showExp && setAnswer(i)} disabled={showExp} className={'quiz-option ' + (showExp ? (i === q.correct ? 'correct' : i === answer ? 'incorrect' : '') : (answer === i ? 'selected' : ''))}>
                <span className="inline-flex w-7 h-7 rounded-lg bg-surface-700 items-center justify-center text-sm font-medium mr-3">{String.fromCharCode(65 + i)}</span>
                {o}
              </button>
            ))}
          </div>
          <AnimatePresence>
            {showExp && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <div className="font-semibold text-blue-400 text-sm mb-1 flex items-center gap-2"><Info className="w-4 h-4" /> Explanation</div>
                <p className="text-surface-300 text-sm">{q.explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button onClick={() => { if (!showExp && answer !== null) { setShowExp(true); setScore(s => ({ c: s.c + (answer === q.correct ? 1 : 0), t: s.t + 1 })); record(q.sid, q.qi, answer === q.correct); } else if (showExp) { setQIdx(i => i + 1); setAnswer(null); setShowExp(false); } }} disabled={answer === null && !showExp} className={'w-full py-3 rounded-xl font-semibold ' + (answer !== null || showExp ? (showExp ? 'btn-primary' : 'bg-blue-600 text-white hover:bg-blue-700') : 'bg-surface-700 text-surface-500 cursor-not-allowed')}>
          {showExp ? (qIdx < quiz.length - 1 ? 'Next Question →' : 'See Results') : 'Check Answer'}
        </button>
      </motion.div>
    );
  };

  // ============================================================
  // SRS COMPONENT
  // ============================================================
  const SRS = () => {
    const stats = getSrsStats();

    if (srsMode && srsDeck.length > 0 && srsIdx >= srsDeck.length) {
      const pct = srsStats.reviewed > 0 ? Math.round((srsStats.correct / srsStats.reviewed) * 100) : 0;
      return (
        <motion.div className="max-w-md mx-auto" initial="initial" animate="animate" variants={scaleIn}>
          <div className={'rounded-2xl p-8 text-center mb-6 ' + (pct >= 70 ? 'bg-gradient-to-br from-emerald-600 to-green-700' : 'bg-gradient-to-br from-amber-600 to-orange-700')}>
            <div className="text-5xl mb-4">🧠</div>
            <h1 className="text-2xl font-display font-bold text-white mb-2">Session Complete!</h1>
            <p className="text-4xl font-bold text-white my-4">{srsStats.reviewed} cards</p>
            <p className="text-white/80">{srsStats.correct} remembered ({pct}%)</p>
          </div>
          <div className="glass-card p-6 mb-4">
            <h3 className="font-display font-semibold text-surface-100 mb-3">📊 Progress</h3>
            <div className="grid grid-cols-2 gap-3">
              {[{ label: 'Mastered', value: stats.mature, color: 'bg-emerald-500/20 text-emerald-400' }, { label: 'Learning', value: stats.learning, color: 'bg-amber-500/20 text-amber-400' }, { label: 'New', value: stats.newCards, color: 'bg-purple-500/20 text-purple-400' }, { label: 'Due Now', value: stats.dueNow, color: 'bg-red-500/20 text-red-400' }].map((s, i) => (
                <div key={i} className={'rounded-xl p-3 text-center ' + s.color}><div className="text-xl font-bold">{s.value}</div><div className="text-xs">{s.label}</div></div>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={() => { setSrsMode(false); setTab('dashboard'); }} className="btn-secondary flex-1">Done</button>
            {stats.dueNow > 0 && <button onClick={startSrsSession} className="btn-primary flex-1">Continue ({stats.dueNow} due)</button>}
          </div>
        </motion.div>
      );
    }

    if (!srsMode || srsDeck.length === 0) {
      return (
        <motion.div className="max-w-md mx-auto" initial="initial" animate="animate" variants={fadeInUp}>
          <div className="text-center py-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center"><Brain className="w-10 h-10 text-white" /></div>
            <h1 className="text-2xl font-display font-bold text-surface-100">Spaced Repetition</h1>
            <p className="text-surface-400 mt-2">Smart flashcards that adapt to your memory</p>
          </div>
          <div className="glass-card p-6 mb-6">
            <h3 className="font-display font-semibold text-surface-100 mb-4">How It Works</h3>
            <div className="space-y-3 text-sm text-surface-400">
              {[{ icon: '🟢', text: 'Easy cards appear less often' }, { icon: '🟡', text: 'Medium cards at moderate intervals' }, { icon: '🔴', text: 'Hard cards more frequently until mastered' }].map((item, i) => (
                <div key={i} className="flex gap-3"><span className="text-lg">{item.icon}</span><p>{item.text}</p></div>
              ))}
            </div>
          </div>
          <div className="glass-card p-6 mb-6">
            <h3 className="font-display font-semibold text-surface-100 mb-4">📊 Your Cards</h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[{ label: 'Due Today', value: stats.dueNow, color: 'bg-red-500/20 text-red-400' }, { label: 'New Cards', value: stats.newCards, color: 'bg-purple-500/20 text-purple-400' }, { label: 'Learning', value: stats.learning, color: 'bg-amber-500/20 text-amber-400' }, { label: 'Mastered', value: stats.mature, color: 'bg-emerald-500/20 text-emerald-400' }].map((s, i) => (
                <div key={i} className={'rounded-xl p-4 text-center ' + s.color}><div className="text-3xl font-bold">{s.value}</div><div className="text-xs">{s.label}</div></div>
              ))}
            </div>
            <div className="progress-track mb-2"><div className="progress-fill" style={{ width: (stats.total > 0 ? (stats.mature / stats.total) * 100 : 0) + '%' }} /></div>
            <p className="text-xs text-surface-500 text-center">{stats.total > 0 ? Math.round((stats.mature / stats.total) * 100) : 0}% of cards mastered</p>
          </div>
          <button onClick={startSrsSession} disabled={stats.dueNow === 0 && stats.newCards === 0} className={'w-full py-4 rounded-xl font-bold text-lg ' + (stats.dueNow > 0 || stats.newCards > 0 ? 'btn-primary' : 'bg-surface-700 text-surface-500 cursor-not-allowed')}>
            {stats.dueNow > 0 ? '🚀 Study ' + Math.min(30, stats.dueNow + Math.min(10, stats.newCards)) + ' Cards' : stats.newCards > 0 ? '🆕 Start with ' + Math.min(10, stats.newCards) + ' New Cards' : '✅ All caught up!'}
          </button>
        </motion.div>
      );
    }

    const card = srsDeck[srsIdx];
    const handleResponse = (quality) => { recordSrsResponse(card.key, quality); setSrsStats(s => ({ reviewed: s.reviewed + 1, correct: s.correct + (quality >= 2 ? 1 : 0) })); setSrsFlipped(false); setSrsIdx(i => i + 1); };

    return (
      <motion.div className="max-w-md mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex justify-between items-center mb-4 text-sm"><span className="text-surface-400">Card {srsIdx + 1} of {srsDeck.length}</span><span className="text-emerald-400 font-medium">✓ {srsStats.correct}</span></div>
        <div className="progress-track mb-4"><div className="progress-fill" style={{ width: ((srsIdx + 1) / srsDeck.length) * 100 + '%' }} /></div>
        <div className="text-center mb-2">
          <span className="badge badge-info">{card.sectionTitle}</span>
          {card.isNew && <span className="badge badge-gold ml-2">NEW</span>}
        </div>
        <div className="flashcard mb-6" onClick={() => !srsFlipped && setSrsFlipped(true)}>
          <div className={'flashcard-inner ' + (srsFlipped ? 'flipped' : '')}>
            <div className="flashcard-face flashcard-front">
              <div className="text-xs opacity-60 mb-4">QUESTION</div>
              <p className="text-xl font-display font-semibold">{card.front}</p>
              {!srsFlipped && <div className="mt-6 text-sm opacity-60">Tap to reveal</div>}
            </div>
            <div className="flashcard-face flashcard-back">
              <div className="text-xs opacity-60 mb-4">ANSWER</div>
              <p className="text-xl font-display font-semibold">{card.back}</p>
            </div>
          </div>
        </div>
        {srsFlipped && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-4 gap-2">
            {[{ label: 'Again', color: 'bg-red-600 hover:bg-red-700', q: 0 }, { label: 'Hard', color: 'bg-amber-600 hover:bg-amber-700', q: 1 }, { label: 'Good', color: 'bg-emerald-600 hover:bg-emerald-700', q: 2 }, { label: 'Easy', color: 'bg-blue-600 hover:bg-blue-700', q: 3 }].map((btn, i) => (
              <button key={i} onClick={() => handleResponse(btn.q)} className={'py-3 rounded-xl font-medium text-white text-sm ' + btn.color}>{btn.label}</button>
            ))}
          </motion.div>
        )}
      </motion.div>
    );
  };

  // ============================================================
  // EXAM COMPONENT
  // ============================================================
  const Exam = () => {
    if (!examMode) {
      return (
        <motion.div className="max-w-md mx-auto space-y-6" initial="initial" animate="animate" variants={fadeInUp}>
          <div className="text-center py-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center"><FileText className="w-10 h-10 text-white" /></div>
            <h1 className="text-2xl font-display font-bold text-surface-100">Practice Exam</h1>
            <p className="text-surface-400 mt-2">Simulate the real FL RE exam experience</p>
          </div>
          <div className="glass-card p-6 space-y-4">
            <div className="flex items-center gap-3 text-surface-300"><Clock className="w-5 h-5 text-blue-400" /><span>3 hours 30 minutes time limit</span></div>
            <div className="flex items-center gap-3 text-surface-300"><Target className="w-5 h-5 text-emerald-400" /><span>100 questions (75% to pass)</span></div>
            <div className="flex items-center gap-3 text-surface-300"><BarChart3 className="w-5 h-5 text-purple-400" /><span>Weighted by exam topic distribution</span></div>
          </div>
          <button onClick={startExam} className="btn-primary w-full py-4 text-lg">Start Practice Exam</button>
          {prog.stats.examsTaken > 0 && (
            <div className="glass-card p-4 text-center">
              <p className="text-surface-400 text-sm">Best Score: <span className="text-brand-400 font-bold">{prog.stats.examHighScore}%</span></p>
              <p className="text-surface-500 text-xs mt-1">{prog.stats.examsPassed}/{prog.stats.examsTaken} exams passed</p>
            </div>
          )}
        </motion.div>
      );
    }

    if (examSubmitted) {
      const correct = examQuestions.reduce((sum, q, i) => sum + (examAnswers[i] === q.correct ? 1 : 0), 0);
      const pct = Math.round((correct / examQuestions.length) * 100);
      const passed = pct >= 75;
      return (
        <motion.div className="max-w-md mx-auto space-y-6" initial="initial" animate="animate" variants={scaleIn}>
          <div className={'rounded-2xl p-8 text-center ' + (passed ? 'bg-gradient-to-br from-emerald-600 to-green-700' : 'bg-gradient-to-br from-red-600 to-rose-700')}>
            <motion.div className="text-6xl mb-4" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', bounce: 0.5 }}>{passed ? '🎉' : '📚'}</motion.div>
            <h2 className="text-3xl font-display font-bold text-white mb-2">{passed ? 'PASSED!' : 'Keep Studying'}</h2>
            <p className="text-5xl font-bold text-white my-4">{pct}%</p>
            <p className="text-white/80">{correct}/100 correct • 75% needed to pass</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => { setExamMode(false); setExamSubmitted(false); }} className="btn-secondary flex-1">Back</button>
            <button onClick={startExam} className="btn-primary flex-1">Retake Exam</button>
          </div>
        </motion.div>
      );
    }

    const q = examQuestions[qIdx];
    const answered = Object.keys(examAnswers).length;
    return (
      <div className="space-y-4">
        <div className="glass-card p-4 sticky top-16 z-40 backdrop-blur-xl">
          <div className="flex justify-between items-center">
            <div><span className="text-surface-400 text-sm">Question {qIdx + 1}/100</span><div className={'font-mono text-lg font-bold ' + (examTime < 600 ? 'text-red-400' : 'text-brand-400')}>{formatTime(examTime)}</div></div>
            <div className="text-right"><span className="text-surface-400 text-sm">{answered} answered</span><button onClick={submitExam} className="block mt-1 text-sm text-brand-400 hover:text-brand-300 font-medium">Submit Exam</button></div>
          </div>
          <div className="progress-track mt-2"><div className="progress-fill" style={{ width: (answered / 100) * 100 + '%' }} /></div>
        </div>
        <div className="glass-card p-6">
          <span className="badge badge-info mb-3">{q.st}</span>
          <h3 className="font-display font-semibold text-surface-100 text-lg mb-4">{q.question}</h3>
          <div className="space-y-3">
            {q.options.map((o, i) => (
              <button key={i} onClick={() => setExamAnswers(a => ({ ...a, [qIdx]: i }))} className={'quiz-option ' + (examAnswers[qIdx] === i ? 'selected' : '')}>
                <span className="inline-flex w-7 h-7 rounded-lg bg-surface-700 items-center justify-center text-sm font-medium mr-3">{String.fromCharCode(65 + i)}</span>{o}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setQIdx(i => Math.max(0, i - 1))} disabled={qIdx === 0} className="btn-secondary flex-1 disabled:opacity-50">← Previous</button>
          <button onClick={() => setQIdx(i => Math.min(99, i + 1))} disabled={qIdx === 99} className="btn-primary flex-1 disabled:opacity-50">Next →</button>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-sm font-medium text-surface-400 mb-3">Jump to Question</h4>
          <div className="grid grid-cols-10 gap-1">
            {examQuestions.map((_, i) => (
              <button key={i} onClick={() => setQIdx(i)} className={'aspect-square rounded text-xs font-medium transition-all ' + (examAnswers[i] !== undefined ? 'bg-emerald-500 text-white' : i === qIdx ? 'bg-brand-500 text-surface-950' : 'bg-surface-700 text-surface-400 hover:bg-surface-600')}>{i + 1}</button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // ============================================================
  // CASES COMPONENT
  // ============================================================
  const Cases = () => {
    const categories = ['all', ...new Set(CASES_DATA.map(c => c.category))];
    const filtered = caseCat === 'all' ? CASES_DATA : CASES_DATA.filter(c => c.category === caseCat);
    const [expandedCase, setExpandedCase] = useState(null);

    return (
      <motion.div className="space-y-6" initial="initial" animate="animate" variants={staggerChildren}>
        <motion.div variants={fadeInUp} className="text-center py-4">
          <h1 className="text-2xl font-display font-bold text-surface-100">Case Studies</h1>
          <p className="text-surface-400 mt-1">{CASES_DATA.length} real-world scenarios</p>
        </motion.div>
        <motion.div variants={fadeInUp} className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button key={cat} onClick={() => setCaseCat(cat)} className={'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ' + (caseCat === cat ? 'bg-brand-500 text-surface-950' : 'bg-surface-700/50 text-surface-300 hover:bg-surface-600/50')}>{cat === 'all' ? 'All Cases' : cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</button>
          ))}
        </motion.div>
        <motion.div variants={fadeInUp} className="space-y-3">
          {filtered.map(c => (
            <motion.div key={c.id} className="glass-card overflow-hidden" variants={fadeInUp}>
              <button onClick={() => setExpandedCase(expandedCase === c.id ? null : c.id)} className="w-full p-4 text-left flex items-center justify-between">
                <div>
                  <span className="badge badge-info mb-2">{c.category}</span>
                  <h3 className="font-display font-semibold text-surface-100">{c.title}</h3>
                </div>
                <ChevronRight className={'w-5 h-5 text-surface-400 transition-transform ' + (expandedCase === c.id ? 'rotate-90' : '')} />
              </button>
              <AnimatePresence>
                {expandedCase === c.id && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-4 pb-4 space-y-3">
                    <div className="bg-surface-800/50 rounded-xl p-4"><h4 className="text-xs font-medium text-surface-400 mb-2">SCENARIO</h4><p className="text-surface-300 text-sm">{c.scenario}</p></div>
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4"><h4 className="text-xs font-medium text-amber-400 mb-2">QUESTION</h4><p className="text-surface-200 text-sm">{c.question}</p></div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4"><h4 className="text-xs font-medium text-emerald-400 mb-2">ANSWER</h4><p className="text-surface-200 text-sm">{c.answer}</p></div>
                    <div className="bg-brand-500/10 border border-brand-500/30 rounded-xl p-4"><h4 className="text-xs font-medium text-brand-400 mb-2">EXAM RELEVANCE</h4><p className="text-surface-200 text-sm font-medium">{c.examRelevance}</p></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    );
  };

  // ============================================================
  // MAIN RENDER
  // ============================================================
  return (
    <div className="min-h-screen pb-20">
      {/* XP Popup */}
      <AnimatePresence>
        {xpPopup && (
          <motion.div initial={{ scale: 0, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0, y: -50 }} className="xp-popup">
            +{xpPopup.amount} XP {xpPopup.reason && <span className="text-sm opacity-80">• {xpPopup.reason}</span>}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Level Up Modal */}
      <AnimatePresence>
        {levelUp && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="level-up-overlay" onClick={() => setLevelUp(null)}>
            <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', bounce: 0.5 }} className="text-center">
              <div className="text-8xl mb-4">🎉</div>
              <h2 className="text-4xl font-display font-bold text-white mb-2">Level Up!</h2>
              <p className="text-6xl font-display font-bold text-brand-400">Level {levelUp}</p>
              <p className="text-surface-400 mt-4">Tap anywhere to continue</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Achievement Modal */}
      <AnimatePresence>
        {newAchievement && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-surface-950/80 backdrop-blur-sm" onClick={() => setNewAchievement(null)}>
            <motion.div initial={{ scale: 0, y: 100 }} animate={{ scale: 1, y: 0 }} transition={{ type: 'spring', bounce: 0.4 }} className="glass-card p-8 text-center max-w-sm mx-4">
              <div className="text-6xl mb-4">{newAchievement.icon}</div>
              <h2 className="text-2xl font-display font-bold text-brand-400 mb-2">Achievement Unlocked!</h2>
              <p className="text-xl font-display font-semibold text-surface-100">{newAchievement.name}</p>
              <p className="text-surface-400 mt-2">{newAchievement.desc}</p>
              {newAchievement.xp > 0 && <p className="text-brand-400 font-bold mt-3">+{newAchievement.xp} XP</p>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface-900/80 backdrop-blur-xl border-b border-surface-700/50">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-surface-950" style={{ background: 'linear-gradient(135deg, #eab308, #f59e0b)' }}>FL</div>
            <div>
              <h1 className="text-sm font-display font-bold text-surface-100">FL Real Estate Exam</h1>
              <p className="text-xs text-surface-500">v3.0 Polished</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="streak-fire">🔥</span>
            <span className="font-bold text-brand-400">{prog.streaks?.current || 0}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
            {tab === 'dashboard' && <Dashboard />}
            {tab === 'chapters' && <ChapterContent chapter={getChapterById(1)} />}
            {tab === 'srs' && <SRS />}
            {tab === 'study' && <Study />}
            {tab === 'quiz' && <Quiz />}
            {tab === 'exam' && <Exam />}
            {tab === 'cases' && <Cases />}
            {tab === 'profile' && <Profile />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface-900/90 backdrop-blur-xl border-t border-surface-700/50 pb-safe">
        <div className="max-w-3xl mx-auto px-2 py-2 flex justify-around">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = tab === item.id;
            return (
              <button key={item.id} onClick={() => setTab(item.id)} className={'nav-pill ' + (isActive ? 'active' : '')}>
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
