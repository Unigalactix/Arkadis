import { episodes, arcOrder, filterOrder } from './episodes_data.js';

const statusClasses = {
    Planned: 'bg-slate-100 text-slate-700',
    Draft: 'bg-amber-100 text-amber-800',
    Published: 'bg-emerald-100 text-emerald-800'
};

export const episodesModule = {
    render: () => `
        <div id="episodes-section" class="tab-content hidden space-y-8 animate-fade-in pb-24">
            <div class="glass-panel p-8 rounded-xl border-l-4 border-orange-600">
                <h2 class="text-3xl font-bold mb-2">Episodes // 2027 Conflict Archive</h2>
                <p class="text-gray-700 leading-relaxed">
                    Placeholder arc list for 44 episodes. Each entry contains a title and one-line brief so complete stories can be added later.
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-3" id="episodes-counters"></div>

            <div class="glass-panel p-5 rounded-xl space-y-4">
                <div>
                    <h3 class="text-xs font-bold uppercase text-gray-500 mb-2">Arc Groups</h3>
                    <div class="flex flex-wrap gap-2" id="arc-chips"></div>
                </div>

                <div>
                    <h3 class="text-xs font-bold uppercase text-gray-500 mb-2">Quick Filters</h3>
                    <div class="flex flex-wrap gap-2" id="episode-filters"></div>
                </div>

                <div>
                    <label for="episode-search" class="text-xs font-bold uppercase text-gray-500">Search</label>
                    <input id="episode-search" type="text" placeholder="Search title, summary, location, POV, or character..."
                        class="mt-2 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-orange-200" />
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="episodes-grid"></div>
        </div>
    `,
    init: () => {
        const countersEl = document.getElementById('episodes-counters');
        const arcChipsEl = document.getElementById('arc-chips');
        const filtersEl = document.getElementById('episode-filters');
        const searchEl = document.getElementById('episode-search');
        const gridEl = document.getElementById('episodes-grid');

        const state = {
            arc: 'All',
            filter: 'All',
            query: ''
        };

        const total = episodes.length;
        const published = episodes.filter(ep => ep.status === 'Published').length;
        const draft = episodes.filter(ep => ep.status === 'Draft').length;

        countersEl.innerHTML = `
            <div class="glass-panel p-4 rounded-xl text-center">
                <div class="text-[10px] uppercase text-gray-500 font-bold">Total Episodes</div>
                <div class="text-2xl font-black text-slate-900">${total}</div>
            </div>
            <div class="glass-panel p-4 rounded-xl text-center">
                <div class="text-[10px] uppercase text-gray-500 font-bold">Drafts</div>
                <div class="text-2xl font-black text-amber-700">${draft}</div>
            </div>
            <div class="glass-panel p-4 rounded-xl text-center">
                <div class="text-[10px] uppercase text-gray-500 font-bold">Published</div>
                <div class="text-2xl font-black text-emerald-700">${published}</div>
            </div>
            <div class="glass-panel p-4 rounded-xl text-center">
                <div class="text-[10px] uppercase text-gray-500 font-bold">Visible</div>
                <div class="text-2xl font-black text-orange-700" id="visible-count">${total}</div>
            </div>
        `;

        const arcOptions = ['All', ...arcOrder];
        arcChipsEl.innerHTML = arcOptions.map(arc => {
            const count = arc === 'All' ? episodes.length : episodes.filter(ep => ep.arc === arc).length;
            return `
                <button type="button" data-arc="${arc}"
                    class="arc-chip text-xs px-3 py-1.5 rounded-full border border-gray-200 bg-white/70 hover:border-orange-300 transition-colors">
                    ${arc} (${count})
                </button>
            `;
        }).join('');

        filtersEl.innerHTML = filterOrder.map(filter => `
            <button type="button" data-filter="${filter}"
                class="filter-chip text-xs px-3 py-1.5 rounded-full border border-gray-200 bg-white/70 hover:border-orange-300 transition-colors">
                ${filter}
            </button>
        `).join('');

        function setActiveChip(selector, key, value) {
            document.querySelectorAll(selector).forEach(btn => {
                const isActive = btn.dataset[key] === value;
                btn.classList.toggle('bg-slate-900', isActive);
                btn.classList.toggle('text-white', isActive);
                btn.classList.toggle('border-slate-900', isActive);
            });
        }

        function getFilteredEpisodes() {
            return episodes.filter(ep => {
                const arcMatch = state.arc === 'All' || ep.arc === state.arc;
                const filterMatch = state.filter === 'All' || ep.tags.includes(state.filter);

                const q = state.query.trim().toLowerCase();
                const searchBlob = [
                    ep.title,
                    ep.summary,
                    ep.arc,
                    ep.status,
                    ep.continuity.location,
                    ep.continuity.pov,
                    ep.continuity.timelineDay,
                    ep.continuity.keyCharacters.join(' '),
                    ep.tags.join(' ')
                ].join(' ').toLowerCase();
                const queryMatch = q.length === 0 || searchBlob.includes(q);

                return arcMatch && filterMatch && queryMatch;
            });
        }

        function renderEpisodes() {
            const filtered = getFilteredEpisodes();
            const visibleEl = document.getElementById('visible-count');
            if (visibleEl) visibleEl.textContent = String(filtered.length);

            if (!filtered.length) {
                gridEl.innerHTML = `
                    <div class="glass-panel p-6 rounded-xl col-span-full text-center text-gray-600">
                        No episodes match this filter set.
                    </div>
                `;
                return;
            }

            gridEl.innerHTML = filtered.map(ep => `
                <article class="glass-panel p-5 rounded-xl border-l-4 border-slate-300">
                    <div class="flex justify-between items-start gap-3 mb-2">
                        <div class="text-[10px] uppercase font-bold tracking-wider text-gray-500">Episode ${ep.no.toString().padStart(2, '0')}</div>
                        <span class="text-[10px] font-bold uppercase px-2 py-1 rounded-full ${statusClasses[ep.status]}">${ep.status}</span>
                    </div>

                    <h3 class="text-lg font-bold text-slate-900 mb-2">${ep.title}</h3>
                    <p class="text-sm text-gray-700 mb-3">${ep.summary}</p>

                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="text-[10px] px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 font-bold">${ep.arc}</span>
                        ${ep.tags.map(tag => `<span class="text-[10px] px-2 py-1 rounded-full bg-slate-100 text-slate-700 font-bold">${tag}</span>`).join('')}
                    </div>

                    <div class="text-[11px] text-gray-600 space-y-1 mb-3">
                        <div><span class="font-bold text-gray-700">Location:</span> ${ep.continuity.location}</div>
                        <div><span class="font-bold text-gray-700">POV:</span> ${ep.continuity.pov}</div>
                        <div><span class="font-bold text-gray-700">Timeline:</span> ${ep.continuity.timelineDay}</div>
                        <div><span class="font-bold text-gray-700">Key Characters:</span> ${ep.continuity.keyCharacters.join(', ')}</div>
                    </div>

                    <button type="button" class="expand-episode text-xs font-bold text-orange-700 hover:text-orange-900" data-ep="${ep.no}">
                        Expand Placeholder
                    </button>
                    <div id="ep-expanded-${ep.no}" class="hidden mt-3 border border-gray-200 rounded-lg p-3 bg-white/70">
                        <label class="text-[10px] font-bold uppercase text-gray-500">Story Placeholder</label>
                        <textarea rows="4" class="mt-1 w-full border border-gray-200 rounded-md p-2 text-xs" placeholder="Story coming soon. Add full episode draft here later..."></textarea>
                    </div>
                </article>
            `).join('');
        }

        arcChipsEl.addEventListener('click', (e) => {
            const target = e.target.closest('[data-arc]');
            if (!target) return;
            state.arc = target.dataset.arc;
            setActiveChip('.arc-chip', 'arc', state.arc);
            renderEpisodes();
        });

        filtersEl.addEventListener('click', (e) => {
            const target = e.target.closest('[data-filter]');
            if (!target) return;
            state.filter = target.dataset.filter;
            setActiveChip('.filter-chip', 'filter', state.filter);
            renderEpisodes();
        });

        searchEl.addEventListener('input', () => {
            state.query = searchEl.value;
            renderEpisodes();
        });

        gridEl.addEventListener('click', (e) => {
            const toggle = e.target.closest('.expand-episode');
            if (!toggle) return;
            const id = toggle.dataset.ep;
            const panel = document.getElementById(`ep-expanded-${id}`);
            if (!panel) return;
            panel.classList.toggle('hidden');
            toggle.textContent = panel.classList.contains('hidden') ? 'Expand Placeholder' : 'Collapse Placeholder';
        });

        setActiveChip('.arc-chip', 'arc', state.arc);
        setActiveChip('.filter-chip', 'filter', state.filter);
        renderEpisodes();
    }
};
