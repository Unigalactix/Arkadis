export const overviewModule = {
    render: () => `
        <div id="overview-section" class="tab-content space-y-8 animate-fade-in">
            <div class="text-center space-y-4 mb-12">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900">The World's "Area 51"</h1>
                <p class="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
                    Hidden from the global map, Arkadis is a technologically superior society built on a landmass half
                    the size of Australia. We are the silent architects of history, operating from the shadows of the
                    Indian Ocean.
                </p>
                <div class="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-500">
                    <span class="bg-gray-100 px-3 py-1 rounded-full border border-gray-200">25°S, 70°E</span>
                    <span class="bg-gray-100 px-3 py-1 rounded-full border border-gray-200">Founded: ~500 AD</span>
                    <span class="bg-gray-100 px-3 py-1 rounded-full border border-gray-200">Status: Classified</span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="glass-panel p-6 rounded-xl gold-border">
                    <div class="text-orange-600 text-2xl mb-2"><i class="fas fa-eye-slash"></i></div>
                    <h3 class="text-xl font-bold mb-2">Absolute Secrecy</h3>
                    <p class="text-sm text-gray-600">
                        Nobody on Earth knows we exist. Our primary directive is the "Erasure of Tracks"—removing
                        evidence and neutralizing those who discover our location.
                    </p>
                </div>
                <div class="glass-panel p-6 rounded-xl gold-border">
                    <div class="text-teal-600 text-2xl mb-2"><i class="fas fa-microchip"></i></div>
                    <h3 class="text-xl font-bold mb-2">Technological Supremacy</h3>
                    <p class="text-sm text-gray-600">
                        Economically and scientifically raised beyond global standards. We use other nations as fronts
                        to guide historical progression.
                    </p>
                </div>
                <div class="glass-panel p-6 rounded-xl gold-border">
                    <div class="text-slate-800 text-2xl mb-2"><i class="fas fa-globe-asia"></i></div>
                    <h3 class="text-xl font-bold mb-2">The 8th Continent</h3>
                    <p class="text-sm text-gray-600">
                        Once a small island, now a massive sub-continent. We used geo-thermal tech to raise the land
                        manually over centuries.
                    </p>
                </div>
            </div>

            <!-- Quick Stats -->
            <div class="glass-panel p-6 rounded-xl">
                <h3 class="text-lg font-bold mb-4">Continental Profile</h3>
                <div class="chart-container h-48">
                    <canvas id="overviewRadar"></canvas>
                </div>
            </div>
        </div>
    `,
    init: () => {
        if (window.Chart) {
            new Chart(document.getElementById('overviewRadar'), {
                type: 'radar',
                data: {
                    labels: ['Secrecy', 'Technology', 'Ayurveda', 'Land Mass', 'Influence'],
                    datasets: [{
                        label: 'Arkadis Profile',
                        data: [100, 95, 85, 70, 90],
                        backgroundColor: 'rgba(180, 83, 9, 0.2)',
                        borderColor: '#b45309',
                        borderWidth: 2
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: { r: { ticks: { display: false } } },
                    plugins: { legend: { display: false } }
                }
            });
        }
    }
};
