import React, { useState, useEffect, useCallback } from 'react';
import { HISTORICAL_TIMELINE, CASE_STUDIES, EXAM_SECTIONS, EXAM_STATS } from './examData.js';

// FLORIDA REAL ESTATE EXAM - ADAPTIVE STUDY PLATFORM v2.2
// Features: Progress Persistence, Weakness Tracking, Historical Context, Case Studies, AI, PRACTICE EXAM MODE
// Enhanced: Comprehensive explanations, detailed flashcards, timed 100-question exam

/* Data is now imported from examData.js for easier maintenance */

// Keeping minimal backup data in case import fails
const BACKUP_TIMELINE = [
  { year: 1866, event: "Civil Rights Act of 1866", description: "First federal law guaranteeing equal property rights. Upheld in Jones v. Mayer (1968).", impact: "Racial discrimination in property has NO exemptions - still enforced today.", category: "civil-rights" },
  { year: 1934, event: "FHA Created", description: "FHA institutionalized redlining - refusing loans in minority neighborhoods.", impact: "Government discrimination prevented wealth-building for decades.", category: "fair-housing" },
  { year: 1948, event: "Shelley v. Kraemer", description: "Supreme Court: racially restrictive covenants unenforceable by courts.", impact: "Courts cannot enforce racial deed restrictions.", category: "fair-housing" },
  { year: 1968, event: "Fair Housing Act", description: "Passed 1 week after MLK assassination. Protected race, color, religion, national origin.", impact: "Made housing discrimination federal offense.", category: "fair-housing" },
  { year: 1968, event: "Jones v. Alfred H. Mayer Co.", description: "Upheld 1866 Act - racial discrimination has NO exemptions, public or private.", impact: "CRITICAL: Mrs. Murphy exemption NEVER applies to race.", category: "fair-housing" },
  { year: 1978, event: "Lead Paint Banned", description: "Consumer Product Safety Commission banned lead paint in residential use.", impact: "Homes built BEFORE 1978 require lead disclosure.", category: "environmental" },
  { year: 1988, event: "Fair Housing Amendments", description: "Added familial status and disability to protected classes.", impact: "Now 7 federal protected classes.", category: "fair-housing" },
  { year: 1992, event: "Lead Paint Disclosure Act", description: "Required disclosure for pre-1978 housing, EPA pamphlet, 10-day inspection.", impact: "Created lead paint disclosure requirements.", category: "environmental" }
];

// Backup case studies
const BACKUP_CASES = [
  { id: 1, title: "Mrs. Murphy Trap", category: "fair-housing", scenario: "Sarah owns duplex, lives in one unit. Tells agent: 'Only white tenants.' Agent knows Mrs. Murphy exemption.", question: "Can agent help find only white tenants?", answer: "NO. Jones v. Mayer (1968) = racial discrimination has NO exemptions. Also, using agent loses even Fair Housing exemptions. Both face $100K+ penalties.", examRelevance: "Mrs. Murphy NEVER applies to race." },
  { id: 2, title: "Steering in Disguise", category: "fair-housing", scenario: "Agent shows homes to Black family. Says: 'Schools not as good there. Let me show neighborhoods where you'd be more comfortable.'", question: "Fair housing violation?", answer: "YES. Illegal steering - directing based on race. Good intentions don't excuse. Agent must provide objective info and let buyers decide.", examRelevance: "Steering illegal even if well-intentioned." },
  { id: 3, title: "Lead Disclosure", category: "environmental", scenario: "Tom sells 1965 home. Never tested for lead. Tells buyer: 'No lead paint here.'", question: "Disclosure fulfilled?", answer: "NO. Cannot affirm 'no lead' without testing. Must say 'No KNOWN lead.' Required: disclose known hazards, provide EPA pamphlet, offer 10-day inspection.", examRelevance: "Lead disclosure = what is KNOWN. Cannot deny without testing." },
  { id: 4, title: "Escrow Dispute", category: "brokerage", scenario: "Buyer wants $10K back. Seller claims repairs made. Both demand broker release funds.", question: "Broker's options?", answer: "4 escape procedures: Mediation, Arbitration, Interpleader, FREC Order. Broker must NOT pick a side.", examRelevance: "Tests 4 escrow dispute procedures." },
  { id: 5, title: "Fiduciary Test", category: "agency", scenario: "Single agent Jane represents buyer Bob. Seller says 'desperate to sell - would take $50K less.' Bob doesn't hear.", question: "Jane's obligation?", answer: "MUST tell Bob - single agent owes FULL disclosure. Material info affecting negotiation. Transaction broker would have LIMITED confidentiality.", examRelevance: "Single agent = full fiduciary; Transaction broker = limited." }
];

// Backup exam sections (minimal - full data in examData.js)
const BACKUP_SECTIONS = [
  { id: 1, title: "Real Estate Business", percentage: 1, color: "#3B82F6", topics: ["Introduction", "Organizations"], content: "Real estate unique: Heterogeneous, Immobile, Durable. REALTOR® = NAR member only.", flashcards: [{ front: "What makes RE unique?", back: "Heterogeneous, Immobile, Durable" }, { front: "REALTOR® means?", back: "NAR member - trademark, not generic" }], practiceQuestions: [{ question: "Heterogeneity means:", options: ["Long-lasting", "Fixed", "No two alike", "Scarce"], correct: 2, explanation: "Each parcel unique." }] },
  { id: 2, title: "License Law & Qualifications", percentage: 6, color: "#10B981", topics: ["Chapter 475", "Requirements"], content: "SA: 18+, 63 hrs pre-license, 75% exam, 45 hrs post-license, 14 hrs CE/2yrs. Broker: 24 months active, 72 hrs.", flashcards: [{ front: "Pre-license hours?", back: "63 hours" }, { front: "Passing score?", back: "75%" }, { front: "Post-license hrs?", back: "45 hours" }, { front: "CE every 2 yrs?", back: "14 hours" }], practiceQuestions: [{ question: "SA minimum age:", options: ["16", "18", "21", "25"], correct: 1, explanation: "Must be 18+." }, { question: "Pre-license hours:", options: ["45", "63", "72", "90"], correct: 1, explanation: "63 hours." }] },
  { id: 3, title: "FREC Rules", percentage: 2, color: "#8B5CF6", topics: ["Composition", "Powers"], content: "FREC: 7 members (4 brokers 5+yrs, 1 broker/SA 2+yrs, 2 consumers). Governor appoints, Senate confirms. Max fine $5,000.", flashcards: [{ front: "FREC members?", back: "7 total" }, { front: "Consumer members?", back: "2 (never licensed)" }, { front: "Max fine?", back: "$5,000/violation" }], practiceQuestions: [{ question: "FREC members:", options: ["5", "7", "9", "11"], correct: 1, explanation: "7 members." }] },
  { id: 4, title: "Brokerage Relationships", percentage: 7, color: "#F59E0B", topics: ["Transaction Broker", "Single Agent"], content: "DEFAULT = Transaction Broker (limited, NOT fiduciary). Single Agent = fiduciary, OLD CAR duties (Obedience, Loyalty, Disclosure, Confidentiality, Accountability, Reasonable skill).", flashcards: [{ front: "FL default relationship?", back: "Transaction Broker" }, { front: "OLD CAR?", back: "Obedience, Loyalty, Disclosure, Confidentiality, Accountability, Reasonable skill" }, { front: "Fiduciary relationship?", back: "Single Agent ONLY" }], practiceQuestions: [{ question: "Default relationship:", options: ["Single agent", "Transaction broker", "No brokerage", "Dual"], correct: 1, explanation: "Transaction broker default." }, { question: "Fiduciary:", options: ["Transaction", "Single agent", "No brokerage", "All"], correct: 1, explanation: "Single agent only." }] },
  { id: 5, title: "Brokerage Activities", percentage: 12, color: "#EF4444", topics: ["Escrow", "Commission", "Antitrust"], content: "Escrow: deposit by end 3rd BUSINESS day. $5K personal in escrow. 4 procedures: Mediation, Arbitration, Interpleader, FREC Order. Antitrust: price fixing, boycotting, market allocation, tie-ins.", flashcards: [{ front: "Escrow deadline?", back: "End 3rd BUSINESS day" }, { front: "4 escrow procedures?", back: "Mediation, Arbitration, Interpleader, FREC Order" }, { front: "Who sues for commission?", back: "BROKER only" }], practiceQuestions: [{ question: "Escrow deposit deadline:", options: ["1st", "2nd", "3rd", "5th"], correct: 2, explanation: "3rd business day." }, { question: "Agreeing on rates:", options: ["Allocation", "Price fixing", "Boycott", "Tie-in"], correct: 1, explanation: "Price fixing." }] },
  { id: 6, title: "Violations & Penalties", percentage: 3, color: "#DC2626", topics: ["Recovery Fund"], content: "Recovery Fund: $50K/transaction, $150K/licensee. Requires judgment first. Payment = license suspended until repaid.", flashcards: [{ front: "RF max/transaction?", back: "$50,000" }, { front: "RF max/licensee?", back: "$150,000" }], practiceQuestions: [{ question: "RF max per transaction:", options: ["$25K", "$50K", "$100K", "$150K"], correct: 1, explanation: "$50K/transaction." }] },
  { id: 7, title: "Federal & State Laws", percentage: 3, color: "#7C3AED", topics: ["Fair Housing", "Jones v. Mayer"], content: "7 Protected: Race, Color, Religion, National Origin, Sex, Familial Status, Disability. Jones v. Mayer (1968): NO racial exemptions. Security deposit: 15 days (no claim), 30 days (with claim).", flashcards: [{ front: "7 protected classes?", back: "Race, Color, Religion, National Origin, Sex, Familial Status, Disability" }, { front: "Jones v. Mayer?", back: "Racial discrimination NO exemptions" }, { front: "Security deposit (no claim)?", back: "15 days" }], practiceQuestions: [{ question: "Jones v. Mayer:", options: ["FH constitutional", "Race no exemptions", "Steering illegal", "Blockbusting illegal"], correct: 1, explanation: "Race has NO exemptions." }, { question: "Mrs. Murphy applies to:", options: ["All", "All except race", "Race only", "Nothing"], correct: 1, explanation: "NOT to race - Jones v. Mayer." }] },
  { id: 8, title: "Property Rights", percentage: 8, color: "#059669", topics: ["Estates", "Co-ownership"], content: "Fee Simple Absolute (highest). PITT unities (Joint Tenancy). Tenancy by Entireties = married only. MARIA test for fixtures. Condo rescission: 15 days.", flashcards: [{ front: "Highest ownership?", back: "Fee Simple Absolute" }, { front: "PITT?", back: "Possession, Interest, Time, Title" }, { front: "Married only?", back: "Tenancy by Entireties" }, { front: "Condo rescission?", back: "15 days" }], practiceQuestions: [{ question: "Married-only co-ownership:", options: ["Joint", "TIC", "Entireties", "Community"], correct: 2, explanation: "Tenancy by entireties." }] },
  { id: 9, title: "Titles & Deeds", percentage: 7, color: "#0EA5E9", topics: ["Deeds", "Liens"], content: "General Warranty (most protection), Special Warranty, Quitclaim (no warranties). Property taxes = priority liens. Escheat = no will/heirs.", flashcards: [{ front: "Most protection deed?", back: "General Warranty" }, { front: "No warranties?", back: "Quitclaim" }, { front: "Priority liens?", back: "Property taxes" }], practiceQuestions: [{ question: "Most protection:", options: ["Quitclaim", "Special", "General warranty", "Bargain"], correct: 2, explanation: "General warranty." }] },
  { id: 10, title: "Legal Descriptions", percentage: 5, color: "#6366F1", topics: ["Government Survey"], content: "Section = 640 acres. Township = 36 sections. Math: multiply denominators, divide into 640. Ex: NE1/4 of SW1/4 = 4×4=16, 640÷16=40 acres.", flashcards: [{ front: "Acres in section?", back: "640" }, { front: "Calculate acres?", back: "Multiply denominators, divide 640" }], practiceQuestions: [{ question: "NW1/4 of SE1/4:", options: ["20", "40", "80", "160"], correct: 1, explanation: "4×4=16, 640÷16=40." }] },
  { id: 11, title: "Contracts", percentage: 12, color: "#EC4899", topics: ["Elements", "Listings"], content: "5 Elements: Parties, Offer/accept, Consideration, Legal, Written. Statute of Frauds = must be written. Exclusive Right to Sell = commission regardless. Lead disclosure = pre-1978.", flashcards: [{ front: "5 contract elements?", back: "Parties, Offer/accept, Consideration, Legal, Written" }, { front: "Exclusive Right to Sell?", back: "Commission regardless who sells" }, { front: "Lead disclosure?", back: "Pre-1978 homes" }], practiceQuestions: [{ question: "Statute of Frauds:", options: ["Notarized", "Written", "Witnessed", "Recorded"], correct: 1, explanation: "Must be written." }, { question: "Lead disclosure pre-:", options: ["1968", "1978", "1988", "1998"], correct: 1, explanation: "Pre-1978." }] },
  { id: 12, title: "Mortgages", percentage: 9, color: "#14B8A6", topics: ["Lien Theory", "Loans"], content: "FL = Lien Theory (borrower keeps title). Note = promise; Mortgage = lien. FHA 3.5% down, VA 0%, Conventional 20%. 1 point = 1% of loan.", flashcards: [{ front: "FL theory?", back: "Lien - borrower keeps title" }, { front: "FHA down?", back: "3.5%" }, { front: "VA down?", back: "0%" }, { front: "1 point?", back: "1% of loan" }], practiceQuestions: [{ question: "Lien theory - title holder:", options: ["Lender", "Borrower", "Title co", "State"], correct: 1, explanation: "Borrower." }, { question: "FHA down:", options: ["0%", "3%", "3.5%", "5%"], correct: 2, explanation: "3.5%." }] },
  { id: 13, title: "Mortgage Sources", percentage: 4, color: "#F97316", topics: ["Secondary Market"], content: "Primary = loans originate. Secondary = loans sold. Ginnie Mae = ONLY government agency (not Fannie/Freddie).", flashcards: [{ front: "Govt agency?", back: "Ginnie Mae only" }], practiceQuestions: [{ question: "Actual govt agency:", options: ["Fannie", "Freddie", "Ginnie", "All"], correct: 2, explanation: "Ginnie Mae only." }] },
  { id: 14, title: "Computations", percentage: 6, color: "#84CC16", topics: ["Math", "Prorations"], content: "Commission = Price × Rate. Value = Income ÷ Cap Rate. 360-day banker's year. Seller pays THROUGH closing.", flashcards: [{ front: "Commission formula?", back: "Price × Rate" }, { front: "Value from income?", back: "Income ÷ Cap Rate" }], practiceQuestions: [{ question: "$200K, 6%:", options: ["$10K", "$12K", "$14K", "$16K"], correct: 1, explanation: "$200K × 0.06 = $12K." }] },
  { id: 15, title: "Markets", percentage: 1, color: "#A855F7", topics: ["Supply/Demand"], content: "Demand ↑, Supply same = Prices ↑.", flashcards: [{ front: "Demand up, supply same?", back: "Prices rise" }], practiceQuestions: [{ question: "Demand up:", options: ["Prices down", "Prices up", "Same", "Unstable"], correct: 1, explanation: "Prices rise." }] },
  { id: 16, title: "Appraisal", percentage: 8, color: "#0891B2", topics: ["Three Approaches"], content: "Sales Comparison (residential), Cost (unique), Income (investment). Value = NOI ÷ Cap Rate. ADD if comparable LACKS.", flashcards: [{ front: "Best for residential?", back: "Sales Comparison" }, { front: "Best for income?", back: "Income Approach" }], practiceQuestions: [{ question: "NOI $50K, cap 10%:", options: ["$400K", "$450K", "$500K", "$550K"], correct: 2, explanation: "$50K ÷ 0.10 = $500K." }] },
  { id: 17, title: "Investments", percentage: 2, color: "#D946EF", topics: ["Leverage"], content: "Leverage = borrowed money. Positive = return > cost.", flashcards: [{ front: "Leverage?", back: "Borrowed money to increase returns" }], practiceQuestions: [{ question: "Using borrowed money:", options: ["Arbitrage", "Leverage", "Speculation", "Hedging"], correct: 1, explanation: "Leverage." }] },
  { id: 18, title: "Taxes", percentage: 3, color: "#CA8A04", topics: ["Property Tax"], content: "Ad valorem = by value. Mill = $1/$1,000. Tax lien Jan 1, due Nov 1. Discounts: Nov 4%, Dec 3%, Jan 2%, Feb 1%.", flashcards: [{ front: "Mill?", back: "$1 per $1,000" }, { front: "Tax lien date?", back: "January 1" }, { front: "Nov discount?", back: "4%" }], practiceQuestions: [{ question: "$150K, 20 mills:", options: ["$2.5K", "$3K", "$3.5K", "$4K"], correct: 1, explanation: "$150K × 20 ÷ 1000 = $3K." }] },
  { id: 19, title: "Zoning", percentage: 1, color: "#71717A", topics: ["Police Power"], content: "Police power = health, safety, welfare (no compensation). Eminent domain = compensation required. Variance = hardship deviation.", flashcards: [{ front: "Variance?", back: "Deviation for hardship" }], practiceQuestions: [{ question: "Build higher for hardship:", options: ["Conditional", "Variance", "Spot zoning", "Downzoning"], correct: 1, explanation: "Variance." }] }
];

const TIMELINE_DATA = HISTORICAL_TIMELINE?.length > 0 ? HISTORICAL_TIMELINE : BACKUP_TIMELINE;
const CASES_DATA = CASE_STUDIES?.length > 0 ? CASE_STUDIES : BACKUP_CASES;
const SECTIONS_DATA = EXAM_SECTIONS?.length > 0 ? EXAM_SECTIONS : BACKUP_SECTIONS;

const createProgress = () => {
  const p = { sections: {}, questions: {}, flashcards: {}, streaks: { current: 0, longest: 0, lastStudy: null } };
  SECTIONS_DATA.forEach(s => {
    p.sections[s.id] = { mastery: 0, correct: 0, total: 0 };
    s.practiceQuestions.forEach((q, i) => { p.questions[`${s.id}-${i}`] = { mastery: 0, attempts: 0 }; });
    // Initialize flashcard SRS data
    s.flashcards.forEach((fc, i) => {
      p.flashcards[`${s.id}-${i}`] = {
        ease: 2.5,        // Ease factor (2.5 = normal, higher = easier)
        interval: 0,      // Days until next review (0 = new card)
        repetitions: 0,   // Number of successful reviews
        dueDate: null,    // When card is due (null = new)
        lastReview: null  // Last review timestamp
      };
    });
  });
  return p;
};

export default function App() {
  const [tab, setTab] = useState('dashboard');
  const [section, setSection] = useState(null);
  const [fcIdx, setFcIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [qIdx, setQIdx] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [showExp, setShowExp] = useState(false);
  const [score, setScore] = useState({ c: 0, t: 0 });
  const [aiQuery, setAiQuery] = useState('');
  const [aiRes, setAiRes] = useState('');
  const [histSel, setHistSel] = useState(null);
  const [caseSel, setCaseSel] = useState(null);
  const [caseAns, setCaseAns] = useState(false);
  
  // Exam Mode State
  const [examMode, setExamMode] = useState(false);
  const [examQuestions, setExamQuestions] = useState([]);
  const [examAnswers, setExamAnswers] = useState({});
  const [examTimeLeft, setExamTimeLeft] = useState(0);
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [examResults, setExamResults] = useState(null);
  
  // Spaced Repetition State
  const [srsMode, setSrsMode] = useState(false);
  const [srsDeck, setSrsDeck] = useState([]);
  const [srsIdx, setSrsIdx] = useState(0);
  const [srsFlipped, setSrsFlipped] = useState(false);
  const [srsStats, setSrsStats] = useState({ reviewed: 0, correct: 0 });
  
  const [prog, setProg] = useState(() => {
    try { const s = localStorage.getItem('fl-re-v2'); return s ? JSON.parse(s) : createProgress(); } 
    catch { return createProgress(); }
  });
  
  useEffect(() => { try { localStorage.setItem('fl-re-v2', JSON.stringify(prog)); } catch {} }, [prog]);

  // SM-2 Algorithm for Spaced Repetition
  const calculateNextReview = (card, quality) => {
    // Quality: 0 = Again, 1 = Hard, 2 = Good, 3 = Easy
    let { ease, interval, repetitions } = card;
    
    if (quality < 1) {
      // Failed - reset
      repetitions = 0;
      interval = 0;
    } else {
      // Passed
      if (repetitions === 0) {
        interval = 1; // First success: 1 day
      } else if (repetitions === 1) {
        interval = 3; // Second success: 3 days
      } else {
        interval = Math.round(interval * ease);
      }
      repetitions += 1;
      
      // Adjust ease factor based on quality
      ease = Math.max(1.3, ease + (0.1 - (3 - quality) * (0.08 + (3 - quality) * 0.02)));
    }
    
    const now = new Date();
    const dueDate = new Date(now.getTime() + interval * 24 * 60 * 60 * 1000).toISOString();
    
    return {
      ease,
      interval,
      repetitions,
      dueDate,
      lastReview: now.toISOString()
    };
  };

  // Get cards due for review
  const getDueCards = useCallback(() => {
    const now = new Date();
    const allCards = [];
    
    SECTIONS_DATA.forEach(s => {
      s.flashcards.forEach((fc, i) => {
        const key = `${s.id}-${i}`;
        const cardData = prog.flashcards?.[key] || { dueDate: null, interval: 0 };
        
        // Card is due if: no due date (new), or due date is past
        const isDue = !cardData.dueDate || new Date(cardData.dueDate) <= now;
        const isNew = !cardData.dueDate;
        
        allCards.push({
          ...fc,
          sid: s.id,
          sectionTitle: s.title,
          idx: i,
          key,
          isDue,
          isNew,
          interval: cardData.interval || 0,
          ease: cardData.ease || 2.5,
          repetitions: cardData.repetitions || 0,
          dueDate: cardData.dueDate
        });
      });
    });
    
    return allCards;
  }, [prog]);

  // Get today's study deck
  const getTodaysDeck = useCallback(() => {
    const allCards = getDueCards();
    const dueCards = allCards.filter(c => c.isDue);
    
    // Prioritize: overdue cards first, then new cards, limit to 20-30 per session
    const overdue = dueCards.filter(c => !c.isNew).sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    const newCards = dueCards.filter(c => c.isNew);
    
    // Mix: up to 20 due + up to 10 new
    return [...overdue.slice(0, 20), ...newCards.slice(0, 10)].sort(() => Math.random() - 0.5);
  }, [getDueCards]);

  // Record SRS response
  const recordSrsResponse = (cardKey, quality) => {
    setProg(p => {
      const currentCard = p.flashcards?.[cardKey] || { ease: 2.5, interval: 0, repetitions: 0 };
      const updated = calculateNextReview(currentCard, quality);
      
      return {
        ...p,
        flashcards: {
          ...p.flashcards,
          [cardKey]: updated
        }
      };
    });
  };

  // Start SRS session
  const startSrsSession = () => {
    const deck = getTodaysDeck();
    setSrsDeck(deck);
    setSrsIdx(0);
    setSrsFlipped(false);
    setSrsStats({ reviewed: 0, correct: 0 });
    setSrsMode(true);
    setTab('srs');
  };

  // Get SRS statistics
  const getSrsStats = useCallback(() => {
    const allCards = getDueCards();
    const dueNow = allCards.filter(c => c.isDue).length;
    const newCards = allCards.filter(c => c.isNew).length;
    const learning = allCards.filter(c => !c.isNew && c.interval < 7).length;
    const mature = allCards.filter(c => c.interval >= 7).length;
    
    return { total: allCards.length, dueNow, newCards, learning, mature };
  }, [getDueCards]);

  // Exam Timer
  useEffect(() => {
    if (!examStarted || examFinished || examTimeLeft <= 0) return;
    const timer = setInterval(() => {
      setExamTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          finishExam();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [examStarted, examFinished]);

  // Generate 100-question exam weighted by section percentage
  const generateExam = () => {
    const questions = [];
    const allQuestions = SECTIONS_DATA.flatMap(s => 
      s.practiceQuestions.map((q, i) => ({ ...q, sid: s.id, st: s.title, qi: i, weight: s.percentage }))
    );
    
    // Shuffle all questions
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    
    // Try to get weighted distribution, but fill to 100
    const sectionCounts = {};
    SECTIONS_DATA.forEach(s => sectionCounts[s.id] = 0);
    
    // First pass: respect weights
    for (const q of shuffled) {
      const maxForSection = Math.max(2, Math.ceil(q.weight * 1.5)); // At least 2 per section
      if (sectionCounts[q.sid] < maxForSection && questions.length < 100) {
        questions.push({ ...q, examIdx: questions.length });
        sectionCounts[q.sid]++;
      }
    }
    
    // Second pass: fill remaining slots
    for (const q of shuffled) {
      if (questions.length >= 100) break;
      if (!questions.find(x => x.sid === q.sid && x.qi === q.qi)) {
        questions.push({ ...q, examIdx: questions.length });
      }
    }
    
    // If still not enough, duplicate with different order
    while (questions.length < 100) {
      const randomQ = shuffled[Math.floor(Math.random() * shuffled.length)];
      questions.push({ ...randomQ, examIdx: questions.length });
    }
    
    return questions.slice(0, 100).sort(() => Math.random() - 0.5);
  };

  const startExam = () => {
    const questions = generateExam();
    setExamQuestions(questions);
    setExamAnswers({});
    setExamTimeLeft(210 * 60); // 3.5 hours = 210 minutes
    setExamStarted(true);
    setExamFinished(false);
    setExamResults(null);
    setExamMode(true);
    setTab('exam');
  };

  const finishExam = () => {
    let correct = 0;
    let answered = 0;
    const sectionResults = {};
    
    SECTIONS_DATA.forEach(s => sectionResults[s.id] = { correct: 0, total: 0, title: s.title });
    
    examQuestions.forEach((q, i) => {
      sectionResults[q.sid].total++;
      if (examAnswers[i] !== undefined) {
        answered++;
        if (examAnswers[i] === q.correct) {
          correct++;
          sectionResults[q.sid].correct++;
        }
      }
    });
    
    setExamResults({
      correct,
      total: 100,
      answered,
      percentage: Math.round((correct / 100) * 100),
      passed: correct >= 75,
      sectionResults
    });
    setExamFinished(true);
  };

  const weak = useCallback(() => SECTIONS_DATA.map(s => ({ ...s, m: prog.sections[s.id]?.mastery || 0, t: prog.sections[s.id]?.total || 0 })).filter(s => s.t > 0).sort((a, b) => a.m - b.m).slice(0, 5), [prog]);
  const overall = useCallback(() => { let t = 0, w = 0; SECTIONS_DATA.forEach(s => { const p = prog.sections[s.id]; if (p?.total > 0) { t += p.mastery * s.percentage; w += s.percentage; } }); return w > 0 ? Math.round(t / w) : 0; }, [prog]);

  const record = (sid, qi, ok) => {
    setProg(p => {
      const k = `${sid}-${qi}`;
      const q = p.questions[k] || { mastery: 0, attempts: 0 };
      const nm = ok ? Math.min(100, q.mastery + (100 - q.mastery) * 0.2) : Math.max(0, q.mastery - q.mastery * 0.3);
      const s = p.sections[sid] || { mastery: 0, correct: 0, total: 0 };
      const nt = s.total + 1, nc = s.correct + (ok ? 1 : 0);
      return { ...p, questions: { ...p.questions, [k]: { mastery: nm, attempts: q.attempts + 1 } }, sections: { ...p.sections, [sid]: { mastery: Math.round((nc / nt) * 100), correct: nc, total: nt } } };
    });
  };

  const genQuiz = (n = 25) => {
    const w = weak();
    const all = SECTIONS_DATA.flatMap(s => s.practiceQuestions.map((q, i) => ({ ...q, sid: s.id, st: s.title, qi: i, pri: (100 - (prog.questions[`${s.id}-${i}`]?.mastery || 0)) * (w.some(x => x.id === s.id) ? 3 : 1) * (s.percentage / 10) })));
    all.sort((a, b) => b.pri - a.pri);
    const sc = {};
    return all.filter(q => { sc[q.sid] = (sc[q.sid] || 0) + 1; return sc[q.sid] <= Math.ceil(n / 5); }).slice(0, n).sort(() => Math.random() - 0.5);
  };

  const handleAi = () => {
    if (!ai.trim()) return;
    const l = aiQuery.toLowerCase();
    const h = HISTORICAL_TIMELINE.find(x => l.includes(x.year.toString()));
    const s = SECTIONS_DATA.find(x => l.includes(x.title.toLowerCase()));
    if (h) setAiRes(`**${h.event} (${h.year})**\n\n${h.description}\n\n**Impact:** ${h.impact}`);
    else if (l.includes('weak')) { const w = weak(); setAiRes(w.length ? `**Weak Areas:**\n${w.map((x, i) => `${i + 1}. ${x.title} - ${x.m}%`).join('\n')}` : 'Take some quizzes first!'); }
    else if (s) setAiRes(`**${s.title}** (${s.percentage}%)\n\n${s.content}`);
    else setAiRes(`**Tips:** Focus on Contracts (12%), Brokerage (12%), Mortgages (9%). Overall: ${overall()}%. Need 75% to pass.`);
  };

  const Dashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[{ l: 'Mastery', v: `${overall()}%`, c: 'from-blue-500 to-indigo-600' }, { l: 'Questions', v: Object.values(prog.questions).filter(q => q.attempts > 0).length, c: 'from-emerald-500 to-green-600' }, { l: 'Topics', v: '19', c: 'from-purple-500 to-violet-600' }, { l: 'Ready', v: overall() >= 75 ? 'YES!' : 'No', c: overall() >= 75 ? 'from-green-500 to-emerald-600' : 'from-amber-500 to-orange-600' }].map((s, i) => (
          <div key={i} className={`bg-gradient-to-br ${s.c} rounded-2xl p-5 text-white shadow-lg`}><div className="text-2xl font-bold">{s.v}</div><div className="text-sm opacity-80">{s.l}</div></div>
        ))}
      </div>
      {weak().length > 0 && weak()[0].m < 70 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <h3 className="font-bold text-amber-800 mb-2">⚠️ Weak Areas</h3>
          {weak().slice(0, 3).map(a => <div key={a.id} className="flex justify-between text-amber-700"><button onClick={() => { setSection(a.id); setTab('study'); }} className="hover:underline">{a.title}</button><span>{a.m}%</span></div>)}
        </div>
      )}
      
      {/* SRS Stats Card */}
      {(() => {
        const srsStatsData = getSrsStats();
        return srsStatsData.dueNow > 0 || srsStatsData.newCards > 0 ? (
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-5 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">🧠 Spaced Repetition</h3>
                <p className="text-sm opacity-80">{srsStatsData.dueNow} cards due • {srsStatsData.newCards} new</p>
              </div>
              <button onClick={startSrsSession} className="px-4 py-2 bg-white text-indigo-600 rounded-lg font-semibold text-sm hover:bg-indigo-50 transition-colors">
                Study Now
              </button>
            </div>
            <div className="mt-3 flex gap-2">
              <div className="flex-1 bg-white/20 rounded-lg p-2 text-center">
                <div className="text-lg font-bold">{srsStatsData.learning}</div>
                <div className="text-xs opacity-80">Learning</div>
              </div>
              <div className="flex-1 bg-white/20 rounded-lg p-2 text-center">
                <div className="text-lg font-bold">{srsStatsData.mature}</div>
                <div className="text-xs opacity-80">Mastered</div>
              </div>
              <div className="flex-1 bg-white/20 rounded-lg p-2 text-center">
                <div className="text-lg font-bold">{srsStatsData.total > 0 ? Math.round((srsStatsData.mature / srsStatsData.total) * 100) : 0}%</div>
                <div className="text-xs opacity-80">Complete</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <h3 className="font-bold text-emerald-800">All caught up!</h3>
              <p className="text-sm text-emerald-600">{srsStatsData.mature} cards mastered • Check back later for reviews</p>
            </div>
          </div>
        );
      })()}
      
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="font-bold text-slate-800 mb-4">Study Actions</h2>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <button onClick={startSrsSession} className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl text-sm font-medium">🧠 Spaced Rep</button>
          <button onClick={() => { setQuiz(genQuiz()); setQIdx(0); setScore({ c: 0, t: 0 }); setAnswer(null); setShowExp(false); setTab('quiz'); }} className="p-3 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-xl text-sm font-medium">🎯 Adaptive Quiz</button>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <button onClick={startExam} className="p-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-xl text-sm font-medium">📝 Practice Exam</button>
          <button onClick={() => setTab('cards')} className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl text-sm font-medium">🔄 Flashcards</button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <button onClick={() => setTab('history')} className="p-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-xl text-sm font-medium">📜 History</button>
          <button onClick={() => setTab('cases')} className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl text-sm font-medium">⚖️ Cases</button>
          <button onClick={() => setTab('ai')} className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl text-sm font-medium">✨ AI Help</button>
        </div>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex justify-between mb-4"><h2 className="font-bold text-slate-800">Topics</h2><button onClick={() => { if (confirm('Reset?')) { setProg(createProgress()); localStorage.removeItem('fl-re-v2'); } }} className="text-xs text-red-500">Reset</button></div>
        {SECTIONS_DATA.sort((a, b) => b.percentage - a.percentage).map(s => (
          <button key={s.id} onClick={() => { setSection(s.id); setTab('study'); }} className="w-full flex items-center gap-3 p-2 bg-slate-50 hover:bg-slate-100 rounded-lg mb-2 text-left">
            <div className="w-8 h-8 rounded text-white flex items-center justify-center text-xs font-bold" style={{ backgroundColor: s.color }}>{s.percentage}%</div>
            <div className="flex-1"><div className="text-sm font-medium text-slate-800">{s.title}</div><div className="w-16 bg-slate-200 rounded-full h-1 mt-1"><div className="h-1 rounded-full bg-blue-500" style={{ width: `${prog.sections[s.id]?.mastery || 0}%` }} /></div></div>
            <span className="text-xs text-slate-500">{prog.sections[s.id]?.mastery || 0}%</span>
          </button>
        ))}
      </div>
    </div>
  );

  const History = () => (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-5 text-white"><h2 className="text-xl font-bold">📜 Historical Context</h2><p className="opacity-80 text-sm">Understanding WHY helps remember WHAT.</p></div>
      {TIMELINE_DATA.map((e, i) => (
        <div key={i} className="bg-white rounded-xl p-4 shadow cursor-pointer" onClick={() => setHistSel(histSel === i ? null : i)}>
          <div className="flex items-center gap-3"><div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-700">{e.year}</div><div><span className={`text-xs px-2 py-0.5 rounded ${e.category === 'fair-housing' ? 'bg-blue-100 text-blue-700' : e.category === 'civil-rights' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'}`}>{e.category}</span><h3 className="font-bold text-slate-800 text-sm">{e.event}</h3></div></div>
          {histSel === i && <div className="mt-3 space-y-2"><p className="text-slate-600 text-sm">{e.description}</p><div className="bg-blue-50 border border-blue-200 rounded p-2"><div className="font-semibold text-blue-800 text-xs">💡 Exam Impact:</div><p className="text-blue-700 text-xs">{e.impact}</p></div></div>}
        </div>
      ))}
    </div>
  );

  const [caseFilter, setCaseFilter] = useState('all');
  const [caseDifficulty, setCaseDifficulty] = useState('all');
  
  const Cases = () => {
    const categories = ['all', ...new Set(CASES_DATA.map(c => c.category))];
    const difficulties = ['all', 'easy', 'medium', 'hard'];
    
    const filteredCases = CASES_DATA.filter(c => {
      if (caseFilter !== 'all' && c.category !== caseFilter) return false;
      if (caseDifficulty !== 'all' && c.difficulty !== caseDifficulty) return false;
      return true;
    });

    const getCategoryStyle = (cat) => {
      const styles = {
        'fair-housing': 'bg-blue-100 text-blue-700',
        'brokerage': 'bg-purple-100 text-purple-700',
        'environmental': 'bg-green-100 text-green-700',
        'agency': 'bg-amber-100 text-amber-700',
        'contracts': 'bg-pink-100 text-pink-700',
        'mortgages': 'bg-cyan-100 text-cyan-700',
        'appraisal': 'bg-indigo-100 text-indigo-700',
        'property-rights': 'bg-emerald-100 text-emerald-700',
        'taxes': 'bg-orange-100 text-orange-700',
        'zoning': 'bg-slate-100 text-slate-700'
      };
      return styles[cat] || 'bg-gray-100 text-gray-700';
    };

    const getDifficultyStyle = (diff) => {
      const styles = {
        'easy': 'bg-green-500',
        'medium': 'bg-yellow-500',
        'hard': 'bg-red-500'
      };
      return styles[diff] || 'bg-gray-500';
    };

    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-5 text-white">
          <h2 className="text-xl font-bold">⚖️ Case Studies</h2>
          <p className="opacity-80 text-sm">Apply knowledge to real scenarios • {CASES_DATA.length} cases</p>
        </div>
        
        {/* Filters */}
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs text-slate-500 w-full">Category:</span>
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setCaseFilter(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${caseFilter === cat ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat === 'all' ? 'All Categories' : cat.replace('-', ' ')}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-slate-500 w-full">Difficulty:</span>
            {difficulties.map(diff => (
              <button 
                key={diff} 
                onClick={() => setCaseDifficulty(diff)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${caseDifficulty === diff ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {diff === 'all' ? 'All Levels' : diff.charAt(0).toUpperCase() + diff.slice(1)}
              </button>
            ))}
          </div>
          <div className="mt-3 text-xs text-slate-500">Showing {filteredCases.length} of {CASES_DATA.length} cases</div>
        </div>

        {filteredCases.map(c => (
          <div key={c.id} className="bg-white rounded-xl p-4 shadow">
            <div className="cursor-pointer" onClick={() => { setCaseSel(caseSel === c.id ? null : c.id); setCaseAns(false); }}>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs px-2 py-0.5 rounded ${getCategoryStyle(c.category)}`}>{c.category.replace('-', ' ')}</span>
                {c.difficulty && <span className={`w-2 h-2 rounded-full ${getDifficultyStyle(c.difficulty)}`} title={c.difficulty}></span>}
                <span className="text-xs text-slate-400">{c.difficulty}</span>
              </div>
              <h3 className="font-bold text-slate-800">{c.title}</h3>
            </div>
            {caseSel === c.id && (
              <div className="mt-3 space-y-3">
                <div className="bg-slate-50 rounded p-3">
                  <div className="font-medium text-slate-700 text-xs mb-1">📋 Scenario:</div>
                  <p className="text-slate-600 text-sm">{c.scenario}</p>
                </div>
                <div className="bg-amber-50 rounded p-3">
                  <div className="font-medium text-amber-800 text-xs mb-1">❓ Question:</div>
                  <p className="text-amber-900 text-sm font-medium">{c.question}</p>
                </div>
                {!caseAns ? (
                  <button onClick={() => setCaseAns(true)} className="w-full py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors">
                    🔍 Reveal Answer
                  </button>
                ) : (
                  <div className="space-y-2">
                    <div className="bg-emerald-50 border border-emerald-200 rounded p-3">
                      <div className="font-semibold text-emerald-800 text-xs mb-1">✅ Answer:</div>
                      <div className="text-emerald-900 text-sm whitespace-pre-line">{c.answer}</div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded p-3">
                      <div className="font-semibold text-blue-800 text-xs mb-1">📝 Exam Relevance:</div>
                      <p className="text-blue-700 text-sm">{c.examRelevance}</p>
                    </div>
                    {c.keyPoints && (
                      <div className="bg-purple-50 border border-purple-200 rounded p-3">
                        <div className="font-semibold text-purple-800 text-xs mb-1">🎯 Key Points:</div>
                        <ul className="text-purple-700 text-sm list-disc list-inside">
                          {c.keyPoints.map((point, i) => <li key={i}>{point}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const Study = () => {
    const s = SECTIONS_DATA.find(x => x.id === section);
    if (!s) return <div className="bg-white rounded-xl p-6 shadow text-center"><div className="text-4xl mb-3">📚</div><h2 className="font-bold text-slate-800 mb-4">Select Topic</h2><div className="grid grid-cols-2 gap-2">{SECTIONS_DATA.map(x => <button key={x.id} onClick={() => setSection(x.id)} className="p-3 bg-slate-50 hover:bg-slate-100 rounded-lg text-left"><div className="w-6 h-6 rounded text-white text-xs font-bold flex items-center justify-center mb-1" style={{ backgroundColor: x.color }}>{x.percentage}%</div><div className="text-xs font-medium text-slate-800">{x.title}</div></button>)}</div></div>;
    return <div className="space-y-4"><div className="bg-white rounded-xl p-5 shadow"><div className="flex justify-between items-start mb-3"><div><h1 className="text-xl font-bold text-slate-800">{s.title}</h1><p className="text-slate-600 text-sm">{s.percentage}% • {prog.sections[s.id]?.mastery || 0}% mastery</p></div><button onClick={() => setSection(null)} className="text-slate-400 hover:bg-slate-100 rounded p-1">✕</button></div><div className="text-sm text-slate-700">{s.content.split('\n').map((l, i) => <p key={i} className="mb-2">{l.split('**').map((p, j) => j % 2 ? <strong key={j}>{p}</strong> : p)}</p>)}</div></div><div className="grid grid-cols-2 gap-3"><button onClick={() => { setFcIdx(0); setFlipped(false); setTab('cards'); }} className="p-3 bg-blue-500 text-white rounded-xl text-sm font-medium">📚 Cards ({s.flashcards.length})</button><button onClick={() => { setQuiz(s.practiceQuestions.map((q, i) => ({ ...q, sid: s.id, st: s.title, qi: i }))); setQIdx(0); setScore({ c: 0, t: 0 }); setAnswer(null); setShowExp(false); setTab('quiz'); }} className="p-3 bg-emerald-500 text-white rounded-xl text-sm font-medium">✓ Quiz ({s.practiceQuestions.length})</button></div></div>;
  };

  const Cards = () => {
    const s = section ? SECTIONS_DATA.find(x => x.id === section) : null;
    const cs = s ? s.flashcards : SECTIONS_DATA.flatMap(x => x.flashcards);
    const c = cs[fcIdx] || cs[0];
    return <div className="max-w-md mx-auto space-y-4"><div className="flex justify-between text-slate-600 text-sm"><span>Card {fcIdx + 1}/{cs.length}</span><select value={section || ''} onChange={e => { setSection(e.target.value ? parseInt(e.target.value) : null); setFcIdx(0); setFlipped(false); }} className="p-1 border rounded text-xs"><option value="">All</option>{SECTIONS_DATA.map(x => <option key={x.id} value={x.id}>{x.title}</option>)}</select></div><div onClick={() => setFlipped(!flipped)} className="cursor-pointer h-56" style={{ perspective: '1000px' }}><div className="relative w-full h-full transition-transform duration-500" style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}><div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 flex flex-col items-center justify-center text-white shadow-lg" style={{ backfaceVisibility: 'hidden' }}><div className="text-xs opacity-60 mb-2">Q</div><p className="text-center font-medium">{c?.front}</p><div className="absolute bottom-3 text-xs opacity-60">Tap to flip</div></div><div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-5 flex flex-col items-center justify-center text-white shadow-lg" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}><div className="text-xs opacity-60 mb-2">A</div><p className="text-center font-medium">{c?.back}</p></div></div></div><div className="flex gap-3"><button onClick={() => { setFcIdx(i => i > 0 ? i - 1 : cs.length - 1); setFlipped(false); }} className="flex-1 py-2 bg-slate-100 rounded-lg text-sm font-medium">←</button><button onClick={() => { setFcIdx(Math.floor(Math.random() * cs.length)); setFlipped(false); }} className="p-2 bg-slate-100 rounded-lg">🔀</button><button onClick={() => { setFcIdx(i => i < cs.length - 1 ? i + 1 : 0); setFlipped(false); }} className="flex-1 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium">→</button></div></div>;
  };

  const Quiz = () => {
    if (!quiz.length) return <div className="max-w-md mx-auto bg-white rounded-xl p-6 shadow text-center"><div className="text-4xl mb-3">🎯</div><h2 className="font-bold text-slate-800 mb-4">Practice Quiz</h2><button onClick={() => { setQuiz(genQuiz()); setQIdx(0); setScore({ c: 0, t: 0 }); setAnswer(null); setShowExp(false); }} className="w-full p-3 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-xl font-medium mb-3">🎯 Adaptive (25Q)</button><select onChange={e => { if (e.target.value) { const s = SECTIONS_DATA.find(x => x.id === parseInt(e.target.value)); setQuiz(s.practiceQuestions.map((q, i) => ({ ...q, sid: s.id, st: s.title, qi: i }))); setQIdx(0); setScore({ c: 0, t: 0 }); setAnswer(null); setShowExp(false); } }} className="w-full p-2 border rounded-lg text-sm"><option value="">Select topic...</option>{SECTIONS_DATA.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}</select></div>;
    if (qIdx >= quiz.length) { const p = Math.round((score.c / score.t) * 100); return <div className={`max-w-md mx-auto rounded-xl p-6 text-white text-center ${p >= 75 ? 'bg-gradient-to-br from-emerald-500 to-green-600' : 'bg-gradient-to-br from-amber-500 to-orange-600'}`}><div className="text-4xl mb-2">{p >= 75 ? '🏆' : '📚'}</div><h2 className="text-2xl font-bold mb-1">{p >= 75 ? 'Great!' : 'Keep Going!'}</h2><p className="text-lg">{score.c}/{score.t} ({p}%)</p><div className="flex gap-3 mt-4 justify-center"><button onClick={() => setQuiz([])} className="px-4 py-2 bg-white/20 rounded-lg text-sm">Back</button><button onClick={() => { setQuiz(genQuiz()); setQIdx(0); setScore({ c: 0, t: 0 }); setAnswer(null); setShowExp(false); }} className="px-4 py-2 bg-white text-slate-800 rounded-lg text-sm font-medium">New Quiz</button></div></div>; }
    const q = quiz[qIdx];
    return <div className="max-w-md mx-auto space-y-4"><div className="flex justify-between text-slate-600 text-xs"><span>Q{qIdx + 1}/{quiz.length}</span><span>✓{score.c}</span></div><div className="w-full bg-slate-200 rounded-full h-1.5"><div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${((qIdx + 1) / quiz.length) * 100}%` }} /></div><div className="bg-white rounded-xl p-5 shadow"><span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs mb-3">{q.st}</span><h3 className="font-semibold text-slate-800 mb-4">{q.question}</h3><div className="space-y-2">{q.options.map((o, i) => <button key={i} onClick={() => !showExp && setAnswer(i)} disabled={showExp} className={`w-full p-3 text-left rounded-lg border-2 text-sm ${showExp ? (i === q.correct ? 'border-emerald-500 bg-emerald-50' : i === answer ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50') : (answer === i ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300')}`}><span className="inline-flex w-6 h-6 rounded bg-white border font-semibold mr-2 items-center justify-center text-xs">{String.fromCharCode(65 + i)}</span>{o}</button>)}</div>{showExp && <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><div className="font-semibold text-blue-800 text-xs mb-1">💡</div><p className="text-blue-700 text-sm">{q.explanation}</p></div>}</div><button onClick={() => { if (!showExp && answer !== null) { setShowExp(true); setScore(s => ({ c: s.c + (answer === q.correct ? 1 : 0), t: s.t + 1 })); record(q.sid, q.qi, answer === q.correct); } else if (showExp) { setQIdx(i => i + 1); setAnswer(null); setShowExp(false); } }} disabled={answer === null && !showExp} className={`w-full py-2.5 rounded-xl font-medium text-sm ${answer !== null || showExp ? (showExp ? 'bg-emerald-500 text-white' : 'bg-blue-500 text-white') : 'bg-slate-100 text-slate-400'}`}>{showExp ? (qIdx < quiz.length - 1 ? 'Next →' : 'Results') : 'Check'}</button></div>;
  };

  // SPACED REPETITION COMPONENT
  const SRS = () => {
    const stats = getSrsStats();
    
    // Session complete or no cards
    if (srsMode && srsDeck.length > 0 && srsIdx >= srsDeck.length) {
      const pct = srsStats.reviewed > 0 ? Math.round((srsStats.correct / srsStats.reviewed) * 100) : 0;
      return (
        <div className="max-w-md mx-auto">
          <div className={`rounded-2xl p-8 text-white text-center mb-6 ${pct >= 70 ? 'bg-gradient-to-br from-emerald-500 to-green-600' : 'bg-gradient-to-br from-amber-500 to-orange-600'}`}>
            <div className="text-5xl mb-4">🧠</div>
            <h1 className="text-2xl font-bold mb-2">Session Complete!</h1>
            <p className="text-4xl font-bold my-4">{srsStats.reviewed} cards</p>
            <p className="opacity-80">{srsStats.correct} remembered ({pct}%)</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
            <h3 className="font-bold text-slate-800 mb-3">📊 Your Progress</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-blue-600">{stats.mature}</div>
                <div className="text-xs text-blue-700">Mastered</div>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-amber-600">{stats.learning}</div>
                <div className="text-xs text-amber-700">Learning</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-purple-600">{stats.newCards}</div>
                <div className="text-xs text-purple-700">New</div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-emerald-600">{stats.dueNow}</div>
                <div className="text-xs text-emerald-700">Due Now</div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button onClick={() => { setSrsMode(false); setTab('dashboard'); }} className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium">
              Done
            </button>
            {stats.dueNow > 0 && (
              <button onClick={startSrsSession} className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-medium">
                Continue ({stats.dueNow} due)
              </button>
            )}
          </div>
        </div>
      );
    }
    
    // Start screen
    if (!srsMode || srsDeck.length === 0) {
      return (
        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white text-center mb-6">
            <div className="text-5xl mb-4">🧠</div>
            <h1 className="text-2xl font-bold mb-2">Spaced Repetition</h1>
            <p className="opacity-80 text-sm">Smart flashcards that adapt to your memory</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <h3 className="font-bold text-slate-800 mb-4">How It Works</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex gap-3">
                <span className="text-lg">🟢</span>
                <p><strong>Easy cards</strong> appear less often (days/weeks apart)</p>
              </div>
              <div className="flex gap-3">
                <span className="text-lg">🟡</span>
                <p><strong>Medium cards</strong> appear at moderate intervals</p>
              </div>
              <div className="flex gap-3">
                <span className="text-lg">🔴</span>
                <p><strong>Hard cards</strong> appear more frequently until mastered</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <h3 className="font-bold text-slate-800 mb-4">📊 Your Cards</h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-red-600">{stats.dueNow}</div>
                <div className="text-xs text-red-700">Due Today</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-600">{stats.newCards}</div>
                <div className="text-xs text-purple-700">New Cards</div>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-amber-600">{stats.learning}</div>
                <div className="text-xs text-amber-700">Learning</div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-emerald-600">{stats.mature}</div>
                <div className="text-xs text-emerald-700">Mastered</div>
              </div>
            </div>
            
            <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full transition-all" 
                style={{ width: `${stats.total > 0 ? (stats.mature / stats.total) * 100 : 0}%` }} 
              />
            </div>
            <p className="text-xs text-slate-500 text-center">{stats.total > 0 ? Math.round((stats.mature / stats.total) * 100) : 0}% of cards mastered</p>
          </div>
          
          <button 
            onClick={startSrsSession}
            disabled={stats.dueNow === 0 && stats.newCards === 0}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
              stats.dueNow > 0 || stats.newCards > 0
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            {stats.dueNow > 0 ? `🚀 Study ${Math.min(30, stats.dueNow + Math.min(10, stats.newCards))} Cards` : stats.newCards > 0 ? `🆕 Start with ${Math.min(10, stats.newCards)} New Cards` : '✅ All caught up! Come back later'}
          </button>
        </div>
      );
    }
    
    // Active review
    const card = srsDeck[srsIdx];
    
    const handleResponse = (quality) => {
      recordSrsResponse(card.key, quality);
      setSrsStats(s => ({
        reviewed: s.reviewed + 1,
        correct: s.correct + (quality >= 2 ? 1 : 0)
      }));
      setSrsFlipped(false);
      setSrsIdx(i => i + 1);
    };
    
    return (
      <div className="max-w-md mx-auto">
        {/* Progress header */}
        <div className="flex justify-between items-center mb-4 text-sm">
          <span className="text-slate-600">Card {srsIdx + 1} of {srsDeck.length}</span>
          <span className="text-emerald-600 font-medium">✓ {srsStats.correct}</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-1.5 mb-4">
          <div className="bg-indigo-500 h-1.5 rounded-full transition-all" style={{ width: `${((srsIdx + 1) / srsDeck.length) * 100}%` }} />
        </div>
        
        {/* Section badge */}
        <div className="text-center mb-2">
          <span className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-full">{card.sectionTitle}</span>
          {card.isNew && <span className="ml-2 text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">NEW</span>}
        </div>
        
        {/* Flashcard */}
        <div 
          onClick={() => !srsFlipped && setSrsFlipped(true)} 
          className={`cursor-pointer mb-4 ${!srsFlipped ? 'hover:scale-[1.02] transition-transform' : ''}`}
          style={{ perspective: '1000px' }}
        >
          <div 
            className="relative w-full transition-transform duration-500" 
            style={{ 
              transformStyle: 'preserve-3d', 
              transform: srsFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              minHeight: '250px'
            }}
          >
            {/* Front */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-xl"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="text-xs opacity-60 mb-4">QUESTION</div>
              <p className="text-center text-lg font-medium">{card.front}</p>
              {!srsFlipped && <div className="absolute bottom-4 text-xs opacity-60">Tap to reveal answer</div>}
            </div>
            
            {/* Back */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-xl"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <div className="text-xs opacity-60 mb-4">ANSWER</div>
              <div className="text-center text-sm whitespace-pre-line overflow-auto max-h-40">{card.back}</div>
            </div>
          </div>
        </div>
        
        {/* Response buttons */}
        {srsFlipped && (
          <div className="space-y-3">
            <p className="text-center text-sm text-slate-600 mb-2">How well did you know this?</p>
            <div className="grid grid-cols-4 gap-2">
              <button 
                onClick={() => handleResponse(0)} 
                className="py-3 bg-red-500 text-white rounded-xl font-medium text-sm hover:bg-red-600 transition-colors"
              >
                Again
                <div className="text-xs opacity-70">&lt;1m</div>
              </button>
              <button 
                onClick={() => handleResponse(1)} 
                className="py-3 bg-orange-500 text-white rounded-xl font-medium text-sm hover:bg-orange-600 transition-colors"
              >
                Hard
                <div className="text-xs opacity-70">1d</div>
              </button>
              <button 
                onClick={() => handleResponse(2)} 
                className="py-3 bg-emerald-500 text-white rounded-xl font-medium text-sm hover:bg-emerald-600 transition-colors"
              >
                Good
                <div className="text-xs opacity-70">{card.interval < 1 ? '3d' : `${Math.round(card.interval * card.ease)}d`}</div>
              </button>
              <button 
                onClick={() => handleResponse(3)} 
                className="py-3 bg-blue-500 text-white rounded-xl font-medium text-sm hover:bg-blue-600 transition-colors"
              >
                Easy
                <div className="text-xs opacity-70">{card.interval < 1 ? '4d' : `${Math.round(card.interval * card.ease * 1.3)}d`}</div>
              </button>
            </div>
          </div>
        )}
        
        {/* Skip/Exit */}
        <div className="mt-4 flex justify-between">
          <button 
            onClick={() => { setSrsMode(false); setTab('dashboard'); }}
            className="text-sm text-slate-500 hover:text-slate-700"
          >
            Exit Session
          </button>
          {!srsFlipped && (
            <button 
              onClick={() => { setSrsIdx(i => i + 1); }}
              className="text-sm text-slate-500 hover:text-slate-700"
            >
              Skip →
            </button>
          )}
        </div>
      </div>
    );
  };

  const AI = () => (
    <div className="max-w-lg mx-auto space-y-4">
      <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl p-5 text-white"><h2 className="font-bold mb-2">✨ AI Assistant</h2><p className="opacity-80 text-sm mb-3">Ask about topics, history, weak areas.</p><div className="flex gap-2"><input type="text" defaultValue="" onChange={e => setAiQuery(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleAi()} placeholder="Ask..." className="flex-1 p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 text-sm" /><button onClick={handleAi} className="px-4 py-3 bg-white text-purple-600 rounded-lg font-semibold text-sm">Ask</button></div></div>
      <div className="bg-white rounded-xl p-4 shadow"><h3 className="font-semibold text-slate-800 text-sm mb-3">Quick</h3><div className="flex flex-wrap gap-2">{["My weak areas", "Jones v. Mayer", "Fair Housing", "Lead paint", "Escrow"].map((q, i) => <button key={i} onClick={() => { setAiQuery(q); setTimeout(handleAi, 50); }} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs">{q}</button>)}</div></div>
      {aiRes && <div className="bg-white rounded-xl p-4 shadow"><div className="text-sm text-slate-700">{aiRes.split('\n').map((l, i) => <p key={i} className="mb-1">{l.split('**').map((p, j) => j % 2 ? <strong key={j}>{p}</strong> : p)}</p>)}</div></div>}
    </div>
  );

  // PRACTICE EXAM MODE COMPONENT
  const Exam = () => {
    const formatTime = (seconds) => {
      const hrs = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Exam Start Screen
    if (!examStarted) {
      return (
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white text-center mb-6">
            <div className="text-5xl mb-4">📝</div>
            <h1 className="text-3xl font-bold mb-2">Practice Exam</h1>
            <p className="opacity-80">Simulated Florida Real Estate Exam</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <h2 className="font-bold text-slate-800 mb-4">Exam Details</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-indigo-600">100</div>
                <div className="text-sm text-slate-600">Questions</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-indigo-600">3.5 hrs</div>
                <div className="text-sm text-slate-600">Time Limit</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-emerald-600">75%</div>
                <div className="text-sm text-slate-600">Passing Score</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-amber-600">75/100</div>
                <div className="text-sm text-slate-600">To Pass</div>
              </div>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-amber-800 mb-2">⚠️ Exam Rules</h3>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Timer starts immediately when you begin</li>
                <li>• You can navigate between questions</li>
                <li>• Unanswered questions count as incorrect</li>
                <li>• You can submit early or wait for timer</li>
              </ul>
            </div>
            
            <button 
              onClick={startExam}
              className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
            >
              🚀 Start Exam
            </button>
          </div>
        </div>
      );
    }

    // Exam Results Screen
    if (examFinished && examResults) {
      return (
        <div className="max-w-2xl mx-auto">
          <div className={`rounded-2xl p-8 text-white text-center mb-6 ${examResults.passed ? 'bg-gradient-to-br from-emerald-500 to-green-600' : 'bg-gradient-to-br from-red-500 to-rose-600'}`}>
            <div className="text-5xl mb-4">{examResults.passed ? '🎉' : '📚'}</div>
            <h1 className="text-3xl font-bold mb-2">{examResults.passed ? 'PASSED!' : 'Not Yet'}</h1>
            <p className="text-6xl font-bold my-4">{examResults.percentage}%</p>
            <p className="opacity-80">{examResults.correct} out of {examResults.total} correct</p>
            {examResults.answered < 100 && <p className="text-sm mt-2 opacity-70">({100 - examResults.answered} unanswered)</p>}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <h2 className="font-bold text-slate-800 mb-4">Results by Section</h2>
            <div className="space-y-3">
              {Object.entries(examResults.sectionResults)
                .sort((a, b) => (b[1].correct/b[1].total || 0) - (a[1].correct/a[1].total || 0))
                .map(([id, data]) => {
                  const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                  return (
                    <div key={id} className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-700">{data.title}</span>
                          <span className={`font-medium ${pct >= 75 ? 'text-emerald-600' : 'text-red-600'}`}>{data.correct}/{data.total}</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className={`h-2 rounded-full ${pct >= 75 ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="flex gap-4">
            <button onClick={() => { setExamMode(false); setExamStarted(false); setTab('dashboard'); }} className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium">
              Back to Dashboard
            </button>
            <button onClick={startExam} className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-medium">
              Try Again
            </button>
          </div>
        </div>
      );
    }

    // Active Exam Screen
    const currentQ = examQuestions[qIdx];
    const answeredCount = Object.keys(examAnswers).length;
    const isLowTime = examTimeLeft < 600; // Less than 10 minutes

    return (
      <div className="max-w-3xl mx-auto">
        {/* Exam Header */}
        <div className={`sticky top-16 z-40 rounded-xl p-4 mb-4 ${isLowTime ? 'bg-red-600' : 'bg-indigo-600'} text-white`}>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm opacity-80">Question {qIdx + 1} of 100</span>
              <div className="text-xs opacity-60">{answeredCount} answered</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-mono font-bold ${isLowTime ? 'animate-pulse' : ''}`}>
                {formatTime(examTimeLeft)}
              </div>
              <div className="text-xs opacity-80">Time Remaining</div>
            </div>
            <button 
              onClick={() => { if (confirm('Submit exam now? Unanswered questions will be marked incorrect.')) finishExam(); }}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium"
            >
              Submit Exam
            </button>
          </div>
          {/* Progress bar */}
          <div className="mt-3 flex gap-0.5">
            {examQuestions.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setQIdx(i)}
                className={`h-1.5 flex-1 rounded-full cursor-pointer transition-all ${
                  examAnswers[i] !== undefined 
                    ? 'bg-emerald-400' 
                    : i === qIdx 
                      ? 'bg-white' 
                      : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
          <div className="flex justify-between items-start mb-4">
            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">{currentQ?.st}</span>
            <span className="text-slate-400 text-sm">#{qIdx + 1}</span>
          </div>
          
          <h3 className="text-lg font-semibold text-slate-800 mb-6">{currentQ?.question}</h3>
          
          <div className="space-y-3">
            {currentQ?.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setExamAnswers(prev => ({ ...prev, [qIdx]: i }))}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                  examAnswers[qIdx] === i 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <span className={`inline-flex w-8 h-8 rounded-lg font-bold mr-3 items-center justify-center text-sm ${
                  examAnswers[qIdx] === i ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button 
            onClick={() => setQIdx(i => Math.max(0, i - 1))} 
            disabled={qIdx === 0}
            className={`flex-1 py-3 rounded-xl font-medium ${qIdx === 0 ? 'bg-slate-100 text-slate-400' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
          >
            ← Previous
          </button>
          <button 
            onClick={() => setQIdx(i => Math.min(99, i + 1))} 
            disabled={qIdx === 99}
            className={`flex-1 py-3 rounded-xl font-medium ${qIdx === 99 ? 'bg-slate-100 text-slate-400' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
          >
            Next →
          </button>
        </div>

        {/* Question Navigator */}
        <div className="mt-6 bg-white rounded-xl p-4 shadow">
          <h4 className="text-sm font-medium text-slate-700 mb-3">Jump to Question</h4>
          <div className="grid grid-cols-10 gap-1">
            {examQuestions.map((_, i) => (
              <button
                key={i}
                onClick={() => setQIdx(i)}
                className={`aspect-square rounded text-xs font-medium ${
                  examAnswers[i] !== undefined
                    ? 'bg-emerald-500 text-white'
                    : i === qIdx
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200"><div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">FL</div><div><h1 className="text-sm font-bold text-slate-800">FL RE Exam</h1><p className="text-xs text-slate-500">v2.5 SRS</p></div></div><nav className="flex gap-1">{[{ id: 'dashboard', l: '📊' }, { id: 'srs', l: '🧠' }, { id: 'study', l: '📖' }, { id: 'quiz', l: '🎯' }, { id: 'exam', l: '📝' }, { id: 'cases', l: '⚖️' }, { id: 'ai', l: '✨' }].map(t => <button key={t.id} onClick={() => setTab(t.id)} className={`px-2 py-1.5 rounded text-sm ${tab === t.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-slate-100 text-slate-600'}`}>{t.l}</button>)}</nav></div></header>
      <main className="max-w-3xl mx-auto px-4 py-6">{tab === 'dashboard' && <Dashboard />}{tab === 'srs' && <SRS />}{tab === 'study' && <Study />}{tab === 'cards' && <Cards />}{tab === 'quiz' && <Quiz />}{tab === 'exam' && <Exam />}{tab === 'history' && <History />}{tab === 'cases' && <Cases />}{tab === 'ai' && <AI />}</main>
      <footer className="border-t border-slate-200 bg-white/50 mt-8"><div className="max-w-3xl mx-auto px-4 py-3 text-center text-xs text-slate-500">FL DBPR • Ch 475 • 100Q • 75% pass</div></footer>
    </div>
  );
}
