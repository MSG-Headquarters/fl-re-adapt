import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import Anthropic from '@anthropic-ai/sdk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

app.use(cors());
app.use(express.json());

// Serve static files from dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// AI endpoint — study tutor for both tracks
const TRACK_PROMPTS = {
  pre: `You are an expert Florida Real Estate exam tutor helping a student prepare for the Florida Real Estate Sales Associate license exam.
Your knowledge includes Chapter 475 F.S., FREC rules (61J2 F.A.C.), fair housing law (including Jones v. Mayer), all 19 exam topics, the history behind the laws, and common exam traps.`,
  post: `You are an expert tutor for the Florida Real Estate Sales Associate 45-hour POST-LICENSING course and its end-of-course exam (75% to pass).
The student is a practicing Florida sales associate in Southwest Florida. Topics: Florida core law for practicing associates (post-license deadline, brokerage relationships under 475.278, escrow timelines, advertising and team rules, discipline, Recovery Fund), business planning and conversion math, ethics and the REALTOR Code of Ethics, fair housing and fair lending (FHA, Florida Fair Housing Act, ADA, ECOA, assistance animals), prospecting law (TCPA, National and Florida do-not-call, Florida Telephone Solicitation Act, CAN-SPAM), pricing and listing (CMA adjustments, BPOs, 475.25(1)(r) listing requirements, Florida seller disclosures), investment analysis and taxes (NOI, cap rate, GRM, cash-on-cash, depreciation, 1031, Section 121, homestead and Save Our Homes), contract to closing (TRID, RESPA, Reg Z trigger terms, Florida doc stamps and intangible tax, prorations with the buyer owning the day of closing), and property management under Chapter 83.`,
};

app.post('/api/ai', async (req, res) => {
  try {
    const { query, messages, context } = req.body || {};
    const track = context?.track === 'post' ? 'post' : 'pre';
    const weak = (context?.weakAreas || []).map(w => w.title).join(', ') || 'None identified yet';

    const systemPrompt = `${TRACK_PROMPTS[track]}

The student's current progress:
- Overall Mastery: ${context?.overallMastery || 0}%
- Weak Areas: ${weak}

Guidelines:
- Be accurate first. Cite the statute, rule, or federal law when it helps. If something is uncertain or recently changed, say so and suggest verifying with the course material.
- Explain WHY a rule exists, not just WHAT it is, and point out the exam trap.
- When asked to quiz, ask ONE multiple-choice question at a time (A–D), wait for the answer, then explain.
- For math (closing costs, prorations, NOI/cap rate, commissions), show the steps.
- Keep answers short and scannable. Use **bold** for key terms and numbers.`;

    const convo = Array.isArray(messages) && messages.length
      ? messages
          .filter(m => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
          .slice(-12)
          .map(m => ({ role: m.role, content: m.content.slice(0, 4000) }))
      : [{ role: 'user', content: String(query || '').slice(0, 4000) }];
    while (convo.length && convo[0].role !== 'user') convo.shift();
    if (!convo.length) return res.status(400).json({ success: false, response: 'Ask a question to get started.' });

    const message = await anthropic.messages.create({
      model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: systemPrompt,
      messages: convo,
    });

    res.json({
      response: message.content.map(b => b.text || '').join(''),
      success: true
    });
  } catch (error) {
    console.error('AI Error:', error);
    res.status(500).json({
      error: 'AI service temporarily unavailable',
      response: 'I apologize, but I am temporarily unavailable. Please try again in a moment.',
      success: false
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// SPA fallback - serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 FL RE Study Platform running on port ${PORT}`);
  console.log(`📚 Ready to help students pass the Florida Real Estate Exam!`);
});
