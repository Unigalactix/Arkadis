export const charactersModule = {
    render: () => `
        <div id="characters-section" class="tab-content hidden space-y-8 animate-fade-in">
            <div class="text-center space-y-4 mb-12">
                <h2 class="text-3xl font-bold text-slate-900 serif">Characters of Arkadis</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">The figures shaping the 8th Continent, from those who uphold the Veil to those who seek to tear it down.</p>
            </div>

            <div class="space-y-16">
                <!-- THE INNER CIRCLE -->
                <div>
                    <h3 class="text-2xl font-bold mb-8 border-b-2 border-yellow-600 pb-2 flex items-center gap-2">
                        <i class="fas fa-chess-king text-yellow-600"></i> The Inner Circle
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- KING -->
                        <div class="glass-panel p-6 rounded-xl border-l-4 border-yellow-600">
                            <h4 class="text-lg font-bold">Claus Arcadian</h4>
                            <div class="text-xs font-bold text-yellow-600 uppercase mb-1">The King / Head of Family</div>
                            <p class="text-sm text-gray-600">Absolute authority. His vision of a "Perfect Sanctuary" requires total isolation from the outside world.</p>
                        </div>
                        <!-- RENO (PROTAGONIST) -->
                        <div class="glass-panel p-6 rounded-xl border-l-4 border-red-600 bg-red-50/10">
                            <div class="flex justify-between items-start">
                                <h4 class="text-lg font-bold">Reno R. Kington</h4>
                                <span class="bg-red-600 text-white text-[8px] px-2 py-0.5 rounded-full font-bold uppercase animate-pulse">Protagonist</span>
                            </div>
                            <div class="text-xs font-bold text-red-600 uppercase mb-1">Knight of Erasure</div>
                            <p class="text-sm text-gray-600">The primary enforcer. He is caught between his duty to the King and his ties to the common people.</p>
                        </div>
                         <!-- QUEEN -->
                         <div class="glass-panel p-6 rounded-xl border-l-4 border-purple-600">
                            <h4 class="text-lg font-bold">Seraphine V. Valorian</h4>
                            <div class="text-xs font-bold text-purple-600 uppercase mb-1">The Queen</div>
                            <p class="text-sm text-gray-600">The cold strategist. She views the Rebel Group as a "biological error" that needs to be purged.</p>
                        </div>
                    </div>
                </div>

                <!-- THE REBEL GROUP: THE UNVEILED -->
                <div class="bg-slate-900 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl text-white rotate-12"><i class="fas fa-dove"></i></div>
                    <h3 class="text-2xl font-bold mb-8 border-b-2 border-sky-400 pb-2 flex items-center gap-2 text-white">
                        <i class="fas fa-fire text-sky-400"></i> The Unveiled (Rebel Insurgency)
                    </h3>
                    <p class="text-slate-400 mb-8 max-w-3xl">A growing movement of citizens and scientists who believe Arkadis has become a prison. They demand the right to travel, the dismantling of the Veil, and the integration of Arkadis with the global community.</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- THE LEADER: JAXEN VANE -->
                        <div class="bg-slate-800 p-6 rounded-xl border-l-4 border-sky-400 group hover:bg-slate-700 transition-all">
                            <div class="bg-sky-900/50 w-12 h-12 rounded-full flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                                <i class="fas fa-fist-raised fa-lg"></i>
                            </div>
                            <h4 class="text-lg font-bold text-white">Jaxen Vane</h4>
                            <div class="text-xs font-bold text-sky-400 uppercase mb-2">Leader of The Unveiled</div>
                            <div class="flex gap-2 text-[10px] text-slate-500 font-mono mb-3 uppercase">
                                <span>Age: 38</span> | <span>Ex-Sentinel Captain</span>
                            </div>
                            <p class="text-sm text-slate-300 italic">"We were born under artificial suns. It's time we saw the real one."</p>
                        </div>

                        <!-- THE FOLLOWER: MIRA THE NANO-ARCHITECT -->
                        <div class="bg-slate-800 p-6 rounded-xl border-l-4 border-sky-600 group hover:bg-slate-700 transition-all">
                            <h4 class="text-lg font-bold text-white">Mira Belrose</h4>
                            <div class="text-xs font-bold text-sky-600 uppercase mb-2">Technical Lead / Sympathizer</div>
                            <p class="text-sm text-slate-300">A former architect of the Void Canon. She provides the rebels with 'glitch codes' to bypass surface sensors.</p>
                        </div>

                        <!-- THE FOLLOWER: KOAL THE VOID-WALKER -->
                        <div class="bg-slate-800 p-6 rounded-xl border-l-4 border-sky-800 group hover:bg-slate-700 transition-all">
                            <h4 class="text-lg font-bold text-white">Koal Silas</h4>
                            <div class="text-xs font-bold text-sky-800 uppercase mb-2">Ground Operative</div>
                            <p class="text-sm text-slate-300">A Tier-2 maintenance worker who smuggles external artifacts (books, music) into the Under-Cities.</p>
                        </div>
                    </div>

                    <div class="mt-8 p-4 bg-sky-950/30 rounded-lg border border-sky-800/50">
                        <h5 class="text-sky-400 font-bold text-sm mb-2 uppercase tracking-tighter">Current Mandate:</h5>
                        <ul class="text-xs text-slate-400 space-y-1 list-disc pl-4">
                            <li>Declassification of the "Outside World" archives.</li>
                            <li>The right of exit for all Level-2 and Level-3 citizens.</li>
                            <li>Abolishment of the "Memory Erasure" protocols for detections.</li>
                        </ul>
                    </div>
                </div>

                <!-- NEWCOMERS & SECRETS -->
                <div>
                    <h3 class="text-2xl font-bold mb-8 border-b-2 border-violet-600 pb-2 flex items-center gap-2">
                        <i class="fas fa-user-secret text-violet-600"></i> The Hidden
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- Elara Kington -->
                        <div class="glass-panel p-6 rounded-xl border-l-4 border-rose-400">
                            <h4 class="text-lg font-bold">Elara Kington</h4>
                            <div class="text-xs font-bold text-rose-600 uppercase mb-1">Reno's Wife</div>
                            <p class="text-sm text-gray-600">She knows Reno's secrets, but fears the Unveiled will bring only destruction to their home.</p>
                        </div>
                        <!-- Sariel -->
                        <div class="glass-panel p-6 rounded-xl border-l-4 border-violet-600">
                            <h4 class="text-lg font-bold">Sariel</h4>
                            <div class="text-xs font-bold text-violet-600 uppercase mb-1">Reno's Secret Lover</div>
                            <p class="text-sm text-gray-600">A Bio-Engineer who secretly aids the Unveiled by developing 'Identity Masks' for travel.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    init: () => { }
};
