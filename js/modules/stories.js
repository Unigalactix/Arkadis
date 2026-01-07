export const storiesModule = {
    render: () => `
        <div id="stories-section" class="tab-content hidden space-y-8 animate-fade-in">
            <div class="text-center space-y-4 mb-12">
                <h2 class="text-3xl font-bold text-slate-900 serif">Stories from the Shadows</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Fragments of lives lived in the most secret place on Earth.
                    Every citizen has a story, but some are never meant to be told.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- STORY 1: The First Selection -->
                <div class="glass-panel p-8 rounded-2xl gold-border hover:shadow-xl transition-all group">
                    <div class="text-xs font-bold text-orange-600 uppercase mb-4 tracking-widest flex items-center gap-2">
                        <span class="w-8 h-[1px] bg-orange-600"></span> History / 542 AD
                    </div>
                    <h3 class="text-2xl font-bold mb-4 group-hover:text-orange-950 transition-colors">The First Selection</h3>
                    <p class="text-gray-600 leading-relaxed mb-6 italic">
                        "The Founder did not look for soldiers. He looked for poets who could see the geometry of the
                        stars. He found 12 of them in the ruins of Alexandria..."
                    </p>
                    <button class="text-orange-800 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        Read Fragment <i class="fas fa-arrow-right"></i>
                    </button>
                </div>

                <!-- NEW STORY: The Knight's Anchor (Elara) -->
                <div class="glass-panel p-8 rounded-2xl border-l-4 border-rose-400 hover:shadow-xl transition-all group">
                    <div class="text-xs font-bold text-rose-600 uppercase mb-4 tracking-widest flex items-center gap-2">
                        <span class="w-8 h-[1px] bg-rose-600"></span> Domestic / 10 Years Anniversary
                    </div>
                    <h3 class="text-2xl font-bold mb-4 group-hover:text-rose-950 transition-colors">The Knight's Anchor</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Ten years of silence. Elara counts the scars on Reno's back, each one a mission she wasn't supposed to know about. 
                        In the safety of Tier-S, she is the only one who sees the man behind the blade.
                    </p>
                    <button class="text-rose-800 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        Read Fragment <i class="fas fa-arrow-right"></i>
                    </button>
                </div>

                <!-- NEW STORY: Shadow Hearts (Sariel) -->
                <div class="glass-panel p-8 rounded-2xl border-l-4 border-violet-600 hover:shadow-xl transition-all group bg-violet-50/5">
                    <div class="text-xs font-bold text-violet-600 uppercase mb-4 tracking-widest flex items-center gap-2">
                        <span class="w-8 h-[1px] bg-violet-600"></span> Secret / Forbidden Love
                    </div>
                    <h3 class="text-2xl font-bold mb-4 group-hover:text-violet-950 transition-colors">Shadow Hearts</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        At the edge of the Wild Zone, where the sensors fail and the magma-glow is the only light, two shadows meet. 
                        Reno and Sariel share a secret more dangerous than any state secret—a love that defies the Order.
                    </p>
                    <button class="text-violet-800 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        Read Fragment <i class="fas fa-arrow-right"></i>
                    </button>
                </div>

                <!-- STORY: The Glitch (Kaelen Voss) -->
                <div class="glass-panel p-8 rounded-2xl border-l-4 border-teal-600 hover:shadow-xl transition-all group">
                    <div class="text-xs font-bold text-teal-600 uppercase mb-4 tracking-widest flex items-center gap-2">
                        <span class="w-8 h-[1px] bg-teal-600"></span> Present / The Discovery
                    </div>
                    <h3 class="text-2xl font-bold mb-4 group-hover:text-teal-950 transition-colors">The Glitch</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Kaelen Voss was just looking for a signal. Instead, he found the 8th Continent. Now, as he sits
                        in a Tier-3 cell, he realizes the signal was a lure.
                    </p>
                    <button class="text-teal-800 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        Read Fragment <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    `,
    init: () => { }
};
