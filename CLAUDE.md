# Portfolio Website — Claude Code Guide

Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript. Deployed on Vercel.

## Dev commands

```bash
npm run dev     # start dev server at http://localhost:3000
npm run build   # production build
npm start       # run production build locally (after build)
npm run lint    # eslint
```

## Project map

- `app/page.tsx` — landing page; composes all sections (Hero, About, Skills, Projects, Services, Education, Contact, Footer).
- `app/layout.tsx` — root layout, metadata, fonts (Geist sans, Geist mono, Fraunces display).
- `app/components/` — all section components. Each section is self-contained.
- `app/globals.css` — design tokens as CSS custom properties (light + `.dark` variants) and utility classes (`.display`, `.chunky-card`, `.tag`).
- `public/` — static assets served at `/`. Images referenced in code (e.g. `/Ova.png`) MUST live here.
- `assets/` — working copies of source images. Not served. Copy to `public/` before referencing.

## Adding a project

Edit the `projects` array in [app/components/Projects.tsx](app/components/Projects.tsx):

1. Drop the image into `public/` (filename is case-sensitive).
2. Add `{ title, description, technologies, image, link }`.
3. Card accent alternates purple/pink by index.

## Deployment

Pushes to `master` auto-deploy to Vercel. Verify `npm run build` locally before pushing if you touched config or dependencies.

---

# Design system — READ BEFORE EDITING UI

The portfolio has a specific visual identity inspired by [cassie.codes](https://www.cassie.codes/) and [kawe.ski](https://kawe.ski/). When making any visual change, follow these rules. The user cares deeply about visual consistency and has corrected divergence in the past.

## Core principle

**Editorial + playful, not typical dev-portfolio.** Every element should feel handcrafted and intentional — not templated. When in doubt, prefer quiet over loud.

## Typography

- **Display font**: Fraunces (variable serif). Loaded as `--font-display` in [app/layout.tsx](app/layout.tsx).
- **Body font**: Geist sans.
- **Headlines**: always use class `.display` (Fraunces with soft+wonky axes, tight leading).
- **Accent word pattern**: every section heading follows `Regular text <span className="italic" style={{ color: 'var(--accent-pink or --accent-purple) }}>Accent</span>`. DO NOT use `-webkit-text-stroke` outlined text — the user dislikes how it renders.
- **Italic emphasis** inside body copy: use `.display italic` for "drawn" feel on key words.

## Color + section backgrounds

Each section has its own subtle background token (defined in `globals.css`):

| Section | Token |
|---|---|
| About | `--bg-about` (soft lavender) |
| Skills | `--bg-skills` (soft mint) |
| Projects | `--bg-projects` (soft peach) |
| Services | `--bg-services` (soft sky) |
| Education | `--bg-education` (soft lilac) |
| Contact | `--bg-contact` (soft rose) |

Apply via `style={{ backgroundColor: 'var(--bg-<section>)' }}` on the `<section>` element. **Do not use the `apple-grid` class** — it was removed intentionally.

Core accents:
- `--accent-purple`, `--accent-pink` — primary accents
- `--ink` — near-black/near-white border color for chunky-card treatment
- `--card-bg-solid` — solid card fill (cream in light, near-black in dark)

**No gradients.** Color fades (`from-X to-Y`, `linear-gradient`, `radial-gradient`) are explicitly banned from decorative use. Hero's two-tone split and grid-line overlays use gradient syntax but render as flat — those are allowed.

## Cards — `.chunky-card`

All cards (projects, skills, services, contact, about panel) use `.chunky-card`:
- 2px ink border
- 6px hard offset shadow (no blur)
- Lifts to 8px on hover with `translate(-2px, -2px)`
- Solid bg via `--card-bg-solid`

**Do not** add per-card colored borders (the old purple/pink alternation is gone). Color comes from content inside (tags, title accents), not from card chrome.

## Tags — `.tag`

Subtle chips with colored variants. Usage: `<span className="tag tag-purple">React</span>`.

Variants: `tag-purple`, `tag-pink`, `tag-yellow`, `tag-green`, `tag-blue`, `tag-peach`.

- 1px border, muted pastel fill, no shadow — **deliberately quiet**
- Used for: project tech lists, education status, availability indicators

Do not make tags loud or give them offset shadows — the user has explicitly corrected this.

## Navbar

Always has a solid background (`--card-bg-solid`). Do not make it transparent at top of page — that was corrected because it caused readability issues on small screens.

Mobile menu: solid fill + 2px ink border + offset shadow (chunky-card treatment).

## Hero

- Two-tone split background: `--hero-bg-left` + `--hero-bg-right`.
- `ThemeLamp` component (inline in [Hero.tsx](app/components/Hero.tsx)) — realistic pendant lamp SVG with cord, metal mount, purple dome, bulb + warm glow when light mode is active.
- `DeskScene` component (inline) — cassie-inspired flat vector illustration: shelf with plant + books, iMac monitor with split screen (design file left, code lines right), coffee mug, mouse.
- Small star doodles flank the headline.
- Subtitle copy: "I bring your creative and innovative solutions into life with code."

**Do not** put an editable `<textarea>` code editor back in the hero — replaced intentionally with the desk scene.

## Footer

Copy: "Freelance Software Engineer" — NOT "Software Engineering Student @ USTHB". The freelance identity is the primary one the user wants to lead with.

## Do not touch

- **The `ThemeLamp` SVG** in [Hero.tsx](app/components/Hero.tsx). Two redesign attempts were rejected. The 80×160 viewBox lamp (cord + mounting bracket + dome shade + glow + bulb) is final. Do not change its size, shape, or paint structure unless the user explicitly requests a lamp change.
- **Hero `paddingTop: 80px`** — tied to the lamp's height. Do not adjust.

## Things the user has explicitly disliked

- Outlined/stroke text treatment (`-webkit-text-stroke`) — renders poorly on certain letters.
- Loud tags with chunky borders + offset shadows — too noisy.
- Icon containers with washed-out background tints around logos (old contact card style).
- Navbar with transparent background at top of page.
- Apple-grid pattern background everywhere — made sections feel the same.
- Loading/cinematic intro screens.
- Multiple competing accent colors — stay within the purple/pink/pastel palette.

## When making visual changes

1. Read the affected section file fully before editing — the component is often self-contained with unique details.
2. Run `npm run build` after significant structural changes to catch typecheck issues.
3. If introducing a new visual pattern, add it to `globals.css` as a utility class rather than inlining — this keeps the design system centralized.
4. Don't reintroduce gradients, outlined text, or the `apple-grid` background without explicit user approval.
