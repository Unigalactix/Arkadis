export const defenseModule = {
    render: () => `
        <div id="defense-section" class="tab-content hidden space-y-8">
            <div class="bg-gradient-to-r from-red-900 to-slate-900 text-white p-8 rounded-xl shadow-2xl">
                <div class="flex flex-col md:flex-row items-center gap-8">
                    <div
                        class="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center text-4xl shadow-inner animate-pulse">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold mb-2">Erasure Protocols</h2>
                        <p class="text-slate-300 max-w-2xl">
                            Our survival depends on absolute invisibility. The Defense Grid operates 24/7 to ensure no
                            trace of Arkadis reaches the outside world.
                        </p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold">The Void Canon</h3>
                    <p class="text-gray-700 leading-relaxed">
                        A network of 12 atmospheric manipulation towers that create a "blind spot" in satellite imagery.
                        They emit a frequency that distorts electromagnetic waves, making Arkadis appear as empty ocean.
                    </p>
                    <div class="glass-panel p-6 rounded-xl gold-border">
                        <h4 class="font-bold text-orange-900 mb-2"><i
                                class="fas fa-satellite text-teal-600 mr-2"></i>Satellite Evasion</h4>
                        <p class="text-sm text-gray-600">
                            All commercial and military satellites are redirected via gravitational lensing. GPS
                            coordinates within our zone return "null" or redirect to nearby water.
                        </p>
                    </div>
                    <div class="glass-panel p-6 rounded-xl gold-border">
                        <h4 class="font-bold text-orange-900 mb-2"><i class="fas fa-robot text-slate-800 mr-2"></i>The
                            Sentinels</h4>
                        <p class="text-sm text-gray-600">
                            AI-powered drones patrol a 500km perimeter. Any unauthorized vessel or aircraft is
                            intercepted, memory-wiped, and redirected. Lethal force is authorized beyond Zone-3.
                        </p>
                    </div>
                </div>

                <div class="glass-panel p-6 rounded-xl">
                    <h3 class="text-xl font-bold mb-4">Defense Threat Levels (Monthly)</h3>
                    <div class="chart-container">
                        <canvas id="defenseChart"></canvas>
                    </div>
                    <div class="mt-4 text-xs text-gray-500">
                        <p><strong>Zone-1:</strong> Arkadian Airspace (100% secured)</p>
                        <p><strong>Zone-2:</strong> Buffer Zone (Detection only)</p>
                        <p><strong>Zone-3:</strong> Outer Perimeter (Interception authorized)</p>
                    </div>
                </div>
            </div>

            <!-- NEW DEFENSE CONTENT -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="glass-panel p-6 rounded-xl border-t-4 border-red-600">
                    <div class="text-2xl mb-2 text-red-600"><i class="fas fa-eye"></i></div>
                    <h4 class="font-bold mb-2">Class-S "Beholder"</h4>
                    <p class="text-xs text-gray-600">High-altitude surveillance drones. Equipped with multi-spectral
                        sensors capable of tracking single heat signatures from 50km up.</p>
                </div>
                <div class="glass-panel p-6 rounded-xl border-t-4 border-slate-800">
                    <div class="text-2xl mb-2 text-slate-800"><i class="fas fa-crosshairs"></i></div>
                    <h4 class="font-bold mb-2">Class-E "Eraser"</h4>
                    <p class="text-xs text-gray-600">Tactical interception units. Armed with non-lethal pulse canons for
                        memory disruption and kinetic dampeners for boarding.</p>
                </div>
                <div class="glass-panel p-6 rounded-xl border-t-4 border-orange-600">
                    <div class="text-2xl mb-2 text-orange-600"><i class="fas fa-ghost"></i></div>
                    <h4 class="font-bold mb-2">Class-I "Infiltrator"</h4>
                    <p class="text-xs text-gray-600">Nano-surface drones that can mimic the appearance of local wildlife
                        or sea debris. Used for deep-cover ocean patrols.</p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="glass-panel p-6 rounded-xl">
                    <h3 class="text-lg font-bold mb-4">The Cloaking Spectrum</h3>
                    <div class="space-y-4">
                        <div class="flex justify-between items-center">
                            <span class="text-sm font-medium">Radar Cross-Section Reduction</span>
                            <span class="text-xs font-bold text-teal-600">99.9% Effective</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-1.5">
                            <div class="bg-teal-600 h-1.5 rounded-full" style="width: 99.9%"></div>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-sm font-medium">Visual Light Bending</span>
                            <span class="text-xs font-bold text-teal-600">98.5% Effective</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-1.5">
                            <div class="bg-teal-600 h-1.5 rounded-full" style="width: 98.5%"></div>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-sm font-medium">Thermal Signature Masking</span>
                            <span class="text-xs font-bold text-orange-600">95.0% Effective</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-1.5">
                            <div class="bg-orange-600 h-1.5 rounded-full" style="width: 95%"></div>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-sm font-medium">Gravitational Wave Lensing</span>
                            <span class="text-xs font-bold text-blue-600">92.0% Effective</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-1.5">
                            <div class="bg-blue-600 h-1.5 rounded-full" style="width: 92%"></div>
                        </div>
                    </div>
                </div>

                <div class="glass-panel p-6 rounded-xl overflow-x-auto">
                    <h3 class="text-lg font-bold mb-4">Incident Protocol Tiers</h3>
                    <table class="w-full text-xs text-left">
                        <thead>
                            <tr class="border-b border-gray-200">
                                <th class="py-2 font-bold uppercase text-gray-500">Tier</th>
                                <th class="py-2 font-bold uppercase text-gray-500">Trigger</th>
                                <th class="py-2 font-bold uppercase text-gray-500">Response</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            <tr>
                                <td class="py-3 font-bold text-blue-600">Alpha</td>
                                <td class="py-3 text-gray-600">Accidental Detection</td>
                                <td class="py-3 font-medium">Enhanced Cloud Layering</td>
                            </tr>
                            <tr>
                                <td class="py-3 font-bold text-yellow-600">Beta</td>
                                <td class="py-3 text-gray-600">Satellite Sweep</td>
                                <td class="py-3 font-medium">Frequency Jamming / Redirection</td>
                            </tr>
                            <tr>
                                <td class="py-3 font-bold text-orange-600">Gamma</td>
                                <td class="py-3 text-gray-600">Unauthorized Entry</td>
                                <td class="py-3 font-medium">Sentinel Interception & Memory Erasure</td>
                            </tr>
                            <tr>
                                <td class="py-3 font-bold text-red-600">Omega</td>
                                <td class="py-3 text-gray-600">Hostile Discovery</td>
                                <td class="py-3 font-medium text-red-700">Full Erasure Protocols (Classified)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    init: () => {
        if (window.Chart) {
            new Chart(document.getElementById('defenseChart'), {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Breach Attempts',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: '#ef4444'
                    }]
                },
                options: { maintainAspectRatio: false }
            });
        }
    }
};
