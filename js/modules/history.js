export const historyModule = {
    render: () => `
        <div id="history-section" class="tab-content hidden space-y-8 animate-fade-in">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Origin Story -->
                <div class="space-y-6">
                    <h2 class="text-3xl font-bold text-slate-900">The Founding</h2>
                    <p class="text-gray-700 leading-relaxed">
                        Arkadis was discovered 1,500 years ago by the visionary explorer known only as
                        <strong>Arcadian</strong>. It was then a mere volcanic island, a speck in the vast Indian Ocean.
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        Arcadian discovered the unique "Triple Junction" energy source beneath the island. He
                        established the Secret Society with a single goal: to build a sanctuary of knowledge and power,
                        hidden from the chaos of the outside world. He named the land <em>Arkadis</em>, a promise of a
                        new arc for humanity.
                    </p>
                    <div class="bg-orange-50 p-6 rounded-lg border border-orange-200">
                        <h4 class="font-bold text-orange-900 mb-2">The Great Expansion</h4>
                        <p class="text-sm text-orange-800">
                            Using advanced tectonic manipulation, the Society gradually raised the seabed. Today,
                            Arkadis is nearly <strong>half the size of the Australian continent</strong> and continues
                            to grow annually.
                        </p>
                    </div>
                </div>

                <!-- Timeline -->
                <div class="glass-panel p-8 rounded-2xl border-2 border-slate-100 shadow-xl overflow-hidden relative">
                    <div class="absolute top-0 left-0 w-2 h-full bg-slate-900"></div>
                    <h3 class="text-2xl font-bold mb-8 text-slate-800 flex items-center gap-3">
                         <i class="fas fa-history text-orange-600"></i> ${window.isUnveiledMode ? '<span class="text-red-600">Shadow Intervention Log</span>' : 'Timeline of Influence'}
                    </h3>
                    <div class="pl-6 space-y-8">
                        <div class="timeline-item">
                            <span class="text-xs font-bold text-orange-600 font-mono tracking-tighter">542 AD</span>
                            <h4 class="font-bold text-slate-900">The Architect's Landing</h4>
                            <p class="text-sm text-gray-600">The first dome is sealed. Foundation of the Gilded Secrecy laws.</p>
                        </div>

                        <!-- 1914 Intervention -->
                        <div class="timeline-item">
                            <span class="text-xs font-bold ${window.isUnveiledMode ? 'text-red-500' : 'text-orange-600'} font-mono tracking-tighter">1914 AD</span>
                            <h4 class="font-bold text-slate-900">The Neutralizing Treaty</h4>
                            <p class="text-sm text-gray-600">
                                ${window.isUnveiledMode
            ? '<span class="text-red-800 bg-red-50 p-1 rounded font-bold">REDACTED:</span> Arkadis operatives funneled resources to both sides to ensure a stalemate, preventing global powers from exploring the Indian Ocean.'
            : 'A secret pact ensured that no major world power would survey the Rodrigues Junction during the Great War.'}
                            </p>
                        </div>

                        <!-- 1969 Intervention -->
                        <div class="timeline-item">
                            <span class="text-xs font-bold ${window.isUnveiledMode ? 'text-red-500' : 'text-orange-600'} font-mono tracking-tighter">1969 AD</span>
                            <h4 class="font-bold text-slate-900">Project: Lunar Cloak</h4>
                            <p class="text-sm text-gray-600">
                                ${window.isUnveiledMode
            ? '<span class="text-red-800 bg-red-50 p-1 rounded font-bold">REDACTED:</span> Arkadis supplied the relay tech for Apollo 11. The "lost minutes" of the moon landing were spent erasing the signal interference from the Void Canon towers.'
            : 'Arkadis scientists secretly provided high-gain signal processing algorithms to NASA to bolster global tech development.'}
                            </p>
                        </div>

                        <!-- 2008 Intervention -->
                        <div class="timeline-item">
                            <span class="text-xs font-bold ${window.isUnveiledMode ? 'text-red-500' : 'text-orange-600'} font-mono tracking-tighter">2008 AD</span>
                            <h4 class="font-bold text-slate-900">The Market Shift</h4>
                            <p class="text-sm text-gray-600">
                                ${window.isUnveiledMode
            ? '<span class="text-red-800 bg-red-50 p-1 rounded font-bold">REDACTED:</span> Trigged the financial crisis to destabilize global naval budgets, cancelling 14 satellite surveillance projects aimed at the Indian Ocean.'
            : 'Guided global economic recovery through "Anonymous Angel Investors" to stabilize the worldwide industrial grid.'}
                            </p>
                        </div>

                        <div class="timeline-item">
                            <span class="text-xs font-bold text-orange-600 font-mono tracking-tighter">Present</span>
                            <h4 class="font-bold text-slate-900">Phase: The 8th Continent</h4>
                            <p class="text-sm text-gray-600">Land mass reaches 50% of Australia. Surface cloaking at 99.99% effectiveness.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Growth Chart -->
            <div class="glass-panel p-6 rounded-xl">
                <h3 class="text-lg font-bold mb-4">Landmass Expansion (Artificial vs Natural)</h3>
                <div class="chart-container">
                    <canvas id="growthChart"></canvas>
                </div>
            </div>
        </div>
    `,
    init: () => {
        if (window.Chart) {
            new Chart(document.getElementById('growthChart'), {
                type: 'line',
                data: {
                    labels: ['500 AD', '1000 AD', '1500 AD', '1800 AD', '1950', '2023'],
                    datasets: [{
                        label: 'Land Area (sq km)',
                        data: [100, 500, 2000, 8000, 25000, 3800000],
                        borderColor: '#0d9488',
                        backgroundColor: 'rgba(13, 148, 136, 0.1)',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: { y: { type: 'logarithmic' } }
                }
            });
        }
    }
};
