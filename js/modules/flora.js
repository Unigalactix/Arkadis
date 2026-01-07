export const floraModule = {
    render: () => `
        <div id="flora-section" class="tab-content hidden space-y-8">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-gray-900">Bio-Engineered Ecosystem</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Since the land was artificially raised, all life here is
                    either transplanted or genetically modified for the extreme volcanic environment.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="glass-panel p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div class="text-4xl mb-3">🌋</div>
                    <h3 class="text-xl font-bold mb-2">Pyro-Ferns</h3>
                    <p class="text-sm text-gray-600">
                        Thermal-resistant vegetation with roots that extend 10m deep. They absorb heat and convert it to
                        glucose, thriving in 80°C soil.
                    </p>
                    <div class="mt-3 text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded inline-block">Energy Source
                    </div>
                </div>

                <div class="glass-panel p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div class="text-4xl mb-3">🌳</div>
                    <h3 class="text-xl font-bold mb-2">Lumina Trees</h3>
                    <p class="text-sm text-gray-600">
                        Bioluminescent trees that glow blue at night. Their sap is harvested for medicinal compounds.
                        They line the Central District.
                    </p>
                    <div class="mt-3 text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded inline-block">Ayurveda</div>
                </div>

                <div class="glass-panel p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div class="text-4xl mb-3">🦎</div>
                    <h3 class="text-xl font-bold mb-2">Magma Lizards</h3>
                    <p class="text-sm text-gray-600">
                        The only fauna native to Arkadis. These reptiles regulate body temperature via thermal vents and
                        have heat-reflective scales.
                    </p>
                    <div class="mt-3 text-xs bg-red-100 text-red-800 px-2 py-1 rounded inline-block">Native Species
                    </div>
                </div>

                <div class="glass-panel p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div class="text-4xl mb-3">🐦</div>
                    <h3 class="text-xl font-bold mb-2">Ash Hawks</h3>
                    <p class="text-sm text-gray-600">
                        Genetically modified raptors with heat-vision. Used by the Sentinels for reconnaissance. They
                        can fly through volcanic ash clouds.
                    </p>
                    <div class="mt-3 text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded inline-block">Defense</div>
                </div>

                <div class="glass-panel p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div class="text-4xl mb-3">🌊</div>
                    <h3 class="text-xl font-bold mb-2">Thermal Kelp</h3>
                    <p class="text-sm text-gray-600">
                        Underwater forests that filter geothermal toxins from the ocean. They create a 50km eco-barrier
                        around the continent.
                    </p>
                    <div class="mt-3 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded inline-block">Water Filtration
                    </div>
                </div>

                <div class="glass-panel p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div class="text-4xl mb-3">🍄</div>
                    <h3 class="text-xl font-bold mb-2">Obsidian Mushrooms</h3>
                    <p class="text-sm text-gray-600">
                        Grow on cooled lava flows. Rich in protein and minerals. Primary food source for 30% of the
                        population's diet.
                    </p>
                    <div class="mt-3 text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded inline-block">Agriculture
                    </div>
                </div>
            </div>

            <div class="glass-panel p-6 rounded-xl">
                <h3 class="text-lg font-bold mb-4">Ecosystem Distribution</h3>
                <div class="chart-container h-64">
                    <canvas id="floraChart"></canvas>
                </div>
            </div>

            <!-- NEW FLORA CONTENT -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold">The "Wild Zones"</h3>
                    <p class="text-gray-700 leading-relaxed">
                        Beyond the stabilized districts lie the Wild Zones—areas of intense volcanic flux where the
                        continent is still growing. Here, bio-engineered life has escaped control and mutated in
                        unpredictable ways.
                    </p>
                    <div class="glass-panel p-6 rounded-xl border-l-4 border-purple-600 bg-purple-50/30">
                        <h4 class="font-bold text-purple-900 mb-1">Obsidian Wraiths</h4>
                        <p class="text-xs text-gray-600">Predatory, semi-transparent entities that thrive in the
                            smoke-clogged fault lines. They are highly territorial and invisible to standard thermal
                            imaging.</p>
                    </div>
                    <div class="glass-panel p-6 rounded-xl border-l-4 border-amber-600 bg-amber-50/30">
                        <h4 class="font-bold text-amber-900 mb-1">Sulphur Bloom</h4>
                        <p class="text-xs text-gray-600">Fungal colonies that release corrosive spores. They have been
                            known to dissolve drone hulls in minutes. Harvesting them is restricted to Level-4
                            researchers.</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <div class="glass-panel p-6 rounded-xl gold-border">
                        <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
                            <i class="fas fa-microscope text-teal-600"></i>
                            Veyrath Hybrid Labs
                        </h3>
                        <p class="text-sm text-gray-600 mb-4">The epicenter of Arkadian bio-engineering. Currently
                            managing 1,200 unique species variants.</p>
                        <div class="space-y-3">
                            <div>
                                <div class="flex justify-between text-[10px] font-bold uppercase text-gray-500 mb-1">
                                    <span>Genetic Stability</span>
                                    <span>88%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-1.5">
                                    <div class="bg-green-500 h-1.5 rounded-full" style="width: 88%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-[10px] font-bold uppercase text-gray-500 mb-1">
                                    <span>Adaptation Rate</span>
                                    <span>94%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-1.5">
                                    <div class="bg-blue-500 h-1.5 rounded-full" style="width: 94%"></div>
                                </div>
                            </div>
                            <div class="pt-2 text-[10px] text-gray-500 italic">
                                *All species are fitted with internal "Switch" genes for emergency depopulation.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    init: () => {
        if (window.Chart) {
            new Chart(document.getElementById('floraChart'), {
                type: 'pie',
                data: {
                    labels: ['Marine', 'Volcanic', 'Lumina Gardens', 'Hydroponics'],
                    datasets: [{
                        data: [40, 30, 15, 15],
                        backgroundColor: ['#0d9488', '#b45309', '#0ea5e9', '#65a30d']
                    }]
                },
                options: { maintainAspectRatio: false }
            });
        }
    }
};
