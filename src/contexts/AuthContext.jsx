import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    // Check if Supabase is configured
    const configured = isSupabaseConfigured();
    setIsConfigured(configured);

    if (!configured) {
      console.log('Supabase not configured - running in local mode');
      setLoading(false);
      return;
    }

    // Get initial session
    const getSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
      } catch (error) {
        console.error('Error getting session:', error);
      } finally {
        setLoading(false);
      }
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        
        // On sign in, migrate localStorage data to Supabase
        if (event === 'SIGNED_IN' && session?.user) {
          await migrateLocalStorageToSupabase(session.user.id);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  // Migrate localStorage data to Supabase on first login
  const migrateLocalStorageToSupabase = async (userId) => {
    try {
      const localData = localStorage.getItem('fl-re-v2');
      if (!localData) return;

      const progress = JSON.parse(localData);
      
      // Check if user already has data in Supabase
      const { data: existingData } = await supabase
        .from('user_progress')
        .select('id')
        .eq('user_id', userId)
        .single();

      if (!existingData) {
        // No existing data, migrate localStorage
        await supabase.from('user_progress').insert({
          user_id: userId,
          progress_data: progress,
          updated_at: new Date().toISOString()
        });
        console.log('Migrated localStorage data to Supabase');
      }
    } catch (error) {
      console.error('Error migrating data:', error);
    }
  };

  // Sign up with email
  const signUp = async (email, password, fullName) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName }
      }
    });
    return { data, error };
  };

  // Sign in with email
  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return { data, error };
  };

  // Sign out
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  // Reset password
  const resetPassword = async (email) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    });
    return { data, error };
  };

  // Save progress to Supabase
  const saveProgress = async (progressData) => {
    if (!user || !isConfigured) {
      // Save to localStorage if not logged in or Supabase not configured
      localStorage.setItem('fl-re-v2', JSON.stringify(progressData));
      return { error: null };
    }

    try {
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          progress_data: progressData,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'user_id'
        });

      // Also save to localStorage as backup
      localStorage.setItem('fl-re-v2', JSON.stringify(progressData));
      
      return { error };
    } catch (error) {
      console.error('Error saving progress:', error);
      return { error };
    }
  };

  // Load progress from Supabase
  const loadProgress = async () => {
    if (!user || !isConfigured) {
      // Load from localStorage if not logged in
      const localData = localStorage.getItem('fl-re-v2');
      return localData ? JSON.parse(localData) : null;
    }

    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('progress_data')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error loading progress:', error);
      }

      return data?.progress_data ?? null;
    } catch (error) {
      console.error('Error loading progress:', error);
      return null;
    }
  };

  const value = {
    user,
    loading,
    isConfigured,
    signUp,
    signIn,
    signOut,
    resetPassword,
    saveProgress,
    loadProgress
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
