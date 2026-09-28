// ============================================================
// STUDY TRACKS — pre-license exam vs. 45-hour post-licensing
// The active track is chosen at load (URL ?track=post|pre, else saved choice).
// Switching tracks saves the choice and reloads the app.
// ============================================================
import { HISTORICAL_TIMELINE, CASE_STUDIES, EXAM_SECTIONS } from './examData.js';
import { CHAPTERS } from './data/chapters/index.js';
import { POST_SECTIONS, POST_CHAPTERS, POST_QUICK_REFERENCE, POST_TOTALS } from './data/postlicense/index.js';

const TRACK_KEY = 'fl-re-track';

const readTrack = () => {
  try {
    const url = new URLSearchParams(window.location.search).get('track');
    if (url === 'post' || url === 'pre') { localStorage.setItem(TRACK_KEY, url); return url; }
    return localStorage.getItem(TRACK_KEY) === 'post' ? 'post' : 'pre';
  } catch { return 'pre'; }
};

export const TRACKS = {
  pre: {
    key: 'pre',
    name: 'FL Real Estate Exam',
    tagline: 'Pre-license · 19 sections',
    badge: 'FL',
    storageKey: 'fl-re-v2',
    sections: EXAM_SECTIONS || [],
    chapters: CHAPTERS,
    cases: CASE_STUDIES || [],
    timeline: HISTORICAL_TIMELINE || [],
    examQuestions: 100,
    examMinutes: 210,
    passPct: 75,
    studySubtitle: '19 sections covering all exam content',
  },
  post: {
    key: 'post',
    name: 'FL Post-Licensing 45',
    tagline: `Sales associate · ${POST_TOTALS.units} units · ${POST_TOTALS.questions} questions`,
    badge: '45',
    storageKey: 'fl-re-post45-v1',
    sections: POST_SECTIONS,
    chapters: POST_CHAPTERS,
    quickReference: POST_QUICK_REFERENCE,
    cases: [],
    timeline: [],
    examQuestions: 100,
    examMinutes: 180,
    passPct: 75,
    studySubtitle: `${POST_TOTALS.units} units · ${POST_TOTALS.questions} practice questions · ${POST_TOTALS.flashcards} flashcards`,
  },
};

export const ACTIVE_TRACK = TRACKS[readTrack()];

export const switchTrack = (key) => {
  try { localStorage.setItem(TRACK_KEY, key); } catch {}
  const url = new URL(window.location.href);
  url.searchParams.delete('track');
  window.location.href = url.toString();
};
