import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, ChevronRight, ChevronDown, Clock, Target, 
  CheckCircle2, Circle, Play, Pause, Scale, FileText,
  Bookmark, BookmarkCheck, Brain, GraduationCap, Sparkles
} from 'lucide-react';

/**
 * ChapterContent Component
 * 
 * Displays chapter study material with:
 * - Progress tracking per section
 * - Time tracking for FREC compliance
 * - Interactive table of contents
 * - Bookmark functionality
 * - Section completion tracking
 */

const ChapterContent = ({
  chapter,
  progress,
  onSectionComplete,
  onTimeUpdate,
  onStartExam,
  onOpenTutor
}) => {
  const [activeSection, setActiveSection] = useState(null);
  const [expandedSections, setExpandedSections] = useState(new Set());
  const [timeSpent, setTimeSpent] = useState(progress?.timeSpentMinutes || 0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [bookmarks, setBookmarks] = useState(new Set(progress?.bookmarks || []));
  const [completedSections, setCompletedSections] = useState(new Set(progress?.completedSections || []));
  
  const timerRef = useRef(null);
  const contentRef = useRef(null);

  // Time tracking
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setTimeSpent(prev => {
          const newTime = prev + 1/60; // Add 1 second (as fraction of minute)
          onTimeUpdate?.(Math.floor(newTime));
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [isTimerRunning, onTimeUpdate]);

  // Format time display
  const formatTime = (minutes) => {
    const hrs = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);
    return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;
  };

  // Calculate progress percentage
  const progressPercentage = Math.round(
    (completedSections.size / chapter.sections.length) * 100
  );

  // Check if ready for exam (all sections completed + minimum time)
  const isReadyForExam = 
    completedSections.size === chapter.sections.length &&
    timeSpent >= chapter.requiredTimeMinutes * 0.5; // At least 50% of required time

  // Toggle section expansion
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
    setActiveSection(sectionId);
  };

  // Mark section as complete
  const markSectionComplete = (sectionId) => {
    setCompletedSections(prev => {
      const newSet = new Set(prev);
      newSet.add(sectionId);
      onSectionComplete?.(sectionId, newSet);
      return newSet;
    });
  };

  // Toggle bookmark
  const toggleBookmark = (sectionId) => {
    setBookmarks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  // Render markdown-like content
  const renderContent = (content) => {
    // Simple markdown rendering
    const lines = content.split('\n');
    
    return lines.map((line, i) => {
      // Headers
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-lg font-display font-bold text-surface-100 mt-6 mb-3">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-xl font-display font-bold text-surface-50 mt-8 mb-4">{line.replace('## ', '')}</h2>;
      }
      
      // Bold text
      let processed = line;
      processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-400 font-semibold">$1</strong>');
      
      // Tables (simple detection)
      if (line.startsWith('|')) {
        return null; // Skip table lines, handle separately
      }
      
      // List items
      if (line.startsWith('- ')) {
        return (
          <li key={i} className="text-surface-300 ml-4 my-1 flex items-start gap-2">
            <span className="text-brand-400 mt-1.5">•</span>
            <span dangerouslySetInnerHTML={{ __html: processed.replace('- ', '') }} />
          </li>
        );
      }
      
      // Empty lines
      if (line.trim() === '') {
        return <div key={i} className="h-2" />;
      }
      
      // Regular paragraphs
      return (
        <p key={i} className="text-surface-300 my-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: processed }} />
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Chapter Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl"
              style={{ backgroundColor: chapter.color }}
            >
              {chapter.id}
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-surface-50">{chapter.title}</h1>
              <p className="text-surface-400 text-sm mt-1">{chapter.subtitle}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="badge badge-gold">{chapter.examPercentage}% of Exam</div>
          </div>
        </div>

        {/* Progress and Timer */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-surface-800/50 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-surface-400 text-sm mb-1">
              <Target className="w-4 h-4" />
              Progress
            </div>
            <div className="text-2xl font-bold text-brand-400">{progressPercentage}%</div>
            <div className="text-xs text-surface-500">{completedSections.size}/{chapter.sections.length} sections</div>
          </div>

          <div className="bg-surface-800/50 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-surface-400 text-sm mb-1">
              <Clock className="w-4 h-4" />
              Time Spent
            </div>
            <div className="text-2xl font-bold text-blue-400">{formatTime(timeSpent)}</div>
            <div className="text-xs text-surface-500">Min: {formatTime(chapter.requiredTimeMinutes)}</div>
          </div>

          <div className="bg-surface-800/50 rounded-xl p-4 text-center">
            <button 
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="w-full h-full flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center gap-2 text-surface-400 text-sm mb-1">
                {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                Timer
              </div>
              <div className={`text-2xl font-bold ${isTimerRunning ? 'text-emerald-400' : 'text-amber-400'}`}>
                {isTimerRunning ? 'Running' : 'Paused'}
              </div>
              <div className="text-xs text-surface-500">Click to {isTimerRunning ? 'pause' : 'resume'}</div>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="progress-track h-3">
            <motion.div 
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Learning Objectives */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6"
      >
        <h2 className="font-display font-bold text-surface-100 mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-brand-400" />
          Learning Objectives
        </h2>
        <div className="space-y-2">
          {chapter.objectives.map((obj, i) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-surface-300">{obj}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Sections */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-3"
      >
        <h2 className="font-display font-bold text-surface-100 flex items-center gap-2 px-1">
          <BookOpen className="w-5 h-5 text-blue-400" />
          Chapter Content
        </h2>

        {chapter.sections.map((section, index) => {
          const isExpanded = expandedSections.has(section.id);
          const isCompleted = completedSections.has(section.id);
          const isBookmarked = bookmarks.has(section.id);

          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`glass-card overflow-hidden ${isExpanded ? 'ring-1 ring-brand-500/30' : ''}`}
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-surface-700/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isCompleted 
                      ? 'bg-emerald-500/20 text-emerald-400' 
                      : 'bg-surface-700 text-surface-400'
                  }`}>
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                  </div>
                  <div className="text-left">
                    <span className="text-xs text-surface-500 block">Section {section.id}</span>
                    <span className="font-display font-semibold text-surface-100">{section.title}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleBookmark(section.id); }}
                    className={`p-2 rounded-lg transition-colors ${
                      isBookmarked 
                        ? 'bg-amber-500/20 text-amber-400' 
                        : 'hover:bg-surface-700 text-surface-500'
                    }`}
                  >
                    {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                  </button>
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5 text-surface-500" />
                  </motion.div>
                </div>
              </button>

              {/* Section Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-surface-700/50">
                      {/* Main Content */}
                      <div ref={contentRef} className="prose prose-invert max-w-none mt-4">
                        {renderContent(section.content)}
                      </div>

                      {/* Key Points */}
                      {section.keyPoints && section.keyPoints.length > 0 && (
                        <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                          <h4 className="font-display font-bold text-emerald-400 mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            Key Points to Remember
                          </h4>
                          <ul className="space-y-2">
                            {section.keyPoints.map((point, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-surface-300">
                                <span className="text-emerald-400 mt-1">•</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Exam Tips */}
                      {section.examTips && section.examTips.length > 0 && (
                        <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                          <h4 className="font-display font-bold text-amber-400 mb-3 flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Exam Tips
                          </h4>
                          <ul className="space-y-2">
                            {section.examTips.map((tip, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-surface-300">
                                <span className="text-amber-400 mt-1">★</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Section Actions */}
                      <div className="mt-6 flex items-center justify-between pt-4 border-t border-surface-700/50">
                        <button
                          onClick={() => onOpenTutor?.(section.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 rounded-xl transition-colors"
                        >
                          <Brain className="w-4 h-4" />
                          Ask AI Tutor
                        </button>

                        {!isCompleted ? (
                          <button
                            onClick={() => markSectionComplete(section.id)}
                            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            Mark as Complete
                          </button>
                        ) : (
                          <span className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-xl">
                            <CheckCircle2 className="w-4 h-4" />
                            Completed
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Statutes Reference */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-6"
      >
        <h2 className="font-display font-bold text-surface-100 mb-4 flex items-center gap-2">
          <Scale className="w-5 h-5 text-blue-400" />
          Florida Statutes Covered
        </h2>
        <div className="grid gap-3">
          {chapter.statutes.map((statute, i) => (
            <div key={i} className="p-3 bg-surface-800/50 rounded-xl">
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-mono font-bold">
                  F.S. {statute.code}
                </span>
                <div>
                  <span className="font-semibold text-surface-200 text-sm">{statute.title}</span>
                  <p className="text-surface-400 text-xs mt-1">{statute.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Chapter Exam CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={`glass-card p-6 ${isReadyForExam ? 'ring-2 ring-brand-500/50' : ''}`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display font-bold text-surface-100 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-400" />
              Chapter {chapter.id} Exam
            </h2>
            <p className="text-surface-400 text-sm mt-1">
              {isReadyForExam 
                ? "You're ready! Take the AI-generated exam based on your learning."
                : `Complete all sections and study for at least ${formatTime(chapter.requiredTimeMinutes * 0.5)} to unlock.`
              }
            </p>
          </div>
          <button
            onClick={onStartExam}
            disabled={!isReadyForExam}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              isReadyForExam
                ? 'bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-surface-900 shadow-lg shadow-brand-500/30'
                : 'bg-surface-700 text-surface-500 cursor-not-allowed'
            }`}
          >
            {isReadyForExam ? 'Start Exam' : 'Locked'}
          </button>
        </div>

        {!isReadyForExam && (
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className={`p-3 rounded-lg ${completedSections.size === chapter.sections.length ? 'bg-emerald-500/20' : 'bg-surface-800/50'}`}>
              <div className="text-xs text-surface-500">Sections</div>
              <div className={`font-bold ${completedSections.size === chapter.sections.length ? 'text-emerald-400' : 'text-surface-300'}`}>
                {completedSections.size}/{chapter.sections.length} complete
              </div>
            </div>
            <div className={`p-3 rounded-lg ${timeSpent >= chapter.requiredTimeMinutes * 0.5 ? 'bg-emerald-500/20' : 'bg-surface-800/50'}`}>
              <div className="text-xs text-surface-500">Study Time</div>
              <div className={`font-bold ${timeSpent >= chapter.requiredTimeMinutes * 0.5 ? 'text-emerald-400' : 'text-surface-300'}`}>
                {formatTime(timeSpent)} / {formatTime(chapter.requiredTimeMinutes * 0.5)}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ChapterContent;
