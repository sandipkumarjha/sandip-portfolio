# Sandip Kumar Jha — Portfolio

Personal site for Sandip Kumar Jha, a Java backend and full-stack developer.

Live: https://sandip-portfolio-jxmd.vercel.app

## Stack

React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion.

## Running locally

```bash
npm install
npm run dev
```

`npm run build` produces a static bundle in `dist/`.

## Editing content

Everything shown on the page comes from `src/data/`:

- `profile.ts` — name, headline, intro, links, resume path
- `projects.ts` — featured projects, images live in `src/assets/images/`
- `technologies.ts` — stack grouped by category
- `education.ts` and `learning.ts` — timeline and current focus

The GitHub contribution graph is fetched at runtime for the username set in `profile.ts`.
