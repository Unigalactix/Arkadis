import { overviewModule } from './modules/overview.js';
import { historyModule } from './modules/history.js';
import { charactersModule } from './modules/characters.js';
import { storiesModule } from './modules/stories.js';
import { episodesModule } from './modules/episodes.js';
import { societyModule } from './modules/society.js';
import { defenseModule } from './modules/defense.js';
import { floraModule } from './modules/flora.js';
import { economyModule } from './modules/economy.js';
import { mapModule } from './modules/map.js';
import { dailyLifeModule } from './modules/daily_life.js';
import { geologyModule } from './modules/geology.js';
import { trainingModule } from './modules/training.js';
import { chessModule } from './modules/chess.js';
import { disastersModule } from './modules/disasters.js';
import { currencyModule } from './modules/currency.js';
import { bootModule } from './modules/boot.js';
import { audioModule } from './modules/audio.js';
import { newsModule } from './modules/news.js';

const modules = {
    overview: overviewModule,
    history: historyModule,
    characters: charactersModule,
    stories: storiesModule,
    episodes: episodesModule,
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
    chess: chessModule
};

// Storyboard chapter metadata: every tab renders as a numbered "page" rather than a report section.
const chapterMeta = {
    overview: { n: 1, label: 'Prologue' },
    history: { n: 2, label: 'The Founding' },
    characters: { n: 3, label: 'Dramatis Personae' },
    stories: { n: 4, label: 'Chronicles' },
    episodes: { n: 5, label: 'Episode Archive' },
    society: { n: 6, label: 'The Order' },
    defense: { n: 7, label: 'Defense Grid' },
    flora: { n: 8, label: 'Flora & Fauna' },
    economy: { n: 9, label: 'The Economy' },
    map: { n: 10, label: 'The Map' },
    daily: { n: 11, label: 'Daily Life' },
    geology: { n: 12, label: 'Geo-Tech' },
    sports: { n: 13, label: 'The Arena' },
    disasters: { n: 14, label: 'Disasters' },
    currency: { n: 15, label: 'Currency' },
    chess: { n: 16, label: 'The Game' }
};

const scrollStorageKey = 'arkadis_tab_scroll_positions';
let activeTabId = null;

function getStoredScrollPositions() {
    try {
        return JSON.parse(sessionStorage.getItem(scrollStorageKey)) || {};
    } catch {
        return {};
    }
}

function storeCurrentScrollPosition() {
    if (!activeTabId) return;
    const positions = getStoredScrollPositions();
    positions[activeTabId] = window.scrollY;
    sessionStorage.setItem(scrollStorageKey, JSON.stringify(positions));
}

// Grouped navigation: the 16 tabs are organized under 5 top-level nav entries
// (Overview stands alone; the rest live in dropdown/accordion groups) so the
// header reads as a compact premium pill-nav instead of a 16-item flat list.
const navGroups = [
    { id: 'overview', label: 'Overview', icon: 'fa-solid fa-compass', tab: 'overview' },
    {
        id: 'world', label: 'World', icon: 'fa-solid fa-globe', items: [
            { tab: 'history', label: 'Origins', icon: 'fa-solid fa-landmark' },
            { tab: 'map', label: 'Map', icon: 'fa-solid fa-map-location-dot' },
            { tab: 'geology', label: 'Geo-Tech', icon: 'fa-solid fa-mountain' },
            { tab: 'flora', label: 'Flora & Fauna', icon: 'fa-solid fa-leaf' },
            { tab: 'disasters', label: 'Disasters', icon: 'fa-solid fa-triangle-exclamation' }
        ]
    },
    {
        id: 'story', label: 'Story', icon: 'fa-solid fa-feather-pointed', items: [
            { tab: 'characters', label: 'Characters', icon: 'fa-solid fa-users' },
            { tab: 'stories', label: 'Stories', icon: 'fa-solid fa-book-open' },
            { tab: 'episodes', label: 'Episodes', icon: 'fa-solid fa-film' }
        ]
    },
    {
        id: 'society', label: 'Society', icon: 'fa-solid fa-landmark-dome', items: [
            { tab: 'society', label: 'The Order', icon: 'fa-solid fa-chess-king' },
            { tab: 'defense', label: 'Defense', icon: 'fa-solid fa-shield-halved' },
            { tab: 'economy', label: 'Economy', icon: 'fa-solid fa-coins' },
            { tab: 'currency', label: 'Currency', icon: 'fa-solid fa-money-bill-wave' },
            { tab: 'daily', label: 'Daily Life', icon: 'fa-solid fa-house' }
        ]
    },
    {
        id: 'play', label: 'Play', icon: 'fa-solid fa-gamepad', items: [
            { tab: 'sports', label: 'Training', icon: 'fa-solid fa-dumbbell' },
            { tab: 'chess', label: 'The Game', icon: 'fa-solid fa-chess' }
        ]
    }
];

function setNavGroupOpen(groupEl, open, openClass) {
    const trigger = groupEl.querySelector(':scope > [data-group-trigger]');
    const panel = groupEl.querySelector(':scope > [data-group-panel]');
    groupEl.classList.toggle(openClass, open);
    trigger?.setAttribute('aria-expanded', String(open));
    if (panel) {
        panel.inert = !open;
        panel.setAttribute('aria-hidden', String(!open));
    }
}

// Builds the desktop pill+dropdown nav and the mobile accordion nav from navGroups,
// then wires up open/close interactions. Called once on boot.
function renderNav() {
    const desktopNav = document.getElementById('desktop-nav');
    const mobileNav = document.getElementById('mobile-nav');
    if (!desktopNav || !mobileNav) return;

    desktopNav.innerHTML = navGroups.map(group => {
        if (group.tab) {
            return `
                <button type="button" onclick="switchTab('${group.tab}')" data-tab="${group.tab}" class="nav-btn">
                    <i class="${group.icon} text-[13px] mr-1.5"></i>${group.label}
                </button>
            `;
        }
        return `
            <div class="nav-group relative" data-group="${group.id}">
                <button type="button" class="nav-btn" data-group-trigger="${group.id}"
                    aria-expanded="false" aria-controls="desktop-nav-panel-${group.id}">
                    <i class="${group.icon} text-[13px] mr-1.5"></i>${group.label}
                    <i class="fa-solid fa-chevron-down nav-chevron"></i>
                </button>
                <div id="desktop-nav-panel-${group.id}" class="nav-dropdown" data-group-panel="${group.id}" aria-hidden="true" inert>
                    ${group.items.map(item => `
                        <button type="button" onclick="switchTab('${item.tab}')" data-tab="${item.tab}" class="nav-dropdown-item">
                            <span class="nav-dropdown-icon"><i class="${item.icon}"></i></span>
                            <span>${item.label}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');

    mobileNav.innerHTML = navGroups.map(group => {
        if (group.tab) {
            return `
                <button type="button" onclick="switchTab('${group.tab}')" data-tab="${group.tab}" class="mobile-nav-link">
                    <span class="flex items-center gap-2"><i class="${group.icon}"></i>${group.label}</span>
                </button>
            `;
        }
        return `
            <div class="mobile-nav-group" data-group="${group.id}">
                <button type="button" class="mobile-nav-group-header" data-group-trigger="${group.id}"
                    aria-expanded="false" aria-controls="mobile-nav-panel-${group.id}">
                    <span class="flex items-center gap-2"><i class="${group.icon}"></i>${group.label}</span>
                    <i class="fa-solid fa-chevron-down nav-chevron text-[10px]"></i>
                </button>
                <div id="mobile-nav-panel-${group.id}" class="mobile-nav-sub" data-group-panel="${group.id}" aria-hidden="true" inert>
                    ${group.items.map(item => `
                        <button type="button" onclick="switchTab('${item.tab}')" data-tab="${item.tab}" class="mobile-nav-sublink">
                            <i class="${item.icon}"></i><span>${item.label}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');

    // Desktop: click a group trigger to open its dropdown; click anywhere else closes all.
    desktopNav.querySelectorAll('[data-group-trigger]').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const groupEl = trigger.closest('.nav-group');
            const wasOpen = groupEl.classList.contains('nav-group-open');
            desktopNav.querySelectorAll('.nav-group').forEach(g => setNavGroupOpen(g, false, 'nav-group-open'));
            setNavGroupOpen(groupEl, !wasOpen, 'nav-group-open');
        });
        trigger.addEventListener('keydown', (event) => {
            if (event.key !== 'ArrowDown') return;
            event.preventDefault();
            const groupEl = trigger.closest('.nav-group');
            setNavGroupOpen(groupEl, true, 'nav-group-open');
            groupEl.querySelector('[data-group-panel] button')?.focus();
        });
    });
    document.addEventListener('click', () => {
        desktopNav.querySelectorAll('.nav-group').forEach(g => setNavGroupOpen(g, false, 'nav-group-open'));
    });

    desktopNav.querySelectorAll('[data-group-panel]').forEach(panel => {
        panel.addEventListener('keydown', (event) => {
            if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
            event.preventDefault();
            const items = [...panel.querySelectorAll('button')];
            const currentIndex = items.indexOf(document.activeElement);
            const direction = event.key === 'ArrowDown' ? 1 : -1;
            items[(currentIndex + direction + items.length) % items.length]?.focus();
        });
    });

    // Mobile: tap a group header to expand/collapse its sub-items.
    mobileNav.querySelectorAll('[data-group-trigger]').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const groupEl = trigger.closest('.mobile-nav-group');
            setNavGroupOpen(groupEl, !groupEl.classList.contains('mobile-nav-group-open'), 'mobile-nav-group-open');
        });
    });

    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    mobileNavToggle?.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('hidden') === false;
        mobileNavToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        const openTrigger = document.querySelector('[data-group-trigger][aria-expanded="true"]');
        desktopNav.querySelectorAll('.nav-group').forEach(g => setNavGroupOpen(g, false, 'nav-group-open'));
        mobileNav.querySelectorAll('.mobile-nav-group').forEach(g => setNavGroupOpen(g, false, 'mobile-nav-group-open'));
        openTrigger?.focus();
    });
}

// Syncs active/highlighted states across the grouped desktop + mobile nav for the given tab.
function updateNavActiveStates(tabId) {
    document.querySelectorAll('[data-tab]').forEach(btn => {
        btn.classList.toggle('nav-active', btn.dataset.tab === tabId);
    });

    document.querySelectorAll('.nav-group').forEach(groupEl => {
        groupEl.classList.toggle('nav-group-active', !!groupEl.querySelector('.nav-active'));
    });

    document.querySelectorAll('.mobile-nav-group').forEach(groupEl => {
        const hasActiveChild = !!groupEl.querySelector(`[data-tab="${tabId}"]`);
        groupEl.classList.toggle('mobile-nav-group-active', hasActiveChild);
        if (hasActiveChild) setNavGroupOpen(groupEl, true, 'mobile-nav-group-open');
    });
}

// Global switchTab function
window.switchTab = function (tabId, options = {}) {
    const mainContainer = document.getElementById('main-content');
    const module = modules[tabId];

    if (!module) return;

    if (activeTabId === tabId && !options.force) {
        document.getElementById('mobile-nav')?.classList.add('hidden');
        return;
    }

    const meta = chapterMeta[tabId];
    storeCurrentScrollPosition();

    if (options.historyMode !== 'none') {
        const route = `#${tabId}`;
        if (options.historyMode === 'replace') {
            history.replaceState({ tabId }, '', route);
        } else {
            history.pushState({ tabId }, '', route);
        }
    }

    activeTabId = tabId;

    // Update Nav UI (grouped pill nav + mobile accordion)
    updateNavActiveStates(tabId);

    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav && !mobileNav.classList.contains('hidden')) {
        mobileNav.classList.add('hidden');
        document.getElementById('mobile-nav-toggle')?.setAttribute('aria-expanded', 'false');
    }

    // Render Module Content, framed as a numbered storyboard "page"
    const chapterBanner = meta
        ? `<div class="storyboard-chapter"><span class="chapter-number">${String(meta.n).padStart(2, '0')}</span><span class="chapter-label">Chapter ${meta.n} &mdash; ${meta.label}</span></div>`
        : '';
    mainContainer.innerHTML = chapterBanner + module.render();

    const sections = mainContainer.querySelectorAll('.tab-content');
    sections.forEach(s => s.classList.remove('hidden'));

    // Page-turn transition between chapters
    mainContainer.classList.remove('animate-page-turn');
    void mainContainer.offsetWidth;
    mainContainer.classList.add('animate-page-turn');

    // Initialize Module Logic
    module.init();

    const storedPosition = getStoredScrollPositions()[tabId] ?? 0;
    requestAnimationFrame(() => {
        window.scrollTo({ top: storedPosition, behavior: 'auto' });
        const pageHeading = mainContainer.querySelector('h1, h2');
        if (pageHeading) {
            pageHeading.tabIndex = -1;
            pageHeading.focus({ preventScroll: true });
        }
    });
};

window.addEventListener('popstate', (event) => {
    const tabId = event.state?.tabId || location.hash.slice(1) || 'overview';
    if (modules[tabId]) window.switchTab(tabId, { historyMode: 'none', force: true });
});

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Mermaid for relationship maps
    if (window.mermaid) {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'dark',
            themeVariables: {
                background: '#0a0f16',
                primaryColor: '#131c27',
                primaryTextColor: '#eef2f7',
                primaryBorderColor: '#d8b66f',
                secondaryColor: '#102321',
                tertiaryColor: '#1a131a',
                lineColor: '#778397',
                fontFamily: 'ARKFONT'
            }
        });
    }

    if (window.Chart) {
        Chart.defaults.color = '#aab5c4';
        Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';
        Chart.defaults.font.family = 'ARKFONT';
        Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(7, 10, 15, 0.94)';
        Chart.defaults.plugins.tooltip.borderColor = 'rgba(216, 182, 111, 0.3)';
        Chart.defaults.plugins.tooltip.borderWidth = 1;
        Chart.defaults.plugins.tooltip.titleColor = '#eef2f7';
        Chart.defaults.plugins.tooltip.bodyColor = '#aab5c4';
    }

    // Inject and Initialize News Ticker
    const newsContainer = document.getElementById('news-ticker-container');
    newsContainer.innerHTML = newsModule.render();
    newsModule.init();

    // Initialize Boot and Audio
    bootModule.init();
    audioModule.init();

    renderNav();
    const initialTab = modules[location.hash.slice(1)] ? location.hash.slice(1) : 'overview';
    switchTab(initialTab, { historyMode: 'replace', force: true });
});
