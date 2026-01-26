/**
 * FL Real Estate Chapters Index
 * 
 * All 19 chapters organized according to DBPR exam blueprint
 * Each chapter will be fully populated with content
 */

import { CHAPTER_1 } from './chapter1';

// Chapter stubs for remaining chapters (to be populated)
const createChapterStub = (id, title, subtitle, percentage, color) => ({
  id,
  title,
  subtitle,
  examPercentage: percentage,
  requiredTimeMinutes: Math.max(180, percentage * 30), // Minimum 3 hours, scaled by importance
  color,
  icon: 'BookOpen',
  objectives: [`Learn the fundamentals of ${title}`],
  statutes: [],
  sections: [{
    id: `${id}.1`,
    title: 'Introduction',
    content: `# ${title}\n\nThis chapter content is being developed...`,
    keyPoints: ['Content coming soon'],
    examTips: ['Study the Florida Statutes']
  }],
  flashcards: [],
  practiceQuestions: [],
  caseStudies: [],
  summary: `Chapter ${id} summary coming soon...`
});

// Export all chapters
export const CHAPTERS = [
  CHAPTER_1,
  createChapterStub(2, 'License Law & Qualifications', 'Requirements for Florida Real Estate Licensure', 6, '#8B5CF6'),
  createChapterStub(3, 'FREC & DBPR Structure', 'Florida Real Estate Commission Organization', 2, '#06B6D4'),
  createChapterStub(4, 'Authorized Relationships', 'Brokerage Relationships in Florida', 7, '#10B981'),
  createChapterStub(5, 'Brokerage Activities & Procedures', 'Operating a Real Estate Brokerage', 12, '#F59E0B'),
  createChapterStub(6, 'Violations, Penalties & Procedures', 'Disciplinary Actions and Recovery Fund', 3, '#EF4444'),
  createChapterStub(7, 'Federal & State Laws', 'Fair Housing, RESPA, and Florida Laws', 3, '#6366F1'),
  createChapterStub(8, 'Property Rights & Estates', 'Ownership Types and Rights', 8, '#EC4899'),
  createChapterStub(9, 'Titles, Deeds & Restrictions', 'Transfer of Ownership', 7, '#14B8A6'),
  createChapterStub(10, 'Legal Descriptions', 'Methods of Describing Real Property', 5, '#F97316'),
  createChapterStub(11, 'Real Estate Contracts', 'Contract Law and Florida Requirements', 12, '#84CC16'),
  createChapterStub(12, 'Residential Mortgages', 'Financing Real Estate Purchases', 9, '#A855F7'),
  createChapterStub(13, 'Mortgage Markets & Sources', 'Primary and Secondary Markets', 4, '#0EA5E9'),
  createChapterStub(14, 'Computations & Closing', 'Math, Prorations, and Closing Procedures', 6, '#22C55E'),
  createChapterStub(15, 'Markets & Analysis', 'Real Estate Market Principles', 1, '#EAB308'),
  createChapterStub(16, 'Real Estate Appraisal', 'Valuation Methods and Principles', 8, '#E11D48'),
  createChapterStub(17, 'Investments & Business Brokerage', 'Investment Analysis and Business Sales', 2, '#7C3AED'),
  createChapterStub(18, 'Taxes Affecting Real Estate', 'Property Taxes and Tax Benefits', 3, '#059669'),
  createChapterStub(19, 'Planning & Zoning', 'Land Use Regulations', 1, '#DC2626')
];

// Helper functions
export const getChapterById = (id) => CHAPTERS.find(c => c.id === parseInt(id));

export const getTotalExamPercentage = () => 
  CHAPTERS.reduce((sum, c) => sum + c.examPercentage, 0);

export const getChaptersByWeight = () => 
  [...CHAPTERS].sort((a, b) => b.examPercentage - a.examPercentage);

export const getHighWeightChapters = () => 
  CHAPTERS.filter(c => c.examPercentage >= 6);

export const getLowWeightChapters = () => 
  CHAPTERS.filter(c => c.examPercentage < 3);

// Calculate total required study time
export const getTotalRequiredTime = () => 
  CHAPTERS.reduce((sum, c) => sum + c.requiredTimeMinutes, 0);

// Format as hours
export const getTotalRequiredHours = () => 
  Math.ceil(getTotalRequiredTime() / 60);

// Export chapter metadata for quick reference
export const CHAPTER_METADATA = CHAPTERS.map(c => ({
  id: c.id,
  title: c.title,
  examPercentage: c.examPercentage,
  color: c.color,
  requiredTimeMinutes: c.requiredTimeMinutes,
  sectionCount: c.sections?.length || 0,
  questionCount: c.practiceQuestions?.length || 0,
  flashcardCount: c.flashcards?.length || 0
}));

export default CHAPTERS;
