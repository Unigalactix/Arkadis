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
                <div class="glass-panel p-8 rounded-xl">
                    <h3 class="text-xl font-bold mb-6">Timeline of Influence</h3>
                    <div class="pl-2">
                        <div class="timeline-item">
                            <span class="text-xs font-bold text-orange-600">~500 AD</span>
                            <h4 class="font-bold">Discovery & Foundation</h4>
                            <p class="text-sm text-gray-600">Arcadian finds the Junction. The First Council is formed.
                            </p>
                        </div>
                        <div class="timeline-item">
                            <span class="text-xs font-bold text-orange-600">1200 - 1800 AD</span>
                            <h4 class="font-bold">The Silent Hands</h4>
                            <p class="text-sm text-gray-600">The Society orchestrates key historical moments globally,
                                using trade empires as fronts.</p>
                        </div>
                        <div class="timeline-item">
                            <span class="text-xs font-bold text-orange-600">1950 AD</span>
                            <h4 class="font-bold">The Tech Boom</h4>
                            <p class="text-sm text-gray-600">Arkadis perfects digital cloaking. Global technology is
                                accelerated to mask Arkadian energy signatures.</p>
                        </div>
                        <div class="timeline-item">
                            <span class="text-xs font-bold text-orange-600">Present Day</span>
                            <h4 class="font-bold">The 8th Continent</h4>
                            <p class="text-sm text-gray-600">Land mass reaches 50% of Australia. Secrecy remains
                                absolute.</p>
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
