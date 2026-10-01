// ============================================================
// POST-LICENSING 45 TRACK — 14 units in course order
// Original material written from Florida law (Ch. 475, 61J2, Ch. 83,
// federal statutes). Each unit: overview → lessons (+ checks) →
// summary → unit quiz. Assembled here into the shapes the app uses.
// ============================================================
import u01 from './units/u01.js';
import u02 from './units/u02.js';
import u03 from './units/u03.js';
import u04 from './units/u04.js';
import u05 from './units/u05.js';
import u06 from './units/u06.js';
import u07 from './units/u07.js';
import u08 from './units/u08.js';
import u09 from './units/u09.js';
import u10 from './units/u10.js';
import u11 from './units/u11.js';
import u12 from './units/u12.js';
import u13 from './units/u13.js';
import u14 from './units/u14.js';

export const POST_UNITS = [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10, u11, u12, u13, u14];

// Deterministic shuffle so the correct answer isn't always in the same slot,
// while keeping question keys (unit-index) stable across reloads.
const hash = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
const shuffleOptions = (q, seed) => {
  if (q.o.length !== 4) return { options: q.o, correct: q.a }; // keep True/False order
  const order = q.o.map((_, i) => i);
  let x = hash(seed) || 1;
  for (let i = order.length - 1; i > 0; i--) { x = Math.imul(x ^ (x >>> 15), 2246822519) >>> 0; const j = x % (i + 1); [order[i], order[j]] = [order[j], order[i]]; }
  return { options: order.map(i => q.o[i]), correct: order.indexOf(q.a) };
};
const toQ = (q, seed) => { const { options, correct } = shuffleOptions(q, seed); return { question: q.q, options, correct, explanation: q.e }; };

// Legacy "EXAM_SECTIONS" shape used by Study / Quiz / Exam / Course
export const POST_SECTIONS = POST_UNITS.map(u => {
  // Unit-quiz questions first (stable indexes), then 4-option lesson checks join the adaptive bank.
  const checks4 = u.sections.flatMap(s => (s.check || []).filter(c => c.o.length === 4));
  const bank = [...u.questions, ...checks4];
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
    keyTerms: u.keyTerms,
    summary: u.summary,
    flashcards: u.flashcards,
    sections: u.sections.map(s => ({
      ...s,
      check: (s.check || []).map((c, ci) => toQ(c, `${u.id}-${s.id}-chk${ci}`)),
    })),
    unitQuizCount: u.questions.length,
    practiceQuestions: bank.map((q, i) => toQ(q, `${u.id}-${i}-${q.q}`)),
  };
});

// "CHAPTERS" shape used by the flashcard / SRS system
export const POST_CHAPTERS = POST_UNITS.map(u => ({ id: u.id, title: `Unit ${u.num}: ${u.title}`, flashcards: u.flashcards }));

// One-page "numbers to know" sheet for final review
export const POST_QUICK_REFERENCE = [
  { group: 'Licensing', items: [
    ['Post-licensing', 'SA 45 hrs · broker 60 · before 1st renewal'],
    ['Miss post-licensing', 'License void (not inactive)'],
    ['First renewal', 'First Mar 31 / Sep 30 after 18 months'],
    ['End-of-course exam', '75% · 1 retest (different exam, no wait) within 1 year'],
    ['Exempt from post', '4-year+ degree in real estate'],
    ['Hardship extension', '+6 months (individual physical hardship)'],
    ['Missed later renewal', 'Involuntary inactive'],
    ['CE after 1st renewal', '14 hrs: 3 core + 3 ethics + 8 specialty'],
    ['Core Law both years', 'Counts 6 hrs → specialty drops to 5'],
    ['Renewal notice / address', 'Mailed ≥ 60 days ahead · address change 10 days'],
    ['FREC penalties', '$5,000 per count · suspension up to 10 years'],
    ['Recovery Fund', '$50K per transaction · $150K per licensee'],
  ]},
  { group: 'Relationships & escrow', items: [
    ['Default relationship', 'Transaction broker'],
    ['Duties count', 'No brokerage 3 · TB 7 · single agent 9'],
    ['Residential sale', '1–4 units · land for 1–4 · ag ≤ 10 acres'],
    ['Designated SA', 'Nonresidential · $1M+ assets each side'],
    ['Records', '5 years'],
    ['SA → broker', 'End of next business day'],
    ['Broker → escrow', 'End of 3rd business day'],
    ['Title co. verification', '10 business days'],
    ['Escrow dispute', 'Notify FREC 15 BD · settle procedure 30 BD'],
    ['Personal funds', '$1,000 sales · $5,000 property mgmt'],
  ]},
  { group: 'Prospecting & listings', items: [
    ['DNC scrub', 'Every 31 days'],
    ['Call hours', 'Federal 8a–9p · Florida 8a–8p, max 3 calls/24 hrs'],
    ['Established relationship', '18 months after a sale · 3 months after an inquiry'],
    ['CAN-SPAM opt-out', '10 business days'],
    ['Listing agreement', 'Definite expiration · no auto-renewal · copy within 24 hrs'],
    ['MLS', 'Exclusive right of sale + exclusive agency only'],
    ['CMA adjustments', 'Comp inferior → add · comp better → subtract'],
    ['Reconciliation', 'Weigh the best comps — never average'],
  ]},
  { group: 'Disclosures & fair housing', items: [
    ['Lead paint', 'Pre-1978 · 10-day test window'],
    ['Condo resale / developer', '3 days / 15 days'],
    ['HOA summary', '3 days if not given before contract'],
    ['Radon', 'Every sale · leases over 45 days'],
    ['Stigmas (689.25)', 'Homicide, suicide, death, HIV/AIDS — no duty to disclose'],
    ['Fair housing', '7 classes · complaint 1 yr · lawsuit 2 yrs · 55+ = 80%'],
    ['ECOA adds', 'Marital status, age, public assistance'],
  ]},
  { group: 'Financing', items: [
    ['Qualifying ratios', '28/36 conventional · about 31/43 FHA (gross income)'],
    ['PMI', 'Above 80% LTV · cancel at 80% on request · auto at 78%'],
    ['ARM', 'Index + margin = rate · caps limit change'],
    ['PITI', 'P&I + (annual taxes + insurance) ÷ 12'],
    ['Price from loan', 'Loan ÷ LTV'],
    ['TRID', 'LE 3 business days after app · CD 3 business days before closing'],
  ]},
  { group: 'Closing math', items: [
    ['Deed doc stamps', '$0.70 per $100 (seller) · round up'],
    ['Note doc stamps', '$0.35 per $100 (buyer)'],
    ['Intangible tax', '0.002 × new mortgage (buyer)'],
    ['Prorations', 'Buyer owns the day of closing · 365 days'],
    ['Taxes (paid in arrears)', 'Seller\'s days → debit seller, credit buyer'],
    ['Prepaid interest', 'Closing day through end of that month'],
  ]},
  { group: 'Investment & management', items: [
    ['Income chain', 'PGI − V&C = EGI − OpEx = NOI − debt service = BTCF'],
    ['Operating expenses', 'Fixed · variable · reserves (not debt service)'],
    ['Value', 'NOI ÷ cap rate'],
    ['GRM', 'Price ÷ monthly rent'],
    ['Depreciation', '27.5 yrs residential · 39 nonresidential · never land'],
    ['1031 / home sale', '45 / 180 days · $250K–$500K, 2 of 5 years'],
    ['Chapter 83', 'Deposit notice 30 days · return 15 / claim 30 · 3-day & 7-day notices'],
    ['CAM license', '10+ units or budget over $100K'],
  ]},
];

export const POST_TOTALS = {
  units: POST_UNITS.length,
  lessons: POST_UNITS.reduce((n, u) => n + u.sections.length, 0),
  questions: POST_SECTIONS.reduce((n, s) => n + s.practiceQuestions.length, 0),
  flashcards: POST_UNITS.reduce((n, u) => n + u.flashcards.length, 0),
};
