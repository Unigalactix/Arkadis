export const mapModule = {
    render: () => `
        <div id="map-section" class="tab-content hidden space-y-8">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-gray-900">Continental Map</h2>
                <p class="text-gray-600">Explore the 7 Districts of Arkadis</p>
            </div>

            <div class="glass-panel p-8 rounded-xl">
                <div class="relative bg-slate-800 rounded-lg p-8 min-h-[500px]">
                    <!-- Simplified SVG Map -->
                    <svg viewBox="0 0 800 600" class="w-full h-auto">
                        <!-- Ocean background -->
                        <rect width="800" height="600" fill="#1e293b" />

                        <!-- Main Island Shape -->
                        <path
                            d="M 200 250 Q 250 200, 350 220 Q 450 240, 550 280 Q 600 320, 580 400 Q 550 480, 450 500 Q 350 510, 250 480 Q 180 450, 200 350 Z"
                            fill="#b45309" stroke="#f97316" stroke-width="3" opacity="0.9" />

                        <!-- Districts -->
                        <!-- Central Junction -->
                        <circle cx="400" cy="350" r="40" fill="#ef4444" opacity="0.8"
                            class="cursor-pointer district-marker" data-district="junction" />
                        <text x="400" y="355" text-anchor="middle" fill="white" font-size="12"
                            font-weight="bold">Junction</text>

                        <!-- Capital -->
                        <circle cx="350" cy="280" r="35" fill="#eab308" opacity="0.8"
                            class="cursor-pointer district-marker" data-district="capital" />
                        <text x="350" y="285" text-anchor="middle" fill="white" font-size="11"
                            font-weight="bold">Capital</text>

                        <!-- Training Grounds -->
                        <circle cx="500" cy="320" r="30" fill="#3b82f6" opacity="0.8"
                            class="cursor-pointer district-marker" data-district="training" />
                        <text x="500" y="325" text-anchor="middle" fill="white" font-size="10"
                            font-weight="bold">Training</text>

                        <!-- Agricultural Zone -->
                        <circle cx="280" cy="400" r="30" fill="#22c55e" opacity="0.8"
                            class="cursor-pointer district-marker" data-district="agri" />
                        <text x="280" y="405" text-anchor="middle" fill="white" font-size="10"
                            font-weight="bold">Agri</text>

                        <!-- Research Labs -->
                        <circle cx="450" cy="420" r="28" fill="#8b5cf6" opacity="0.8"
                            class="cursor-pointer district-marker" data-district="research" />
                        <text x="450" y="425" text-anchor="middle" fill="white" font-size="10"
                            font-weight="bold">Labs</text>

                        <!-- Defense Grid -->
                        <circle cx="520" cy="400" r="25" fill="#dc2626" opacity="0.8"
                            class="cursor-pointer district-marker" data-district="defense" />
                        <text x="520" y="405" text-anchor="middle" fill="white" font-size="9"
                            font-weight="bold">Defense</text>

                        <!-- Residential -->
                        <circle cx="320" cy="340" r="32" fill="#14b8a6" opacity="0.8"
                            class="cursor-pointer district-marker" data-district="residential" />
                        <text x="320" y="345" text-anchor="middle" fill="white" font-size="10"
                            font-weight="bold">Res</text>

                        <!-- Coordinates marker -->
                        <text x="400" y="550" text-anchor="middle" fill="#cbd5e1" font-size="14">25°S, 70°E</text>
                    </svg>
                </div>

                <!-- District Info Panel -->
                <div id="district-info" class="mt-6 p-6 bg-orange-50 rounded-lg border border-orange-200">
                    <h3 class="font-bold text-orange-900 mb-2">Hover over a district to learn more</h3>
                    <p class="text-sm text-orange-800" id="district-description">Select a location on the map above.</p>
                </div>
            </div>

            <!-- NEW MAP CONTENT -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="glass-panel p-6 rounded-xl bg-slate-900 text-slate-300">
                    <h3 class="text-xl font-bold text-white mb-4"><i
                            class="fas fa-layer-group text-orange-500 mr-2"></i>Sub-Level Topology</h3>
                    <div class="space-y-4">
                        <div class="border-l-2 border-orange-600 pl-4">
                            <h4 class="text-sm font-bold text-orange-400 uppercase">Tier-S: The Surface</h4>
                            <p class="text-[11px]">Military HQs, The Void Canon towers, and the Arcadian Villas. 5% of
                                population.</p>
                        </div>
                        <div class="border-l-2 border-teal-600 pl-4 bg-teal-900/20 py-2">
                            <h4 class="text-sm font-bold text-teal-400 uppercase">Tier-1: The Glow</h4>
                            <p class="text-[11px]">Primary Bio-domes, Residential Districts, and Lumina Gardens. 80% of
                                population.</p>
                        </div>
                        <div class="border-l-2 border-yellow-600 pl-4">
                            <h4 class="text-sm font-bold text-yellow-400 uppercase">Tier-2: The Steam</h4>
                            <p class="text-[11px]">Heavy manufacturing, Hydroponic vats, and Thermal fish farms. 15% of
                                population.</p>
                        </div>
                        <div class="border-l-2 border-red-600 pl-4">
                            <h4 class="text-sm font-bold text-red-500 uppercase">Tier-3: The Core</h4>
                            <p class="text-[11px]">Automated Data-Stacks, Geothermal Vents, and The Triple Junction
                                Engine. Restricted.</p>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <div class="glass-panel p-6 rounded-xl border-l-4 border-blue-600">
                        <h4 class="font-bold text-slate-800 mb-2"><i
                                class="fas fa-subway text-blue-600 mr-2"></i>Hydra-Transit Network</h4>
                        <p class="text-xs text-gray-600 leading-relaxed mb-3">A world-spanning network of vacuum-sealed
                            underwater tunnels. Allows for the movement of goods and personnel without surface
                            detection.</p>
                        <ul class="text-[10px] space-y-2 text-gray-500 font-mono">
                            <li class="flex justify-between"><span>ARK-HDK (Hokkaido Line)</span> <span
                                    class="text-green-600">ACTIVE</span></li>
                            <li class="flex justify-between"><span>ARK-ZRH (Zurich Line)</span> <span
                                    class="text-green-600">ACTIVE</span></li>
                            <li class="flex justify-between"><span>ARK-NYC (Hudson Line)</span> <span
                                    class="text-yellow-600">MAINTENANCE</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,
    init: () => {
        const districtData = {
            junction: "The Triple Junction Engine. The core of Arkadis' energy production.",
            capital: "The Central District. Home to the Panel and the High Council.",
            training: "Arcadian Training Grounds. Where elite Sentinels are forged.",
            agri: "Hydroponic and Marine farming zones. Self-sustenance sector.",
            research: "Veyrath Hybrid Labs. Center of DNA and energy research.",
            defense: "Command center for the Void Canon and Sentinel Swarms.",
            residential: "The Glow. High-tech living spaces for the Arcadian citizens."
        };

        const markers = document.querySelectorAll('.district-marker');
        const infoTitle = document.querySelector('#district-info h3');
        const infoDesc = document.querySelector('#district-description');

        markers.forEach(marker => {
            marker.addEventListener('mouseenter', function () {
                const district = this.getAttribute('data-district');
                infoTitle.textContent = district.charAt(0).toUpperCase() + district.slice(1);
                infoDesc.textContent = districtData[district];
            });
        });
    }
};
