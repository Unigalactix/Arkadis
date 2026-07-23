export const historyModule = {
    render: () => `
        <div id="history-section" class="tab-content hidden space-y-8 animate-fade-in">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Origin Story -->
                <div class="space-y-6">
                    <div class="flex items-center gap-4">
                        <div class="cast-medallion" style="width:3.5rem;height:3.5rem;font-size:1.3rem;background: linear-gradient(135deg, var(--hue-hellenic-gold), var(--hue-vedic-saffron));">
                            <i class="fas fa-scroll"></i>
                        </div>
                        <h2 class="text-3xl font-bold text-slate-900">The Founding</h2>
                    </div>
                    <p class="text-gray-700 leading-relaxed">
                        Arkadis was discovered nearly <strong>3,000 years ago</strong> by the visionary explorer known
                        only as <strong>Arkadis</strong>. It was then a mere volcanic island, a speck in the vast
                        Indian Ocean &mdash; a crossroad where Hellenic reason and Vedic cosmology already mingled on
                        the trade winds.
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        Arkadis discovered the unique "Triple Junction" energy source beneath the island. He
                        established the Secret Society with a single goal: to build a sanctuary of knowledge and
                        power, hidden from the chaos of the outside world. He named the land after himself &mdash; a
                        promise of a new arc for humanity. Generations later, his bloodline took up
                        <em>Arcadian</em> &mdash; "of Arkadis" &mdash; as their royal house name, a title the ruling
                        line still carries today.
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
                         <i class="fas fa-history text-orange-600"></i> Timeline of Influence
                    </h3>
                    <div class="pl-6 space-y-8">
                        <div class="timeline-item">
                            <span class="text-xs font-bold text-orange-600 font-mono tracking-tighter">c. 975 BCE</span>
                            <h4 class="font-bold text-slate-900">The Founder's Landing</h4>
                            <p class="text-sm text-gray-600">Arkadis raises the first sanctuary from the volcanic rock, fusing Hellenic reason with Vedic rite.</p>
                        </div>

                        <div class="timeline-item">
                            <span class="text-xs font-bold text-orange-600 font-mono tracking-tighter">542 AD</span>
                            <h4 class="font-bold text-slate-900">The Second Founding</h4>
                            <p class="text-sm text-gray-600">The Twelve arrive from the fall of Alexandria, sealing the first dome and weaving Byzantine gold-work into the Order's Hellenic-Vedic foundations.</p>
                        </div>

                        <!-- 1914 Intervention -->
                        <div class="timeline-item">
                            <span class="text-xs font-bold text-orange-600 font-mono tracking-tighter">1914 AD</span>
                            <h4 class="font-bold text-slate-900">The Neutralizing Treaty</h4>
                            <p class="text-sm text-gray-600">
                                A secret pact ensured that no major world power would survey the Rodrigues Junction during the Great War.
                            </p>
                        </div>

                        <!-- 1969 Intervention -->
                        <div class="timeline-item">
                            <span class="text-xs font-bold text-orange-600 font-mono tracking-tighter">1969 AD</span>
                            <h4 class="font-bold text-slate-900">Project: Lunar Cloak</h4>
                            <p class="text-sm text-gray-600">
                                Arkadis scientists secretly provided high-gain signal processing algorithms to NASA to bolster global tech development.
                            </p>
                        </div>

                        <!-- 2008 Intervention -->
                        <div class="timeline-item">
                            <span class="text-xs font-bold text-orange-600 font-mono tracking-tighter">2008 AD</span>
                            <h4 class="font-bold text-slate-900">The Market Shift</h4>
                            <p class="text-sm text-gray-600">
                                Guided global economic recovery through "Anonymous Angel Investors" to stabilize the worldwide industrial grid.
                            </p>
                        </div>

                        <div class="timeline-item">
                            <span class="text-xs font-bold text-orange-600 font-mono tracking-tighter">Present</span>
                            <h4 class="font-bold text-slate-900">Phase: The Mysterious Continent</h4>
                            <p class="text-sm text-gray-600">Land mass reaches 50% of Australia. Surface cloaking at 99.99% effectiveness.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="scene-bushes"></div>

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
                    labels: ['975 BCE', '542 AD', '1200 AD', '1700 AD', '1950 AD', '2027'],
                    datasets: [{
                        label: 'Land Area (sq km)',
                        data: [40, 300, 1500, 8000, 25000, 3800000],
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
