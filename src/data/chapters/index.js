/**
 * FL Real Estate Chapters Index
 * 
 * All 19 chapters fully populated with content
 * Organized according to DBPR exam blueprint (100% coverage)
 */

import { CHAPTER_1 } from './chapter1';
import { CHAPTER_2 } from './chapter2';
import { CHAPTER_3 } from './chapter3';
import { CHAPTER_4 } from './chapter4';
import { CHAPTER_5 } from './chapter5';
import { CHAPTER_6 } from './chapter6';
import { CHAPTER_7 } from './chapter7';
import { CHAPTER_8 } from './chapter8';
import { CHAPTER_9 } from './chapter9';
import { CHAPTER_10 } from './chapter10';
import { CHAPTER_11 } from './chapter11';
import { CHAPTER_12 } from './chapter12';
import { CHAPTER_13 } from './chapter13';
import { CHAPTER_14 } from './chapter14';
import { CHAPTER_15 } from './chapter15';
import { CHAPTER_16 } from './chapter16';
import { CHAPTER_17 } from './chapter17';
import { CHAPTER_18 } from './chapter18';
import { CHAPTER_19 } from './chapter19';

// Export all chapters - COMPLETE CURRICULUM (19 chapters, 100% exam coverage)
export const CHAPTERS = [
  CHAPTER_1,
  CHAPTER_2,
  CHAPTER_3,
  CHAPTER_4,
  CHAPTER_5,
  CHAPTER_6,
  CHAPTER_7,
  CHAPTER_8,
  CHAPTER_9,
  CHAPTER_10,
  CHAPTER_11,
  CHAPTER_12,
  CHAPTER_13,
  CHAPTER_14,
  CHAPTER_15,
  CHAPTER_16,
  CHAPTER_17,
  CHAPTER_18,
  CHAPTER_19
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
