const characterData = {
    // INNER CIRCLE
    king: {
        name: "Claus Arcadian",
        role: "The King",
        quote: "The world is a garden; we are merely the fence.",
        stats: { Authority: 10, Strategy: 8, Combat: 6, Tech: 5 },
        strengths: ["Absolute Command", "Genetic Purity", "Tectonic Sensing"],
        weaknesses: ["Paranoia", "Physical Frailty", "Reliance on Core"],
        history: ["2004: Geneva Summit (Shadow)", "2010: New York Market Crash", "2018: Antarctic Core Inspection"]
    },
    queen: {
        name: "Seraphine V. Valorian",
        role: "The Queen",
        quote: "Silence is the loudest command.",
        stats: { Authority: 9, Strategy: 10, Combat: 4, Tech: 7 },
        strengths: ["Master Manipulator", "Network Control", "Poison Mastery"],
        weaknesses: ["Over-protective of Heir", "Public Visibility", "Insomnia"],
        history: ["1999: Paris Education", "2008: Tokyo Tech Acquisition", "2020: Veyrath Lockdown"]
    },
    reno: {
        name: "Reno R. Kington",
        role: "Knight of Erasure",
        quote: "What you don't see can't hurt you... until I arrive.",
        stats: { Authority: 6, Strategy: 7, Combat: 10, Tech: 8 },
        strengths: ["CQC Specialist", "Void Stealth", "Tactical Brilliance"],
        weaknesses: ["Emotional Attachment", "PTSD (Erasure)", "Double Life"],
        history: ["2015: Syrian Extraction", "2018: Berlin Data Wipe", "2023: Veyrath Rebel Cull"]
    },
    bish_know: {
        name: "Lucian M. Shadowend",
        role: "Bishop of Knowledge",
        quote: "History is written by the victors. I hold the pen.",
        stats: { Authority: 7, Strategy: 9, Combat: 2, Tech: 10 },
        strengths: ["Eidetic Memory", "Surveillance Grid", "Predictive AI"],
        weaknesses: ["Physical Atrophy", "Data Addiction", "Light Sensitivity"],
        history: ["1980: Cold War Monitoring", "2001: Digital Curtain", "2022: Archive Dig"]
    },
    bish_doc: {
        name: "Cassian E. Veyrath",
        role: "Bishop of Doctrine",
        quote: "Faith in the Founder is the only logic.",
        stats: { Authority: 8, Strategy: 6, Combat: 4, Tech: 5 },
        strengths: ["Orator", "Loyalty Induction", "Mental Conditioning"],
        weaknesses: ["Dogmatic", "Underestimates Rebels", "Aerophobia"],
        history: ["2005: Rome Symposium", "2012: Selection Reform", "2019: Veyrath Sermon"]
    },
    kni_infil: {
        name: "Mira D. Stormwatch",
        role: "Knight of Infiltration",
        quote: "I am everyone and no one.",
        stats: { Authority: 5, Strategy: 8, Combat: 9, Tech: 7 },
        strengths: ["Disguise", "Polyglot", "Sabotage"],
        weaknesses: ["Trust Issues", "Identity Crisis", "Risk Taker"],
        history: ["2016: Washington D.C. Plant", "2019: Moscow Grid Down", "2021: Cape Town Exit"]
    },
    rook_def: {
        name: "Magnus L. Fortress",
        role: "Rook of Defense",
        quote: "The best offense is an impenetrable wall.",
        stats: { Authority: 8, Strategy: 5, Combat: 9, Tech: 6 },
        strengths: ["Siege Warfare", "Heavy Weapons", "Pain Tolerance"],
        weaknesses: ["Immobile Tactics", "Short Temper", "Technophobic"],
        history: ["1995: Border Skirmish", "2010: Somali Pirate Purge", "2020: Void Expansion"]
    },
    rook_infra: {
        name: "Octavia W. Rampart",
        role: "Rook of Infrastructure",
        quote: "Stone endures. Flesh fades.",
        stats: { Authority: 7, Strategy: 8, Combat: 5, Tech: 9 },
        strengths: ["Structural Engineering", "Resource Logistics", "Geo-Modelling"],
        weaknesses: ["Workaholic", "Socially Blunt", "Claustrophobia"],
        history: ["2008: Dubai Construct", "2015: Sea-Wall Project", "2022: Magma Tap"]
    },

    // MINISTERS
    min_infra: {
        name: "Davian K. Steelwork",
        role: "Minister of Infrastructure",
        quote: "We build the future, literally.",
        stats: { Authority: 5, Strategy: 6, Combat: 3, Tech: 9 },
        strengths: ["Logistics", "3D Printing", "Efficiency"],
        weaknesses: ["Bureaucratic", "Vision Problems", "Sleep Deprived"],
        history: ["Internal Only"]
    },
    min_health: {
        name: "Elyra T. Vitalis",
        role: "Minister of Ayurveda",
        quote: "Balance in body, balance in state.",
        stats: { Authority: 5, Strategy: 7, Combat: 2, Tech: 8 },
        strengths: ["Botany", "Virology", "Healing"],
        weaknesses: ["Pacifist", "Soft-hearted", "Chemical Exposure"],
        history: ["Internal Only"]
    },
    min_train: {
        name: "Kairo V. Emberfist",
        role: "Minister of Training",
        quote: "Pain is weakness leaving the text.",
        stats: { Authority: 6, Strategy: 5, Combat: 8, Tech: 4 },
        strengths: ["CQC", "Motivation", "Endurance"],
        weaknesses: ["Aggressive", "Simple-minded", "Bad Knee"],
        history: ["Internal Only"]
    },
    min_agri: {
        name: "Thalia M. Rootvein",
        role: "Minister of Agriculture",
        quote: "Feed the roots, grow the nation.",
        stats: { Authority: 5, Strategy: 6, Combat: 2, Tech: 7 },
        strengths: ["Hydroponics", "Genetics", "Patience"],
        weaknesses: ["Slow Decisions", "Weather Dependent", "Hoarder"],
        history: ["Internal Only"]
    },
    min_edu: {
        name: "Solene H. Codexar",
        role: "Minister of Education",
        quote: "The mind is a vessel to be filled.",
        stats: { Authority: 6, Strategy: 8, Combat: 1, Tech: 5 },
        strengths: ["History", "Indoctrination", "Languages"],
        weaknesses: ["Weak Constitution", "Preachy", "Traditionalist"],
        history: ["Internal Only"]
    },
    min_energy: {
        name: "Orin S. Heatwell",
        role: "Minister of Energy",
        quote: "Power is life.",
        stats: { Authority: 7, Strategy: 5, Combat: 3, Tech: 8 },
        strengths: ["Nuclear Physics", "Thermal Dynamics", "Risk Management"],
        weaknesses: ["Radiation Sickness", "Reckless", "Heat Intolerant"],
        history: ["Internal Only"]
    },
    min_tech: {
        name: "Nexis P. Wireblade",
        role: "Minister of Technology",
        quote: "The code is law.",
        stats: { Authority: 5, Strategy: 9, Combat: 1, Tech: 10 },
        strengths: ["Coding", "Hacking", "AI Logic"],
        weaknesses: ["Social Anxiety", "Cyber-Addiction", "No Field Skills"],
        history: ["Internal Only"]
    },
    prince: {
        name: "Lyros V. Arcadian",
        role: "The Heir",
        quote: "Am I the player or the piece?",
        stats: { Authority: 4, Strategy: 5, Combat: 6, Tech: 6 },
        strengths: ["Potential", "Royal Blood", "Curiosity"],
        weaknesses: ["Inexperienced", "Doubt", "Rebel Sympathies"],
        history: ["2006: Born in The Glow", "2020: Void Initiation"]
    }
};

export const societyModule = {
    render: () => `
        <div id="society-section" class="tab-content hidden space-y-8 animate-fade-in pb-24">
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
                </div>

                <!-- Governance Panel Chart -->
                <div class="glass-panel p-6 rounded-xl">
                    <h3 class="text-xl font-bold mb-4">The Governance Panel Structure</h3>
                    <div class="chart-container h-64">
                        <canvas id="panelChart"></canvas>
                    </div>
                </div>

                <!-- THE INNER CIRCLE (THE 8 SHADOWS) -->
                <div>
                    <h3 class="text-2xl font-bold mb-8 border-b-2 border-yellow-600 pb-2 flex items-center gap-2">
                        <i class="fas fa-chess-king text-yellow-600"></i>
                        The Inner Circle
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- KING -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-yellow-600 cursor-pointer hover:scale-105 transition-transform duration-300 character-card" data-id="king">
                            <div class="bg-yellow-100 p-3 rounded-full text-yellow-800"><i class="fas fa-chess-king fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Claus Arcadian</h4>
                                <div class="text-xs font-bold text-yellow-600 uppercase mb-1">♔ The King / Head of Family</div>
                                <div class="flex gap-3 text-[10px] font-bold text-gray-500 uppercase mb-2">
                                    <span>Age: 54</span> | <span>Sex: Male</span> | <span class="text-blue-600">Travel: Optional</span>
                                </div>
                                <p class="text-[10px] text-gray-400 italic">Click to view stats...</p>
                            </div>
                        </div>

                        <!-- QUEEN -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-purple-600 cursor-pointer hover:scale-105 transition-transform duration-300 character-card" data-id="queen">
                            <div class="bg-purple-100 p-3 rounded-full text-purple-800"><i class="fas fa-chess-queen fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Seraphine V. Valorian</h4>
                                <div class="text-xs font-bold text-purple-600 uppercase mb-1">♕ The Queen / Strategist</div>
                                <div class="flex gap-3 text-[10px] font-bold text-gray-500 uppercase mb-2">
                                    <span>Age: 42</span> | <span>Sex: Female</span> | <span class="text-blue-600">Travel: Optional</span>
                                </div>
                                <p class="text-[10px] text-gray-400 italic">Click to view stats...</p>
                            </div>
                        </div>

                        <!-- KNIGHT (PROTAGONIST) -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-red-600 bg-gradient-to-br from-white to-red-50/30 cursor-pointer hover:scale-105 transition-transform duration-300 character-card" data-id="reno">
                            <div class="bg-red-50 p-3 rounded-full text-red-800 ring-2 ring-red-200"><i class="fas fa-chess-knight fa-lg"></i></div>
                            <div class="flex-1">
                                <div class="flex justify-between items-start">
                                    <h4 class="text-lg font-bold">Reno R. Kington</h4>
                                    <span class="bg-red-600 text-white text-[8px] px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter animate-pulse">Protagonist</span>
                                </div>
                                <div class="text-xs font-bold text-red-600 uppercase mb-1">♘ Knight of Erasure / 60th Gen</div>
                                <div class="flex gap-3 text-[10px] font-bold text-gray-500 uppercase mb-2">
                                    <span>Age: 35</span> | <span>Sex: Male</span> | <span class="text-orange-600">Travel: Frequent</span>
                                </div>
                                <p class="text-[10px] text-gray-400 italic">Click to view stats...</p>
                            </div>
                        </div>

                        <!-- BISHOP 1 -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-indigo-600 cursor-pointer hover:scale-105 transition-transform duration-300 character-card" data-id="bish_know">
                            <div class="bg-indigo-100 p-3 rounded-full text-indigo-800"><i class="fas fa-chess-bishop fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Lucian M. Shadowend</h4>
                                <div class="text-xs font-bold text-indigo-600 uppercase mb-1">♗ Bishop of Knowledge</div>
                                <div class="flex gap-3 text-[10px] font-bold text-gray-500 uppercase mb-2">
                                    <span>Age: 68</span> | <span>Sex: Male</span> | <span class="text-blue-600">Travel: Internal</span>
                                </div>
                                <p class="text-[10px] text-gray-400 italic">Click to view stats...</p>
                            </div>
                        </div>

                        <!-- BISHOP 2 -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-indigo-600 cursor-pointer hover:scale-105 transition-transform duration-300 character-card" data-id="bish_doc">
                            <div class="bg-indigo-100 p-3 rounded-full text-indigo-800"><i class="fas fa-chess-bishop fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Cassian E. Veyrath</h4>
                                <div class="text-xs font-bold text-indigo-600 uppercase mb-1">♗ Bishop of Doctrine</div>
                                <div class="flex gap-3 text-[10px] font-bold text-gray-500 uppercase mb-2">
                                    <span>Age: 45</span> | <span>Sex: Male</span> | <span class="text-blue-600">Travel: Internal</span>
                                </div>
                                <p class="text-[10px] text-gray-400 italic">Click to view stats...</p>
                            </div>
                        </div>

                        <!-- KNIGHT 2 -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-red-600 cursor-pointer hover:scale-105 transition-transform duration-300 character-card" data-id="kni_infil">
                            <div class="bg-red-50 p-3 rounded-full text-red-800"><i class="fas fa-chess-knight fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Mira D. Stormwatch</h4>
                                <div class="text-xs font-bold text-red-600 uppercase mb-1">♘ Knight of Infiltration</div>
                                <div class="flex gap-3 text-[10px] font-bold text-gray-500 uppercase mb-2">
                                    <span>Age: 28</span> | <span>Sex: Female</span> | <span class="text-orange-600">Travel: External</span>
                                </div>
                                <p class="text-[10px] text-gray-400 italic">Click to view stats...</p>
                            </div>
                        </div>

                        <!-- ROOK 1 -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-slate-600 cursor-pointer hover:scale-105 transition-transform duration-300 character-card" data-id="rook_def">
                            <div class="bg-slate-100 p-3 rounded-full text-slate-800"><i class="fas fa-chess-rook fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Magnus L. Fortress</h4>
                                <div class="text-xs font-bold text-slate-600 uppercase mb-1">♖ Rook of Defense</div>
                                <div class="flex gap-3 text-[10px] font-bold text-gray-500 uppercase mb-2">
                                    <span>Age: 48</span> | <span>Sex: Male</span> | <span class="text-blue-600">Travel: Internal</span>
                                </div>
                                <p class="text-[10px] text-gray-400 italic">Click to view stats...</p>
                            </div>
                        </div>

                        <!-- ROOK 2 -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-slate-600 cursor-pointer hover:scale-105 transition-transform duration-300 character-card" data-id="rook_infra">
                            <div class="bg-slate-100 p-3 rounded-full text-slate-800"><i class="fas fa-chess-rook fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Octavia W. Rampart</h4>
                                <div class="text-xs font-bold text-slate-600 uppercase mb-1">♖ Rook of Infrastructure</div>
                                <div class="flex gap-3 text-[10px] font-bold text-gray-500 uppercase mb-2">
                                    <span>Age: 39</span> | <span>Sex: Female</span> | <span class="text-blue-600">Travel: Internal</span>
                                </div>
                                <p class="text-[10px] text-gray-400 italic">Click to view stats...</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- THE 7 MINISTERS -->
                <div>
                    <h3 class="text-2xl font-bold mb-8 border-b-2 border-teal-600 pb-2 flex items-center gap-2">
                        <i class="fas fa-chess-pawn text-teal-600"></i>
                        The Governance Panel (Ministers)
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <!-- Davian -->
                        <div class="glass-panel p-5 rounded-xl border-l-4 border-teal-500 cursor-pointer hover:scale-105 transition-transform duration-300 character-card" data-id="min_infra">
                            <h4 class="font-bold">Davian K. Steelwork</h4>
                            <div class="text-[10px] font-bold text-teal-600 uppercase mb-1">♟ Infrastructure</div>
                            <div class="flex gap-2 text-[9px] font-bold text-gray-400 uppercase mb-2">
                                <span>Age: 41</span> | <span>Travel: Restricted</span>
                            </div>
                        </div>
                        <!-- Elyra -->
                        <div class="glass-panel p-5 rounded-xl border-l-4 border-green-500 cursor-pointer hover:scale-105 transition-transform duration-300 character-card" data-id="min_health">
                            <h4 class="font-bold">Elyra T. Vitalis</h4>
                            <div class="text-[10px] font-bold text-green-600 uppercase mb-1">♟ Ayurveda</div>
                            <div class="flex gap-2 text-[9px] font-bold text-gray-400 uppercase mb-2">
                                <span>Age: 37</span> | <span>Travel: Restricted</span>
                            </div>
                        </div>
                        <!-- Kairo -->
                        <div class="glass-panel p-5 rounded-xl border-l-4 border-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300 character-card" data-id="min_train">
                            <h4 class="font-bold">Kairo V. Emberfist</h4>
                            <div class="text-[10px] font-bold text-blue-600 uppercase mb-1">♟ Training</div>
                            <div class="flex gap-2 text-[9px] font-bold text-gray-400 uppercase mb-2">
                                <span>Age: 33</span> | <span>Travel: Restricted</span>
                            </div>
                        </div>
                        <!-- Thalia -->
                        <div class="glass-panel p-5 rounded-xl border-l-4 border-lime-500 cursor-pointer hover:scale-105 transition-transform duration-300 character-card" data-id="min_agri">
                            <h4 class="font-bold">Thalia M. Rootvein</h4>
                            <div class="text-[10px] font-bold text-lime-600 uppercase mb-1">♟ Agriculture</div>
                            <div class="flex gap-2 text-[9px] font-bold text-gray-400 uppercase mb-2">
                                <span>Age: 44</span> | <span>Travel: Restricted</span>
                            </div>
                        </div>
                        <!-- Solene -->
                        <div class="glass-panel p-5 rounded-xl border-l-4 border-amber-500 cursor-pointer hover:scale-105 transition-transform duration-300 character-card" data-id="min_edu">
                            <h4 class="font-bold">Solene H. Codexar</h4>
                            <div class="text-[10px] font-bold text-amber-600 uppercase mb-1">♟ Education</div>
                            <div class="flex gap-2 text-[9px] font-bold text-gray-400 uppercase mb-2">
                                <span>Age: 52</span> | <span>Travel: Restricted</span>
                            </div>
                        </div>
                        <!-- Orin -->
                        <div class="glass-panel p-5 rounded-xl border-l-4 border-orange-500 cursor-pointer hover:scale-105 transition-transform duration-300 character-card" data-id="min_energy">
                            <h4 class="font-bold">Orin S. Heatwell</h4>
                            <div class="text-[10px] font-bold text-orange-600 uppercase mb-1">♟ Energy</div>
                            <div class="flex gap-2 text-[9px] font-bold text-gray-400 uppercase mb-2">
                                <span>Age: 47</span> | <span>Travel: Restricted</span>
                            </div>
                        </div>
                        <!-- Nexis -->
                        <div class="glass-panel p-5 rounded-xl border-l-4 border-cyan-500 cursor-pointer hover:scale-105 transition-transform duration-300 character-card" data-id="min_tech">
                            <h4 class="font-bold">Nexis P. Wireblade</h4>
                            <div class="text-[10px] font-bold text-cyan-600 uppercase mb-1">♟ Technology</div>
                            <div class="flex gap-2 text-[9px] font-bold text-gray-400 uppercase mb-2">
                                <span>Age: 29</span> | <span>Travel: Restricted</span>
                            </div>
                        </div>
                        <!-- Prince Lyros -->
                        <div class="glass-panel p-5 rounded-xl border-l-4 border-yellow-400 bg-yellow-50/30 cursor-pointer hover:scale-105 transition-transform duration-300 character-card" data-id="prince">
                            <h4 class="font-bold">Lyros V. Arcadian</h4>
                            <div class="text-[10px] font-bold text-purple-700 uppercase mb-1">♕ The Heir</div>
                            <div class="flex gap-2 text-[9px] font-bold text-purple-400 uppercase mb-2">
                                <span>Age: 17</span> | <span>Travel: Internal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- RPG STAT MODAL -->
            <div id="char-modal" class="fixed inset-0 z-[100] hidden flex items-center justify-center p-4">
                <div class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" id="modal-backdrop"></div>
                
                <div class="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in border-4 border-orange-600 transform transition-all">
                    <!-- Header -->
                    <div class="h-32 bg-slate-900 relative p-6 flex items-end">
                        <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <button id="close-modal" class="absolute top-4 right-4 text-white hover:text-orange-500 text-2xl"><i class="fas fa-times"></i></button>
                        
                        <div class="relative z-10 w-full">
                            <div class="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-1">Classified Dossier</div>
                            <h2 id="modal-name" class="text-3xl font-bold text-white serif">Unknown</h2>
                            <p id="modal-role" class="text-sm text-slate-400 uppercase tracking-wide">Rank: Unknown</p>
                        </div>
                    </div>

                    <!-- Body -->
                    <div class="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                        <!-- Quote -->
                        <div class="text-center italic text-slate-600 font-serif border-b border-gray-100 pb-4">
                            "<span id="modal-quote">...</span>"
                        </div>

                        <!-- Stats Grid -->
                        <div class="space-y-3">
                            <h4 class="text-xs font-bold text-gray-400 uppercase">Performance Metrics</h4>
                            
                            <div class="space-y-2">
                                <div class="flex items-center gap-2">
                                    <span class="w-20 text-[10px] font-bold uppercase text-gray-500">Authority</span>
                                    <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div id="stat-auth" class="h-full bg-orange-600"></div>
                                    </div>
                                    <span id="val-auth" class="text-[10px] font-bold text-gray-700 w-4"></span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="w-20 text-[10px] font-bold uppercase text-gray-500">Strategy</span>
                                    <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div id="stat-strat" class="h-full bg-indigo-600"></div>
                                    </div>
                                    <span id="val-strat" class="text-[10px] font-bold text-gray-700 w-4"></span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="w-20 text-[10px] font-bold uppercase text-gray-500">Combat</span>
                                    <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div id="stat-comb" class="h-full bg-red-600"></div>
                                    </div>
                                    <span id="val-comb" class="text-[10px] font-bold text-gray-700 w-4"></span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="w-20 text-[10px] font-bold uppercase text-gray-500">Tech</span>
                                    <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div id="stat-tech" class="h-full bg-teal-600"></div>
                                    </div>
                                    <span id="val-tech" class="text-[10px] font-bold text-gray-700 w-4"></span>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <!-- Strengths -->
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h4 class="text-[10px] font-bold text-green-700 uppercase mb-2 flex items-center gap-1"><i class="fas fa-plus-circle"></i> Strengths</h4>
                                <ul id="modal-strengths" class="text-[10px] text-green-900 space-y-1 ml-2"></ul>
                            </div>
                            <!-- Weaknesses -->
                            <div class="bg-red-50 p-4 rounded-lg">
                                <h4 class="text-[10px] font-bold text-red-700 uppercase mb-2 flex items-center gap-1"><i class="fas fa-minus-circle"></i> Weaknesses</h4>
                                <ul id="modal-weaknesses" class="text-[10px] text-red-900 space-y-1 ml-2"></ul>
                            </div>
                        </div>

                        <!-- History -->
                        <div>
                            <h4 class="text-xs font-bold text-gray-400 uppercase mb-2">Travel History</h4>
                            <div id="modal-history" class="space-y-1"></div>
                        </div>
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

        // Modal Logic
        const modal = document.getElementById('char-modal');
        const closeBtn = document.getElementById('close-modal');
        const backdrop = document.getElementById('modal-backdrop');
        const cards = document.querySelectorAll('.character-card');

        // Elements to update
        const elName = document.getElementById('modal-name');
        const elRole = document.getElementById('modal-role');
        const elQuote = document.getElementById('modal-quote');
        const elStrengths = document.getElementById('modal-strengths');
        const elWeaknesses = document.getElementById('modal-weaknesses');
        const elHistory = document.getElementById('modal-history');

        // Stat Bars
        const statAuth = document.getElementById('stat-auth');
        const statStrat = document.getElementById('stat-strat');
        const statComb = document.getElementById('stat-comb');
        const statTech = document.getElementById('stat-tech');

        const valAuth = document.getElementById('val-auth');
        const valStrat = document.getElementById('val-strat');
        const valComb = document.getElementById('val-comb');
        const valTech = document.getElementById('val-tech');

        function openModal(id) {
            const data = characterData[id];
            if (!data) return;

            elName.textContent = data.name;
            elRole.textContent = data.role;
            elQuote.textContent = data.quote;

            // Stats
            statAuth.style.width = `${data.stats.Authority * 10}%`;
            statStrat.style.width = `${data.stats.Strategy * 10}%`;
            statComb.style.width = `${data.stats.Combat * 10}%`;
            statTech.style.width = `${data.stats.Tech * 10}%`;

            valAuth.textContent = data.stats.Authority;
            valStrat.textContent = data.stats.Strategy;
            valComb.textContent = data.stats.Combat;
            valTech.textContent = data.stats.Tech;

            // Lists
            elStrengths.innerHTML = data.strengths.map(s => `<li>• ${s}</li>`).join('');
            elWeaknesses.innerHTML = data.weaknesses.map(w => `<li>• ${w}</li>`).join('');

            elHistory.innerHTML = data.history.map(h =>
                `<div class="flex items-center gap-2 p-2 bg-gray-50 rounded border border-gray-100 text-[10px] text-gray-600">
                    <i class="fas fa-plane text-orange-400"></i> ${h}
                </div>`
            ).join('');

            modal.classList.remove('hidden');
        }

        function closeModal() {
            modal.classList.add('hidden');
        }

        cards.forEach(card => {
            card.addEventListener('click', () => {
                openModal(card.dataset.id);
            });
        });

        closeBtn.addEventListener('click', closeModal);
        backdrop.addEventListener('click', closeModal);

        // HOLOGRAPHIC TILT EFFECT
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
                const rotateY = ((x - centerX) / centerX) * 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

                // Dynamic Glare
                const glareX = (x / rect.width) * 100;

                card.style.background = `
                    linear-gradient(135deg, rgba(255,255,255,0.1) ${glareX}%, rgba(255,255,255,0) ${glareX + 20}%),
                    linear-gradient(to bottom, #1e293b, #0f172a)
                `;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                card.style.background = ''; // Reset to default CSS
            });
        });
    }
};
