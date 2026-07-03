# WeatherWise Design System

## Overview

WeatherWise is an interactive educational experience for young makers (ages 8–12). The flagship product is the **Rain-Sensing Smart Dryer** — a multi-phase, gamified lesson that teaches kids to build an IoT device using Arduino, a rain sensor, jumper wires, and a servo motor. The experience features a 3D animated mascot named **Krish** who guides learners through the circuit chain: **Sense → Signal → Think → Act**.

**Sources used:**
- Codebase: `weatherwise/` (mounted local folder) — `index.html` (7-phase main experience), `Rain-Sensing Smart Dryer.dc.html` (embedded simulation)
- Uploaded assets: character PNGs, role SVG icons, component photos, step-by-step simulation images, diagram, audio/video files
- Output decks: `weatherwise/outputs/weatherwise-exhaustive-screen-deck.pptx`, `weatherwise-shareable-slide-deck.pptx` (not read — binary)

---

## Product

One product, one surface: the **WeatherWise interactive lesson** — a full-screen, fixed-viewport web experience (no traditional nav/header).

**7 phases:**
1. Video — Krish's story (intro video)
2. Feel the Rain — body chain animation activity
3. Problem — drag-and-drop circuit ordering
4. Discover — flip-card component matching
5. Circuit — build Krish's smart machine
6. Simulation — step-by-step build tutorial
7. Outro — celebratory video

---

## Content Fundamentals

**Voice:** Warm, encouraging, child-directed. Krish speaks in first person ("I wanted to build the same thing for clothes!"). The UI copy speaks directly to the child as "you."

**Tone:** Excited, curious, celebratory. Heavy use of exclamation marks. Short sentences. Active verbs. Never condescending.

**Casing:** Title case for headings and button labels. Sentence case for body and instructions.

**Key phrases used:**
- "Let's Build!"
- "Sense → Signal → Think → Act."
- "Circuit live. Feel → Think → Act."
- "Great work, Maker! 🎉"
- "Click each card to see what happens next!"
- "Drop here"

**Emoji:** Used sparingly in celebratory moments and button labels (🎉 ▶ ☔ ☀). Not used in informational body copy. The 🔎 emoji is used as a decorative element in the UI.

**Numbers:** Written as numerals, never spelled out. Steps are always numbered (1, 2, 3…).

**I vs You:** Krish speaks as "I" in speech bubbles. The UI addresses the learner as "you." Never "we."

**Length:** Headings are punchy (3–8 words). Instructions are one sentence. Explanations are 1–2 sentences max.

---

## Visual Foundations

**Color palette:**
- Primary background (game): `#1a2a35` — dark navy/slate with a blurred photographic background overlay
- Sky/simulation background: `#bfe6ff → #dff3ff` gradient (daylight feel)
- Primary CTA: `#2F88FF` (brand blue)
- Role colors: Sense = `#18A957` (green), Signal = `#FFB800` (amber), Think = `#7B35D8` (purple), Act = `#F36A21` (orange)
- Card surfaces: white (`#FFFFFF`), warm cream (`#FFFBF0`), cream (`#FFF8E8`)
- Text on dark: `#FFF8E8` (warm white), not pure white
- Text on light: `#0A1C4B` (dark navy), `#5a3a00` (warm brown for speech bubbles)

**Typography:**
- **Nunito** (600–900) — all UI copy, buttons, instructions. Very rounded letterforms that feel friendly and energetic.
- **Fredoka** (400–700) — display headings in the simulation/build mode. Softer, more casual.
- Minimum size in lesson UI: 13px (captions). Headings typically 42–52px at full viewport.
- All weights are heavy (800–900) — this is a bold, high-contrast UI.

**Backgrounds:**
- Dark phase: full-screen `#1a2a35` base + blurred photographic image overlay (opacity toggled per phase) + animated rain drop particles
- Sky phase (simulation): `linear-gradient(180deg, #bfe6ff 0%, #dff3ff 55%, #f1fbff 100%)` — changes to darker slate tones when raining
- No repeating patterns or textures

**Animation:**
- **Entrance:** `fadeUp` (slide up 26px), `kidPop` (bouncy scale + rotate), `nodePop`
- **Feedback:** `wobbleKid` (error), `kidPop` (correct)
- **Ambient:** `ctaBounce` (CTA float), `glowRing` (CTA glow pulse), `simSoftFloat` (gentle bob)
- **Transitions:** `signalRun` (dot traveling across a wire), `cardFlipSmooth` (horizontal 3D flip)
- Easing: `cubic-bezier(0.34, 1.56, 0.64, 1)` (overshoot/spring) — the brand easing
- Press state on all buttons: `translateY(3px)` + `filter: brightness(0.86)` (0.07s)

**Hover/press states:**
- Buttons: press-down only (translateY + brightness). No hover color change.
- No pure hover states — designed for touch-first (kids on tablets)

**Cards:**
- Rounded corners: 18–30px (never sharp, never circle)
- Hard bottom shadow (the brand signature): e.g. `0 10px 0 #C9A100` — gives a physical, tactile feel
- Borders: 3–4px solid colored border (matches the shadow color)
- Inset highlight on buttons: `inset 0 2px 0 rgba(255,255,255,0.35)`
- Backgrounds: white, warm cream, or semi-transparent white for frosted effect

**Shadows:**
- Hard bottom shadow system: `0 Npx 0 [darkColor]` — simulates physical depth
- Supplementary diffuse shadow for lift: `0 Npx Npx rgba(0,0,0,0.N)`
- No inset shadows (except the button highlight)

**Imagery:**
- Component photos: high-quality product shots with `drop-shadow` filter
- Character: 3D rendered cartoon (Pixar-style), transparent PNG, large (fills 60–80% of screen height)
- Simulation photos: real step-by-step build photography on plain backgrounds
- Diagrams: colorful flat illustrations with bold outlines

**Corner radii:** 10–30px range. 999px for pill shapes (nav dots, small tags). Never 0 (no sharp corners).

**Transparency/blur:**
- Glassmorphism used sparingly: `backdrop-filter: blur(16px)` on overlay cards in the video phase
- Semi-transparent overlays over backgrounds: `rgba(0,0,0,0.3)` on nav dot backgrounds

**Layout:**
- Fixed-viewport design (no scroll). Content fills the entire screen.
- Krish character always anchored to the left edge, bottom-aligned
- Content area offset from left to accommodate Krish: `padding-left: 315–330px`
- Progress dots: top-left, fixed. Mute button: top-right, fixed.
- CTA button: always bottom-center or bottom-right

---

## Iconography

**Icon system:** Tabler Icons webfont (`@tabler/icons-webfont@3.31.0` from jsDelivr CDN). Used extensively throughout the lesson UI for component roles, navigation, and UI states.

**CDN:** `https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.31.0/dist/tabler-icons.min.css`

**Usage pattern:** `<i class="ti ti-[name]"></i>` inline in HTML/JSX.

**Key icon mappings:**
- Arduino/controller: `ti-cpu`
- Rain sensor: `ti-droplet`
- Jumper wires: `ti-plug-connected`
- Servo motor: `ti-rotate-2`
- Play: `ti-player-play-filled`
- Sound/mute: `ti-volume`, `ti-volume-off`
- Rain: `ti-cloud-rain`
- Home: `ti-home`
- Check: `ti-check`
- Lock: `ti-lock`

**Custom SVG role icons** (in `assets/icons/`):
- `eye_icon.svg` — Sense
- `lightning_icon.svg` — Signal
- `brain_icon.svg` — Think
- `biceps.svg` / `arm_icon.svg` — Act

**Emoji as icons:** Used rarely and only in celebratory/ambient contexts (🔎 in the collect panel, 🎉 in celebratory text).

**No custom icon font.** No unicode characters used as icons. Tabler Icons is the canonical icon set.

---

## Components

| Component | File | Description |
|-----------|------|-------------|
| **Button** | `components/core/Button.jsx` | Gradient CTA with hard shadow and press feedback |
| **Card** | `components/core/Card.jsx` | Content panel with hard-bottom shadow |
| **RoleBadge** | `components/core/RoleBadge.jsx` | Sense / Signal / Think / Act coloured pill |
| **RoleChain** | `components/core/RoleBadge.jsx` (export) | Full 4-badge chain with arrows |
| **SpeechBubble** | `components/core/SpeechBubble.jsx` | Krish's cream/amber speech tooltip |
| **ProgressDots** | `components/core/ProgressDots.jsx` | Numbered phase-nav dot row |
| **KrishMascot** | `components/mascot/KrishMascot.jsx` | Brand mascot in 6 emotion states |

**Intentional additions (not in source, added for system completeness):**
- `RoleChain` — exported from `RoleBadge.jsx` for convenience; renders the full Sense→Signal→Think→Act chain.

---

## Assets

```
assets/
  characters/       — Krish PNGs (speaking, celebrate, think, thinking, mistake, point)
  icons/            — Role SVGs (eye, lightning, brain, biceps, arm)
  components/       — Hardware component photos (arduino, rain_sensor, jumper_wires, servo_motor)
  illustrations/    — Flat illustration PNGs (brain, house, rain, lightning, gears, sensor, robot, diagram, sunny)
  simulation/       — Step-by-step build photos (step-1.png … step-8.png)
```

**No logo provided.** The brand name "WeatherWise" is rendered in Nunito 900 wherever a logo mark would go. See readme note: a proper SVG wordmark was not included in the source materials.

---

## UI Kits

| Kit | Path | Description |
|-----|------|-------------|
| **WeatherWise Lesson** | `ui_kits/weatherwise/index.html` | Interactive recreation of the 7-phase lesson experience |

---

## File Index

```
styles.css                          — Global CSS entry (imports only)
tokens/
  colors.css                        — All colour custom properties
  typography.css                    — Font imports + type tokens
  spacing.css                       — Space scale + border radius tokens
  shadows.css                       — Shadow token system
  animation.css                     — Easing/duration tokens + all @keyframes
components/
  core/
    Button.jsx / .d.ts / .prompt.md
    Card.jsx / .d.ts / .prompt.md
    RoleBadge.jsx / .d.ts / .prompt.md
    SpeechBubble.jsx / .d.ts / .prompt.md
    ProgressDots.jsx / .d.ts / .prompt.md
    core.card.html                  — @dsCard for Components group
  mascot/
    KrishMascot.jsx / .d.ts / .prompt.md
    mascot.card.html                — @dsCard for Components group
guidelines/
  colors-blue.card.html
  colors-roles.card.html
  colors-neutral.card.html
  type-display.card.html
  type-body.card.html
  spacing.card.html
  radius.card.html
  shadows.card.html
  animations.card.html
  brand-character.card.html
  brand-illustrations.card.html
  brand-icons.card.html
assets/
  characters/ icons/ components/ illustrations/ simulation/
ui_kits/
  weatherwise/
    index.html                      — Interactive lesson UI kit
readme.md
SKILL.md
```
