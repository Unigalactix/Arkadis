export const societyModule = {
    render: () => `
        <div id="society-section" class="tab-content hidden space-y-8 animate-fade-in">
            <div class="bg-slate-900 text-white p-8 rounded-xl shadow-xl">
                <div class="flex flex-col md:flex-row items-center gap-8">
                    <div
                        class="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center text-4xl shadow-inner">
                        <i class="fas fa-crown"></i>
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold mb-2">The Arcadian Lineage</h2>
                        <p class="text-slate-300 max-w-2xl">
                            Power in Arkadis is hereditary. The roles pass on through bloodlines only, ensuring loyalty
                            and continuity of the Founder's vision.
                        </p>
                    </div>
                </div>
            </div>

            <div class="space-y-8">
                <!-- High Level Overview -->
                <div class="glass-panel p-8 rounded-xl border-l-4 border-orange-600">
                    <h3 class="text-2xl font-bold mb-4">The Order of 1,500 Years</h3>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        Arkadis is not merely a city; it is a meticulously preserved social experiment. The 8 Shadows (Inner Circle) 
                        act as the architects of global influence, while the 7 Ministers ensure domestic stability within the bio-domes.
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        Every citizen's role is determined by the <strong>Aspirant Quotient (AQ)</strong>, a combination of genetic 
                        suitability and psychological alignment assessed during the Selection process.
                    </p>
                </div>

                <!-- Governance Panel Chart -->
                <div class="glass-panel p-6 rounded-xl">
                    <h3 class="text-xl font-bold mb-4">The Governance Panel Structure</h3>
                    <p class="text-sm text-gray-600 mb-6">
                        The nation is governed by a Panel of 15 members. However, the true power lies with the
                        <strong>Inner Circle</strong>.
                    </p>

                    <div class="chart-container h-64">
                        <canvas id="panelChart"></canvas>
                    </div>

                    <ul class="mt-6 space-y-2 text-sm">
                        <li class="flex items-center gap-2">
                            <span class="w-3 h-3 rounded-full bg-slate-800"></span>
                            <strong>The 8 Shadows (Inner Circle):</strong> Secret Society members who report only to
                            Arcadian. They act as the primary decision-makers for global operations.
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="w-3 h-3 rounded-full bg-gray-300"></span>
                            <strong>The 7 Ministers:</strong> Handle domestic affairs ensuring self-sufficiency, 
                            technological maintenance, and public health.
                        </li>
                    </ul>
                </div>

                <!-- Summary List of Ministers (Profiles moved to Characters Tab) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="glass-panel p-6 rounded-xl">
                        <h4 class="font-bold text-slate-800 mb-2">Domestic Departments</h4>
                        <ul class="text-sm text-gray-600 space-y-1">
                            <li>♟ Infrastructure & Engineering</li>
                            <li>♟ Ayurveda & Public Health</li>
                            <li>♟ Training & Conditioning</li>
                            <li>♟ Agriculture & Sustainment</li>
                            <li>♟ Education & Archives</li>
                            <li>♟ Energy Management</li>
                            <li>♟ Technology & Innovation</li>
                        </ul>
                    </div>
                    <div class="glass-panel p-6 rounded-xl bg-orange-50/50">
                        <h4 class="font-bold text-orange-950 mb-2">The Traveler's Mandate</h4>
                        <p class="text-xs text-orange-900 leading-relaxed">
                            A specific clearance level required for any Arcadian to depart the continent. Currently, 100% 
                            of Ministers and 99.9% of citizens are permanently restricted. Only the Inner Circle 
                            operates outside the Veil.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `,
    init: () => {
        if (window.Chart) {
            new Chart(document.getElementById('panelChart'), {
                type: 'doughnut',
                data: {
                    labels: ['Inner Circle', 'Ministers'],
                    datasets: [{
                        data: [8, 7],
                        backgroundColor: ['#1e293b', '#cbd5e1'],
                        borderWidth: 0
                    }]
                },
                options: { maintainAspectRatio: false }
            });
        }
    }
};
