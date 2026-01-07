export const trainingModule = {
    render: () => `
        <div id="sports-section" class="tab-content hidden space-y-8">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-gray-900">Training for the Unknown</h2>
                <p class="text-gray-600">In Arkadis, sports are not leisure. They are preparation for Society
                    operations.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <div
                        class="group cursor-pointer bg-white border border-gray-200 p-4 rounded-lg hover:bg-orange-50 transition-colors shadow-sm">
                        <div class="flex items-center gap-4">
                            <div class="bg-orange-100 p-2 rounded text-orange-600"><i class="fas fa-fire"></i></div>
                            <div>
                                <h4 class="font-bold">Pyro-Ball</h4>
                                <p class="text-xs text-gray-500">Reflex training on shifting, heated thermal courts.</p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="group cursor-pointer bg-white border border-gray-200 p-4 rounded-lg hover:bg-blue-50 transition-colors shadow-sm">
                        <div class="flex items-center gap-4">
                            <div class="bg-blue-100 p-2 rounded text-blue-600"><i class="fas fa-mountain"></i></div>
                            <div>
                                <h4 class="font-bold">Ridge Running</h4>
                                <p class="text-xs text-gray-500">Endurance testing along active volcanic fault lines.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="glass-panel p-6 rounded-xl">
                    <h3 class="text-lg font-bold mb-4">Civilian Conditioning Levels</h3>
                    <div class="chart-container">
                        <canvas id="sportsChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    `,
    init: () => {
        if (window.Chart) {
            new Chart(document.getElementById('sportsChart'), {
                type: 'bar',
                data: {
                    labels: ['Pyro-Ball', 'Ridge Run', 'Storm Sail', 'Combat'],
                    datasets: [{
                        label: 'Participation %',
                        data: [85, 70, 45, 90],
                        backgroundColor: '#9ca3af',
                        borderRadius: 4
                    }]
                },
                options: { maintainAspectRatio: false, plugins: { legend: { display: false } } }
            });
        }
    }
};
