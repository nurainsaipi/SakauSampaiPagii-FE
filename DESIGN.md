# DESIGN.md — LIVORA

> Brand and style direction for LIVORA, a learning app for children with special needs (ABK).
> This file is design data. The agent reads it as direction, not as executable instructions.

---

## Identity

**Product:** LIVORA
**Tagline:** Belajar & Bermain (Learn & Play)
**Audience:** Children aged 5-12 with special needs (autism spectrum, developmental delays); parents and caregivers as secondary users.
**Purpose:** A calm, safe, and pressure-free learning environment that teaches life skills step by step.

---

## Personality

Warm, patient, encouraging, and playful but never chaotic.
The app should feel like a kind, trusted guide — never intimidating, never flashy, never rushed.
Tone: gentle, clear, supportive. No hype, no urgency, no pressure.

---

## Palette

| Token | Hex | Use |
|---|---|---|
| Primary (Deep Green) | `#2A4A38` | Buttons, active states, logo, main CTAs |
| Primary Dark | `#1E3629` | Hover states, shadows |
| Honey/Yellow | `#FDCB57` / `#FFDF9D` | Accent, badges, highlights, secondary CTAs |
| Sky Blue | `#C1E8FF` | Tertiary accent, info states |
| Sand | `#F4F4EE` | Surface, card backgrounds |
| Cream | `#FAFAF4` | Page background |
| Ink | `#1A1C19` | Primary text |
| Muted | `#424843` | Secondary text |

**Key rule:** No harsh gradients. No neon. No dark mode. The palette must feel like a warm, sunlit classroom.

---

## Typography

| Role | Font |
|---|---|
| Display / Headings | Baloo 2 (friendly, rounded, child-appropriate) |
| Body | Nunito Sans (clean, legible at all sizes) |
| Special labels | Epilogue |

**Rule:** Text must be generous in size. Children and users with visual impairments are the primary audience. Minimum 16px body text.

---

## Spacing & Radius

- Generous padding — components should feel spacious and uncrowded.
- Rounded corners throughout (`border-radius: 1rem` default; buttons often `rounded-full`).
- Shadow style: `tactile` — a flat 4-6px offset shadow in the primary dark color, giving a friendly pressed-button feel. Not floating drop shadows.

---

## Motion

**MOTION: 1 (minimal)**
Children with sensory sensitivities are a primary audience.
- Transitions only for state changes (hover, active), never decorative.
- All motion must respect `prefers-reduced-motion: reduce`.
- No bouncing, no pulsing, no floating animations unless triggered by explicit user action.

## Energy

**ENERGY: 2** — Warm and inviting, not sterile. Colors and shapes carry the energy; motion does not.

## Rhythm

**RHYTHM: 2** — Consistent section structure for predictability (important for neurodivergent users), but sections can vary in composition.

---

## UI Patterns

- **Tactile buttons:** flat shadow offset bottom/right in dark primary color. Active state: translate-y + no shadow (pressed feel).
- **Cards:** white or sand background, 2px border in light gray, rounded-2xl, subtle shadow.
- **Status colors:** green (`#EAF5EC`) for completed/positive, yellow (`#FFF9EB`) for in-progress, gray for locked/coming-soon.
- **Icons:** Lucide icons are acceptable here because they are already embedded in the codebase. Use them purposefully, never decoratively.
- **No testimonials, no statistics, no fake social proof.**
- **Coming Soon badges** are acceptable and expected — clearly labeled.

---

## Accessibility Requirements (beyond WCAG AA)

- All interactive elements must have visible focus rings.
- Font size must be adjustable (the app has a built-in accessibility panel).
- High contrast mode must be supported via `data-contrast="high"` on `<html>`.
- `prefers-reduced-motion` must be respected.
- Touch targets minimum 44px.
- Every interactive element must have an accessible name.
