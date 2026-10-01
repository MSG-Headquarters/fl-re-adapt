import React, { useState } from 'react';
import { Check, CalendarClock, ArrowRight } from 'lucide-react';
import { LICENSE_PATH, readProfile, writeProfile, firstRenewalDate, daysUntil, fmtDate } from '../licensing.js';
import { switchTrack } from '../tracks.js';

// One licensing journey across both tracks:
// pre-license → state exam → post-licensing 45 → CE.
// Entering the license issue date turns "before your first renewal" into a real deadline.
export default function LicensePath({ current, compact = false, postDone = false }) {
  const [profile, setProfile] = useState(readProfile);
  const [editing, setEditing] = useState(false);
  const save = (patch) => setProfile(writeProfile(patch));

  const licensed = !!profile.licenseDate || current === 'post';
  const stageIdx = postDone ? 3 : licensed ? 2 : 0;
  const due = profile.licenseDate ? firstRenewalDate(profile.licenseDate) : null;
  const days = due ? daysUntil(due) : null;

  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display font-semibold text-surface-100">Your licensing path</h3>
        {current === 'pre' && licensed && (
          <button onClick={() => switchTrack('post')} className="text-xs text-brand-400 hover:text-brand-300 flex items-center gap-1">Go to post-licensing <ArrowRight className="w-3 h-3" /></button>
        )}
      </div>
      <ol className={compact ? 'grid grid-cols-4 gap-2' : 'space-y-2'}>
        {LICENSE_PATH.map((s, i) => {
          const done = i < stageIdx;
          const now = i === stageIdx;
          return (
            <li key={s.key} className={compact ? 'text-center' : 'flex items-center gap-3'}>
              <div className={(compact ? 'mx-auto ' : '') + 'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ' + (done ? 'bg-emerald-500/20 text-emerald-400' : now ? 'bg-brand-500 text-surface-950' : 'bg-surface-800 text-surface-500')}>
                {done ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <div className={compact ? 'mt-1' : ''}>
                <div className={'text-xs ' + (now ? 'text-surface-100 font-semibold' : 'text-surface-400')}>{s.title}</div>
                {!compact && <div className="text-xs text-surface-500">{s.detail}</div>}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-4 rounded-xl bg-surface-800/60 p-3 text-sm">
        {due && !editing ? (
          <div className="flex items-start gap-3">
            <CalendarClock className={'w-5 h-5 shrink-0 ' + (days < 120 ? 'text-red-400' : 'text-brand-400')} />
            <div className="flex-1">
              <div className="text-surface-100">Finish post-licensing before <strong>{fmtDate(due)}</strong></div>
              <div className="text-xs text-surface-400">{days > 0 ? `${days} days left` : 'Deadline passed'} · your first renewal. Miss it and the license is void — not just inactive.</div>
            </div>
            <button onClick={() => setEditing(true)} className="text-xs text-surface-500 hover:text-surface-300">Edit</button>
          </div>
        ) : (
          <form className="flex flex-wrap items-center gap-2" onSubmit={e => { e.preventDefault(); const v = e.currentTarget.elements.d.value; if (v) { save({ licenseDate: v }); setEditing(false); } }}>
            <label className="text-surface-300 text-xs flex-1 min-w-[10rem]">{current === 'pre' ? 'Already licensed? Enter your license issue date' : 'License issue date (from DBPR)'}</label>
            <input name="d" type="date" defaultValue={profile.licenseDate || ''} className="rounded-lg bg-surface-900 border border-surface-700 px-2 py-1 text-surface-100 text-xs" />
            <button className="btn-secondary text-xs px-3 py-1">Save</button>
          </form>
        )}
      </div>
    </div>
  );
}
