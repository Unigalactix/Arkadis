export const mapModule = {
    render: () => `
        <div id="map-section" class="tab-content hidden space-y-8 animate-fade-in">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-gray-900 serif">Continental Satellite Imagery</h2>
                <p class="text-gray-600">The Triple Junction Archive // High-Resolution Topography</p>
            </div>

            <div class="glass-panel p-4 rounded-xl shadow-2xl overflow-hidden bg-slate-900 border-2 border-slate-800">
                <div class="relative w-full aspect-[16/9] bg-slate-950 rounded-lg overflow-hidden group">
                    <!-- Satellite Map Background -->
                    <img src="image.png" 
                         class="w-full h-full object-cover opacity-90 transition-transform duration-[20s] group-hover:scale-110" 
                         alt="Arkadis Satellite Map">
                    
                    <!-- Scanline Overlay -->
                    <div class="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

                    <!-- Interactive Region Hotspots -->
                    <div class="absolute inset-0">
                        <!-- Veyrath Mountain Range -->
                        <div class="absolute top-[30%] left-[45%] w-32 h-20 cursor-pointer region-hotspot" data-region="veyrath">
                             <div class="absolute inset-0 border-2 border-orange-500/20 rounded-full animate-pulse-slow"></div>
                             <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_#f97316]"></div>
                        </div>

                        <!-- The Central Hub (The Glow) -->
                        <div class="absolute top-[50%] left-[50%] w-24 h-24 cursor-pointer region-hotspot" data-region="hub">
                             <div class="absolute inset-0 border-4 border-teal-500/30 rounded-full animate-ping-slow"></div>
                             <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-teal-400 rounded-full shadow-[0_0_20px_#2dd4bf]"></div>
                        </div>

                        <!-- Southwestern Ridge (Defense Grid) -->
                        <div class="absolute bottom-[25%] left-[38%] w-20 h-20 cursor-pointer region-hotspot" data-region="defense">
                             <div class="absolute inset-0 border-2 border-red-500/20 rounded-full"></div>
                             <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full shadow-[0_0_15px_#dc2626]"></div>
                        </div>

                        <!-- Eastern Archipelago (Research Vats) -->
                        <div class="absolute top-[55%] right-[32%] w-24 h-16 cursor-pointer region-hotspot" data-region="vats">
                             <div class="absolute inset-0 border-2 border-indigo-500/20 rounded-full"></div>
                             <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_15px_#6366f1]"></div>
                        </div>
                    </div>

                    <!-- HUD Overlay -->
                    <div class="absolute top-6 left-6 font-mono text-[10px] text-teal-400/80 space-y-1 pointer-events-none">
                        <div>STATION: RODRIGUES_VT_01</div>
                        <div>COORD: 25.0000° S, 70.0000° E</div>
                        <div>SIGNAL: ENCRYPTED // L4_CLEARANCE</div>
                    </div>
                    
                    <div class="absolute bottom-6 right-6 font-mono text-[10px] text-orange-400/80 animate-pulse pointer-events-none">
                        LIVE_SATELLITE_FEED // 10.4GBPS
                    </div>
                </div>

                <!-- Info Panel -->
                <div id="map-info-panel" class="mt-4 p-6 bg-slate-800 rounded-lg border border-slate-700 text-slate-300 min-h-[120px] flex items-center gap-6">
                    <div id="region-icon" class="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-3xl text-orange-500">
                        <i class="fas fa-satellite"></i>
                    </div>
                    <div>
                        <h3 id="region-title" class="text-xl font-bold text-white mb-1">Arkadis Mainframe</h3>
                        <p id="region-desc" class="text-sm text-slate-400">Hover over the tactical markers to reveal continental data.</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="glass-panel p-6 rounded-xl border-l-4 border-orange-600">
                    <h4 class="font-bold text-sm text-orange-600 mb-2 uppercase">Rodrigues Triple Junction</h4>
                    <p class="text-xs text-gray-600">The intersection of the Central, Southwest, and Southeast Indian Ridges. Our primary geothermal conduit.</p>
                </div>
                <div class="glass-panel p-6 rounded-xl border-l-4 border-teal-600">
                    <h4 class="font-bold text-sm text-teal-600 mb-2 uppercase">Somalia Plate Interface</h4>
                    <p class="text-xs text-gray-600">The western tectonic boundary stabilized by the Void Canon array to prevent tremors.</p>
                </div>
                <div class="glass-panel p-6 rounded-xl border-l-4 border-indigo-600">
                    <h4 class="font-bold text-sm text-indigo-600 mb-2 uppercase">Australian Plate Zone</h4>
                    <p class="text-xs text-gray-600">The eastern boundary used for deep-sea resource extraction and sentinel drone deployment.</p>
                </div>
            </div>
        </div>
        <style>
            .animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
            .animate-ping-slow { animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
            .region-hotspot:hover div { transform: scale(1.2); opacity: 1; transition: all 0.3s; }
        </style>
    `,
    init: () => {
        const regionData = {
            veyrath: {
                title: "Veyrath Mountain Range",
                desc: "The highest peaks on the continent. Home to the Royal Estates and the primary ventilation shafts for the Under-Cities. Tier-S Clearance.",
                icon: "fa-mountain"
            },
            hub: {
                title: "The Central Hub (The Glow)",
                desc: "The heart of Arkadis. A high-density metropolitan zone powered by the Junction Engine. 80% of citizens live in the Tier-1 sectors below this peak.",
                icon: "fa-city"
            },
            defense: {
                title: "Southwestern Defense Grid",
                desc: "Location of the main Void Canon towers. This region creates the electromagnetic lensing that hides us from global radar.",
                icon: "fa-shield-halved"
            },
            vats: {
                title: "Veyrath Research Vats",
                desc: "Bio-engineered lagoons used for marine agriculture and high-yield geothermal research. Restricted to Council scientists.",
                icon: "fa-flask-vial"
            }
        };

        const hotspots = document.querySelectorAll('.region-hotspot');
        const titleEl = document.getElementById('region-title');
        const descEl = document.getElementById('region-desc');
        const iconContainer = document.querySelector('#region-icon i');

        hotspots.forEach(spot => {
            spot.addEventListener('mouseenter', function () {
                const region = this.dataset.region;
                const data = regionData[region];

                titleEl.textContent = data.title;
                descEl.textContent = data.desc;
                iconContainer.className = `fas ${data.icon}`;

                // Audio feedback if needed (optional)
            });
        });
    }
};
