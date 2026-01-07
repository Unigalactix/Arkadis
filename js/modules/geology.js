export const geologyModule = {
    render: () => `
        <div id="geology-section" class="tab-content hidden space-y-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="glass-panel p-6 rounded-xl">
                    <h2 class="text-2xl font-bold mb-4">The Tectonic Engine</h2>
                    <p class="text-gray-700 mb-4">
                        Located at the <strong>Rodrigues Triple Junction</strong> ($25^{\circ}S, 70^{\circ}E$), Arkadis
                        sits on a limitless geothermal power source.
                    </p>
                    <p class="text-gray-700">
                        While the PDF report suggests "natural" formation, the truth is that we accelerate plate
                        divergence to create land. This process creates the unique hazards our citizens face: volcanic
                        emissions, micro-tremors, and heated soil.
                    </p>
                </div>
                <div class="glass-panel p-6 rounded-xl">
                    <h3 class="text-lg font-bold mb-4">Seismic Activity vs. Land Growth</h3>
                    <div class="chart-container">
                        <canvas id="geoChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    `,
    init: () => {
        if (window.Chart) {
            new Chart(document.getElementById('geoChart'), {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [
                        { label: 'Seismic Events', data: [120, 145, 132, 180, 160, 210], backgroundColor: '#f97316' },
                        { label: 'Growth (sq m)', data: [500, 800, 600, 1200, 900, 1500], type: 'line', borderColor: '#1e293b', yAxisID: 'y1' }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: { y1: { position: 'right', grid: { drawOnChartArea: false } } }
                }
            });
        }
    }
};
