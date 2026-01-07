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

    // Mobile Nav update (Optional: hide on click)
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav && !mobileNav.classList.contains('hidden')) {
        mobileNav.classList.add('hidden');
    }

    // Render Module Content
    mainContainer.innerHTML = module.render();

    // In Daily Life tab, we might have two sections (Selection & Daily)
    // Actually, I put both in the render string of dailyLifeModule.
    // We need to make sure they are NOT hidden if they are the main content.
    const sections = mainContainer.querySelectorAll('.tab-content');
    sections.forEach(s => s.classList.remove('hidden'));

    // Initialize Module Logic
    module.init();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    switchTab('overview');
});
