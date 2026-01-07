import { overviewModule } from './modules/overview.js';
import { historyModule } from './modules/history.js';
import { charactersModule } from './modules/characters.js';
import { storiesModule } from './modules/stories.js';
import { societyModule } from './modules/society.js';
import { defenseModule } from './modules/defense.js';
import { floraModule } from './modules/flora.js';
import { economyModule } from './modules/economy.js';
import { mapModule } from './modules/map.js';
import { dailyLifeModule } from './modules/daily_life.js';
import { geologyModule } from './modules/geology.js';
import { trainingModule } from './modules/training.js';
import { chessModule } from './modules/chess.js';
import { terminalModule } from './modules/terminal.js';

const modules = {
    overview: overviewModule,
    history: historyModule,
    characters: charactersModule,
    stories: storiesModule,
    society: societyModule,
    defense: defenseModule,
    flora: floraModule,
    economy: economyModule,
    map: mapModule,
    daily: dailyLifeModule,
    geology: geologyModule,
    sports: trainingModule,
    chess: chessModule
};

// Global State for "Unveiled Mode" (Truth vs Propaganda)
window.isUnveiledMode = false;

// Global switchTab function
window.switchTab = function (tabId) {
    const mainContainer = document.getElementById('main-content');
    const module = modules[tabId];

    if (!module) return;

    // Update Nav UI
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('nav-active', btn.dataset.tab === tabId);
        btn.classList.toggle('text-gray-500', btn.dataset.tab !== tabId);
    });

    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav && !mobileNav.classList.contains('hidden')) {
        mobileNav.classList.add('hidden');
    }

    // Render Module Content
    mainContainer.innerHTML = module.render();

    const sections = mainContainer.querySelectorAll('.tab-content');
    sections.forEach(s => s.classList.remove('hidden'));

    // Initialize Module Logic
    module.init();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Toggle Unveiled Mode
function toggleUnveiledMode() {
    window.isUnveiledMode = !window.isUnveiledMode;
    document.body.classList.toggle('unveiled-mode');

    // Update Header UI
    const logoIcon = document.getElementById('logo-icon');
    const toggleLabel = document.getElementById('toggle-label');
    const archiveStatus = document.getElementById('archive-status');
    const toggleBtnIcon = document.querySelector('#mode-toggle i');

    if (window.isUnveiledMode) {
        logoIcon.className = 'fas fa-eye-slash';
        toggleLabel.textContent = 'The Unveiled';
        toggleLabel.className = 'text-[10px] font-bold text-red-500 uppercase tracking-tighter hidden md:block';
        archiveStatus.textContent = 'REBEL LEAK // UNAUTHORIZED DATA STREAM';
        archiveStatus.className = 'text-[10px] font-mono text-red-600 uppercase tracking-widest';
        toggleBtnIcon.className = 'fas fa-mask text-red-500';
    } else {
        logoIcon.className = 'fas fa-mountain';
        toggleLabel.textContent = 'The Order';
        toggleLabel.className = 'text-[10px] font-bold text-gray-400 uppercase tracking-tighter hidden md:block';
        archiveStatus.textContent = 'Archive Division // Level 4 Clearance';
        archiveStatus.className = 'text-[10px] font-mono text-orange-600 uppercase tracking-widest';
        toggleBtnIcon.className = 'fas fa-eye';
    }

    // Re-render current tab to reflect mode changes if necessary
    const activeTab = document.querySelector('.nav-active');
    if (activeTab) {
        switchTab(activeTab.dataset.tab);
    }
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    if (modeToggle) {
        modeToggle.addEventListener('click', toggleUnveiledMode);
    }

    // Initialize Mermaid for relationship maps
    if (window.mermaid) {
        mermaid.initialize({ startOnLoad: true, theme: 'dark' });
    }

    // Inject and Initialize Terminal
    const terminalContainer = document.createElement('div');
    terminalContainer.id = 'terminal-wrapper';
    terminalContainer.innerHTML = terminalModule.render();
    document.body.appendChild(terminalContainer);
    terminalModule.init();

    switchTab('overview');
});
