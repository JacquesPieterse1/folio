# Handoff: Developer Portfolio (Jacques Pieterse)

## Overview

A single-page developer portfolio for **Jacques Pieterse, Full-Stack Developer** based in Cape Town. Editorial / raw aesthetic — oversized type, dense grid layout, monospace meta everywhere, single blue accent color. Inspired by designer-portfolio editorial layouts but adapted with developer-coded motifs (`{ }` brace marks, code snippets, terminal demo, system diagrams).

The site is one long scroll: **Hero → About → Work (with stack marquee) → Focus → Live Code Demo → Contact**.

---

## About the Design Files

The files in this bundle are **design references created in HTML** — prototypes showing the intended look, layout, typography, color, and interaction behavior. They are **not production code to copy directly into Next.js**.

Your task is to **recreate these designs in a Next.js codebase** using the project's established patterns:

- React components (functional + hooks)
- Tailwind CSS or CSS Modules (whatever the existing project uses)
- Next.js App Router (`app/` directory) preferred for new projects
- TypeScript

Treat the HTML as a visual + behavioral spec. Open `portfolio.html` in a browser to interact with the live prototype as you implement.

---

## Fidelity

**High-fidelity (hifi).** Exact colors, type scale, spacing, and interaction timings are defined below. Match them pixel-perfectly. The HTML uses `clamp()` for fluid type — preserve that responsive behavior in the Next.js port.

---

## Tech Stack Recommendation (Next.js)

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS** for styling — easiest to map the tokens below to a `tailwind.config.ts`
- **Framer Motion** for the typing animation in the live code demo and reveal-on-scroll (or keep IntersectionObserver — also fine)
- **next/font** for self-hosting Geist + Geist Mono (Vercel ships Geist as a first-party font)
- **No CMS needed** — content is static; project data can live in a `lib/projects.ts` module

---

## Design Tokens

### Colors

```ts
// tailwind.config.ts → theme.extend.colors (light mode)
const light = {
  bg:    '#f6f5f1', // page background
  bg2:   '#ecebe6', // alt surface (project-info side, hero visual cells)
  fg:    '#0a0a0a', // primary text / dark surfaces
  fg2:   '#4a4a47', // secondary text
  fg3:   '#8a8a85', // tertiary text / placeholders
  line:  '#d8d6cf', // borders
  card:  '#ffffff', // card surfaces
  accent:'#5b8cff', // single blue accent — use sparingly
};

const dark = {
  bg:    '#0a0a0a',
  bg2:   '#131312',
  fg:    '#f6f5f1',
  fg2:   '#bdbcb6',
  fg3:   '#6e6e69',
  line:  '#242422',
  card:  '#131312',
  accent:'#5b8cff', // same accent both themes
};
```

Implement as CSS variables on `<html data-theme="light|dark">` and read them from Tailwind via `var(--bg)` etc. The HTML prototype does exactly this — see `portfolio.html` `:root` and `[data-theme="dark"]`.

### Typography

- **Display / UI:** `Geist`, weights 300–900 (use 500, 600, 700 most often)
- **Monospace:** `Geist Mono`, weights 400/500/600

Install via `next/font`:
```ts
import { Geist, Geist_Mono } from 'next/font/google';
export const geist = Geist({ subsets: ['latin'], variable: '--font-display' });
export const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' });
```

**Type scale (preserve `clamp()` calls):**
- Hero title: `clamp(64px, 13.4vw, 240px)` · weight 600 · letter-spacing `-0.04em` · line-height `0.88`
- Big section headers (WORK, SOCIAL): `clamp(80px, 18vw, 320px)` · weight 600 · letter-spacing `-0.05em` · line-height `0.82`
- About / Contact lead: `clamp(20px, 2.1vw, 32px)` · letter-spacing `-0.018em` · line-height `1.35` · `text-wrap: pretty`
- Project title: `clamp(28px, 2.6vw, 40px)` · weight 700 · uppercase · letter-spacing `-0.025em`
- Pillar headings: 17px · weight 700 · uppercase
- Pillar list / contact lead body: 14px display
- Monospace meta labels: 11px · letter-spacing `0.14em` · uppercase

### Spacing

- Page gutter: `clamp(16px, 2.4vw, 36px)` (used as outer padding on every section + gap between cards)
- Rail width (left vertical label column): `clamp(40px, 4.5vw, 72px)`
- Card border-radius: `4–6px`
- Borders: `1px solid var(--line)` everywhere

### Recurring Motifs

- The `{ }` brace mark (in accent blue) is the recurring logo — appears in nav, project tags, thumbs, big mark cell
- `[+]` prefix on small section labels (e.g. `[+] A BIT MORE ABOUT YOURS TRULY`)
- Bracketed indices `[00 -1]`, `[00 -3]` as rail bottom IDs
- Asterisk `*` between words on big titles (in accent blue)

---

## Screens / Sections

The whole portfolio is a single scroll. Each "section" below is a top-level component.

### 1. Nav (sticky / fixed top)

- Fixed top, full-width, `padding: 18px var(--gutter)`
- Two pill buttons, both with backdrop-blur, 1px border, monospace 12px uppercase
- Left: brand mark `JACQUES { } DEV` — braces in accent
- Right: two links `Work ↓` and `About →`, arrow translates on hover, hover fills with `--fg`/`--bg`

### 2. Hero

Container: 1px-bordered card with rounded corners (`section-inner.hero-inner`).

Two-column grid: rail (left) + stage (right).

**Rail (left):** Vertical text reading `[00] / Home` at top, `2026 ©` at bottom, both rotated 180° via `writing-mode: vertical-rl`.

**Stage (right):**
- **Marquee title** at top: a continuous left-scrolling row reading `JACQUES * PIETERSE { } FULL-STACK * DEVELOPER { }` (asterisks + braces in accent). The track is duplicated and translated `0 → -50%` over 22s for a seamless loop. Edges fade via `mask-image: linear-gradient(to right, transparent, #000 4%, #000 96%, transparent)`. Pause on hover.
- **Bottom row:** small mono intro paragraph (`HEY — YOU MADE IT...`) on the left, and a 6×4 cell grid visual on the right (variety of dark/light/accent cells with placeholder labels like `$ ./run --portfolio`, `// stack`, `TS · GO`, `02+ YEARS SHIPPING`, etc.). The grid is a layout demonstration — feel free to swap in real screenshots later.
- **Meta footer:** `FULL-STACK · WEB · MOBILE · PLATFORM` left, pulsing dot + `SCROLL TO EXPLORE` center, `[00 / 05]` right.

### 3. About

Container: 1px-bordered card.

Two-column grid: split rail + body.

**Rail (left, split into two cells with a horizontal border):**
- Top half: large `{ }` mark (accent color, 40px mono) centered
- Bottom half: vertical `About` label rotated, and `[00 -1]` at the bottom

**Body:**
- Small mono label at top: `[ + ] A bit more about yours truly` with bottom border
- Large display paragraph below: 22–32px, the bio text. Key phrases bolded; "4Sight Holdings" in accent blue.

### 4. Work

Container: 1px-bordered card (`work-inner`) with two stacked regions:

**Dark marquee strip (top):**
- Full-bleed black band inside the card (`background: var(--fg)`)
- Continuous left-scroll of tech labels: TypeScript, React, Next.js, Node, Go, PostgreSQL, React Native, Docker, AWS, Redis, GraphQL, Tailwind
- Alternating: white text, then 55%-opacity text, then accent-blue dot between
- Track duplicated for seamless loop, animation duration 38s

**Big header (below marquee):**
- `WORK WORK` in oversized type, second instance dimmed (`color: --fg3`)
- Right side: blue accent `*` star at 56–140px

Below the work-inner card, the **4 project cards** are siblings (each its own card, separated by the same gutter). Each project card is:

**Project card layout:** `grid-template-columns: 1fr 1.9fr; grid-template-rows: 1fr auto`

- **Info side (left, 1fr, light `bg2`):**
  - Pill tag at top-left: `{ } FLUX` (brace in accent, name in fg)
  - Title below: 2-line uppercase display, weight 700
  - `border-right: 1px solid var(--line)`
- **Visual side (right, 1.9fr, dark `#0a0a0a`):**
  - Grid of 3 mini "thumbs" with `gap: 18px`, each `min-height: 360px`
  - Each thumb has its own treatment — see "Project thumb variants" below
- **Meta strip (bottom, full width, `border-top: 1px solid var(--line)`):**
  - Left: stack tags separated by `/` (e.g. `Digital / Real-time / Platform`)
  - Right: year
  - Mono 11px uppercase, letter-spacing `0.14em`

**Project thumb variants** (mix per project — see `portfolio.html` for exact composition):
1. **Hero thumb** — dark bg, mono header `{ } projectname`, big display headline like `Ship faster, see it live.` (with the second half in accent), mono footer
2. **Accent thumb** — slightly tinted dark blue bg (`#0d1a3a`), a big stat number with mono unit + sparkline SVG
3. **Glow thumb** — radial gradient (`radial-gradient(circle at 70% 80%, rgba(91,140,255,.35), transparent 60%), #0a0a0a`), used for code snippets or big mark
4. **Map/tracking thumb** — dotted grid background, accent pill labels
5. **Product grid thumb** — 2×2 placeholder tiles with one tinted accent
6. **Stat thumb** — center-aligned big number + uppercase mono caption

The four featured projects:
1. **FLUX** — Real-time Ops Dashboard · `Digital / Real-time / Platform` · 2025
2. **ATLAS** — Fleet Tracking Mobile App · `Mobile / Real-time / GraphQL` · 2024
3. **CIPHER** — Auth & RBAC Microservice · `Platform / Security / Backend` · 2024
4. **MERIDIAN** — Headless Storefront · `Digital / Commerce / Edge` · 2023

> **All project content is placeholder.** Replace project names, descriptions, thumbs, and years with the user's real work once available.

### 5. Focus

Container: 1px-bordered card with split rail.

**Rail:** empty top half, bottom half has vertical `Focus` label + `[00 -3]` bottom index.

**Body:** centered 4-column grid, `padding: 56px 64px`, `align-content: center`.

Four pillars, each with:
- 36×36 line-drawing SVG icon (simple geometric — rect + line + circle)
- Two-line uppercase title (17px, weight 700)
- 4 list items in display font, 14px, normal weight

Pillars:
1. **Frontend Engineering** — React & Next.js, Design Systems, Accessibility, Motion & Interaction
2. **Full-Stack Product** — API Design, Postgres & SQL, Auth & Payments, End-to-End Ships
3. **Infra & DevOps** — Docker & CI/CD, AWS & Cloudflare, Observability, Release Tooling
4. **Mobile Apps** — React Native, Offline-First, Native Modules, App Store Releases

### 6. Live Code Demo

Container: 1px-bordered card with rail (`Demo` label + `[04]`).

Two-column body (`320px 1fr`):
- **Left:** small mono lead `[+] Live code`, display headline `This snippet is being typed in real time.`, then small mono description
- **Right:** dark terminal card with:
  - Top bar: 3 traffic-light dots, file path `~/portfolio/app/api/projects/route.ts`, `TS` badge
  - Body: types out a Next.js route handler character-by-character when scrolled into view, with syntax highlighting (purple keywords, blue functions, green strings, amber numbers, gray comments)
  - Blinking cursor at the end

The exact snippet to type — see `interactions.js`. Speed: ~10–28ms per char, 90ms between lines.

### 7. Contact / Footer

Container: 1px-bordered card.

- **Big header** at top: `SOCIAL SOCIAL` (second dimmed), same oversized type as WORK
- **Grid below:** lead paragraph on the left + 240×240 portrait placeholder on the right (with striped pattern + "PORTRAIT" label — replace with real photo)
- **Actions row:** 4 magnetic buttons (Email, GitHub, LinkedIn, X / Twitter)
  - First button: solid black (or fg) bg with bg-color text + arrow `↗`
  - Others: ghost (transparent bg, fg border)
  - On hover: bg + border become accent blue, text becomes white, arrow translates up-right
  - "Magnetic" behavior: element follows cursor at 0.35× strength within its bounds
- **Footer meta row:** `JACQUES PIETERSE © 2026` left, `Site built by me — with care.` right, mono 11px

---

## Interactions & Behavior

### 1. Custom cursor
- Two elements: 6×6 dot (instant follow) + 32×32 ring (eased follow at 0.18 lerp)
- Both `position: fixed`, `mix-blend-mode: difference`, `pointer-events: none`
- Ring grows to 56×56 with `rgba(255,255,255,0.08)` fill when hovering: `a, button, [data-cursor="hover"], .project, .pillar`
- Disabled on touch / no-fine-pointer devices

### 2. Magnetic buttons
- Selector: `[data-magnetic]`
- On `mousemove`: translate element by `(e.clientX - cx) * 0.35, (e.clientY - cy) * 0.35`
- On `mouseleave`: reset transform
- Applied to all 4 contact action buttons

### 3. Reveal on scroll
- Selector: `.reveal`
- Initial state: `opacity: 0; transform: translateY(28px)`
- When `IntersectionObserver` fires (threshold 0.12, rootMargin `0px 0px -8% 0px`): adds `.in` class → opacity 1, transform none
- Transition: 0.9s `cubic-bezier(0.2, 0.7, 0.2, 1)`
- Optional per-element delay via `--rev-delay: 80ms` CSS variable

### 4. Hero title marquee
- Single CSS keyframe: `translateX(0) → translateX(-50%)` over 22s, linear, infinite
- Track contains 2 identical groups; the `-50%` translate makes the second group land exactly where the first started
- Pauses on `:hover` via `animation-play-state: paused`
- Edges fade via `mask-image: linear-gradient(to right, transparent, #000 4%, #000 96%, transparent)`

### 5. Work marquee
- Same loop pattern as hero (38s duration)
- Dark band inside the work card (no fade mask — runs full bleed)

### 6. Typing animation (terminal)
- Triggered by IntersectionObserver at 0.3 threshold (only once)
- Types one logical character at a time, skipping past HTML tags as a unit
- Per-char delay: random 10–28ms; between lines: 90ms
- Empty lines insert `&nbsp;` and skip after 30ms
- Ends with a blinking `<span class="terminal-cursor">` (1s steps, opacity 50%)

### 7. Smooth scroll
- All `a[href^="#"]` clicks: prevent default, scroll to target with `behavior: 'smooth'`, offset 8px

### 8. Light / Dark theme toggle
- Stored in `localStorage.getItem('jp.theme')` ('light' | 'dark')
- Applied via `<html data-theme="…">`
- Toggle UI lives in the Tweaks panel (bottom-right floating card) — see `app.jsx`. **For the Next.js port, replace this with a normal in-nav theme toggle button** (the Tweaks panel is a prototype-only affordance).

### 9. Selection color
- `::selection { background: var(--accent); color: #fff; }`

---

## State Management

Minimal. Mostly stateless. The few stateful pieces:

- **Theme:** `'light' | 'dark'` — context provider at the root, hydrated from `localStorage` on mount. Use `next-themes` package if convenient.
- **Cursor / magnetic / reveal:** purely DOM event listeners. Implement as a single client component (`<InteractionsLayer />`) mounted once at the root.
- **Typing animation:** local to the terminal component; start once via `useEffect` + IntersectionObserver.

No data fetching. Project data is static — define as a typed array in `lib/projects.ts`:
```ts
export const projects = [
  { slug: 'flux', name: 'FLUX', title: 'Real-time Ops Dashboard', tags: ['Digital','Real-time','Platform'], year: 2025, thumbs: [...] },
  // ...
] as const;
```

---

## Suggested Next.js File Structure

```
app/
  layout.tsx              // <html data-theme>, font setup, ThemeProvider
  page.tsx                // composes all sections in order
  globals.css             // CSS vars, .reveal/.cursor/.magnetic base styles
components/
  Nav.tsx
  Hero.tsx
  HeroMarquee.tsx
  About.tsx
  Work.tsx
  WorkMarquee.tsx
  ProjectCard.tsx
  Focus.tsx
  LiveCodeDemo.tsx
  Terminal.tsx            // handles the typing animation
  Contact.tsx
  MagneticButton.tsx
  Reveal.tsx              // wrapper that adds .reveal class + IntersectionObserver
  CustomCursor.tsx        // mounts the dot+ring, listens to mousemove
  ThemeToggle.tsx
lib/
  projects.ts             // project data
  focus.ts                // focus pillar data
  stack.ts                // marquee items
```

Mark interactive components with `"use client"`. The page itself (`page.tsx`) can stay a Server Component, with client components nested where needed.

---

## Responsive Behavior

The HTML has a single breakpoint at `900px`. Below that:
- Hero grid collapses to single column; visual cells stack
- About body becomes single column, rail hides
- Project cards stack: info → visuals → meta
- Focus body becomes 2-column
- Demo body becomes single column
- Contact grid becomes single column
- Custom cursor + magnetic buttons disabled (no-hover pointer)

For Next.js, use Tailwind's `md:` (768px) or `lg:` (1024px) — pick whichever feels closest. The HTML's `900px` is between, so `lg:` is probably the closer match.

---

## Assets

**None bundled** — the design uses no real images:
- Hero visual grid: CSS-only placeholder cells with striped/colored backgrounds + monospace labels
- Project thumbs: CSS-only mock UI (mock cards, mock charts, mock code snippets)
- Portrait in contact: 240×240 striped placeholder labeled "PORTRAIT"

When the user provides real assets:
- Portrait photo → swap into the `.portrait` div, remove the stripes background and `::after` label
- Project thumbnails / screenshots → replace the synthetic thumbs with `next/image` components inside `.project-visual`

Fonts (Geist + Geist Mono) load from Google Fonts in the HTML — use `next/font/google` in Next.js.

---

## Files in This Bundle

- **`portfolio.html`** — the full prototype, single file. Open in a browser to interact. All styles inline. Authoritative source of truth for colors, spacing, type, and layout.
- **`interactions.js`** — custom cursor, magnetic buttons, reveal-on-scroll IntersectionObserver, terminal typing animation, smooth-scroll handler. Port each effect to a Next.js client component.
- **`app.jsx`** — React component that renders the floating Tweaks panel with the light/dark toggle. **Not needed in Next.js** — replace with a normal theme toggle button.
- **`tweaks-panel.jsx`** — prototype-only Tweaks panel framework. **Not needed in Next.js.**

---

## Implementation Order (Suggested)

1. Set up Next.js + Tailwind + `next/font` + theme provider + global CSS vars
2. Build `<Nav />` and `<Hero />` (skip marquee animation first; do the static layout)
3. Add hero marquee animation
4. Build `<About />` + split-rail pattern (reuse for Focus)
5. Build `<Work />` with the dark marquee + big header
6. Build `<ProjectCard />` with thumb variants — start with one project, then data-drive the rest
7. Build `<Focus />`
8. Build `<LiveCodeDemo />` with the typing animation
9. Build `<Contact />` with magnetic buttons
10. Add `<CustomCursor />` and `<Reveal />` wrappers
11. Wire theme toggle in nav
12. Responsive pass

---

## Notes & Caveats

- **Placeholder content:** All projects, the bio specifics, social URLs (mailto:hello@example.com, etc.), and the portrait are placeholders. Replace before launch.
- **Accent color is the only non-monochrome:** Resist adding more colors. The whole design's tension comes from B&W + one blue.
- **Type is the design.** Don't shrink the oversized headers in the name of "balance" — they're meant to dominate.
- **Mono is for meta.** Anything timestamp-y, label-y, or code-y goes in Geist Mono with `0.14em` letter-spacing and uppercase. Body copy and headlines stay in Geist (display).
- **No drop shadows on cards** in the light theme. Borders only. The dark theme adds a soft shadow under the terminal/editor surfaces only (`0 24px 60px -24px rgba(0,0,0,.4)`).
