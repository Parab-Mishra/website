# Parab Mishra \u2014 Portfolio

A production-ready personal portfolio built with the Next.js App Router. Design language: **Material 3 + Dark Engineering UI + AI-native + interactive data visualization** \u2014 an interactive backend/AI architecture graph as the hero, a single electric blue/violet accent, a near-black background with an animated technical grid, and Material-style elevated glass cards.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** (CSS-first theme, no `tailwind.config.js` needed)
- **shadcn/ui-style primitives** (Radix UI + `class-variance-authority`, hand-rolled in `src/components/ui`)
- **Motion** (`motion/react`, the framer-motion successor) for animation, with `MotionConfig reducedMotion="user"` wired globally
- **next-themes** for dark/light mode
- **lucide-react** for iconography (brand marks like LinkedIn/GitHub are custom inline SVGs \u2014 lucide dropped brand glyphs)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint     # eslint
```

## Editing content

All personal content \u2014 profile, experience, projects, skills, certifications, AI workflow steps and nav links \u2014 lives in one file:

```
src/data/portfolio.ts
```

Update that file and every section (hero, timeline, project cards, tech-stack explorer, terminal, contact) re-renders with the new data automatically. No component code needs to change for routine content updates.

To swap the r\u00e9sum\u00e9 download, replace `public/resume.pdf`.

## Project structure

```
src/
  app/                  routes, layout, metadata, sitemap/robots/manifest
  components/
    background/         animated grid + particle canvas backdrop
    hero/                interactive architecture graph (SVG)
    layout/              navbar, footer, section heading
    motion/              global MotionConfig provider
    sections/            hero, tech-stack, experience, projects, ai-workflow, terminal, contact
    theme/               dark/light theme provider + toggle
    ui/                  shadcn-style primitives (button, card, tabs, dialog, ...)
  data/portfolio.ts     single source of truth for all content
  hooks/                 use-reduced-motion, use-hydrated
  lib/utils.ts           `cn` class-merging helper
```

## Accessibility & motion

- Respects `prefers-reduced-motion` at two levels: a `useReducedMotion` hook (backed by `useSyncExternalStore`) disables the canvas particle field and terminal boot animation, and a global `MotionConfig reducedMotion="user"` disables/simplifies every `motion/react` animation.
- Skip-to-content link, visible focus rings (`focus-ring` utility), semantic landmarks, and `aria-label`s on interactive SVG nodes and icon-only buttons.
- Fully keyboard operable: architecture graph nodes, tabs, dialogs and the terminal are all reachable and usable via keyboard.

## SEO

Metadata, Open Graph/Twitter cards, `robots.ts`, `sitemap.ts` and `manifest.ts` are set up in `src/app`. Update `siteUrl` in `src/app/layout.tsx` (and the sitemap/robots files) once the site has a real domain.
