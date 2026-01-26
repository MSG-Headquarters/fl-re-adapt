import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, LogOut, Settings, ChevronDown, Cloud, CloudOff } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function UserMenu({ onOpenAuth }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { user, signOut, isConfigured } = useAuth();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  // Get user display name or email
  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';
  const initials = displayName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  if (!user) {
    // Not logged in - show sign in button
    return (
      <button
        onClick={onOpenAuth}
        className="flex items-center gap-2 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg transition-colors"
      >
        <User className="w-4 h-4" />
        <span className="hidden sm:inline">Sign In</span>
      </button>
    );
  }

  // Logged in - show user menu
  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-surface-700 hover:bg-surface-600 rounded-lg transition-colors"
      >
        {/* Avatar */}
        <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
          {initials}
        </div>
        
        {/* Name & Sync Status */}
        <div className="hidden sm:flex flex-col items-start">
          <span className="text-sm font-medium text-white">{displayName}</span>
          <span className="text-xs text-surface-400 flex items-center gap-1">
            {isConfigured ? (
              <>
                <Cloud className="w-3 h-3 text-green-400" />
                <span className="text-green-400">Synced</span>
              </>
            ) : (
              <>
                <CloudOff className="w-3 h-3 text-yellow-400" />
                <span className="text-yellow-400">Local</span>
              </>
            )}
          </span>
        </div>
        
        <ChevronDown className={`w-4 h-4 text-surface-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-56 bg-surface-800 border border-surface-700 rounded-xl shadow-xl overflow-hidden z-50"
          >
            {/* User Info */}
            <div className="px-4 py-3 border-b border-surface-700">
              <p className="text-sm font-medium text-white">{displayName}</p>
              <p className="text-xs text-surface-400 truncate">{user.email}</p>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              <button
                onClick={() => {
                  // TODO: Open settings
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-2 text-surface-300 hover:bg-surface-700 hover:text-white transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>

              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>

            {/* Sync Status Footer */}
            <div className="px-4 py-2 bg-surface-900/50 border-t border-surface-700">
              <div className="flex items-center gap-2 text-xs">
                {isConfigured ? (
                  <>
                    <Cloud className="w-3 h-3 text-green-400" />
                    <span className="text-green-400">Progress synced to cloud</span>
                  </>
                ) : (
                  <>
                    <CloudOff className="w-3 h-3 text-yellow-400" />
                    <span className="text-yellow-400">Local storage only</span>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
