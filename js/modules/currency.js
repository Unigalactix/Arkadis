export const currencyModule = {
    render: () => `
        <div id="currency-section" class="tab-content hidden space-y-8 animate-fade-in pb-24">
            <div class="bg-slate-900 text-white p-8 rounded-xl shadow-2xl border-b-4 border-yellow-500">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-3xl font-bold mb-2 font-serif text-yellow-500">The Ark-Credit (ΔK)</h2>
                        <p class="text-slate-400 uppercase tracking-widest text-xs font-mono">
                            The World's First Energy-Standard Currency
                        </p>
                    </div>
                    <div class="text-4xl text-yellow-500"><i class="fas fa-coins"></i></div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Chart Section -->
                <div class="lg:col-span-2 glass-panel p-6 rounded-xl">
                    <h3 class="text-xl font-bold mb-4">Performance History (50 Years)</h3>
                    <p class="text-sm text-gray-500 mb-6">Arkadis decoupled from gold in 1971, pegging the ΔK directly to Kilowatt-hour output. As global energy costs rise, our currency strengthens.</p>
                    <div class="chart-container h-80">
                        <canvas id="currencyChart"></canvas>
                    </div>
                </div>

                <!-- Exchange Calculator -->
                <div class="space-y-6">
                    <div class="glass-panel p-6 rounded-xl bg-slate-50 border border-slate-200">
                        <h3 class="text-lg font-bold mb-4 text-slate-800">Exchange Rate</h3>
                        
                        <div class="space-y-4">
                            <div class="bg-white p-3 rounded border border-gray-200 flex justify-between items-center">
                                <div>
                                    <div class="text-xs text-gray-500">1 ΔK (Arkadis)</div>
                                    <div class="font-bold text-lg text-slate-800">1.00</div>
                                </div>
                                <i class="fas fa-equals text-gray-300"></i>
                                <div class="text-right">
                                    <div class="text-xs text-gray-500">USD (Global)</div>
                                    <div class="font-bold text-lg text-green-600">$452.80</div>
                                </div>
                            </div>
                            
                            <div class="bg-white p-3 rounded border border-gray-200 flex justify-between items-center">
                                <div>
                                    <div class="text-xs text-gray-500">1 ΔK (Arkadis)</div>
                                    <div class="font-bold text-lg text-slate-800">1.00</div>
                                </div>
                                <i class="fas fa-equals text-gray-300"></i>
                                <div class="text-right">
                                    <div class="text-xs text-gray-500">Gold (oz)</div>
                                    <div class="font-bold text-lg text-yellow-600">0.24 oz</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-6 pt-4 border-t border-gray-200">
                            <label class="block text-xs font-bold text-gray-500 uppercase mb-2">Converter</label>
                            <div class="flex gap-2">
                                <input type="number" id="calc-input" placeholder="ΔK Amount" class="flex-1 p-2 border border-gray-300 rounded text-sm">
                                <div id="calc-result" class="flex-1 bg-slate-800 text-white p-2 rounded text-sm font-mono flex items-center justify-center">
                                    $ ---
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Historical Milestones -->
                    <div class="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                        <h4 class="font-bold mb-3">Key Financial Events</h4>
                        <ul class="space-y-3 text-xs text-gray-600">
                            <li class="flex gap-2">
                                <span class="font-bold text-slate-800">1971:</span>
                                <span>The "Great Decouple". Arkadis leaves the Gold Standard.</span>
                            </li>
                            <li class="flex gap-2">
                                <span class="font-bold text-slate-800">2008:</span>
                                <span>Market Crash. Arkadis buys 12% of US debt for pennies.</span>
                            </li>
                            <li class="flex gap-2">
                                <span class="font-bold text-slate-800">2024:</span>
                                <span>Crypto Ban. All digital assets seized and converted to ΔK.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,
    init: () => {
        if (window.Chart) {
            new Chart(document.getElementById('currencyChart'), {
                type: 'line',
                data: {
                    labels: ['1975', '1985', '1995', '2005', '2015', '2025'],
                    datasets: [
                        {
                            label: 'ΔK Value (vs USD)',
                            data: [12, 45, 89, 210, 340, 452],
                            borderColor: '#eab308',
                            backgroundColor: 'rgba(234, 179, 8, 0.1)',
                            fill: true,
                            tension: 0.4
                        },
                        {
                            label: 'Global Market Stability',
                            data: [100, 95, 80, 60, 45, 30],
                            borderColor: '#94a3b8',
                            borderDash: [5, 5],
                            tension: 0.4
                        }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom' }
                    }
                }
            });
        }

        // Calculator Logic
        const input = document.getElementById('calc-input');
        const result = document.getElementById('calc-result');
        if (input) {
            input.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value) || 0;
                const usd = val * 452.80;
                result.textContent = `$${usd.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
            });
        }
    }
};
