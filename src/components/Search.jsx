import React, { useMemo, useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { highlight, renderRich } from '../richText.jsx';

// ============================================================
// SEARCH — instant keyword search across every lesson in the active track
// (post: units → lessons, key terms, summaries; pre: chapters → sections)
// ============================================================

const SYNONYMS = {
  dnc: ['do-not-call', 'do not call'], 'do-not-call': ['dnc'], tcpa: ['telephone consumer protection'],
  pmi: ['mortgage insurance'], mip: ['mortgage insurance'], ltv: ['loan-to-value'], arm: ['adjustable'],
  cma: ['comparative market analysis'], bpo: ['broker price opinion'], noi: ['net operating income'],
  egi: ['effective gross income'], grm: ['gross rent multiplier'], cap: ['capitalization'],
  ada: ['disabilities'], fha: ['fair housing', 'federal housing'], ecoa: ['equal credit'], tila: ['truth in lending'],
  respa: ['settlement procedures'], trid: ['loan estimate', 'closing disclosure'], cd: ['closing disclosure'],
  le: ['loan estimate'], frec: ['commission'], ce: ['continuing education'], hoa: ['homeowners'],
  'doc stamps': ['documentary stamp'], stamps: ['documentary'], proration: ['prorate', 'prorated'],
  escrow: ['deposit'], mls: ['multiple listing'], fsbo: ['for sale by owner'], ers: ['exclusive right'],
};

const strip = (s) => String(s || '').replace(/\*\*/g, '').replace(/[#>|`_]/g, ' ').replace(/\s+/g, ' ').trim();

export const buildIndex = ({ isPost, sections, chapters }) => {
  const docs = [];
  if (isPost) {
    sections.forEach(u => {
      u.sections.forEach(l => docs.push({
        id: `${u.id}:${l.id}`, where: `Unit ${u.num} · Lesson ${l.id.replace(/^l/, '')}`, title: l.title,
        text: strip([...(l.body || []), ...(l.keyPoints || []), ...(l.examTips || []).map(t => 'Exam trap: ' + t)].join(' ')),
        paras: [...(l.body || []), ...(l.examTips || []).map(t => '**Exam trap:** ' + t)],
        target: { kind: 'lesson', uid: u.id, lid: l.id },
      }));
      if (u.keyTerms?.length) docs.push({ id: `${u.id}:terms`, where: `Unit ${u.num}`, title: 'Key terms', text: strip(u.keyTerms.map(t => `${t.term}: ${t.def}`).join(' · ')), paras: u.keyTerms.map(t => `**${t.term}** — ${t.def}`), target: { kind: 'unit', uid: u.id } });
      if (u.summary?.length) docs.push({ id: `${u.id}:summary`, where: `Unit ${u.num}`, title: 'Unit summary', text: strip(u.summary.join(' ')), paras: u.summary, target: { kind: 'summary', uid: u.id } });
    });
  } else {
    (chapters || []).forEach(c => (c.sections || []).forEach(s => {
      const raw = String(s.content || '');
      docs.push({
        id: `ch${c.id}:${s.id}`, where: `Chapter ${c.id} · ${c.title}`, title: s.title, text: strip(raw),
        paras: raw.split(/\n{2,}/).map(p => p.replace(/^#+\s*/gm, '').replace(/^\s*[-*]\s+/gm, '• ').replace(/\|/g, ' ').trim()).filter(Boolean),
        target: { kind: 'section', sid: c.id },
      });
    }));
  }
  return docs.map(d => ({ ...d, lc: (d.title + ' ' + d.text).toLowerCase(), tl: d.title.toLowerCase() }));
};

const expand = (q) => {
  const base = q.toLowerCase().split(/[^a-z0-9$%.-]+/).filter(t => t.length > 1);
  const out = new Set(base);
  const whole = q.toLowerCase().trim();
  [whole, ...base].forEach(t => (SYNONYMS[t] || []).forEach(s => out.add(s)));
  return [...out];
};

export default function Search({ open, onClose, index, onOpen }) {
  const [q, setQ] = useState('');
  const [openId, setOpenId] = useState(null);
  const inputRef = useRef(null);
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 50); }, [open]);
  useEffect(() => { const k = (e) => { if (e.key === 'Escape') onClose(); }; window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k); }, [onClose]);

  const terms = useMemo(() => expand(q), [q]);
  const results = useMemo(() => {
    if (q.trim().length < 2) return [];
    return index.map(d => {
      let score = 0, hits = 0;
      terms.forEach(t => {
        const n = d.lc.split(t).length - 1;
        if (n) { hits++; score += n + (d.tl.includes(t) ? 8 : 0); }
      });
      if (d.lc.includes(q.toLowerCase().trim())) score += 10;
      return { d, score, hits };
    }).filter(r => r.hits > 0).sort((a, b) => b.hits - a.hits || b.score - a.score).slice(0, 25);
  }, [q, terms, index]);

  const snippet = (d) => {
    const t = terms.find(x => d.text.toLowerCase().includes(x));
    if (!t) return d.text.slice(0, 160) + '…';
    const at = d.text.toLowerCase().indexOf(t);
    const s = Math.max(0, at - 70);
    return (s > 0 ? '…' : '') + d.text.slice(s, at + t.length + 110) + '…';
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-surface-950/80 backdrop-blur-sm flex justify-center p-4" onClick={onClose}>
      <div className="w-full max-w-2xl mt-10 flex flex-col max-h-[85vh]" onClick={e => e.stopPropagation()}>
        <div className="glass-card p-3 flex items-center gap-2">
          <SearchIcon className="w-5 h-5 text-surface-400" />
          <input ref={inputRef} value={q} onChange={e => { setQ(e.target.value); setOpenId(null); }} placeholder="Search every lesson — e.g. doc stamps, PMI, escrow dispute" className="flex-1 bg-transparent text-surface-100 placeholder-surface-500 focus:outline-none text-sm" />
          <button onClick={onClose} className="text-surface-500 hover:text-surface-200"><X className="w-5 h-5" /></button>
        </div>
        <div className="mt-3 overflow-y-auto space-y-2 pb-6">
          {q.trim().length >= 2 && results.length === 0 && <div className="glass-card p-4 text-sm text-surface-400">No matches. Try a different word, or ask the Tutor.</div>}
          {results.map(({ d }) => {
            const isOpen = openId === d.id;
            return (
              <div key={d.id} className="glass-card p-4">
                <button onClick={() => setOpenId(isOpen ? null : d.id)} className="w-full text-left">
                  <div className="flex items-center justify-between gap-2">
                    <div><div className="text-xs text-brand-400">{d.where}</div><div className="text-surface-100 font-medium text-sm">{highlight(d.title, terms)}</div></div>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-surface-500" /> : <ChevronDown className="w-4 h-4 text-surface-500" />}
                  </div>
                  {!isOpen && <p className="text-surface-400 text-xs mt-1 leading-relaxed">{highlight(snippet(d), terms)}</p>}
                </button>
                {isOpen && (
                  <div className="mt-3 space-y-2">
                    {d.paras.slice(0, 14).map((p, i) => <p key={i} className="text-surface-300 text-sm leading-relaxed whitespace-pre-line">{renderRich(p)}</p>)}
                    {d.target && <button onClick={() => { onOpen(d.target); onClose(); }} className="btn-secondary text-xs flex items-center gap-1 mt-2">Open in {d.target.kind === 'section' ? 'Study' : 'the course'} <ArrowRight className="w-3 h-3" /></button>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
