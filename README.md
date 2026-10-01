# 🏠 Florida Real Estate Exam - Adaptive Study Platform

An AI-powered study platform for the Florida Real Estate License Exam with adaptive learning, progress tracking, and historical context.

## Features

- 📊 **Adaptive Learning** - Questions adapt to your weak areas
- 💾 **Progress Persistence** - Your progress saves automatically
- 📜 **Historical Context** - Learn WHY laws exist, not just what they are
- ⚖️ **Case Studies** - Real-world scenarios with hidden answers
- ✨ **AI Tutor** - Powered by Claude for personalized help
- 📱 **PWA Support** - Install on your phone for offline study

## Two tracks, one platform

| Track | URL | What it is |
|---|---|---|
| Pre-license | `/?track=pre` | 19 sections for the Florida sales associate state exam |
| Post-Licensing 45 | `/?track=post` | Guided 14-unit course for the 45-hour post-licensing end-of-course exam |

Switch from the header. One account syncs both (post-licensing progress lives under `__post45` in the same Supabase row). The **licensing path** card links them: enter a license issue date once and both tracks show the real post-licensing deadline (the first Mar 31 / Sep 30 at least 18 months after licensure).

### Post-Licensing 45 course
- **Orientation → Units 1–14 → Practice exam → Final mock → Certificate**, with locks that open in order.
- Each unit: objectives + key terms → lessons, each ending in a 2–3 question lesson check → summary → unit quiz (aim for 70%).
- Practice exam: 100 questions weighted by unit, 3 hours, back/flag allowed. Final mock: same length, **no going back**, 75% to pass, missed-question review.
- Content lives in `src/data/postlicense/units/u01.js … u14.js` (53 lessons, 402 questions, 203 flashcards), written in original wording from Florida law. `?unlock=1` opens every step for review.
- The certificate is a study record. Florida post-licensing credit requires a FREC-permitted school and an approved course.

### Search and tutor
- Magnifier in the header: instant search across every lesson (pre: chapter sections), with synonyms (DNC, PMI, CMA…), highlighted snippets and "open in course".
- Tutor accepts typed questions and screenshots (paste, drop or attach), shows math step by step, and returns **Covered in** links to the lessons that teach the topic.

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
