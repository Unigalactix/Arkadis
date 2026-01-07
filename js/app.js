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
import { disastersModule } from './modules/disasters.js';
import { currencyModule } from './modules/currency.js';
import { wiretapModule } from './modules/wiretap.js';
import { bootModule } from './modules/boot.js';
import { audioModule } from './modules/audio.js';
import { newsModule } from './modules/news.js';

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
    disasters: disastersModule,
    currency: currencyModule,
    wiretap: wiretapModule,
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
    const body = document.body;

    if (window.isUnveiledMode) {
        body.classList.add('unveiled-mode');
        document.getElementById('mode-toggle').innerHTML = '<i class="fas fa-eye-slash"></i>';
        document.getElementById('toggle-label').textContent = 'THE UNVEILED';
        document.getElementById('archive-status').innerHTML = "REBEL LEAK // <span class='animate-pulse text-red-500'>SIGNAL INTERCEPTED</span>";
    } else {
        body.classList.remove('unveiled-mode');
        document.getElementById('mode-toggle').innerHTML = '<i class="fas fa-eye"></i>';
        document.getElementById('toggle-label').textContent = 'THE ORDER';
        document.getElementById('archive-status').textContent = 'Archive Division // Level 4 Clearance';
    }

    // Play Mode Switch Audio
    audioModule.playClick();
    if (window.isUnveiledMode) audioModule.playAlarm();

    // Update News Ticker
    newsModule.updateMode(window.isUnveiledMode);

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

    // Inject and Initialize News Ticker
    const newsContainer = document.getElementById('news-ticker-container');
    newsContainer.innerHTML = newsModule.render();
    newsModule.init();

    // Initialize Boot and Audio
    bootModule.init();
    audioModule.init();

    switchTab('overview');
});
