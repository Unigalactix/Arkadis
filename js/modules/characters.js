import { characters, priorityOrder } from './characters_data.js';

const priorityBadge = {
    'Primary': 'bg-red-100 text-red-700',
    'Secondary': 'bg-amber-100 text-amber-800',
    'Minor / Historical': 'bg-teal-100 text-teal-700'
};

const priorityBorder = {
    'Primary': 'border-red-400',
    'Secondary': 'border-amber-400',
    'Minor / Historical': 'border-teal-400'
};

const priorityMedallionBg = {
    'Primary': 'linear-gradient(135deg, var(--hue-vedic-vermilion), var(--hue-byzantine-burgundy))',
    'Secondary': 'linear-gradient(135deg, var(--hue-hellenic-gold), var(--hue-vedic-saffron))',
    'Minor / Historical': 'linear-gradient(135deg, var(--hue-byzantine-teal), #0a4744)'
};

const contextOrder = ['All', 'Stories', 'Episodes', 'Society', 'History'];

export const charactersModule = {
    render: () => `
        <div id="characters-section" class="tab-content hidden space-y-10 animate-fade-in">
            <div class="text-center space-y-4 mb-4">
                <h2 class="text-4xl font-bold serif">Characters of Arkadis</h2>
                <div class="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
                <p class="text-gray-600 max-w-2xl mx-auto">Every figure cut from the archive's paper stage &mdash; from those who uphold the Veil to those who seek to tear it down. Classified by narrative priority and by where their story is told.</p>
            </div>

            <div class="scene-bushes"></div>

            <!-- FAMILY & BLOODLINE TREE -->
            <div class="glass-panel p-8 rounded-3xl overflow-hidden relative">
                <div class="absolute top-4 right-6 text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                    <i class="fas fa-dna mr-1"></i> Bloodline Record
                </div>
                <h3 class="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                    <i class="fas fa-sitemap text-orange-600"></i> Family & Bloodline Tree
                </h3>
                <div id="family-tree" class="mermaid flex justify-center bg-white p-4 rounded-xl min-h-[280px]">
                    graph TD
                    FOUNDER[Arkadis the Founder]
                    CLAUS[Claus Arcadian]
                    SERAPHINE[Seraphine V. Valorian]
                    LYROS[Lyros Arcadian]
                    RENO[Reno R. Kington]
                    ELARA[Elara Kington]

                    FOUNDER -.->|Bloodline, Generations Later| CLAUS
                    CLAUS ---|Married| SERAPHINE
                    CLAUS -->|Father| LYROS
                    SERAPHINE -->|Mother| LYROS
                    RENO ---|Married, 10 Years| ELARA

                    style FOUNDER fill:#c9a227,color:#241a10,stroke:#241a10,stroke-width:2px
                    style CLAUS fill:#b45309,color:#fff,stroke:#241a10,stroke-width:2px
                    style SERAPHINE fill:#7e22ce,color:#fff,stroke:#241a10,stroke-width:2px
                    style LYROS fill:#fbbf24,color:#241a10,stroke:#241a10,stroke-width:2px
                    style RENO fill:#dc2626,color:#fff,stroke:#241a10,stroke-width:2px
                    style ELARA fill:#fb7185,color:#241a10,stroke:#241a10,stroke-width:2px
                </div>
            </div>

            <!-- RELATIONSHIP & INFLUENCE WEB -->
            <div class="glass-panel p-8 rounded-3xl overflow-hidden relative">
                <div class="absolute top-4 right-6 text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                    <i class="fas fa-project-diagram mr-1"></i> Social Topology: Classified
                </div>
                <h3 class="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                    <i class="fas fa-network-wired text-orange-600"></i> Relationship & Influence Web
                </h3>
                <div id="relationship-map" class="mermaid flex justify-center bg-white p-4 rounded-xl min-h-[420px] overflow-x-auto">
                    graph TD
                    CLAUS2[Claus Arcadian]
                    SERAPHINE2[Seraphine V. Valorian]
                    RENO2[Reno R. Kington]
                    ELARA2[Elara Kington]
                    SARIEL2[Sariel]
                    JAXEN2[Jaxen Vane]
                    MIRAB2[Mira Belrose]
                    KOAL2[Koal Silas]
                    LYROS2[Lyros Arcadian]
                    OCTAVIA2[Octavia Rampart]
                    MAGNUS2[Magnus Fortress]
                    THALIA2[Minister Thalia]
                    ORIN2[Minister Orin]

                    CLAUS2 ---|Direct Authority| SERAPHINE2
                    CLAUS2 -->|Commands| RENO2
                    SERAPHINE2 -.->|Surveils| RENO2
                    CLAUS2 -->|Heir| LYROS2
                    CLAUS2 ---|Inner Circle| OCTAVIA2
                    CLAUS2 ---|Inner Circle| MAGNUS2
                    SERAPHINE2 ---|Governance Panel| THALIA2
                    SERAPHINE2 ---|Governance Panel| ORIN2
                    RENO2 ---|Husband| ELARA2
                    RENO2 -.->|Secret Affair| SARIEL2
                    JAXEN2 ---|Recruiter| MIRAB2
                    JAXEN2 -->|Mentors in Secret| LYROS2
                    MIRAB2 -.->|Leaks Codes| SARIEL2
                    SARIEL2 -.->|Safe Passage| JAXEN2
                    JAXEN2 ---|Network| KOAL2

                    style CLAUS2 fill:#b45309,color:#fff,stroke:#241a10,stroke-width:2px
                    style SERAPHINE2 fill:#7e22ce,color:#fff,stroke:#241a10,stroke-width:2px
                    style RENO2 fill:#dc2626,color:#fff,stroke:#241a10,stroke-width:2px
                    style JAXEN2 fill:#0ea5e9,color:#fff,stroke:#241a10,stroke-width:2px
                    style LYROS2 fill:#fbbf24,color:#241a10,stroke:#241a10,stroke-width:2px
                    style ELARA2 fill:#fb7185,color:#241a10,stroke:#241a10,stroke-width:2px
                    style SARIEL2 fill:#8b5cf6,color:#fff,stroke:#241a10,stroke-width:2px
                    style MIRAB2 fill:#38bdf8,color:#241a10,stroke:#241a10,stroke-width:2px
                    style KOAL2 fill:#0284c7,color:#fff,stroke:#241a10,stroke-width:2px
                    style OCTAVIA2 fill:#0f6b66,color:#fff,stroke:#241a10,stroke-width:2px
                    style MAGNUS2 fill:#64748b,color:#fff,stroke:#241a10,stroke-width:2px
                    style THALIA2 fill:#65a30d,color:#fff,stroke:#241a10,stroke-width:2px
                    style ORIN2 fill:#ca8a04,color:#fff,stroke:#241a10,stroke-width:2px
                </div>
            </div>

            <div class="scene-bushes"></div>

            <!-- DRAMATIS PERSONAE: FULL ROSTER -->
            <div>
                <h3 class="text-2xl font-bold mb-2 flex items-center gap-2">
                    <i class="fas fa-scroll text-orange-600"></i> Dramatis Personae
                </h3>
                <p class="text-gray-600 mb-6 max-w-3xl">Every named figure documented across the Stories archive, the Episode chronicle, and the Society dossiers &mdash; classified by priority (how central they are to the telling) and by where their story appears.</p>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6" id="character-counters"></div>

                <div class="glass-panel p-5 rounded-xl space-y-4 mb-6">
                    <div>
                        <h4 class="text-xs font-bold uppercase text-gray-500 mb-2">Priority</h4>
                        <div class="flex flex-wrap gap-2" id="priority-chips"></div>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold uppercase text-gray-500 mb-2">Appears In</h4>
                        <div class="flex flex-wrap gap-2" id="context-chips"></div>
                    </div>
                    <div>
                        <label for="character-search" class="text-xs font-bold uppercase text-gray-500">Search</label>
                        <input id="character-search" type="text" placeholder="Search name, title, faction, or bio..."
                            class="mt-2 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-orange-200" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="characters-grid"></div>
            </div>

            <!-- UNVEILED MANDATE CALLOUT -->
            <div class="bg-slate-900 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl text-white rotate-12"><i class="fas fa-dove"></i></div>
                <h3 class="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                    <i class="fas fa-fire text-sky-400"></i> The Unveiled &mdash; Current Mandate
                </h3>
                <p class="text-slate-400 mb-4 max-w-3xl text-sm italic">"We were born under artificial suns. It's time we saw the real one." &mdash; Jaxen Vane</p>
                <ul class="text-xs text-slate-400 space-y-1 list-disc pl-4">
                    <li>Declassification of the "Outside World" archives.</li>
                    <li>The right of exit for all Level-2 and Level-3 citizens.</li>
                    <li>Abolishment of the "Memory Erasure" protocols for detections.</li>
                </ul>
            </div>
        </div>
    `,
    init: () => {
        if (window.mermaid) {
            mermaid.contentLoaded();
        }

        const countersEl = document.getElementById('character-counters');
        const priorityChipsEl = document.getElementById('priority-chips');
        const contextChipsEl = document.getElementById('context-chips');
        const searchEl = document.getElementById('character-search');
        const gridEl = document.getElementById('characters-grid');

        if (!gridEl) return;

        const state = {
            priority: 'All',
            context: 'All',
            query: ''
        };

        const total = characters.length;

        countersEl.innerHTML = [
            { label: 'Total Cast', value: total, cls: 'text-slate-900' },
            ...priorityOrder.map(p => ({
                label: p,
                value: characters.filter(c => c.priority === p).length,
                cls: p === 'Primary' ? 'text-red-700' : (p === 'Secondary' ? 'text-amber-700' : 'text-teal-700')
            }))
        ].map(item => `
            <div class="glass-panel p-4 rounded-xl text-center">
                <div class="text-[10px] uppercase text-gray-500 font-bold">${item.label}</div>
                <div class="text-2xl font-black ${item.cls}">${item.value}</div>
            </div>
        `).join('');

        const priorityOptions = ['All', ...priorityOrder];
        priorityChipsEl.innerHTML = priorityOptions.map(p => {
            const count = p === 'All' ? total : characters.filter(c => c.priority === p).length;
            return `
                <button type="button" data-priority="${p}"
                    class="priority-chip text-xs px-3 py-1.5 rounded-full border border-gray-200 bg-white/70 hover:border-orange-300 transition-colors">
                    ${p} (${count})
                </button>
            `;
        }).join('');

        contextChipsEl.innerHTML = contextOrder.map(ctx => {
            const count = ctx === 'All' ? total : characters.filter(c => c.contexts.includes(ctx)).length;
            return `
                <button type="button" data-context="${ctx}"
                    class="context-chip text-xs px-3 py-1.5 rounded-full border border-gray-200 bg-white/70 hover:border-orange-300 transition-colors">
                    ${ctx} (${count})
                </button>
            `;
        }).join('');

        function setActiveChip(selector, key, value) {
            document.querySelectorAll(selector).forEach(btn => {
                const isActive = btn.dataset[key] === value;
                btn.classList.toggle('bg-slate-900', isActive);
                btn.classList.toggle('text-white', isActive);
                btn.classList.toggle('border-slate-900', isActive);
            });
        }

        function getFiltered() {
            return characters.filter(c => {
                const priorityMatch = state.priority === 'All' || c.priority === state.priority;
                const contextMatch = state.context === 'All' || c.contexts.includes(state.context);

                const q = state.query.trim().toLowerCase();
                const blob = [c.name, c.title, c.faction, c.bio, c.quote || '', c.appearsIn.join(' ')].join(' ').toLowerCase();
                const queryMatch = q.length === 0 || blob.includes(q);

                return priorityMatch && contextMatch && queryMatch;
            });
        }

        function renderGrid() {
            const filtered = getFiltered();

            if (!filtered.length) {
                gridEl.innerHTML = `
                    <div class="glass-panel p-6 rounded-xl col-span-full text-center text-gray-600">
                        No characters match this filter set.
                    </div>
                `;
                return;
            }

            gridEl.innerHTML = filtered.map(c => `
                <article class="glass-panel p-5 rounded-xl border-l-4 ${priorityBorder[c.priority]}">
                    <div class="flex items-start gap-3 mb-2">
                        <div class="cast-medallion" style="background: ${priorityMedallionBg[c.priority]};">${c.name.charAt(0)}</div>
                        <div class="flex-1 min-w-0">
                            <div class="flex justify-between items-start gap-2">
                                <h4 class="text-lg font-bold text-slate-900">${c.name}</h4>
                                <span class="text-[10px] font-bold uppercase px-2 py-1 rounded-full ${priorityBadge[c.priority]} whitespace-nowrap">${c.priority}</span>
                            </div>
                            <div class="text-xs font-bold text-orange-700 uppercase">${c.title}</div>
                            <div class="text-[11px] text-gray-500 font-mono">${c.faction}</div>
                        </div>
                    </div>
                    <p class="text-sm text-gray-700 mb-3">${c.bio}</p>
                    ${c.quote ? `<p class="paper-tag text-base mb-3">${c.quote}</p>` : ''}
                    <div class="flex flex-wrap gap-1">
                        ${c.appearsIn.map(a => `<span class="text-[10px] px-2 py-1 rounded-full bg-slate-100 text-slate-700 font-bold">${a}</span>`).join('')}
                    </div>
                </article>
            `).join('');
        }

        priorityChipsEl.addEventListener('click', (e) => {
            const target = e.target.closest('[data-priority]');
            if (!target) return;
            state.priority = target.dataset.priority;
            setActiveChip('.priority-chip', 'priority', state.priority);
            renderGrid();
        });

        contextChipsEl.addEventListener('click', (e) => {
            const target = e.target.closest('[data-context]');
            if (!target) return;
            state.context = target.dataset.context;
            setActiveChip('.context-chip', 'context', state.context);
            renderGrid();
        });

        searchEl.addEventListener('input', () => {
            state.query = searchEl.value;
            renderGrid();
        });

        setActiveChip('.priority-chip', 'priority', state.priority);
        setActiveChip('.context-chip', 'context', state.context);
        renderGrid();
    }
};
