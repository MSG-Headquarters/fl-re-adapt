import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, Lock, CheckCircle2, Clock, 
  GraduationCap, BookOpen 
} from 'lucide-react';

const ChapterList = ({ chapters, progress, onSelectChapter }) => {
  // Calculate total course progress
  const completedChapters = chapters.filter(ch => 
    progress[ch.id]?.passed
  ).length;
  
  const totalTimeSpent = chapters.reduce((sum, ch) => 
    sum + (progress[ch.id]?.timeSpentMinutes || 0), 0
  );

  const formatTime = (minutes) => {
    const hrs = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);
    return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className="space-y-6">
      {/* Course Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-amber-600 flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-surface-900" />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold text-surface-50">
              FL Real Estate Course
            </h1>
            <p className="text-surface-400 text-sm">
              63-Hour Pre-License Program
            </p>
          </div>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-surface-800/50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-brand-400">
              {completedChapters}/{chapters.length}
            </div>
            <div className="text-xs text-surface-500">Chapters</div>
          </div>
          <div className="bg-surface-800/50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-blue-400">
              {formatTime(totalTimeSpent)}
            </div>
            <div className="text-xs text-surface-500">Study Time</div>
          </div>
          <div className="bg-surface-800/50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-emerald-400">
              {Math.round((completedChapters / chapters.length) * 100)}%
            </div>
            <div className="text-xs text-surface-500">Complete</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="progress-track h-3">
            <motion.div 
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${(completedChapters / chapters.length) * 100}%` }}
            />
          </div>
        </div>
      </motion.div>

      {/* Chapter List */}
      <div className="space-y-3">
        {chapters.map((chapter, index) => {
          const chapterProgress = progress[chapter.id] || {};
          const isCompleted = chapterProgress.passed;
          const isStarted = chapterProgress.timeSpentMinutes > 0;
          const isLocked = index > 0 && !progress[chapters[index - 1].id]?.passed;

          return (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => !isLocked && onSelectChapter(chapter.id)}
              className={`glass-card p-4 cursor-pointer transition-all ${
                isLocked 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:ring-1 hover:ring-brand-500/30'
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Chapter Number */}
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-lg ${
                    isCompleted 
                      ? 'bg-emerald-500 text-white'
                      : isLocked
                      ? 'bg-surface-700 text-surface-500'
                      : 'text-white'
                  }`}
                  style={!isCompleted && !isLocked ? { backgroundColor: chapter.color } : {}}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : isLocked ? (
                    <Lock className="w-5 h-5" />
                  ) : (
                    chapter.id
                  )}
                </div>

                {/* Chapter Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className={`font-display font-semibold truncate ${
                      isLocked ? 'text-surface-500' : 'text-surface-100'
                    }`}>
                      {chapter.title}
                    </h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      chapter.examPercentage >= 8 
                        ? 'bg-red-500/20 text-red-400'
                        : chapter.examPercentage >= 5
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'bg-surface-700 text-surface-400'
                    }`}>
                      {chapter.examPercentage}%
                    </span>
                  </div>
                  
                  {/* Progress info */}
                  {isStarted && !isLocked && (
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1 text-xs text-surface-500">
                        <Clock className="w-3 h-3" />
                        {formatTime(chapterProgress.timeSpentMinutes || 0)}
                      </div>
                      {chapterProgress.sectionsCompleted && (
                        <div className="flex items-center gap-1 text-xs text-surface-500">
                          <BookOpen className="w-3 h-3" />
                          {chapterProgress.sectionsCompleted}/{chapter.sections?.length || 0}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Arrow */}
                {!isLocked && (
                  <ChevronRight className="w-5 h-5 text-surface-500" />
                )}
              </div>

              {/* Progress bar for started chapters */}
              {isStarted && !isCompleted && !isLocked && (
                <div className="mt-3 progress-track h-1.5">
                  <div 
                    className="h-full rounded-full"
                    style={{ 
                      width: `${chapterProgress.progress || 0}%`,
                      backgroundColor: chapter.color 
                    }}
                  />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterList;