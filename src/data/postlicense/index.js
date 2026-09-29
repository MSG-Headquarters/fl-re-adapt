// ============================================================
// POST-LICENSING TRACK — assembles units into the shapes App.jsx uses
// ============================================================
import { UNITS_A } from './unitsA.js';
import { UNITS_B } from './unitsB.js';
import { UNITS_C } from './unitsC.js';
import { EXTRA_QUESTIONS } from './extraQuestions.js';

export const POST_UNITS = [...UNITS_A, ...UNITS_B, ...UNITS_C];

// Deterministic shuffle so the correct answer isn't always in the same slot,
// while keeping question keys (unit-index) stable across reloads.
const hash = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
const shuffleOptions = (q, seed) => {
  const order = q.o.map((_, i) => i);
  let x = hash(seed) || 1;
  for (let i = order.length - 1; i > 0; i--) { x = Math.imul(x ^ (x >>> 15), 2246822519) >>> 0; const j = x % (i + 1); [order[i], order[j]] = [order[j], order[i]]; }
  return { options: order.map(i => q.o[i]), correct: order.indexOf(q.a) };
};

// Legacy "EXAM_SECTIONS" shape used by Study / Quiz / Exam
export const POST_SECTIONS = POST_UNITS.map(u => {
  const all = [...u.questions, ...(EXTRA_QUESTIONS[u.id] || [])];
  return {
    id: u.id,
    num: u.num,
    title: `Unit ${u.num}: ${u.title}`,
    shortTitle: u.title,
    percentage: u.percentage,
    color: u.color,
    topics: u.sections.map(s => s.title),
    content: u.subtitle,
    objectives: u.objectives,
    sections: u.sections,
    flashcards: u.flashcards,
    practiceQuestions: all.map((q, i) => {
      const { options, correct } = shuffleOptions(q, `${u.id}-${i}-${q.q}`);
      return { question: q.q, options, correct, explanation: q.e };
    }),
  };
});

// "CHAPTERS" shape used by the flashcard / SRS system
export const POST_CHAPTERS = POST_UNITS.map(u => ({ id: u.id, title: `Unit ${u.num}: ${u.title}`, flashcards: u.flashcards }));

// One-page "numbers to know" sheet for final review
export const POST_QUICK_REFERENCE = [
  { group: 'Licensing', items: [
    ['SL post-licensing', '45 hrs before 1st renewal (BK: 60)'],
    ['Miss post-licensing', 'License null and void'],
    ['End-of-course exam', '75% to pass · 1 retest (new exam, no wait) within 1 year'],
    ['Exempt from post', '4-year+ degree in real estate'],
    ['Hardship extension', '+6 months (physical hardship)'],
    ['Miss a later renewal', 'Involuntary inactive (not void)'],
    ['Core Law both years', 'Counts 6 hrs → specialty drops to 5'],
    ['CE after 1st renewal', '14 hrs / 2 yrs (3 core · 3 ethics · 8 specialty)'],
    ['Address change', 'Notify DBPR within 10 days'],
    ['Records', 'Keep 5 years'],
    ['FREC fine / suspension', '$5,000 per count · up to 10 years'],
    ['Recovery Fund', '$50K per transaction · $150K per licensee'],
  ]},
  { group: 'Escrow', items: [
    ['SL → broker', 'End of next business day'],
    ['Broker → escrow', 'End of 3rd business day'],
    ['Title co. verification', '10 business days after due'],
    ['Conflicting demands', 'Notify FREC 15 BD · act 30 BD'],
    ['Personal funds', '$1,000 sales · $5,000 property mgmt'],
  ]},
  { group: 'Relationships', items: [
    ['Default', 'Transaction broker'],
    ['Disclosure timing', 'Agreement or showing — whichever first'],
    ['Residential sale', '1–4 units · ag ≤ 10 acres'],
    ['Designated SA', 'Nonresidential · $1M+ assets both sides'],
  ]},
  { group: 'Marketing & listings', items: [
    ['DNC scrub', 'Every 31 days'],
    ['Call hours', 'Federal 8a–9p · Florida 8a–8p, max 3 calls/24 hrs'],
    ['EBR exception', '18 months after sale · 3 months after inquiry'],
    ['CAN-SPAM opt-out', '10 business days'],
    ['Listing copy to seller', 'Within 24 hours · no auto-renewal'],
    ['CMA adjustments', 'Comp better → subtract · comp poorer → add'],
  ]},
  { group: 'Disclosures', items: [
    ['Lead paint', 'Pre-1978 · 10-day test window'],
    ['Condo resale / developer', '3 days / 15 days'],
    ['HOA summary', '3 days if not given before contract'],
    ['Radon', 'Sale or rental of any building'],
    ['Flood (689.302)', 'Residential, at/before contract (from 10/1/2025)'],
  ]},
  { group: 'Fair housing & lending', items: [
    ['FHA classes', 'Race, color, religion, national origin, sex, handicap, familial status'],
    ['ECOA adds', 'Marital status, age, public assistance'],
    ['Complaints', 'HUD / FCHR 1 year · lawsuit 2 years'],
    ['55+ / 62+', '80% of units / 100% of occupants'],
  ]},
  { group: 'Closing math', items: [
    ['Deed doc stamps', '$0.70 per $100 (seller)'],
    ['Note doc stamps', '$0.35 per $100 (buyer)'],
    ['Intangible tax', '0.002 × new mortgage (buyer)'],
    ['Loan Estimate / CD', '3 business days after app / 3 business days before closing'],
    ['Prorations', 'Buyer owns day of closing · 365 days'],
  ]},
  { group: 'Investment & taxes', items: [
    ['NOI', 'EGI − operating expenses (no debt service)'],
    ['Value', 'NOI ÷ cap rate'],
    ['GRM', 'Price ÷ monthly rent'],
    ['Depreciation', '27.5 yrs residential · 39 yrs commercial'],
    ['1031', 'Identify 45 days · close 180 days'],
    ['Home-sale exclusion', '$250K / $500K · 2 of 5 years'],
    ['Save Our Homes', '3% or CPI, whichever is less'],
  ]},
  { group: 'Landlord / tenant', items: [
    ['Deposit notice', '30 days after receipt'],
    ['Return / claim', '15 days / certified mail within 30 days'],
    ['Nonpayment', '3 days (excl. weekends & holidays)'],
    ['Noncompliance', '7 days (curable or non-curable)'],
    ['Month-to-month', '30 days\' notice'],
    ['Entry', '24 hrs notice · 7:30a–8p'],
    ['CAM license', '> 10 units or > $100K budget'],
  ]},
];

export const POST_TOTALS = {
  units: POST_UNITS.length,
  questions: POST_SECTIONS.reduce((n, s) => n + s.practiceQuestions.length, 0),
  flashcards: POST_UNITS.reduce((n, u) => n + u.flashcards.length, 0),
};
