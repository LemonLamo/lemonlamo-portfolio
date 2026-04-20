---
name: portfolio-design
description: Visual consistency check for the portfolio website. Use when making UI changes, when the user asks to "refine", "polish", or "restyle" anything, when adding a new section or card, or when troubleshooting why something looks off. Enforces the design system documented in CLAUDE.md.
---

# Portfolio visual polish

Before writing any UI change, re-read [`CLAUDE.md`](../../../CLAUDE.md) — specifically the "Design system" section — and follow every rule.

## Non-negotiables

1. **No gradients** for decorative color fades. Hero two-tone split and 1px grid-line overlays are the only allowed gradient-syntax uses.
2. **No outlined text** (`-webkit-text-stroke`). Use `italic` + accent color for emphasis instead.
3. **No `apple-grid`** background class. Each section has its own `--bg-<section>` token.
4. **Tags stay quiet** — `.tag` + color variant, never loud ribbons with offset shadows.
5. **Cards use `.chunky-card`** — no per-card colored borders.
6. **Navbar is transparent at top of page**, fades to solid on scroll — never fully solid at top (it would overlap the lamp).
7. **Freelance, not student** — Lamia identifies as a freelance software engineer in hero/footer/about copy.

## Before committing any visual change

- [ ] Display headlines use `.display` class + italic accent span (matching "Featured Projects" pattern)
- [ ] New cards use `.chunky-card`, not hand-rolled borders
- [ ] New tags use `.tag tag-<color>`, with muted pastel variants only
- [ ] Section backgrounds use `--bg-<section>` tokens
- [ ] No loading screens, no heavy animations, no floating decorative blobs
- [ ] Ran `npm run build` — clean

## When in doubt

- Reach for **quiet** over loud.
- Solid fills + thin borders beat gradient washes.
- Hand-drawn SVG accents (stars, doodles) fit; generic stock-vector shapes don't.
- cassie.codes + kawe.ski are the reference aesthetics.
