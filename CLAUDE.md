# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Git workflow

- **Always work directly on the `main` branch and push to `main`.**
- Do not create feature branches — this is a small marketing site with a
  single maintainer; all changes go straight to `main`.

## Project overview

Marketing site for **pargihaldur** (caravan park operations software),
served at pargihaldur.ee. Vite + React + TypeScript single-page site with
a second unlisted entry at `/materials` (marketing materials for park
operators and partners — kept out of search engines via `noindex`).

## Commands

- `npm run dev` — dev server on port 3001
- `npm run build` — TypeScript check + production build to `dist/`

## Structure

- `src/App.tsx` — main landing page
- `src/components/MaterialsPage.tsx` — `/materials` subpage (own Vite entry: `materials/index.html`)
- `src/i18n/` — ET/EN translations; every user-visible string goes through
  `useT()` and must be added to `types.ts`, `et.ts` and `en.ts`
- `public/screenshots/` — product screenshots used on both pages
- `nginx.conf`, `Dockerfile`, `Caddyfile.marketing` — deployment (Docker image
  rebuild required for changes to go live)
