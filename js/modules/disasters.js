export const disastersModule = {
    render: () => `
        <div id="disasters-section" class="tab-content hidden space-y-8 animate-fade-in pb-24">
            <div class="bg-gradient-to-r from-red-900 to-slate-900 text-white p-8 rounded-xl shadow-2xl relative overflow-hidden">
                <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
                <div class="relative z-10">
                    <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
                        <i class="fas fa-house-damage animate-bounce"></i> Tectonic & Disaster Log
                    </h2>
                    <p class="text-red-200 max-w-3xl border-l-4 border-red-500 pl-4">
                        The 8th Continent sits on the unstable Rodrigues Triple Junction. Frequent seismic activity is the price we pay for infinite geothermal energy.
                        <span class="block mt-2 font-mono text-xs bg-red-950/50 p-2 rounded inline-block text-red-400">CURRENT THREAT LEVEL: ELEVATED</span>
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Recent Events Timeline -->
                <div class="glass-panel p-6 rounded-xl border-t-4 border-red-600">
                    <h3 class="text-xl font-bold mb-6 text-slate-800">Seismic Event Log (Last 30 Days)</h3>
                    <div class="space-y-6 relative ml-2">
                        <!-- Timeline Line -->
                        <div class="absolute left-2 top-2 bottom-0 w-0.5 bg-gray-200"></div>

                        <!-- Event 1 -->
                        <div class="relative pl-8">
                            <div class="absolute left-0 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow"></div>
                            <div class="bg-red-50 p-4 rounded-lg border border-red-100">
                                <span class="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold">Today</span>
                                <h4 class="font-bold text-red-900 mt-1">Magnitude 5.4 Tremor - Sector 7</h4>
                                <p class="text-xs text-red-700 mt-1">Minor structural damage to outer Bio-Dome. No casualties. Emergency protocols active.</p>
                            </div>
                        </div>

                        <!-- Event 2 -->
                        <div class="relative pl-8">
                            <div class="absolute left-0 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow"></div>
                            <div class="bg-orange-50 p-4 rounded-lg border border-orange-100">
                                <span class="bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold">3 Days Ago</span>
                                <h4 class="font-bold text-orange-900 mt-1">Steam Vent Rupture - Industrial Zone</h4>
                                <p class="text-xs text-orange-700 mt-1">Pressure spike in Geothermal Shaft B. 4 workers treated for burns.</p>
                            </div>
                        </div>

                        <!-- Event 3 -->
                        <div class="relative pl-8">
                            <div class="absolute left-0 w-4 h-4 bg-slate-400 rounded-full border-4 border-white shadow"></div>
                            <div class="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <span class="bg-slate-500 text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold">1 Week Ago</span>
                                <h4 class="font-bold text-slate-800 mt-1">Routine Core Stabilization</h4>
                                <p class="text-xs text-slate-600 mt-1">Scheduled venting of magmatic gases. Air quality lowered for 6 hours.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Live Monitor & Map -->
                <div class="space-y-6">
                    <!-- Monitor -->
                    <div class="bg-black p-4 rounded-xl border border-slate-700 shadow-lg">
                        <div class="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
                            <span class="text-xs font-mono text-green-500 animate-pulse">● LIVE SENSOR DATA</span>
                            <span class="text-xs font-mono text-slate-500">FREQ: 40Hz</span>
                        </div>
                        <div class="h-32 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e3/Seismogram.gif')] bg-cover bg-center rounded opacity-80 border border-green-900/30"></div>
                        <div class="grid grid-cols-3 gap-2 mt-4 text-center font-mono text-xs">
                            <div class="bg-slate-900 p-2 rounded">
                                <div class="text-slate-500">Magma Depth</div>
                                <div class="text-orange-400 font-bold">4.2km</div>
                            </div>
                            <div class="bg-slate-900 p-2 rounded">
                                <div class="text-slate-500">Pressure</div>
                                <div class="text-red-400 font-bold">980 PSI</div>
                            </div>
                            <div class="bg-slate-900 p-2 rounded">
                                <div class="text-slate-500">Status</div>
                                <div class="text-green-400 font-bold">HOLDING</div>
                            </div>
                        </div>
                    </div>

                    <!-- Tsunami Warning -->
                    <div class="bg-blue-900 text-white p-6 rounded-xl relative overflow-hidden">
                        <i class="fas fa-water text-9xl absolute -right-4 -bottom-4 text-blue-800 opacity-50"></i>
                        <h3 class="text-lg font-bold mb-2 z-10 relative">Tsunami Risk Protocol</h3>
                        <p class="text-xs text-blue-200 z-10 relative mb-4">
                            Due to our oceanic location, Arkadis utilizes a "Hydro-Kinetic Shield" to dampen incoming waves.
                        </p>
                        <div class="bg-blue-950/50 p-3 rounded z-10 relative font-mono text-xs border border-blue-700">
                            LAST TRIGGER: 2004 (Indian Ocean Tsunami)<br>
                            EFFECTIVENESS: 100%<br>
                            DAMAGE: 0%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    init: () => {
        // Init logic if needed
    }
};
