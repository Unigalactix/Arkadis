# Arkadis: The Hidden Continent

Arkadis is a single-page interactive worldbuilding archive with tab-based modules for lore, governance, intelligence, economy, history, maps, stories, and simulation-style systems.

## Tech Stack

- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript (ES modules)
- Chart.js
- Font Awesome
- Mermaid
- chess.js

## Project Structure

```text
Arkadis/
|- index.html
|- favicon.png
|- js/
|  |- app.js
|  \- modules/
|     |- audio.js
|     |- boot.js
|     |- characters.js
|     |- chess.js
|     |- currency.js
|     |- daily_life.js
|     |- defense.js
|     |- disasters.js
|     |- economy.js
|     |- episodes.js
|     |- episodes_data.js
|     |- flora.js
|     |- geology.js
|     |- history.js
|     |- map.js
|     |- news.js
|     |- overview.js
|     |- society.js
|     |- stories.js
|     |- terminal.js
|     |- training.js
|     \- wiretap.js
```

## Getting Started

Because this app uses ES module imports, run it through a local web server (do not open `index.html` directly from `file://`).

### Option 1: Python

```bash
cd /workspaces/Arkadis
python3 -m http.server 8080
```

Open:

- `http://localhost:8080`

### Option 2: Node (if you prefer)

```bash
npx serve .
```

## How It Works

- `index.html` provides the shell layout, global styles, header/nav, and root container.
- `js/app.js` routes tabs through `switchTab(tabId)`, renders module content, and initializes module logic.
- Each file in `js/modules/` exports a module object with:
  - `render()` to return HTML
  - `init()` to wire interactions, charts, animations, and events

## Key Experience Areas

- Lore and historical archive
- Character dossiers and relationships
- Episode timeline planner with filters/search/status and draft placeholders
- The Order governance panel
- Defense and disaster systems
- Economy and currency intelligence
- Map and environmental/geology modules
- Tactical mini-systems (including chess)

## Screenshots

### Main Interface

![Arkadis Main Interface](image.png)

## Development Notes

- Keep module APIs consistent (`render` + `init`).
- Prefer small, focused changes inside the relevant module file.
- Keep large narrative datasets in dedicated data modules (for example `episodes_data.js`) and keep UI logic in renderer modules.
- If adding a new tab:
  1. Create a new module in `js/modules/`.
  2. Import it in `js/app.js`.
  3. Register it in the `modules` map.
  4. Add navigation buttons with matching `data-tab` values.

## License

No license file is currently defined in this repository.
