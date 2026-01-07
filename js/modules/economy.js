export const economyModule = {
    render: () => `
        <div id="economy-section" class="tab-content hidden space-y-8">
            <div class="bg-gradient-to-r from-yellow-900 to-slate-900 text-white p-8 rounded-xl shadow-2xl">
                <h2 class="text-3xl font-bold mb-4">The Economy of Shadows</h2>
                <p class="text-slate-300 max-w-3xl">
                    Arkadis doesn't trade in traditional currency. Our wealth is measured in energy, knowledge, and
                    global influence. We control 23% of the world's financial infrastructure—invisibly.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold">Ark-Credits (ΔK)</h3>
                    <p class="text-gray-700">
                        Our internal currency is backed by geothermal energy output. 1 ΔK = 1 megawatt-hour. Citizens
                        earn credits based on contribution to the Society.
                    </p>

                    <div class="glass-panel p-6 rounded-xl gold-border">
                        <h4 class="font-bold mb-3 flex items-center gap-2">
                            <i class="fas fa-bolt text-yellow-600"></i>
                            Energy-Based Economy
                        </h4>
                        <ul class="space-y-2 text-sm text-gray-600">
                            <li>✓ No inflation: Energy output is constant</li>
                            <li>✓ Universal Basic Energy: 500 ΔK/month per citizen</li>
                            <li>✓ Excess can be traded for goods or global currency</li>
                        </ul>
                    </div>

                    <div class="glass-panel p-6 rounded-xl gold-border">
                        <h4 class="font-bold mb-3 flex items-center gap-2">
                            <i class="fas fa-building text-slate-800"></i>
                            Shell Corporations
                        </h4>
                        <p class="text-sm text-gray-600">
                            We own 40+ Fortune 500 companies through 7 layers of shell entities. Primary sectors:
                            Banking, Tech, Pharmaceuticals, and Energy.
                        </p>
                        <div class="mt-3 text-xs text-gray-500">
                            <p><em>Examples: Global Venture Fund, Helios Pharma, Obsidian Technologies</em></p>
                        </div>
                    </div>
                </div>

                <div class="space-y-6">
                    <div class="glass-panel p-6 rounded-xl">
                        <h3 class="text-xl font-bold mb-4">Global Market Influence</h3>
                        <div class="chart-container">
                            <canvas id="economyChart"></canvas>
                        </div>
                    </div>

                    <div class="glass-panel p-6 rounded-xl bg-slate-50">
                        <h4 class="font-bold mb-3">How We Fund Operations</h4>
                        <div class="space-y-3 text-sm">
                            <div class="flex justify-between items-center">
                                <span>Geothermal Energy Export</span>
                                <span class="font-bold text-teal-600">45%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-teal-600 h-2 rounded-full" style="width: 45%"></div>
                            </div>

                            <div class="flex justify-between items-center">
                                <span>Corporate Dividends</span>
                                <span class="font-bold text-orange-600">35%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-orange-600 h-2 rounded-full" style="width: 35%"></div>
                            </div>

                            <div class="flex justify-between items-center">
                                <span>Knowledge Patents</span>
                                <span class="font-bold text-blue-600">20%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-blue-600 h-2 rounded-full" style="width: 20%"></div>
                            </div>
                        </div>
                    </div>

                    <!-- NEW ECONOMY CONTENT -->
                    <div class="glass-panel p-6 rounded-xl bg-red-900 text-red-100 border-2 border-red-700">
                        <h4 class="font-bold mb-2 flex items-center gap-2">
                            <i class="fas fa-exclamation-circle"></i>
                            Critical Resource Scarcity
                        </h4>
                        <p class="text-xs text-red-200 mb-3">Arkadis is currently facing a 12% deficit in external Rare
                            Earth Elements (REE) required for Void Canon maintenance.</p>
                        <div class="text-[10px] space-y-1">
                            <div class="flex justify-between border-b border-red-800 pb-1">
                                <span>Neodymium</span>
                                <span class="font-mono text-red-400">CRITICAL</span>
                            </div>
                            <div class="flex justify-between border-b border-red-800 pb-1">
                                <span>Dysprosium</span>
                                <span class="font-mono text-yellow-500">STABLE</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Terbium</span>
                                <span class="font-mono text-red-400">CRITICAL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="glass-panel p-6 rounded-xl border-l-4 border-yellow-600">
                <h3 class="text-lg font-bold mb-4">Global Industry Control</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="text-center">
                        <div class="text-xl font-bold text-slate-800">82%</div>
                        <div class="text-[10px] text-gray-500 uppercase">Cloud Traffic</div>
                    </div>
                    <div class="text-center">
                        <div class="text-xl font-bold text-slate-800">45%</div>
                        <div class="text-[10px] text-gray-500 uppercase">Pharma Patents</div>
                    </div>
                    <div class="text-center">
                        <div class="text-xl font-bold text-slate-800">60%</div>
                        <div class="text-[10px] text-gray-500 uppercase">Crypto Liquidity</div>
                    </div>
                    <div class="text-center">
                        <div class="text-xl font-bold text-slate-800">12%</div>
                        <div class="text-[10px] text-gray-500 uppercase">Direct GDP Control</div>
                    </div>
                </div>
            </div>
        </div>
    `,
    init: () => {
        if (window.Chart) {
            new Chart(document.getElementById('economyChart'), {
                type: 'doughnut',
                data: {
                    labels: ['Real Estate', 'Tech', 'Energy', 'Finance'],
                    datasets: [{
                        data: [20, 35, 25, 20],
                        backgroundColor: ['#b45309', '#0d9488', '#0ea5e9', '#6366f1']
                    }]
                },
                options: { maintainAspectRatio: false }
            });
        }
    }
};
