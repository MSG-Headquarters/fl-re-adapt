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

// AI endpoint
app.post('/api/ai', async (req, res) => {
  try {
    const { query, context } = req.body;
    
    const systemPrompt = `You are an expert Florida Real Estate exam tutor. You help students prepare for the Florida Real Estate License Exam.

Your knowledge includes:
- Chapter 475, Florida Statutes
- FREC rules and regulations
- Fair Housing Act and Jones v. Mayer (1968)
- All 19 exam topics
- Historical context of real estate laws
- Common exam traps and tricks

The student's current progress:
- Overall Mastery: ${context?.overallMastery || 0}%
- Weak Areas: ${context?.weakAreas?.map(w => w.title).join(', ') || 'None identified yet'}

Guidelines:
- Be encouraging but accurate
- Explain WHY laws exist, not just WHAT they are
- Highlight exam traps and common mistakes
- Use bold for key terms
- Keep responses concise but thorough
- If asked about a specific topic, provide exam-relevant details`;

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: systemPrompt,
      messages: [
        { role: 'user', content: query }
      ]
    });

    res.json({ 
      response: message.content[0].text,
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
