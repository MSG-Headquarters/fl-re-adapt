// ============================================================
// LICENSING PATH — ties the pre-license and post-license tracks together.
// Shared across tracks (one profile per browser + synced in progress).
// ============================================================

const PROFILE_KEY = 'fl-re-profile';

export const readProfile = () => {
  try { return JSON.parse(localStorage.getItem(PROFILE_KEY)) || {}; } catch { return {}; }
};
export const writeProfile = (patch) => {
  const next = { ...readProfile(), ...patch };
  try { localStorage.setItem(PROFILE_KEY, JSON.stringify(next)); } catch {}
  return next;
};

// Florida licenses expire March 31 or September 30. The first license period
// runs 18–24 months, so the first renewal is the first Mar 31 / Sep 30 that is
// at least 18 months after the license was issued. Post-licensing (45 hrs for
// sales associates) must be finished before that date or the license is void.
export const firstRenewalDate = (issued) => {
  const d = new Date(issued + 'T12:00:00');
  if (isNaN(d)) return null;
  const min = new Date(d); min.setMonth(min.getMonth() + 18);
  for (let y = min.getFullYear(); y <= min.getFullYear() + 1; y++) {
    for (const [m, day] of [[2, 31], [8, 30]]) {
      const c = new Date(y, m, day, 12);
      if (c >= min) return c;
    }
  }
  return null;
};

export const daysUntil = (date) => Math.ceil((date - new Date()) / 86400000);

export const fmtDate = (date) => date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

// The four stages of a Florida sales associate's education path.
export const LICENSE_PATH = [
  { key: 'pre', title: 'Pre-license course', detail: '63 hours · course exam 70%', track: 'pre' },
  { key: 'state', title: 'State exam', detail: '100 questions · 75% to pass', track: 'pre' },
  { key: 'post', title: 'Post-licensing 45', detail: 'Before your first renewal · 75% end-of-course exam', track: 'post' },
  { key: 'ce', title: 'Continuing education', detail: '14 hours every 2 years after that', track: null },
];
