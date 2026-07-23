# ARKADIS: AGENT MEMORY & WORLD BIBLE

> **CRITICAL DIRECTIVE**: This file is the **SOURCE OF TRUTH** for the Arkadis project. Any future agent working on this codebase MUST read this file first to understand the world, the characters, and the technical constraints.

---

## 1. TECHNICAL CONSTRAINTS (DO NOT BREAK)

### Architecture
- **Modular System**: The project uses ES6 modules (`import/export`). NEVER put large blocks of logic in `index.html`.
  - `app.js`: Main router and state manager.
  - `modules/*.js`: Individual feature modules (render() + init()).
- **State Management**:
  - `window.switchTab(id)`: Global function for navigation. Also injects a numbered "storyboard chapter" banner (see `chapterMeta` in `app.js`) before each module's rendered content and triggers a page-turn transition — do not reintroduce the old "Unveiled Mode" (`window.isUnveiledMode`) truth/propaganda toggle; it was removed by design (see Section 4).

### Key Files & Locks
- **`js/modules/society.js`**: Home of **"The Order"**.
  - *Rule*: Must always display the Inner Circle & Ministers.
  - *Rule*: Must use **Chess Piece** iconography.
  - *Rule*: Must include the **RPG Card Modal** logic and **Holographic Tilt**.
- **`js/modules/characters.js`** + **`js/modules/characters_data.js`**: Home of the **Dramatis Personae roster** and the **Family & Bloodline Tree** + **Relationship & Influence Web** Mermaid diagrams.
  - *Rule*: Keep character records (`name`, `title`, `faction`, `priority`, `contexts`, `appearsIn`, `bio`, optional `quote`) in `characters_data.js` and UI/render/filter logic in `characters.js` — same data/render split pattern as `episodes_data.js`/`episodes.js`.
  - *Rule*: `priority` is one of `"Primary"`, `"Secondary"`, `"Minor / Historical"`; `contexts` is a subset of `["Stories", "Episodes", "Society", "History"]` used for the "Appears In" quick filter.
  - *Rule*: Keep the family tree and relationship web as **two separate Mermaid graphs** — the family tree is blood/marriage only (Founder → Claus → Lyros, Seraphine → Lyros, Reno — Elara marriage); the relationship web is political/surveillance/secret/professional ties (Claus/Seraphine/Reno/Inner Circle/Governance Panel/Unveiled). Do not re-merge them into one diagram.
  - *Rule*: The old hard-coded "Wiretap" module (`wiretap.js`) was deleted entirely (see Section 6) — do not re-add it or its nav entry.
- **`js/modules/map.js`**: Home of the **Satellite Map**.
  - *Rule*: Must use `image.png` as the source.
  - *Rule*: Must include the **3D Tiered Topology** (Vertical Slice).
- **`js/modules/episodes.js` + `js/modules/episodes_data.js`**: Home of the **2027 Episode Archive**.
  - *Rule*: Keep episode records in `episodes_data.js` and UI/render/search logic in `episodes.js`.
  - *Rule*: Maintain the **60-episode** scaffold (44 main + 16 flashback) unless explicitly asked to change further. The 16 flashback episodes are NOT appended after Episode 44 — they are physically interspersed in `rawEpisodes` at their narrative "callback" point, using lettered IDs (`no: "11A"`) instead of renumbering the main sequence:
    - After Ep. 11 "Gates of the Eighth Continent" → **Rise of Land** flashback (11A-11B): how the coastline/harbors first grew.
    - After Ep. 20 "Reno at the Margin" → **Mister** flashback (20A-20F): Reno's 2011 Arena journey to becoming "Mr. Arkadis" — dramatic irony vs. his present sidelining.
    - After Ep. 22 "Doctrine and Bread" → **Ice Age** flashback (22A-22B): origin of the Ministry's rationing doctrine.
    - After Ep. 24 "Inheritance of Silence" → **Origins of Secret Society** flashback (24A-24D): the actual ancient founding secrets (c. 975 BCE – 542 AD).
    - After Ep. 39 "Fault in the Core" → **Volcanic Rage** flashback (39A-39B): precedent for the geothermal-core crisis.
  - *Rule*: Every flashback episode object sets `flashback: true`, `arc` (its own arc name, not derived), `callbackTo` (the main episode number it follows), plus explicit `location`/`pov`/`timelineDay`/`keyCharacters`/`tags` (helpers in `episodes_data.js` read these directly instead of deriving them, since numeric-range branching doesn't apply to lettered IDs). Main episodes 1-44 keep numeric `no` and derive continuity fields via the existing `getArc`/`getStatus`/`getTags`/`getLocation`/`getPov`/`getKeyCharacters` numeric-range helpers.
  - *Rule*: `arcOrder` has 9 arcs; `filterOrder` includes a `"Flashback"` tag shared across all flashback episodes plus their thematic tag (`Natural Calamity`, `Arena`, `Origins`). The UI shows a purple "↩ Flashback" badge and border on flashback cards.
  - *Rule*: Preserve arc progression for the main numbered episodes: 1-10 outside Arkadis, 11-29 inside Arkadis, 30 queen reveal, 31-44 conflict close.

---

## 2. THE CHARACTERS (WHO'S WHO)

### The Inner Circle (The 8 Shadows)
*Located in: Society Tab*
1.  **Claus Arcadian (King)**: 54, Male. The Absolute Ruler. Paranoid, frail, needs the Core to survive.
2.  **Seraphine Valorian (Queen)**: 42, Female. The Strategist. Master of poisons. Controlling mother to Lyros.
3.  **Reno R. Kington (Knight)**: 35, Male. **THE PROTAGONIST**.
    - *Role*: "Knight of Erasure" (Assassin/Enforcer).
    - *Lore*: **"Mr. Arkadis" (2011)**. The only Undefeated Grand Champion of the Arena.
    - *Conflict*: Torn between duty, his wife (Elara), and his rebel lover (Sariel).
    - *Stats*: High Combat/Tech.
4.  **Lucian Shadowend (Bishop)**: 68. Keeper of Knowledge/Surveillance.
5.  **Cassian Veyrath (Bishop)**: 45. Religious Doctrine.
6.  **Mira Stormwatch (Knight)**: 28. Infiltration. *Secretly a Double Agent for Rebels?*
7.  **Magnus Fortress (Rook)**: 48. Defense/Military.
8.  **Octavia Rampart (Rook)**: 39. Infrastructure/Builder.

### The Governance Panel (The 7 Ministers)
*Located in: Society Tab*
- **Davian** (Infrastructure), **Elyra** (Health/Ayurveda), **Kairo** (Training/Sports), **Thalia** (Agri), **Solene** (Education), **Orin** (Energy), **Nexis** (Technology).
- *Status*: Public faces of government. Restricted travel.

### The Rebels ("The Unveiled")
*Located in: Characters Tab*
- **Jaxen Vane**: Leader. Ex-Sentinel Captain. Wants to open the borders.
- **Mira Belrose**: Nano-Architect. Defected from the Science Division.
- **Koal Silas**: Ground Operative.

### Special Figures
- **Prince Lyros Arcadian**: 17. The Heir. Sympathizes with the Rebels. "The Pawn or the Player?".
- **Elara Kington**: Reno's wife. High-society loyalist.
- **Sariel**: Reno's secret lover. Scientist in Veyrath Vats. Rebel informant.

---

## 3. THE WORLD (LORE CONSTANTS)

### The Founding & Naming (CRITICAL - DO NOT CONTRADICT)
- **The Founder's name was `Arkadis`** himself (not "Arcadian"). He discovered the island and named the land after himself.
- Founding date: **c. 975 BCE**, nearly **3,000 years** before present (episodes are set in 2027).
- **`Arcadian` is the ROYAL HOUSE NAME/SURNAME**, adopted generations later by the Founder's descendants ("of Arkadis"). It is NOT the Founder's own name. King Claus Arcadian, Prince Lyros Arcadian, etc. carry this house name; the Founder himself is referred to as "Arkadis the Founder" in lineage charts (see `society.js` `orderIntel`).
- **542 AD — "The Second Founding"**: The Twelve arrive fleeing the fall of Alexandria, sealing the first dome and introducing Byzantine gold-work/liturgy into the Founder's existing Hellenic-Vedic order. This is a later cultural-absorption event, NOT the founding itself.
- Do not reintroduce the old "1,500 years" / "discovered by Arcadian" phrasing — it was deprecated in favor of the above.
- **Naming**: Never refer to Arkadis as "the 8th Continent" or "the World's Area 51" — those phrases were deprecated. Use **"the Mysterious Continent"** or **"the Mysterious Land"** instead wherever the landmass needs a mystique-driven epithet.

### Cultural Identity — "The Trinity Accord" (Greek + Hindu + Byzantine Christian fusion)
- Arkadis's civilization is a deliberate fusion of **Hellenic** (Greek philosophy/architecture/gold), **Vedic/Hindu** (Indian Ocean cosmology, saffron/vermilion, peacock-teal), and **Byzantine/Christian** (imperial burgundy, gold mosaic, gothic/arch motifs) heritage.
- Site-wide visual theme lives in `index.html`'s `<style>` block via CSS variables: `--hue-hellenic-gold`, `--hue-vedic-saffron`, `--hue-vedic-vermilion`, `--hue-byzantine-burgundy`, `--hue-byzantine-teal`, and the combined `--trinity-gradient`.
- `.glass-panel` (used across nearly every module) carries a 3px top stripe using `--trinity-gradient` — this is the primary unifying motif. Do not remove it.
- `.site-header` and `.cultural-footer` use `border-image: var(--trinity-gradient)` instead of flat borders.
- Brand mark (`#brand-mark`) uses a slate→burgundy→bronze gradient with a gold ring, and the header icon is `fa-sun` (Hellenic Helios / Vedic Surya symbolism) — not `fa-mountain`.
- Main site title uses `.font-cinzel` (monumental Greco-Roman typeface) instead of `.font-orbitron`. `training.js` still uses Orbitron intentionally for its sci-fi "Arena" feel — keep that font import in `index.html`.

### Location & Geology
- **Rodrigues Triple Junction**: Indian Ocean. The energy source.
- **Size**: ~50% of Australia (Artificial expansion ongoing).
- **The Veil**: A combination of holographic projection and "Void Canon" lensing that hides the continent from the world.

### Tier Structure (Vertical Topology)
- **Tier-S (Surface)**: The Royal Estates, Defense Grid. Artificial Sky.
- **Tier-1 (The Glow)**: Main City. 12,000 ppm population density.
- **Tier-2 (The Steam)**: Industrial Hellscape. 450°C thermal flux.
- **Tier-3 (The Core)**: Origin source. Geothermal Engine.

### Terminology
- **Selection**: The process of assigning AQ (Aspirant Quotient) to citizens.
- **Erasure**: Memory wiping protocol used by Reno.
- **Void Canon**: The defensive super-weapon/cloaking device.

---

## 4. AESTHETICS & UI TONE

### "The Order" (Default Mode)
- **Colors**: Slate-900 (Dark), Orange-600 (Gold/Power), White Glass.
- **Font**: Inter (UI) + Playfair Display (Headings/Noble).
- **Vibe**: Clean, Expensive, authoritarian, Apple-store-meets-Monarchy.

### Storyboard Page Design (CRITICAL - DO NOT REVERT TO "REPORT" LOOK)
- The site intentionally does NOT look like a dashboard/report. `#main-content` is styled as a single manuscript/storybook "page" (parchment background, layered stacked-page shadow, folded top-right corner) rather than a plain content well.
- Every tab render is prefixed with a numbered `.storyboard-chapter` banner (medallion chapter number + italic chapter label) injected by `chapterMeta`/`switchTab` in `app.js` — do not remove this banner injection or render modules without it.
- Tab switches trigger a `.animate-page-turn` transition on `#main-content` to reinforce the "turning a page" feel.
- The removed "Unveiled Mode" toggle (`#mode-toggle`, `body.unveiled-mode`, glitch-text CSS) and the floating "Intercepted Comms" terminal widget (`js/modules/terminal.js`, `#rebel-terminal`) were deliberately deleted — do not re-add them. The rebel faction is still called **"The Unveiled"** in lore/character data (`characters.js`, `episodes_data.js`, `stories.js`) — that faction name is unrelated and must stay.

### Premium Grouped Nav (site-wide, CRITICAL — do not revert to a flat 16-button bar)
- The header nav is data-driven from `navGroups` in `app.js` (NOT hard-coded in `index.html` — the old flat list of 16 `<button>`s was removed). `index.html` only contains empty containers: `<nav id="desktop-nav">` and `<div id="mobile-nav">`; `renderNav()` (called once from the `DOMContentLoaded` handler, before the initial `switchTab('overview')`) builds both from `navGroups` and wires up open/close + click handlers.
- `navGroups` has 5 top-level entries: **Overview** (standalone, direct tab), **World** (Origins/Map/Geo-Tech/Flora/Disasters), **Story** (Characters/Stories/Episodes), **Society** (The Order/Defense/Economy/Currency/Daily Life), **Play** (Training/The Game). Each grouped entry has `items: [{ tab, label, icon }]`. If you add a new module/tab, add it to the right group's `items` array (or create a new group) — do not add a 6th flat top-level button.
- Desktop: `.nav-btn` pills live in a frosted-glass pill bar (`#desktop-nav` — this is the **one deliberate `backdrop-filter: blur()` exception** on the whole site; content cards must stay opaque, but nav chrome is allowed to be glassy). Clicking a group's `.nav-btn` (with `data-group-trigger`) toggles `.nav-group-open` on its parent `.nav-group`, revealing a `.nav-dropdown` panel (opacity/transform transition, not display toggle). A `document`-level click listener closes all open groups; group trigger clicks call `e.stopPropagation()` so they don't immediately self-close.
- Mobile: `#mobile-nav` renders the same groups as an accordion (`.mobile-nav-group-header` + `.mobile-nav-sub` with a `max-height` transition) instead of the old 2-column flat button grid.
- `updateNavActiveStates(tabId)` (called from `switchTab`) is the single source of truth for highlighting: it toggles `.nav-active` on every `[data-tab]` element matching the current tab, toggles `.nav-group-active` on any desktop `.nav-group` containing an active child (so the parent pill also highlights gold), and auto-opens (`.mobile-nav-group-open`) + highlights (`.mobile-nav-group-active`) the mobile accordion group containing the active tab. Do not go back to the old flat `document.querySelectorAll('.nav-btn')` loop that lived directly in `switchTab`.
- Nav typography is **Inter** (clean modern sans, semi-bold), not Cinzel — Cinzel is reserved for the `ARKADIS` wordmark and page (`h1`/`h2`/`h3`) headings. Each nav entry/sub-item carries a Font Awesome icon for a scannable, modern feel.

### Paper Diorama Redesign (CRITICAL — the site's current visual identity)
- The whole site uses a **soft, rounded, layered 3D paper-craft / storybook-diorama** aesthetic (reference: warm flat pastel backgrounds, big rounded corners, soft blurred elevation shadows — like layered paper-cutout illustrations, NOT scrapbook/kraft-paper crafting). An earlier hard-edged "torn kraft paper / ticket-stub" iteration was explicitly rejected by the user for looking too rustic/vintage — do not reintroduce hard 1:1 offset shadows (`Npx Npx 0 rgba(...)` with no blur), dashed "stitched" borders, jagged torn/zigzag edges, perforated-circle edges, or SVG noise-grain textures.
- Palette lives in `:root` as `--paper-bg`/`--paper-bg-soft` (flat warm cream page background, no gradients/texture), `--paper-card`/`--paper-card-alt` (card fill + the slightly darker tone used for the "peeking layer" trick below), `--ink`/`--ink-soft`/`--ink-faint` (text), `--paper-edge` (hairline borders), `--paper-header-bg` (dark header), and `--shadow-soft-sm/md/lg` (SOFT large-blur, low-opacity elevation shadows — e.g. `0 12px 26px rgba(58,47,34,0.14), 0 3px 8px rgba(58,47,34,0.10)`). Radii are large: `--radius-sm/md/lg` = 12/20/28px.
- Fonts: **Lora** (body copy), **Cinzel** (h1/h2/h3), **Playfair Display** (`.serif` accent), **Caveat** (handwritten accent font for `.paper-tag` quotes/annotations). Inter is used for nav (see above) plus general UI; Orbitron remains loaded for legacy/minor usage (`training.js`'s `.font-orbitron`). Note: `#main-tagline` (a Caveat tagline under the ARKADIS wordmark) was added then explicitly removed by the user — do not re-add it.
- `.glass-panel` (the primary card wrapper across nearly every module) is an **opaque, softly-elevated rounded card**: `var(--paper-card)` fill, no border, `box-shadow: 0 6px 0 -2px var(--paper-card-alt), var(--shadow-soft-md)` (a solid-color "peeking paper layer" strip *plus* a soft blurred elevation shadow — this combo is what sells the layered-paper-diorama look), lifts on `:hover` (`translateY(-5px)`), trinity-gradient ribbon top edge retained (still animates via `trinityShimmer`). Do not add hard offset shadows or `backdrop-filter` back to it.
- `#main-content` uses the same peeking-layer + soft-shadow combo (no folded page corner, no perforated edge — those were removed as part of the correction above).
- `.torn-divider` is now a soft dotted/confetti-style divider (`radial-gradient` circles, NOT a jagged zigzag) — a row of small gold dots between sections. **Superseded by `.scene-bushes` (see below) as the primary section-break motif; `.torn-divider`'s CSS rule is kept for backward compatibility but no module uses it anymore.**
- `body`'s background is a **flat** warm cream (`var(--paper-bg)`) — no radial-gradient glow, no noise texture. Keep it simple/flat per the reference aesthetic.

### Paper Diorama Scene Kit (rolled out across all 6 phases — the illustrated-storytelling primitives)
- **`.paper-stage`**: a full-bleed "sky diorama" hero container (sky-to-mint gradient background) with `.scene-clouds` (floating white cloud shapes, absolute-positioned top band) and `.scene-hills` (two-tone layered teal hill silhouettes, absolute-positioned bottom band) as children, plus a `.stage-content` wrapper (z-index 3) for the actual heading/copy/chips. Currently used on the **Overview** hero only — this is the flagship/landing treatment, not meant to be repeated on every page (would dilute the effect).
- **`.scene-bushes`**: a repeating small-bush-and-flower-dot SVG strip used as the standard **section divider** across pages (Characters, Stories, Episodes, History, Flora, Defense, Economy, Currency, Daily Life, Chess) — this is the go-to divider for any new section break; prefer it over a plain `<hr>` or gradient bar.
- **`.badge-icon`**: a circular icon badge with two concentric ring shadows (`--badge-ring-1`/`--badge-ring-2` CSS custom props set inline per usage for color) plus `--shadow-soft-sm` — used for feature/category icons that need the "layered ring" look (Overview feature cards, Flora species cards). Larger than `.cast-medallion` (default 4.25rem).
- **`.cast-medallion`**: a smaller circular badge (default 3rem, freely resized via inline `width`/`height`/`font-size`) used for **page-header icons** (Defense, Economy, Currency, Training, Daily Life, Disasters, History, Geology, Episodes) and for **Characters roster portraits** (shows the character's first initial, color keyed to `priority` via `priorityMedallionBg` in `characters.js`). Set `--badge-ring-1` inline to tint the ring to match the page's accent color.
- **`.tale-number`**: a small circular numbered badge (Cinzel bold, colored gradient background) used only in `stories.js` to number each of the 12 tales 01–12, turning the grid into a numbered anthology. Keep new stories numbered sequentially if more are added.
- **`.stage-medallion`**: the large (6rem) sun/emblem badge with a white-ring halo, used once on the Overview hero (`fas fa-sun`) — do not reuse elsewhere, it's meant to be a singular focal emblem.
- **`.seismo-wave`**: a pure-CSS/SVG animated scrolling seismograph line (replaces a previously broken external Wikipedia GIF dependency in `disasters.js`) — prefer this data-URI SVG + `@keyframes` pattern over any external image URL for animated diagrams; external asset URLs have previously failed to load (`ERR_BLOCKED_BY_ORB`).
- **Rollout status by module** (all in the current build): Overview = full `.paper-stage` hero + badge-icon features; Characters/Stories/Episodes = medallions + `.scene-bushes` (Phase 3); History/Flora/Geology/Disasters = medallions + `.scene-bushes` + (Disasters) `.seismo-wave` (Phase 4); Defense/Economy/Currency/Training/Chess/Daily Life = medallions + `.scene-bushes` (Phase 5). **`Map.js` and `Society.js` were deliberately left with their existing dark-tech / chess-piece identity** (satellite HUD and RPG card modal respectively) rather than force-fitting the diorama scene kit — both already read as cohesive "framed diorama panels" via the shared `.glass-panel`/rounded-corner/soft-shadow system without needing clouds/hills/bushes, and `society.js` has locked rules (Section 1) around its chess/modal/tilt logic that should not be disturbed for re-theming.

---

## 5. SECRET CODES (EASTER EGGS)
*Used in `terminal.js`*
- **JXN-01**: Reveal map truth.
- **OMEGA**: Reveal self-destruct protocol.
- **RENO**: Reveal surveillance log on Protagonist.
- **VEIL**: Reveal physics of the cloak.

---

## 6. SPECIAL MODULES (PREMIUM UPGRADE)
*   **Cinematic Boot (`boot.js`)**:
    *   **Behavior**: BIOMETRIC CAMERA SCAN. Runs once per session.
    *   **Features**: Scrolling logs, "Retina Scan" overlay, Fallback logic.
*   **Audio Manager (`audio.js`)**:
    *   **Sounds**: UI interactions (Click, Hover) + "Unveiled" Alarm drone.
*   **Holographic Cards (`society.js`)**:
    *   **Effect**: 3D Mouse-tracking Tilt + Dynamic Glare.
*   **Episodes Archive (`episodes.js`)**:
  *   **Function**: 60-episode planner (44 main + 16 interspersed flashback) with arc chips, quick filters, search, status badges, counters, and expandable draft placeholders.
*   **Dramatis Personae (`characters.js` + `characters_data.js`)**:
  *   **Function**: Filterable/searchable character roster (priority + appearance chips, search) plus separate Family & Bloodline Tree and Relationship & Influence Web Mermaid diagrams.
*   **Global CRT Overlay**:
  *   **Status**: Removed from `index.html` for visual clarity/performance in the current build.
*   **The Wiretap**:
  *   **Status**: Deleted entirely (`js/modules/wiretap.js` removed, nav button removed, `app.js` references removed). Do not re-add — it duplicated the surveillance theme already covered by `terminal.js`'s removal note above.

## 7. ASSET MANIFEST
*   **Favicon**: `favicon.png` (Stylized 'A' - Gold/Slate).
*   **Images**: All sourced from Unsplash or generated. No placeholders.
