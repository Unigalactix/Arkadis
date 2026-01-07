# ARKADIS: AGENT MEMORY & WORLD BIBLE

> **CRITICAL DIRECTIVE**: This file is the **SOURCE OF TRUTH** for the Arkadis project. Any future agent working on this codebase MUST read this file first to understand the world, the characters, and the technical constraints.

---

## 1. TECHNICAL CONSTRAINTS (DO NOT BREAK)

### Architecture
- **Modular System**: The project uses ES6 modules (`import/export`). NEVER put large blocks of logic in `index.html`.
  - `app.js`: Main router and state manager.
  - `modules/*.js`: Individual feature modules (render() + init()).
- **State Management**:
  - `window.isUnveiledMode`: Boolean. Controls "Order" (false) vs "Rebel" (true) UI themes.
  - `window.switchTab(id)`: Global function for navigation.

### Key Files & Locks
- **`js/modules/society.js`**: Home of **"The Order"**.
  - *Rule*: Must always display the Inner Circle & Ministers.
  - *Rule*: Must use **Chess Piece** iconography.
  - *Rule*: Must include the **RPG Card Modal** logic.
- **`js/modules/characters.js`**: Home of **"The Rebels"** & **"Relationship Web"**.
  - *Rule*: Must include the Mermaid.js graph.
- **`js/modules/map.js`**: Home of the **Satellite Map**.
  - *Rule*: Must use `image.png` as the source.
  - *Rule*: Must include the **3D Tiered Topology** (Vertical Slice).
- **`js/modules/terminal.js`**: Home of the **Intercepted Comms**.
  - *Rule*: Floating entry field for secret codes (e.g., JXN-01).

---

## 2. THE CHARACTERS (WHO'S WHO)

### The Inner Circle (The 8 Shadows)
*Located in: Society Tab*
1.  **Claus Arcadian (King)**: 54, Male. The Absolute Ruler. Paranoid, frail, needs the Core to survive.
2.  **Seraphine Valorian (Queen)**: 42, Female. The Strategist. Master of poisons. Controlling mother to Lyros.
3.  **Reno R. Kington (Knight)**: 35, Male. **THE PROTAGONIST**.
    - *Role*: "Knight of Erasure" (Assassin/Enforcer).
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

### "The Unveiled" (Rebel Mode)
- **Colors**: Black (Void), Red-500 (Danger), Teal-400 (Hacking).
- **Effects**: Glitch text animations, CSS filters (Contrast+), "REDACTED" blocks in history.
- **Vibe**: Hacker terminal, warnings, raw truth.

---

## 5. SECRET CODES (EASTER EGGS)
*Used in `terminal.js`*
- **JXN-01**: Reveal map truth.
- **OMEGA**: Reveal self-destruct protocol.
- **RENO**: Reveal surveillance log on Protagonist.
- **VEIL**: Reveal physics of the cloak.
