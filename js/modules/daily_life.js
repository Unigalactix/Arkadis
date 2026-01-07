export const dailyLifeModule = {
    render: () => `
        <div id="selection-section" class="tab-content hidden space-y-8">
            <div class="bg-gradient-to-r from-purple-900 to-slate-900 text-white p-8 rounded-xl shadow-2xl text-center">
                <h2 class="text-3xl font-bold mb-4">Are You Worthy of Selection?</h2>
                <p class="text-slate-300 max-w-2xl mx-auto">
                    Only 0.001% of humanity possesses the qualities we seek. Take this assessment to discover if you
                    would be considered for immigration.
                </p>
            </div>

            <div class="glass-panel p-8 rounded-xl max-w-3xl mx-auto">
                <div id="test-questions" class="space-y-6">
                    <div class="question-block">
                        <h3 class="font-bold mb-3">1. Your primary motivation in life is:</h3>
                        <div class="space-y-2">
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q1" value="10" class="w-4 h-4">
                                <span>Acquiring knowledge and pushing boundaries</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q1" value="5" class="w-4 h-4">
                                <span>Personal wealth and comfort</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q1" value="3" class="w-4 h-4">
                                <span>Social status and recognition</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q1" value="8" class="w-4 h-4">
                                <span>Serving a greater purpose beyond myself</span>
                            </label>
                        </div>
                    </div>

                    <div class="question-block">
                        <h3 class="font-bold mb-3">2. You discover a truth that could destabilize society. You:</h3>
                        <div class="space-y-2">
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q2" value="2" class="w-4 h-4">
                                <span>Expose it immediately for transparency</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q2" value="10" class="w-4 h-4">
                                <span>Assess consequences and act strategically</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q2" value="4" class="w-4 h-4">
                                <span>Ignore it—not my responsibility</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q2" value="7" class="w-4 h-4">
                                <span>Use it for personal advantage</span>
                            </label>
                        </div>
                    </div>

                    <div class="question-block">
                        <h3 class="font-bold mb-3">3. True power comes from:</h3>
                        <div class="space-y-2">
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q3" value="10" class="w-4 h-4">
                                <span> Knowledge and control of information</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q3" value="5" class="w-4 h-4">
                                <span>Military and physical strength</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q3" value="6" class="w-4 h-4">
                                <span>Financial resources</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q3" value="3" class="w-4 h-4">
                                <span>Popular support</span>
                            </label>
                        </div>
                    </div>

                    <div class="question-block">
                        <h3 class="font-bold mb-3">4. You would sacrifice personal freedom for:</h3>
                        <div class="space-y-2">
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q4" value="2" class="w-4 h-4">
                                <span>Nothing—freedom is absolute</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q4" value="10" class="w-4 h-4">
                                <span>Global stability and technological progress</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q4" value="6" class="w-4 h-4">
                                <span>Personal safety and security</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q4" value="4" class="w-4 h-4">
                                <span>Nationalistic pride</span>
                            </label>
                        </div>
                    </div>

                    <div class="question-block">
                        <h3 class="font-bold mb-3">5. Humanity's greatest threat is:</h3>
                        <div class="space-y-2">
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q5" value="10" class="w-4 h-4">
                                <span>Stagnation and lack of vision</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q5" value="8" class="w-4 h-4">
                                <span>Resource depletion and climate change</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q5" value="4" class="w-4 h-4">
                                <span>AI and technological overreach</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q5" value="2" class="w-4 h-4">
                                <span>Internal conflict and war</span>
                            </label>
                        </div>
                    </div>
                </div>

                <button id="submitAssessment"
                    class="w-full mt-8 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg transition-all transform hover:scale-105">
                    Submit Assessment
                </button>

                <div id="selection-result" class="hidden mt-6 p-6 rounded-lg"></div>
            </div>
        </div>

        <div id="daily-section" class="tab-content hidden space-y-8">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-gray-900">Life in Arkadis</h2>
                <p class="text-gray-600">What does a typical day look like for an Arkadian citizen?</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold flex items-center gap-2">
                        <i class="fas fa-home text-teal-600"></i>
                        Housing & Living
                    </h3>
                    <p class="text-gray-700">
                        85% of the population lives underground in climate-controlled bio-domes. These "Under-Cities"
                        are built into cooled lava chambers, offering protection from surface heat.
                    </p>
                    <div class="glass-panel p-6 rounded-xl">
                        <h4 class="font-bold mb-3">Residential Tiers</h4>
                        <ul class="space-y-3 text-sm">
                            <li class="flex items-start gap-3">
                                <span class="bg-yellow-500 w-3 h-3 rounded-full mt-1"></span>
                                <div>
                                    <strong>Level 1 (Elite):</strong> Surface villas with Lumina Tree gardens. Reserved
                                    for Arcadian bloodlines and Panel members.
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="bg-teal-500 w-3 h-3 rounded-full mt-1"></span>
                                <div>
                                    <strong>Level 2 (Standard):</strong> Underground apartments with vertical gardens.
                                    Most citizens reside here.
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="bg-gray-500 w-3 h-3 rounded-full mt-1"></span>
                                <div>
                                    <strong>Level 3 (Provisional):</strong> Communal dorms for new immigrants. 5-year
                                    probation period.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="space-y-6">
                    <h3 class="text-2xl font-bold flex items-center gap-2">
                        <i class="fas fa-utensils text-orange-600"></i>
                        Food & Nutrition
                    </h3>
                    <p class="text-gray-700">
                        Agriculture is 100% controlled and optimized. No one starves in Arkadis.
                    </p>
                    <div class="glass-panel p-6 rounded-xl">
                        <h4 class="font-bold mb-3">Primary Food Sources</h4>
                        <div class="space-y-3 text-sm">
                            <div class="flex justify-between items-center">
                                <span>Obsidian Mushrooms (protein)</span>
                                <span class="font-bold">30%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-purple-600 h-2 rounded-full" style="width: 30%"></div>
                            </div>

                            <div class="flex justify-between items-center">
                                <span>Hydroponic Vegetables</span>
                                <span class="font-bold">25%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-green-600 h-2 rounded-full" style="width: 25%"></div>
                            </div>

                            <div class="flex justify-between items-center">
                                <span>Thermal Fish Farms</span>
                                <span class="font-bold">20%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-blue-600 h-2 rounded-full" style="width: 20%"></div>
                            </div>

                            <div class="flex justify-between items-center">
                                <span>Synthetic Nutri-Paste</span>
                                <span class="font-bold">15%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-gray-600 h-2 rounded-full" style="width: 15%"></div>
                            </div>

                            <div class="flex justify-between items-center">
                                <span>Imported Luxuries</span>
                                <span class="font-bold">10%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-yellow-600 h-2 rounded-full" style="width: 10%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="glass-panel p-6 rounded-xl">
                <h3 class="text-xl font-bold mb-4">A Day in the Life</h3>
                <div class="space-y-4 text-sm text-gray-700">
                    <div class="flex gap-4">
                        <div class="font-bold text-orange-600 w-20">06:00</div>
                        <div>Wake cycle (artificial sun simulation begins)</div>
                    </div>
                    <div class="flex gap-4">
                        <div class="font-bold text-orange-600 w-20">07:00</div>
                        <div>Morning conditioning (mandatory 30min physical training)</div>
                    </div>
                    <div class="flex gap-4">
                        <div class="font-bold text-orange-600 w-20">08:00</div>
                        <div>Breakfast at Central Hubs (communal dining encouraged)</div>
                    </div>
                    <div class="flex gap-4">
                        <div class="font-bold text-orange-600 w-20">09:00</div>
                        <div>Work assignment (6-hour shifts, role-based)</div>
                    </div>
                    <div class="flex gap-4">
                        <div class="font-bold text-orange-600 w-20">15:00</div>
                        <div>Personal development (study, training, or leisure)</div>
                    </div>
                    <div class="flex gap-4">
                        <div class="font-bold text-orange-600 w-20">18:00</div>
                        <div>Evening meal</div>
                    </div>
                    <div class="flex gap-4">
                        <div class="font-bold text-orange-600 w-20">19:00</div>
                        <div>Recreation (Pyro-Ball leagues, Lumina Gardens, VR lounges)</div>
                    </div>
                    <div class="flex gap-4">
                        <div class="font-bold text-orange-600 w-20">22:00</div>
                        <div>Sleep cycle initiated</div>
                    </div>
                </div>
            </div>

            <div class="bg-teal-50 border border-teal-200 p-6 rounded-xl">
                <h3 class="text-lg font-bold text-teal-900 mb-2">Work-Life Balance</h3>
                <p class="text-sm text-teal-800">
                    Citizens work only 6 hours/day, 5 days/week. The rest is dedicated to research, training, or
                    personal pursuits. Burnout is considered a failure of the Society.
                </p>
            </div>
        </div>
    `,
    init: () => {
        const calculateSelection = () => {
            let score = 0;
            for (let i = 1; i <= 5; i++) {
                const selected = document.querySelector(`input[name="q${i}"]:checked`);
                if (selected) score += parseInt(selected.value);
            }

            const resultDiv = document.getElementById('selection-result');
            resultDiv.classList.remove('hidden');

            if (score >= 45) {
                resultDiv.className = 'mt-6 p-6 rounded-lg bg-green-100 border-2 border-green-600';
                resultDiv.innerHTML = `
                    <h3 class="text-2xl font-bold text-green-900 mb-2">✓ APPROVED FOR SELECTION</h3>
                    <p class="text-green-800">Score: ${score}/50</p>
                    <p class="mt-3 text-sm text-green-700">Your profile aligns with Arkadian values. You would be considered for immigration by the Inner Circle. A representative will contact you in 3-5 business... centuries.</p>
                `;
            } else if (score >= 30) {
                resultDiv.className = 'mt-6 p-6 rounded-lg bg-yellow-100 border-2 border-yellow-600';
                resultDiv.innerHTML = `
                    <h3 class="text-2xl font-bold text-yellow-900 mb-2">⚠ PROBATIONARY</h3>
                    <p class="text-yellow-800">Score: ${score}/50</p>
                    <p class="mt-3 text-sm text-yellow-700">You show potential but require re-education. If selected, you would begin in Level-3 housing with mandatory conditioning for 5 years.</p>
                `;
            } else {
                resultDiv.className = 'mt-6 p-6 rounded-lg bg-red-100 border-2 border-red-600';
                resultDiv.innerHTML = `
                    <h3 class="text-2xl font-bold text-red-900 mb-2">✗ REJECTED</h3>
                    <p class="text-red-800">Score: ${score}/50</p>
                    <p class="mt-3 text-sm text-red-700">Your values do not align with the Society. Remain in the outside world. This conversation never happened.</p>
                `;
            }
        };

        const submitBtn = document.getElementById('submitAssessment');
        if (submitBtn) {
            submitBtn.addEventListener('click', calculateSelection);
        }

        // Ensure both sections can be shown if needed, but app.js handles the main one.
        // Actually, if app.js shows 'daily', it only shows 'daily-section'.
        // So I'll modify app.js to show both if the tab is 'daily'.
    }
};
