import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, ChevronRight, ChevronDown, Search, Filter,
  Star, Clock, Target, Bookmark, BookmarkCheck, Printer,
  GraduationCap, Brain, Zap, ArrowLeft, FileText, Scale
} from 'lucide-react';
import { CHAPTERS } from '../../data/chapters/index.js';

/**
 * StudyGuide Component
 * 
 * Provides spark notes, key definitions, and quick reference
 * for all exam content - perfect for pre-exam review
 */

// Extract key terms and definitions from all chapters
const extractKeyTerms = () => {
  const terms = [];
  
  // Chapter 1: Real Estate Business
  terms.push(
    { term: 'Real Property', definition: 'Land + improvements + rights (bundle of rights)', chapter: 1 },
    { term: 'Personal Property', definition: 'Movable items (chattels), not attached to land', chapter: 1 },
    { term: 'MARIA Test', definition: 'Method, Adaptability, Relationship, Intention, Agreement - determines fixture vs personal property', chapter: 1 },
    { term: 'Bundle of Rights', definition: 'Possession, Control, Enjoyment, Exclusion, Disposition (PACED)', chapter: 1 }
  );
  
  // Chapter 2: License Law
  terms.push(
    { term: 'Sales Associate', definition: '18+ years, 63-hr pre-license, 45-hr post-license, works under broker', chapter: 2 },
    { term: 'Broker', definition: '24 months active SA experience + 72-hr course, can operate independently', chapter: 2 },
    { term: 'Mutual Recognition', definition: 'Agreements with other states for license reciprocity', chapter: 2 },
    { term: 'Continuing Education', definition: '14 hours every 2 years to maintain active license', chapter: 2 }
  );
  
  // Chapter 3: FREC & DBPR
  terms.push(
    { term: 'FREC', definition: 'Florida Real Estate Commission - 7 members (4 brokers + 2 consumers + 1 either)', chapter: 3 },
    { term: 'DBPR', definition: 'Department of Business and Professional Regulation - parent agency', chapter: 3 },
    { term: 'Recovery Fund', definition: '$50,000 per transaction, $150,000 per licensee lifetime max', chapter: 3 }
  );
  
  // Chapter 4: Authorized Relationships
  terms.push(
    { term: 'Transaction Broker', definition: 'FL default since 1997, limited representation, NOT fiduciary, 7 duties', chapter: 4 },
    { term: 'Single Agent', definition: 'Full fiduciary relationship with OLD CAR duties (9 total)', chapter: 4 },
    { term: 'No Brokerage', definition: 'Customer relationship, only honesty and fair dealing required', chapter: 4 },
    { term: 'OLD CAR', definition: 'Obedience, Loyalty, Disclosure, Confidentiality, Accountability, Reasonable skill/care', chapter: 4 }
  );
  
  // Chapter 5: Brokerage Activities
  terms.push(
    { term: 'Escrow', definition: 'Third-party holds funds; deposit by end of 3rd business day', chapter: 5 },
    { term: 'Commingling', definition: 'Mixing personal and escrow funds - VIOLATION', chapter: 5 },
    { term: 'Conversion', definition: 'Using escrow funds for personal use - CRIMINAL', chapter: 5 },
    { term: 'Price Fixing', definition: 'Competitors agreeing on commission rates - antitrust violation', chapter: 5 }
  );
  
  // Chapter 6: Violations & Penalties
  terms.push(
    { term: 'Administrative Complaint', definition: '21 days to respond, can dispute or elect hearing', chapter: 6 },
    { term: 'Culpable Negligence', definition: 'Reckless disregard for rights of others', chapter: 6 },
    { term: 'Fraud', definition: 'Intentional misrepresentation for personal gain', chapter: 6 }
  );
  
  // Chapter 7: Federal & State Laws
  terms.push(
    { term: 'Fair Housing Act', definition: '7 protected classes: Race, Color, Religion, National Origin, Sex, Familial Status, Disability', chapter: 7 },
    { term: 'Steering', definition: 'Directing buyers to/away from areas based on protected class', chapter: 7 },
    { term: 'Blockbusting', definition: 'Inducing panic selling by suggesting protected class moving in', chapter: 7 },
    { term: 'Redlining', definition: 'Refusing loans/insurance based on neighborhood demographics', chapter: 7 }
  );
  
  // Chapter 8: Property Rights & Estates
  terms.push(
    { term: 'Fee Simple Absolute', definition: 'Highest form of ownership, unlimited duration, fully transferable', chapter: 8 },
    { term: 'Life Estate', definition: 'Ownership limited to someone\'s lifetime', chapter: 8 },
    { term: 'Joint Tenancy', definition: 'Equal ownership with right of survivorship, requires TTIP unities', chapter: 8 },
    { term: 'Tenancy by Entireties', definition: 'Married couples only, survivorship, creditor protection', chapter: 8 },
    { term: 'FL Homestead', definition: '$50K exemption (first $25K all taxes, next $25K non-school), 1/2 acre city or 160 acres rural', chapter: 8 }
  );
  
  // Chapter 9: Titles, Deeds & Restrictions
  terms.push(
    { term: 'General Warranty Deed', definition: 'Most protection, warrants against ALL title defects ever', chapter: 9 },
    { term: 'Special Warranty Deed', definition: 'Warrants only against defects during grantor\'s ownership', chapter: 9 },
    { term: 'Quitclaim Deed', definition: 'NO warranties, transfers whatever interest exists', chapter: 9 },
    { term: 'Race-Notice State', definition: 'FL recording law - first to record without notice wins', chapter: 9 }
  );
  
  // Chapter 10: Legal Descriptions
  terms.push(
    { term: 'Metes and Bounds', definition: 'Oldest method using distances, directions, POB', chapter: 10 },
    { term: 'Rectangular Survey', definition: 'Government survey using townships, ranges, sections', chapter: 10 },
    { term: 'Section', definition: '640 acres = 1 square mile', chapter: 10 },
    { term: 'Township', definition: '36 sections = 6 miles × 6 miles', chapter: 10 }
  );
  
  // Chapter 11: Contracts
  terms.push(
    { term: 'Statute of Frauds', definition: 'Real estate contracts must be in WRITING to be enforceable', chapter: 11 },
    { term: 'Valid Contract', definition: 'Meets all requirements: Competent parties, Offer/acceptance, Legal purpose, In writing, Consideration (COLIC)', chapter: 11 },
    { term: 'Exclusive Right to Sell', definition: 'Broker paid commission regardless of who sells', chapter: 11 },
    { term: 'Specific Performance', definition: 'Court orders party to complete contract as agreed', chapter: 11 }
  );
  
  // Chapter 12: Residential Mortgages
  terms.push(
    { term: 'Lien Theory State', definition: 'FL - borrower keeps title, lender gets lien', chapter: 12 },
    { term: 'FHA Loan', definition: '3.5% minimum down, requires MIP, government-insured', chapter: 12 },
    { term: 'VA Loan', definition: '0% down, no PMI, funding fee, for veterans', chapter: 12 },
    { term: 'Acceleration Clause', definition: 'Allows lender to demand full balance if borrower defaults', chapter: 12 }
  );
  
  // Chapter 13: Mortgage Markets
  terms.push(
    { term: 'Primary Market', definition: 'Where loans ORIGINATE (banks, credit unions)', chapter: 13 },
    { term: 'Secondary Market', definition: 'Where loans are BOUGHT and SOLD', chapter: 13 },
    { term: 'Fannie Mae', definition: 'FNMA - largest secondary market buyer, GSE', chapter: 13 },
    { term: 'Ginnie Mae', definition: 'GNMA - only TRUE government agency, full faith and credit', chapter: 13 }
  );
  
  // Chapter 14: Appraisal
  terms.push(
    { term: 'Sales Comparison Approach', definition: 'Best for residential - compare to similar recent sales', chapter: 14 },
    { term: 'Cost Approach', definition: 'Value = Replacement Cost - Depreciation + Land', chapter: 14 },
    { term: 'Income Approach', definition: 'Value = NOI ÷ Cap Rate (IRV formula)', chapter: 14 },
    { term: 'CBS Rule', definition: 'Comparable Better = Subtract (always adjust comparable, not subject)', chapter: 14 }
  );
  
  // Chapter 15: Closing
  terms.push(
    { term: 'Closing Disclosure', definition: '3 business days BEFORE closing, replaced HUD-1', chapter: 15 },
    { term: 'Documentary Stamps - Deed', definition: '$0.70 per $100, paid by SELLER', chapter: 15 },
    { term: 'Documentary Stamps - Note', definition: '$0.35 per $100, paid by BUYER', chapter: 15 },
    { term: 'Proration', definition: 'Dividing expenses between buyer and seller at closing', chapter: 15 }
  );
  
  // Chapter 16: Investments
  terms.push(
    { term: 'Cap Rate', definition: 'NOI ÷ Value - measures investment return', chapter: 16 },
    { term: '1031 Exchange', definition: 'Tax-deferred exchange: 45 days to identify, 180 days to close', chapter: 16 },
    { term: 'Depreciation', definition: 'Residential 27.5 years, Commercial 39 years, Land NEVER', chapter: 16 },
    { term: 'DSCR', definition: 'Debt Service Coverage Ratio = NOI ÷ Debt Service (want >1.0)', chapter: 16 }
  );
  
  // Chapter 17: Leasing
  terms.push(
    { term: 'Estate for Years', definition: 'Fixed term lease, definite end date, no notice needed', chapter: 17 },
    { term: 'Periodic Tenancy', definition: 'Auto-renews, notice required to terminate', chapter: 17 },
    { term: 'Triple Net (NNN)', definition: 'Tenant pays rent + taxes + insurance + maintenance', chapter: 17 },
    { term: 'Security Deposit', definition: '15 days return (no claim), 30 days if claiming deductions', chapter: 17 }
  );
  
  // Chapter 18: Planning & Zoning
  terms.push(
    { term: 'Police Power', definition: 'Government regulates for health, safety, welfare - NO compensation', chapter: 18 },
    { term: 'Eminent Domain', definition: 'Government TAKES property - requires just compensation', chapter: 18 },
    { term: 'Variance', definition: 'Exception to zoning requirements due to hardship', chapter: 18 },
    { term: 'Nonconforming Use', definition: 'Grandfathered use - can continue but cannot expand', chapter: 18 }
  );
  
  // Chapter 19: Math
  terms.push(
    { term: 'T-Bar Method', definition: 'Total on top, Part and Rate on bottom - solves most RE math', chapter: 19 },
    { term: '43,560', definition: 'Square feet per acre', chapter: 19 },
    { term: '640', definition: 'Acres per section', chapter: 19 },
    { term: 'LTV', definition: 'Loan-to-Value = Loan Amount ÷ Property Value', chapter: 19 }
  );
  
  return terms;
};

// Critical numbers to memorize
const CRITICAL_NUMBERS = [
  { number: '18', meaning: 'Minimum age for licensure', category: 'License' },
  { number: '63', meaning: 'Pre-license education hours', category: 'License' },
  { number: '45', meaning: 'Post-license hours (before first renewal)', category: 'License' },
  { number: '72', meaning: 'Broker pre-license course hours', category: 'License' },
  { number: '24', meaning: 'Months active SA experience for broker', category: 'License' },
  { number: '14', meaning: 'Continuing education hours (every 2 years)', category: 'License' },
  { number: '7', meaning: 'FREC members (4 brokers + 2 consumers + 1 either)', category: 'FREC' },
  { number: '$5,000', meaning: 'Maximum FREC fine per violation', category: 'FREC' },
  { number: '$50,000', meaning: 'Recovery Fund max per transaction', category: 'FREC' },
  { number: '$150,000', meaning: 'Recovery Fund lifetime max per licensee', category: 'FREC' },
  { number: '3', meaning: 'Business days - broker deposits escrow', category: 'Escrow' },
  { number: '10', meaning: 'Business days - monthly escrow reconciliation', category: 'Escrow' },
  { number: '15', meaning: 'Business days - disburse conflicting demands', category: 'Escrow' },
  { number: '30', meaning: 'Business days - notify FREC of escrow dispute', category: 'Escrow' },
  { number: '3.5%', meaning: 'FHA minimum down payment', category: 'Loans' },
  { number: '0%', meaning: 'VA down payment (no down required)', category: 'Loans' },
  { number: '28/36', meaning: 'Conventional qualifying ratios', category: 'Loans' },
  { number: '31/43', meaning: 'FHA qualifying ratios', category: 'Loans' },
  { number: '43,560', meaning: 'Square feet per acre', category: 'Math' },
  { number: '640', meaning: 'Acres per section', category: 'Math' },
  { number: '27.5', meaning: 'Residential depreciation years', category: 'Math' },
  { number: '39', meaning: 'Commercial depreciation years', category: 'Math' },
  { number: '$0.70', meaning: 'Doc stamps on DEED per $100 (seller pays)', category: 'Closing' },
  { number: '$0.35', meaning: 'Doc stamps on NOTE per $100 (buyer pays)', category: 'Closing' },
  { number: '15', meaning: 'Days to return security deposit (no claim)', category: 'Landlord-Tenant' },
  { number: '30', meaning: 'Days to send claim notice on security deposit', category: 'Landlord-Tenant' },
  { number: '45', meaning: 'Days to identify replacement in 1031 exchange', category: 'Investment' },
  { number: '180', meaning: 'Days to close 1031 exchange', category: 'Investment' },
];

// Key formulas
const KEY_FORMULAS = [
  { formula: 'Commission = Sales Price × Rate', example: '$300,000 × 6% = $18,000', category: 'Commission' },
  { formula: 'Sales Price = Net ÷ (1 - Rate)', example: 'Net $285,000, 5% comm: $285,000 ÷ 0.95 = $300,000', category: 'Commission' },
  { formula: 'LTV = Loan ÷ Value', example: '$200,000 ÷ $250,000 = 80%', category: 'Loans' },
  { formula: 'Interest = Principal × Rate × Time', example: '$200,000 × 6% × 1 year = $12,000', category: 'Loans' },
  { formula: 'Points = Loan × Point %', example: '$200,000 × 2 points = $4,000', category: 'Loans' },
  { formula: 'Housing Ratio = PITI ÷ Gross Income', example: '$1,680 ÷ $6,000 = 28%', category: 'Qualifying' },
  { formula: 'Value = NOI ÷ Cap Rate', example: '$50,000 ÷ 8% = $625,000', category: 'Appraisal' },
  { formula: 'GRM × Rent = Value', example: '120 × $2,000 = $240,000', category: 'Appraisal' },
  { formula: 'Cost - Depreciation + Land = Value', example: '$300K - $60K + $80K = $320K', category: 'Appraisal' },
  { formula: 'Acres = Sq Ft ÷ 43,560', example: '87,120 sq ft ÷ 43,560 = 2 acres', category: 'Area' },
  { formula: 'Section Acres = Fractions × 640', example: 'NE¼ of SW¼ = ¼ × ¼ × 640 = 40 acres', category: 'Area' },
  { formula: 'Daily Rate = Annual ÷ 365', example: '$3,650 ÷ 365 = $10/day', category: 'Proration' },
  { formula: 'Doc Stamps Deed = Price ÷ 100 × $0.70', example: '$300,000 ÷ 100 × $0.70 = $2,100', category: 'Closing' },
  { formula: 'Doc Stamps Note = Loan ÷ 100 × $0.35', example: '$240,000 ÷ 100 × $0.35 = $840', category: 'Closing' },
];

// Chapter summaries (spark notes)
const getChapterSummaries = () => {
  return CHAPTERS.map(chapter => ({
    id: chapter.id,
    title: chapter.title,
    examPercentage: chapter.examPercentage,
    color: chapter.color,
    summary: chapter.summary,
    keyPoints: chapter.sections?.flatMap(s => s.keyPoints || []).slice(0, 8) || [],
    examTips: chapter.sections?.flatMap(s => s.examTips || []).slice(0, 5) || []
  }));
};

const StudyGuide = ({ onBack, onOpenChapter }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [bookmarkedTerms, setBookmarkedTerms] = useState(new Set());
  
  const keyTerms = extractKeyTerms();
  const chapterSummaries = getChapterSummaries();
  
  // Filter terms by search and category
  const filteredTerms = keyTerms.filter(term => {
    const matchesSearch = searchTerm === '' || 
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.chapter === parseInt(selectedCategory);
    return matchesSearch && matchesCategory;
  });
  
  // Get unique categories (chapters)
  const categories = [
    { value: 'all', label: 'All Chapters' },
    ...CHAPTERS.map(ch => ({ value: ch.id.toString(), label: `Ch ${ch.id}: ${ch.title}` }))
  ];
  
  // Toggle bookmark
  const toggleBookmark = (term) => {
    setBookmarkedTerms(prev => {
      const newSet = new Set(prev);
      if (newSet.has(term)) {
        newSet.delete(term);
      } else {
        newSet.add(term);
      }
      return newSet;
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      {onBack && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-surface-400 hover:text-surface-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </motion.button>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-4"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-display font-bold text-surface-100">Study Guide</h1>
        <p className="text-surface-400 mt-1">Quick reference for exam preparation</p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {[
          { id: 'overview', label: 'Overview', icon: BookOpen },
          { id: 'terms', label: 'Key Terms', icon: Brain },
          { id: 'numbers', label: 'Numbers', icon: Target },
          { id: 'formulas', label: 'Formulas', icon: Scale },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
              activeTab === tab.id 
                ? 'bg-brand-500 text-white' 
                : 'bg-surface-800/50 text-surface-400 hover:bg-surface-700/50'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Tab - Chapter Summaries */}
      {activeTab === 'overview' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="glass-card p-4">
            <h3 className="font-display font-semibold text-surface-100 mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-brand-400" />
              Exam Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="bg-surface-800/50 rounded-xl p-3">
                <div className="text-2xl font-bold text-brand-400">100</div>
                <div className="text-xs text-surface-400">Questions</div>
              </div>
              <div className="bg-surface-800/50 rounded-xl p-3">
                <div className="text-2xl font-bold text-emerald-400">75%</div>
                <div className="text-xs text-surface-400">To Pass</div>
              </div>
              <div className="bg-surface-800/50 rounded-xl p-3">
                <div className="text-2xl font-bold text-amber-400">3.5</div>
                <div className="text-xs text-surface-400">Hours</div>
              </div>
              <div className="bg-surface-800/50 rounded-xl p-3">
                <div className="text-2xl font-bold text-purple-400">19</div>
                <div className="text-xs text-surface-400">Topics</div>
              </div>
            </div>
          </div>

          {/* High-Weight Chapters */}
          <div className="glass-card p-4">
            <h3 className="font-display font-semibold text-surface-100 mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400" />
              Focus Areas (55% of Exam)
            </h3>
            <div className="space-y-2">
              {chapterSummaries
                .filter(ch => ch.examPercentage >= 6)
                .sort((a, b) => b.examPercentage - a.examPercentage)
                .map(ch => (
                  <div 
                    key={ch.id}
                    className="flex items-center gap-3 p-3 bg-surface-800/50 rounded-xl cursor-pointer hover:bg-surface-700/50 transition-colors"
                    onClick={() => setExpandedChapter(expandedChapter === ch.id ? null : ch.id)}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: ch.color }}
                    >
                      {ch.examPercentage}%
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-surface-200">{ch.title}</div>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-surface-500 transition-transform ${expandedChapter === ch.id ? 'rotate-90' : ''}`} />
                  </div>
                ))}
            </div>
          </div>

          {/* All Chapters */}
          <div className="glass-card p-4">
            <h3 className="font-display font-semibold text-surface-100 mb-3">All Chapter Summaries</h3>
            <div className="space-y-2">
              {chapterSummaries.map(ch => (
                <div key={ch.id}>
                  <div 
                    className="flex items-center gap-3 p-3 bg-surface-800/50 rounded-xl cursor-pointer hover:bg-surface-700/50 transition-colors"
                    onClick={() => setExpandedChapter(expandedChapter === ch.id ? null : ch.id)}
                  >
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs"
                      style={{ backgroundColor: ch.color }}
                    >
                      {ch.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-surface-200 text-sm truncate">{ch.title}</div>
                      <div className="text-xs text-surface-500">{ch.examPercentage}% of exam</div>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-surface-500 transition-transform ${expandedChapter === ch.id ? 'rotate-180' : ''}`} />
                  </div>
                  
                  <AnimatePresence>
                    {expandedChapter === ch.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 bg-surface-900/50 rounded-b-xl mt-1 space-y-3">
                          {ch.keyPoints.length > 0 && (
                            <div>
                              <div className="text-xs font-semibold text-brand-400 mb-2">KEY POINTS:</div>
                              <ul className="space-y-1">
                                {ch.keyPoints.map((point, i) => (
                                  <li key={i} className="text-sm text-surface-300 flex items-start gap-2">
                                    <span className="text-brand-400 mt-1">•</span>
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {ch.examTips.length > 0 && (
                            <div>
                              <div className="text-xs font-semibold text-amber-400 mb-2">EXAM TIPS:</div>
                              <ul className="space-y-1">
                                {ch.examTips.map((tip, i) => (
                                  <li key={i} className="text-sm text-surface-400 flex items-start gap-2">
                                    <Zap className="w-3 h-3 text-amber-400 mt-1 flex-shrink-0" />
                                    {tip}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {onOpenChapter && (
                            <button
                              onClick={() => onOpenChapter(ch.id)}
                              className="text-sm text-brand-400 hover:text-brand-300 flex items-center gap-1"
                            >
                              Study this chapter <ChevronRight className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Key Terms Tab */}
      {activeTab === 'terms' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          {/* Search and Filter */}
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-500" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-surface-800/50 border border-surface-700 rounded-xl text-surface-200 placeholder:text-surface-500 focus:outline-none focus:border-brand-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-surface-800/50 border border-surface-700 rounded-xl text-surface-200 focus:outline-none focus:border-brand-500"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>

          {/* Terms Count */}
          <div className="text-sm text-surface-400">
            Showing {filteredTerms.length} of {keyTerms.length} terms
          </div>

          {/* Terms List */}
          <div className="space-y-2">
            {filteredTerms.map((term, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02 }}
                className="glass-card p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-surface-100">{term.term}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-surface-700 text-surface-400">
                        Ch {term.chapter}
                      </span>
                    </div>
                    <p className="text-sm text-surface-400">{term.definition}</p>
                  </div>
                  <button
                    onClick={() => toggleBookmark(term.term)}
                    className="p-1 hover:bg-surface-700 rounded-lg transition-colors"
                  >
                    {bookmarkedTerms.has(term.term) ? (
                      <BookmarkCheck className="w-5 h-5 text-brand-400" />
                    ) : (
                      <Bookmark className="w-5 h-5 text-surface-500" />
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Numbers Tab */}
      {activeTab === 'numbers' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="glass-card p-4">
            <h3 className="font-display font-semibold text-surface-100 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-400" />
              Critical Numbers to Memorize
            </h3>
            
            {/* Group by category */}
            {['License', 'FREC', 'Escrow', 'Loans', 'Math', 'Closing', 'Landlord-Tenant', 'Investment'].map(category => {
              const nums = CRITICAL_NUMBERS.filter(n => n.category === category);
              if (nums.length === 0) return null;
              
              return (
                <div key={category} className="mb-6 last:mb-0">
                  <div className="text-sm font-semibold text-brand-400 mb-2">{category}</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {nums.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-surface-800/50 rounded-xl">
                        <div className="w-16 h-10 rounded-lg bg-gradient-to-br from-brand-500/20 to-brand-600/20 flex items-center justify-center">
                          <span className="font-bold text-brand-400">{item.number}</span>
                        </div>
                        <span className="text-sm text-surface-300 flex-1">{item.meaning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Formulas Tab */}
      {activeTab === 'formulas' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="glass-card p-4">
            <h3 className="font-display font-semibold text-surface-100 mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-400" />
              Essential Formulas
            </h3>
            
            {/* T-Bar Method */}
            <div className="mb-6 p-4 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl">
              <div className="text-sm font-semibold text-amber-400 mb-2">THE T-BAR METHOD (Master This!)</div>
              <div className="font-mono text-center text-surface-200 mb-2">
                <div className="border-b border-surface-600 pb-1 mb-1">Total (Whole)</div>
                <div className="flex justify-center gap-4">
                  <span>Part</span>
                  <span className="text-surface-500">│</span>
                  <span>Rate</span>
                </div>
              </div>
              <div className="text-xs text-surface-400 text-center">
                Part = Total × Rate | Total = Part ÷ Rate | Rate = Part ÷ Total
              </div>
            </div>
            
            {/* Group by category */}
            {['Commission', 'Loans', 'Qualifying', 'Appraisal', 'Area', 'Proration', 'Closing'].map(category => {
              const formulas = KEY_FORMULAS.filter(f => f.category === category);
              if (formulas.length === 0) return null;
              
              return (
                <div key={category} className="mb-6 last:mb-0">
                  <div className="text-sm font-semibold text-brand-400 mb-2">{category}</div>
                  <div className="space-y-2">
                    {formulas.map((item, i) => (
                      <div key={i} className="p-3 bg-surface-800/50 rounded-xl">
                        <div className="font-mono text-surface-200 text-sm mb-1">{item.formula}</div>
                        <div className="text-xs text-surface-500">Example: {item.example}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default StudyGuide;
