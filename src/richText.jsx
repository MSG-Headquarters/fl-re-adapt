import React from 'react';

// Minimal inline renderer for **bold** in authored content
export const renderRich = (text) => String(text ?? '').split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
  part.startsWith('**') && part.endsWith('**')
    ? <strong key={i} className="text-surface-100 font-semibold">{part.slice(2, -2)}</strong>
    : <React.Fragment key={i}>{part}</React.Fragment>);

// Highlight query terms inside plain text (used by search results)
export const highlight = (text, terms) => {
  if (!terms.length) return text;
  const re = new RegExp('(' + terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'ig');
  return String(text).split(re).map((p, i) => i % 2 === 1
    ? <mark key={i} className="bg-brand-500/30 text-surface-50 rounded px-0.5">{p}</mark>
    : <React.Fragment key={i}>{p}</React.Fragment>);
};
