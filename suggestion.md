# Suggestions for Future Improvements

This document tracks practical next steps after recent upgrades (Episodes tab, markdown refresh, cleanup pass).

## 1. Priority Improvements

### Persist Episode Authoring State
Save episode workflow fields to `localStorage` so filters, search query, expanded placeholders, and future draft text survive refreshes.

### Add a Lightweight Episode Editor Flow
Introduce an edit mode per card that can update title, summary, status, and continuity metadata directly, then export JSON for versioned commits.

### Extend Episode Dataset Strategy
Keep `episodes_data.js` for now, but prepare migration to a structured `data/episodes.json` + validation schema once episode count grows significantly.

---

## 2. Narrative and Worldbuilding Enhancements

### Expand Arc Beyond Episode 44
Continue the same metadata-backed structure for episodes 45-444 in staged batches (for example 45-80 first) to keep review manageable.

### Wild Zones Interactive Chronicle
Add a dedicated Wild Zones tab with expedition logs, branching outcomes, and environmental hazards linked to map and defense modules.

### Society Dossier Progression
Evolve the current Order modal into a chain-aware intelligence timeline showing lineage shifts, partner changes, and major political events by year.

---

## 3. Performance and Architecture

### Dynamic Module Loading
Use dynamic imports in `switchTab` so heavyweight modules initialize only when requested, improving first-load responsiveness.

### Shared UI Utility Layer
Extract repeated card/chip/badge markup builders into reusable helpers for consistency across `stories`, `society`, and `episodes`.

### CSS Separation
Move global styles from `index.html` into a dedicated stylesheet and keep module-specific micro-styles near each module to simplify maintenance.
