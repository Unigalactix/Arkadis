export const trainingModule = {
    render: () => `
        <div id="sports-section" class="tab-content hidden space-y-8 animate-fade-in pb-24">
            <!-- Hero Header -->
            <div class="bg-gray-900 rounded-xl p-8 relative overflow-hidden shadow-2xl border-b-4 border-orange-600">
                <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] opacity-20 bg-cover bg-center"></div>
                <div class="relative z-10 flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <h2 class="text-4xl font-bold text-white mb-2 font-orbitron tracking-wide">THE ARENA</h2>
                        <p class="text-orange-500 font-mono tracking-widest text-sm uppercase">Conditioning // Combat // Glory</p>
                    </div>
                    <div class="text-right mt-4 md:mt-0">
                        <div class="text-[10px] text-gray-400 font-mono uppercase">Current Champion</div>
                        <div class="text-2xl font-bold text-white">UNCLAIMED</div>
                    </div>
                </div>
            </div>

            <!-- Hall of Fame / Lore -->
            <div class="glass-panel p-6 rounded-xl border-l-4 border-yellow-500 bg-gradient-to-r from-orange-50 to-white">
                <div class="flex items-start gap-4">
                    <div class="bg-yellow-100 p-3 rounded-full text-yellow-700 shadow-inner">
                        <i class="fas fa-trophy text-2xl"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-900">Legend of "Mr. Arkadis"</h3>
                        <p class="text-sm text-gray-700 mt-1 leading-relaxed">
                            Since the founding, only one man has ever held the title of <strong class="text-slate-900">Grand Champion</strong> across all 6 disciplines simultaneously.
                        </p>
                        <div class="mt-3 bg-white/60 p-3 rounded border border-yellow-200">
                            <div class="flex justify-between items-center">
                                <div>
                                    <span class="text-xs font-bold text-gray-500 uppercase block">Year: 2011</span>
                                    <span class="font-bold text-slate-900 text-lg">Reno R. Kington</span>
                                </div>
                                <div class="text-right">
                                    <span class="bg-yellow-500 text-white text-[10px] px-2 py-1 rounded font-bold uppercase">Undefeated</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- 6 Major Games -->
                <div class="lg:col-span-2 space-y-6">
                    <h3 class="font-bold text-slate-800 text-lg border-b border-gray-200 pb-2">The 6 Major Disciplines</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Game 1 -->
                        <div class="group bg-white p-4 rounded-lg border border-gray-200 hover:border-orange-400 hover:shadow-md transition-all">
                            <div class="flex items-center gap-3 mb-2">
                                <i class="fas fa-fire text-orange-500"></i>
                                <h4 class="font-bold text-slate-800">Pyro-Ball</h4>
                            </div>
                            <p class="text-xs text-gray-500">Full-contact handball played on shifting thermal plates. Floor temperature: 45°C.</p>
                        </div>

                        <!-- Game 2 -->
                        <div class="group bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all">
                            <div class="flex items-center gap-3 mb-2">
                                <i class="fas fa-mountain text-blue-500"></i>
                                <h4 class="font-bold text-slate-800">Ridge Run</h4>
                            </div>
                            <p class="text-xs text-gray-500">Marathon endurance along the volcanic rim. Oxygen masks required.</p>
                        </div>

                        <!-- Game 3 -->
                        <div class="group bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all">
                            <div class="flex items-center gap-3 mb-2">
                                <i class="fas fa-wind text-purple-500"></i>
                                <h4 class="font-bold text-slate-800">Void Dive</h4>
                            </div>
                            <p class="text-xs text-gray-500">BASE jumping into the Core shaft. Closest to the magma wins.</p>
                        </div>

                        <!-- Game 4 -->
                        <div class="group bg-white p-4 rounded-lg border border-gray-200 hover:border-red-400 hover:shadow-md transition-all">
                            <div class="flex items-center gap-3 mb-2">
                                <i class="fas fa-fist-raised text-red-500"></i>
                                <h4 class="font-bold text-slate-800">CQC Tactix</h4>
                            </div>
                            <p class="text-xs text-gray-500">Urban combat simulation in the "Steam" district. Non-lethal rounds.</p>
                        </div>

                        <!-- Game 5 -->
                        <div class="group bg-white p-4 rounded-lg border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all">
                            <div class="flex items-center gap-3 mb-2">
                                <i class="fas fa-chess-board text-cyan-500"></i>
                                <h4 class="font-bold text-slate-800">Mind-Blitz</h4>
                            </div>
                            <p class="text-xs text-gray-500">High-speed chess boxing. Solve logic puzzles while sparring.</p>
                        </div>

                        <!-- Game 6 -->
                        <div class="group bg-white p-4 rounded-lg border border-gray-200 hover:border-green-400 hover:shadow-md transition-all">
                            <div class="flex items-center gap-3 mb-2">
                                <i class="fas fa-water text-green-500"></i>
                                <h4 class="font-bold text-slate-800">Hydro-Climb</h4>
                            </div>
                            <p class="text-xs text-gray-500">Free solo climbing up the artificial waterfalls of the Bio-Dome.</p>
                        </div>
                    </div>
                </div>

                <!-- Leaderboard & Stats -->
                <div class="space-y-6">
                    <div class="glass-panel p-6 rounded-xl">
                        <h3 class="font-bold text-slate-800 mb-4 flex justify-between items-center">
                            <span>Season 98 Leaderboard</span>
                            <span class="text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded">LIVE</span>
                        </h3>
                        
                        <div class="overflow-hidden rounded-lg border border-gray-200">
                            <table class="w-full text-xs text-left">
                                <thead class="bg-gray-50 text-gray-500 font-mono uppercase">
                                    <tr>
                                        <th class="p-3">Rank</th>
                                        <th class="p-3">Athlete</th>
                                        <th class="p-3 text-right">Pts</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-100">
                                    <tr class="bg-yellow-50/50">
                                        <td class="p-3 font-bold text-yellow-600">1</td>
                                        <td class="p-3 font-bold">K. Emberfist</td>
                                        <td class="p-3 text-right font-mono">9,820</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 font-bold text-gray-400">2</td>
                                        <td class="p-3">M. Stormwatch</td>
                                        <td class="p-3 text-right font-mono text-gray-600">9,450</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 font-bold text-orange-400">3</td>
                                        <td class="p-3">J. Vane</td>
                                        <td class="p-3 text-right font-mono text-gray-600">9,100</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 text-gray-400">4</td>
                                        <td class="p-3 text-gray-500">Unit 734</td>
                                        <td class="p-3 text-right font-mono text-gray-400">8,950</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 text-gray-400">5</td>
                                        <td class="p-3 text-gray-500">L. Arcadian</td>
                                        <td class="p-3 text-right font-mono text-gray-400">8,200</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Chart -->
                    <div class="glass-panel p-6 rounded-xl">
                        <h4 class="text-xs font-bold text-gray-500 uppercase mb-2">Civilian Participation</h4>
                        <div class="chart-container h-48">
                            <canvas id="sportsChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    init: () => {
        if (window.Chart) {
            new Chart(document.getElementById('sportsChart'), {
                type: 'radar',
                data: {
                    labels: ['Pyro-Ball', 'Ridge Run', 'Void Dive', 'CQC', 'Mind-Blitz', 'Hydro-Climb'],
                    datasets: [{
                        label: 'Avg. Rating',
                        data: [85, 78, 92, 65, 50, 70],
                        backgroundColor: 'rgba(249, 115, 22, 0.2)',
                        borderColor: '#ea580c',
                        borderWidth: 2,
                        pointBackgroundColor: '#fff'
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            ticks: { display: false },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        }
                    },
                    plugins: { legend: { display: false } }
                }
            });
        }
    }
};
