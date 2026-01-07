export const charactersModule = {
    render: () => `
        <div id="characters-section" class="tab-content hidden space-y-8 animate-fade-in">
            <div class="text-center space-y-4 mb-12">
                <h2 class="text-3xl font-bold text-slate-900 serif">Characters of Arkadis</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">A comprehensive directory of the figures who shape the 8th
                    Continent, from the Inner Circle to the newest residents.</p>
            </div>

            <div class="space-y-16">
                <!-- THE INNER CIRCLE (THE 8 SHADOWS) -->
                <div>
                    <h3 class="text-2xl font-bold mb-8 border-b-2 border-yellow-600 pb-2 flex items-center gap-2">
                        <i class="fas fa-chess-king text-yellow-600"></i>
                        The Inner Circle
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- KING -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-yellow-600">
                            <div class="bg-yellow-100 p-3 rounded-full text-yellow-800"><i class="fas fa-chess-king fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Claus Arcadian</h4>
                                <div class="text-xs font-bold text-yellow-600 uppercase mb-1">♔ The King / Head of Family</div>
                                <div class="flex gap-3 text-[10px] font-bold text-gray-500 uppercase mb-2">
                                    <span>Age: 54</span> | <span>Sex: Male</span> | <span class="text-blue-600">Travel: Optional</span>
                                </div>
                                <p class="text-sm text-gray-600"> डायरेक्ट descendant of the Founder. Absolute authority over the 8th Continent.</p>
                            </div>
                        </div>

                        <!-- QUEEN -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-purple-600">
                            <div class="bg-purple-100 p-3 rounded-full text-purple-800"><i class="fas fa-chess-queen fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Seraphine V. Valorian</h4>
                                <div class="text-xs font-bold text-purple-600 uppercase mb-1">♕ The Queen / Strategist</div>
                                <div class="flex gap-3 text-[10px] font-bold text-gray-500 uppercase mb-2">
                                    <span>Age: 42</span> | <span>Sex: Female</span> | <span class="text-blue-600">Travel: Optional</span>
                                </div>
                                <p class="text-sm text-gray-600">Master of domestic and external operations. Second in command.</p>
                            </div>
                        </div>

                        <!-- KNIGHT (PROTAGONIST) -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-red-600 bg-gradient-to-br from-white to-red-50/30">
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
                                <p class="text-sm text-gray-600">The primary blade of the Society. Security and tactical operations Master.</p>
                            </div>
                        </div>

                        <!-- BISHOP 1 -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-indigo-600">
                            <div class="bg-indigo-100 p-3 rounded-full text-indigo-800"><i class="fas fa-chess-bishop fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Lucian M. Shadowend</h4>
                                <div class="text-xs font-bold text-indigo-600 uppercase mb-1">♗ Bishop of Knowledge</div>
                                <div class="flex gap-3 text-[10px] font-bold text-gray-500 uppercase mb-2">
                                    <span>Age: 68</span> | <span>Sex: Male</span> | <span class="text-blue-600">Travel: Internal</span>
                                </div>
                                <p class="text-sm text-gray-600">Keeper of archives and surveillance. The Eyes of Arkadis.</p>
                            </div>
                        </div>

                        <!-- BISHOP 2 -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-indigo-600">
                            <div class="bg-indigo-100 p-3 rounded-full text-indigo-800"><i class="fas fa-chess-bishop fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Cassian E. Veyrath</h4>
                                <div class="text-xs font-bold text-indigo-600 uppercase mb-1">♗ Bishop of Doctrine</div>
                                <div class="flex gap-3 text-[10px] font-bold text-gray-500 uppercase mb-2">
                                    <span>Age: 45</span> | <span>Sex: Male</span> | <span class="text-blue-600">Travel: Internal</span>
                                </div>
                                <p class="text-sm text-gray-600">Guiding ideological hand. Supervises the Selection process.</p>
                            </div>
                        </div>

                        <!-- KNIGHT 2 -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-red-600">
                            <div class="bg-red-50 p-3 rounded-full text-red-800"><i class="fas fa-chess-knight fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Mira D. Stormwatch</h4>
                                <div class="text-xs font-bold text-red-600 uppercase mb-1">♘ Knight of Infiltration</div>
                                <div class="flex gap-3 text-[10px] font-bold text-gray-500 uppercase mb-2">
                                    <span>Age: 28</span> | <span>Sex: Female</span> | <span class="text-orange-600">Travel: External</span>
                                </div>
                                <p class="text-sm text-gray-600">Deep cover specialist manipulating global events from the shadows.</p>
                            </div>
                        </div>

                        <!-- ROOK 1 -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-slate-600">
                            <div class="bg-slate-100 p-3 rounded-full text-slate-800"><i class="fas fa-chess-rook fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Magnus L. Fortress</h4>
                                <div class="text-xs font-bold text-slate-600 uppercase mb-1">♖ Rook of Defense</div>
                                <div class="flex gap-3 text-[10px] font-bold text-gray-500 uppercase mb-2">
                                    <span>Age: 48</span> | <span>Sex: Male</span> | <span class="text-blue-600">Travel: Internal</span>
                                </div>
                                <p class="text-sm text-gray-600">Commander of the Defense Grid and operator of the Void Canon.</p>
                            </div>
                        </div>

                        <!-- ROOK 2 -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-slate-600">
                            <div class="bg-slate-100 p-3 rounded-full text-slate-800"><i class="fas fa-chess-rook fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Octavia W. Rampart</h4>
                                <div class="text-xs font-bold text-slate-600 uppercase mb-1">♖ Rook of Infrastructure</div>
                                <div class="flex gap-3 text-[10px] font-bold text-gray-500 uppercase mb-2">
                                    <span>Age: 39</span> | <span>Sex: Female</span> | <span class="text-blue-600">Travel: Internal</span>
                                </div>
                                <p class="text-sm text-gray-600">Master architect responsible for land expansion projects.</p>
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
                        <div class="glass-panel p-5 rounded-xl border-l-4 border-teal-500">
                            <h4 class="font-bold">Davian K. Steelwork</h4>
                            <div class="text-[10px] font-bold text-teal-600 uppercase">Infrastructure</div>
                            <p class="text-[11px] text-gray-600 mt-2">Bio-domes and heavy engineering.</p>
                        </div>
                        <!-- Elyra -->
                        <div class="glass-panel p-5 rounded-xl border-l-4 border-green-500">
                            <h4 class="font-bold">Elyra T. Vitalis</h4>
                            <div class="text-[10px] font-bold text-green-600 uppercase">Ayurveda</div>
                            <p class="text-[11px] text-gray-600 mt-2">Public health and bio-research director.</p>
                        </div>
                        <!-- Kairo -->
                        <div class="glass-panel p-5 rounded-xl border-l-4 border-blue-500">
                            <h4 class="font-bold">Kairo V. Emberfist</h4>
                            <div class="text-[10px] font-bold text-blue-600 uppercase">Training</div>
                            <p class="text-[11px] text-gray-600 mt-2">Conditioning and Pyro-Ball leagues.</p>
                        </div>
                        <!-- Thalia -->
                        <div class="glass-panel p-5 rounded-xl border-l-4 border-lime-500">
                            <h4 class="font-bold">Thalia M. Rootvein</h4>
                            <div class="text-[10px] font-bold text-lime-600 uppercase">Agriculture</div>
                            <p class="text-[11px] text-gray-600 mt-2">Food sustainability and hydroponics.</p>
                        </div>
                        <!-- Solene -->
                        <div class="glass-panel p-5 rounded-xl border-l-4 border-amber-500">
                            <h4 class="font-bold">Solene H. Codexar</h4>
                            <div class="text-[10px] font-bold text-amber-600 uppercase">Education</div>
                            <p class="text-[11px] text-gray-600 mt-2">Archives and knowledge distribution.</p>
                        </div>
                        <!-- Orin -->
                        <div class="glass-panel p-5 rounded-xl border-l-4 border-orange-500">
                            <h4 class="font-bold">Orin S. Heatwell</h4>
                            <div class="text-[10px] font-bold text-orange-600 uppercase">Energy</div>
                            <p class="text-[11px] text-gray-600 mt-2">Thermal grid and ΔK management.</p>
                        </div>
                        <!-- Nexis -->
                        <div class="glass-panel p-5 rounded-xl border-l-4 border-cyan-500">
                            <h4 class="font-bold">Nexis P. Wireblade</h4>
                            <div class="text-[10px] font-bold text-cyan-600 uppercase">Technology</div>
                            <p class="text-[11px] text-gray-600 mt-2">Civilian AI and VR development.</p>
                        </div>
                        <!-- Prince Lyros -->
                        <div class="glass-panel p-5 rounded-xl border-l-4 border-yellow-400 bg-yellow-50/30">
                            <h4 class="font-bold">Lyros V. Arcadian</h4>
                            <div class="text-[10px] font-bold text-purple-700 uppercase">The Heir</div>
                            <p class="text-[11px] text-gray-600 mt-2">Next in line for High Council membership.</p>
                        </div>
                    </div>
                </div>

                <!-- NEWCOMERS, SECRETS & OUTSIDERS -->
                <div>
                    <h3 class="text-2xl font-bold mb-8 border-b-2 border-violet-600 pb-2 flex items-center gap-2">
                        <i class="fas fa-user-secret text-violet-600"></i>
                        The Hidden & The Newcomers
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- Elara Kington -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-rose-400">
                            <div class="bg-rose-100 p-3 rounded-full text-rose-800"><i class="fas fa-ring fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Elara Kington</h4>
                                <div class="text-xs font-bold text-rose-600 uppercase mb-1">Domestic Anchor / Wife</div>
                                <div class="flex gap-3 text-[10px] font-bold text-gray-500 uppercase mb-2">
                                    <span>Age: 34</span> | <span>Married: 10 Years</span>
                                </div>
                                <p class="text-sm text-gray-600">Reno's wife and a Senior Archivist. She provides stability after dark missions.</p>
                            </div>
                        </div>

                        <!-- Sariel -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-violet-600 bg-violet-50/10">
                            <div class="bg-violet-100 p-3 rounded-full text-violet-800"><i class="fas fa-heart fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Sariel</h4>
                                <div class="text-[10px] font-bold text-violet-600 uppercase mb-1">Secret Lover</div>
                                <div class="flex gap-3 text-[10px] font-bold text-gray-500 uppercase mb-2">
                                    <span>Age: 29</span> | <span class="text-red-700">STATUS: SECRET</span>
                                </div>
                                <p class="text-sm text-gray-600">Veyrath Lab Bio-Engineer. Her connection to Reno is a forbidden flame.</p>
                            </div>
                        </div>

                        <!-- Kaelen Voss -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-emerald-600">
                            <div class="bg-emerald-100 p-3 rounded-full text-emerald-800"><i class="fas fa-user-secret fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Kaelen Voss</h4>
                                <div class="text-[10px] font-bold text-emerald-600 uppercase mb-1">External Insurgent</div>
                                <p class="text-sm text-gray-600">Tech-savvy drifter who Found a glitch in the Veil.</p>
                            </div>
                        </div>

                        <!-- Lyra Nightshade -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-sky-600">
                            <div class="bg-sky-100 p-3 rounded-full text-sky-800"><i class="fas fa-plane fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Lyra Nightshade</h4>
                                <div class="text-[10px] font-bold text-sky-600 uppercase mb-1">Corporate Spy</div>
                                <p class="text-sm text-gray-600">Hunting for the source of Arkadis' unlimited energy.</p>
                            </div>
                        </div>

                        <!-- Dr. Aris Thorne -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-amber-600">
                            <div class="bg-amber-100 p-3 rounded-full text-amber-800"><i class="fas fa-microscope fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Dr. Aris Thorne</h4>
                                <div class="text-[10px] font-bold text-amber-600 uppercase mb-1">Recruited Scientist</div>
                                <p class="text-sm text-gray-600">Quantum physicist working on gravitational wave lensing.</p>
                            </div>
                        </div>

                        <!-- Vespera -->
                        <div class="glass-panel p-6 rounded-xl flex gap-4 items-start border-l-4 border-rose-600">
                            <div class="bg-rose-100 p-3 rounded-full text-rose-800"><i class="fas fa-mask fa-lg"></i></div>
                            <div class="flex-1">
                                <h4 class="text-lg font-bold">Vespera</h4>
                                <div class="text-[10px] font-bold text-rose-600 uppercase mb-1">Shadow Residue</div>
                                <p class="text-sm text-gray-600">A high-threat anomaly discovered in the deepest Wild Zone.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    init: () => { }
};
