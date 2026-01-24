# 🏠 Florida Real Estate Exam - Adaptive Study Platform

An AI-powered study platform for the Florida Real Estate License Exam with adaptive learning, progress tracking, and historical context.

## Features

- 📊 **Adaptive Learning** - Questions adapt to your weak areas
- 💾 **Progress Persistence** - Your progress saves automatically
- 📜 **Historical Context** - Learn WHY laws exist, not just what they are
- ⚖️ **Case Studies** - Real-world scenarios with hidden answers
- ✨ **AI Tutor** - Powered by Claude for personalized help
- 📱 **PWA Support** - Install on your phone for offline study

## Topics Covered

All 19 Florida exam sections including:
- License Law (Chapter 475)
- Brokerage Relationships
- Fair Housing (with Jones v. Mayer context)
- Contracts & Disclosures
- Mortgages & Financing
- Appraisal
- And more...

## Deployment

### Railway (Recommended)

1. Push to GitHub
2. Connect repo to Railway
3. Add environment variable: `ANTHROPIC_API_KEY`
4. Deploy!

### Environment Variables

```
ANTHROPIC_API_KEY=your-api-key-here
PORT=3000 (optional, Railway sets automatically)
```

## Local Development

```bash
npm install
npm run dev
```

## Tech Stack

- React 18 + Vite
- TailwindCSS
- Express.js backend
- Claude AI (Anthropic)
- localStorage for progress

## Exam Info

- 100 questions
- 3.5 hours
- 75% to pass (75/100)

---

Built with ❤️ for Florida real estate students
