export const overviewModule = {
    render: () => `
        <div id="overview-section" class="tab-content space-y-10 animate-fade-in">

            <!-- HERO STAGE: sky-gradient diorama with layered clouds + hills -->
            <div class="paper-stage">
                <div class="scene-clouds"></div>
                <div class="stage-content text-center space-y-5">
                    <div class="stage-medallion"><i class="fas fa-sun"></i></div>
                    <span class="chip-vibrant px-4 py-1 rounded-full text-xs inline-block">Chapter One &middot; The Hidden Continent</span>
                    <h1 class="text-4xl md:text-5xl font-bold text-slate-900">The Mysterious Continent</h1>
                    <p class="max-w-2xl mx-auto text-lg text-slate-800 font-medium leading-relaxed">
                        Hidden from the global map, Arkadis is a technologically superior society built on a landmass half
                        the size of Australia - a nearly 3,000-year fusion of Hellenic reason, Vedic cosmology, and
                        Byzantine splendor. We are the silent architects of history, operating from the shadows of the
                        Indian Ocean.
                    </p>
                    <div class="flex flex-wrap justify-center gap-3 text-sm font-medium">
                        <span class="chip-vibrant px-3 py-1 rounded-full">25&deg;S, 70&deg;E</span>
                        <span class="chip-vibrant px-3 py-1 rounded-full">Founded: c. 975 BCE</span>
                        <span class="chip-vibrant px-3 py-1 rounded-full">Status: Classified</span>
                    </div>
                </div>
                <div class="scene-hills"></div>
            </div>

            <div class="scene-bushes"></div>

            <!-- FEATURE BADGES -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-3">
                    <div class="badge-icon"
                        style="--badge-ring-1: rgba(198, 64, 43, 0.22); --badge-ring-2: rgba(198, 64, 43, 0.10); background: linear-gradient(135deg, var(--hue-vedic-vermilion), var(--hue-byzantine-burgundy));">
                        <i class="fas fa-eye-slash"></i>
                    </div>
                    <h3 class="text-xl font-bold">Absolute Secrecy</h3>
                    <p class="text-sm text-gray-600">
                        Nobody on Earth knows we exist. Our primary directive is the "Erasure of Tracks"&mdash;removing
                        evidence and neutralizing those who discover our location.
                    </p>
                </div>
                <div class="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-3">
                    <div class="badge-icon"
                        style="--badge-ring-1: rgba(15, 107, 102, 0.22); --badge-ring-2: rgba(15, 107, 102, 0.10); background: linear-gradient(135deg, var(--hue-byzantine-teal), #0a4744);">
                        <i class="fas fa-microchip"></i>
                    </div>
                    <h3 class="text-xl font-bold">Technological Supremacy</h3>
                    <p class="text-sm text-gray-600">
                        Economically and scientifically raised beyond global standards. We use other nations as fronts
                        to guide historical progression.
                    </p>
                </div>
                <div class="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-3">
                    <div class="badge-icon"
                        style="--badge-ring-1: rgba(201, 162, 39, 0.24); --badge-ring-2: rgba(201, 162, 39, 0.10); background: linear-gradient(135deg, var(--hue-hellenic-gold), var(--hue-vedic-saffron));">
                        <i class="fas fa-globe-asia"></i>
                    </div>
                    <h3 class="text-xl font-bold">The Hidden Landmass</h3>
                    <p class="text-sm text-gray-600">
                        Once a small island, now a massive sub-continent. We used geo-thermal tech to raise the land
                        manually over centuries.
                    </p>
                </div>
            </div>

            <div class="scene-bushes"></div>

            <!-- CONTINENTAL PROFILE: framed diorama panel -->
            <div class="glass-panel p-6 rounded-2xl">
                <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
                    <i class="fas fa-compass text-orange-600"></i> Continental Profile
                </h3>
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
