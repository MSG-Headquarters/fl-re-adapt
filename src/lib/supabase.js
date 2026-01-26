import { createClient } from '@supabase/supabase-js';

// Supabase configuration
// Using environment variables with fallback to hardcoded values for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vysrlxrqhbrqogefjawf.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5c3JseHJxaGJycW9nZWZqYXdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3NjA3MzUsImV4cCI6MjA4MzMzNjczNX0.k5bOl_t8UTtsW_02GKRHfkrl7q01UQoNHqIZjPC6Xb4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return supabaseUrl && supabaseAnonKey && supabaseUrl !== 'YOUR_SUPABASE_URL';
};
