export const storiesModule = {
    render: () => `
        <div id="stories-section" class="tab-content hidden space-y-12 animate-fade-in">
            <div class="text-center space-y-4 mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-slate-900 serif">The Archive Chronicles</h2>
                <div class="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
                <p class="text-gray-600 max-w-3xl mx-auto text-lg">Detailed accounts of heroism, betrayal, and the struggle for freedom within the 8th Continent.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                <!-- STORY 1: THE FIRST SELECTION -->
                <div class="glass-panel p-10 rounded-3xl border-t-8 border-orange-600 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
                    <div class="flex justify-between items-center mb-6">
                        <span class="bg-orange-100 text-orange-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase">Archive ID: ANC-542</span>
                        <span class="text-gray-400 text-xs font-mono"><i class="fas fa-clock mr-1"></i> 2 min read</span>
                    </div>
                    <h3 class="text-3xl font-bold mb-6 text-slate-900">The First Selection</h3>
                    <div class="text-gray-700 leading-relaxed flex-1 space-y-4">
                        <p>The Founder, known only as 'The Architect' in these scrolls, did not look for kings or generals to populate the first dome. He sought those who understood the "Sub-Space Vibration"—the pulse of the earth. In 542 AD, as Alexandria fell into chaos, twelve individuals were spirited away via a vessel that moved without sails.</p>
                        <p>Among them was Aethelred, a blind mapmaker who could sense tectonic shifts through his feet. He was the first to realize that Arkadis was not naturally formed. "We are standing on a giant clock," he famously whispered. This story documents the grueling first decade, where the 'Twelve' developed the basic laws of Gilded Secrecy to protect their new paradise from the encroaching darkness of the Middle Ages.</p>
                    </div>
                    <div class="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                        <span class="text-xs font-bold text-slate-400">STATUS: VERIFIED HISTORY</span>
                        <button class="text-orange-600 font-bold hover:underline">Full Log <i class="fas fa-external-link-alt ml-1"></i></button>
                    </div>
                </div>

                <!-- STORY 2: THE KNIGHT'S ANCHOR -->
                <div class="glass-panel p-10 rounded-3xl border-t-8 border-rose-400 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col bg-white">
                    <div class="flex justify-between items-center mb-6">
                        <span class="bg-rose-100 text-rose-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase">Archive ID: DOM-2024</span>
                        <span class="text-gray-400 text-xs font-mono"><i class="fas fa-clock mr-1"></i> 1.5 min read</span>
                    </div>
                    <h3 class="text-3xl font-bold mb-6 text-slate-900">The Knight's Anchor</h3>
                    <div class="text-gray-700 leading-relaxed flex-1 space-y-4">
                        <p>Elara Kington spends her nights in the Great Library, cataloging the very missions her husband Reno executes in the dark. To the world, Reno is a ghost—a "Knight of Erasure" who leaves no witnesses. But to Elara, he is the man who forgets how to breathe when he's stressed. They have been married for ten years, a decade defined by what remains unsaid.</p>
                        <p>This entry describes the "Ten-Year Echo," a private celebration where Reno brought back a prohibited gift from the Outside: a real, hand-pressed rose. In a city of artificial biomes, the scent of a dying flower was a revolutionary act. Elara keeps the dried petals hidden in a hollow book, knowing that if the Censors found them, it would mean Reno's erasure from the High Council books.</p>
                    </div>
                    <div class="mt-8 pt-6 border-t border-gray-100 italic text-sm text-gray-500">
                        "In the silence of the dome, his heartbeat is the only truth I keep."
                    </div>
                </div>

                <!-- STORY 3: SHADOW HEARTS -->
                <div class="glass-panel p-10 rounded-3xl border-t-8 border-violet-600 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col bg-violet-50/10">
                    <div class="flex justify-between items-center mb-6">
                        <span class="bg-violet-100 text-violet-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase">Archive ID: FRB-991</span>
                        <span class="text-gray-400 text-xs font-mono"><i class="fas fa-clock mr-1"></i> 2 min read</span>
                    </div>
                    <h3 class="text-3xl font-bold mb-6 text-slate-900">Shadow Hearts</h3>
                    <div class="text-gray-700 leading-relaxed flex-1 space-y-4">
                        <p>Sariel is the lead Bio-Engineer at Veyrath Labs, responsible for the luminescent moss that lights the streets. But her most complex creation is the "Thermal Mask" she wears when she meets Reno at the edge of the Wild Zone. Their love is a catastrophic design flaw. If the AI "The Beholder" detects their synchronized heartrates, the protocols for 'Biological Purge' would activate automatically.</p>
                        <p>They meet where the magma flows into the sea, a place of steam and static. Sariel dreams of a world where they don't have to hide behind codes and cloaks. She has begun secretly grafting 'Identity Nullifiers' into Reno's gear—tools that would allow him to walk through the Veil unnoticed. This is the story of a love that is more dangerous than any nuclear secret held within the Arkadic stacks.</p>
                    </div>
                    <div class="mt-8 pt-6 border-t border-gray-100">
                        <span class="text-red-600 font-bold text-xs uppercase animate-pulse tracking-tighter">Warning: High Security Risk</span>
                    </div>
                </div>

                <!-- STORY 4: THE SPARK OF UNVEILING (REBEL STORY) -->
                <div class="glass-panel p-10 rounded-3xl border-t-8 border-sky-400 shadow-lg hover:shadow-2xl transition-all h-full bg-slate-900 text-white flex flex-col">
                    <div class="flex justify-between items-center mb-6">
                        <span class="bg-sky-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">REBEL LOG: JXN-01</span>
                        <span class="text-slate-400 text-xs font-mono"><i class="fas fa-clock mr-1"></i> 2.5 min read</span>
                    </div>
                    <h3 class="text-3xl font-bold mb-6 text-sky-400">The Spark of Unveiling</h3>
                    <div class="text-slate-300 leading-relaxed flex-1 space-y-4 text-sm">
                        <p>Jaxen Vane was once the most decorated Sentinel Captain in the Outer Perimeter. He had intercepted a hundred 'Lost vessels' and erased a thousand memories. But one night, he captured a small wooden boat carrying a single mother and a child. Instead of fear, the child showed him a flat, plastic object—a 'Smartphone'—filled with images of a world that was messy, loud, and free.</p>
                        <p>Jaxen didn't perform the erasure. He let them drift away and kept the device. For six months, he studied the "Outside" in secret. He saw sunsets that weren't programmed by a central grid. He saw people traveling across oceans with nothing but a passport. He realized that Arkadis, for all its splendor, was a gilded cage. He resigned his commission and retreated to the Under-Cities of Tier-3, where he began whispering a single word to the workers: "Unveil."</p>
                    </div>
                    <button class="mt-8 bg-sky-500 text-white py-2 px-4 rounded font-bold hover:bg-sky-400 transition-colors uppercase text-xs">Join the Movement</button>
                </div>

                <!-- STORY 5: THE GLITCH -->
                <div class="glass-panel p-10 rounded-3xl border-t-8 border-teal-600 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
                    <h3 class="text-3xl font-bold mb-6 text-slate-900">The Glitch</h3>
                    <div class="text-gray-700 leading-relaxed flex-1 space-y-4">
                        <p>Kaelen Voss sat in the darkness of Tier-3 detention, watching the lumina-moss die on the wall. He wasn't a spy; he was a 'Signal Hunter' who had optimized his antenna a bit too well. He hadn't found a frequency; he had found a gap in the satellite lensing. For three seconds, he saw the true coordinates of the 8th Continent.</p>
                        <p>Now, he's being offered a choice: join the Sentinel R&D team to fix the hole he found, or face "Core-Level Assignment"—a euphemism for working the geothermal vents until your lungs calcify. Kaelen is leaning towards the vents; if he fixes the hole, he makes the prison perfect. If he stays in the dark, maybe he can find a way to make the hole bigger.</p>
                    </div>
                </div>

                <!-- STORY 6: THE SILENT GARDENER -->
                <div class="glass-panel p-10 rounded-3xl border-t-8 border-green-600 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col bg-green-50/5">
                    <h3 class="text-3xl font-bold mb-6 text-slate-900">The Silent Gardener</h3>
                    <p class="text-gray-700 leading-relaxed">
                        Master Rootvein oversees the 50-acre Lumina Gardens in Tier-1. Every tree is a masterpiece of DNA splicing. But the Gardener has a secret. Deep in the root-systems, he has grafted 'Signal-Relay' biologicals. The trees aren't just producing oxygen; they are transmitting encrypted data from Jaxen's rebels to the surface. The Order thinks the trees are beautiful; the Rebels know they are a broadcast network.
                    </p>
                </div>

                <!-- STORY 7: VOID ECHOES -->
                <div class="glass-panel p-10 rounded-3xl border-t-8 border-slate-800 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
                    <h3 class="text-3xl font-bold mb-6 text-slate-900">Void Echoes</h3>
                    <p class="text-gray-700 leading-relaxed">
                        The 12 Void Canon towers do more than bend light; they bend time in localized pockets. Dr. Aris Thorne discovered that the towers are 'recording' the history of the world they hide from. This entry details a forbidden experiment where Thorne accessed the "Echo Chamber" and saw the fall of the Berlin Wall—a moment of global Unveiling that the Inner Circle had scrubbed from the Arkadic history books.
                    </p>
                </div>

                <!-- STORY 8: THE OMEGA PROTOCOL -->
                <div class="glass-panel p-10 rounded-3xl border-t-8 border-red-700 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col bg-red-50/10">
                    <h3 class="text-3xl font-bold mb-6 text-red-700">The Omega Protocol</h3>
                    <p class="text-gray-700 leading-relaxed">
                         A leaked document from the High Council. It outlines the "Self-Erasure" plan: if Arkadis is ever permanently discovered by the world, the Triple Junction Engine will be overloaded, sinking the continent back into the Indian Ocean floor. The cost: 8 million lives for the sake of the Secret. This story follows a young clerk who found the file and joined the Unveiled the next morning.
                    </p>
                </div>

                <!-- STORY 9: THE PRINTER'S ERRAND -->
                <div class="glass-panel p-10 rounded-2xl border-l-4 border-slate-400">
                    <h3 class="text-xl font-bold mb-4">The Printer's Errand</h3>
                    <p class="text-sm text-gray-600">Koal Silas, a low-tier worker, spends his days cleaning the automated 3D-printers in Tier-2. But in his pockets, he carries 'External contraband'—printed pages from 21st-century travel magazines. He leaves them in communal bathrooms, a silent protest of forbidden beauty.</p>
                </div>

                <!-- STORY 10: VESPERA'S WHISPER -->
                <div class="glass-panel p-10 rounded-2xl border-l-4 border-rose-900">
                    <h3 class="text-xl font-bold mb-4">Vespera's Whisper</h3>
                    <p class="text-sm text-gray-600">Deep in the Wild Zones, where the tech starts to fail, there is a legend of a woman who isn't a resident, but a 'Residue'. Vespera claims to be from the future of Arkadis, a time when the Veil has already fallen. She speaks to those who wander too far, telling them of a world where there are no Tiers, only sky.</p>
                </div>

                <!-- STORY 11: THE CODE OF MIRA -->
                <div class="glass-panel p-10 rounded-2xl border-l-4 border-sky-600">
                    <h3 class="text-xl font-bold mb-4">The Code of Mira</h3>
                    <p class="text-sm text-gray-600">Mira Belrose, once a designer for the King, now writes the viruses that blind the Sentinels for 60 seconds every midnight. That one minute is the 'Doorway'—the only time a rebel can slip through the grid. Mira waits by her screen every night, counting the heartbeats until the world is briefly visible.</p>
                </div>

                <!-- STORY 12: THE PRINCE'S DOUBT -->
                <div class="glass-panel p-10 rounded-2xl border-l-4 border-yellow-500 bg-yellow-50/20">
                    <h3 class="text-xl font-bold mb-4 text-orange-950">The Prince's Doubt</h3>
                    <p class="text-sm text-gray-800">Lyros Arcadian is 17. He is the heir to the throne. But he has begun listening to the rebel broadcasts on the 'Low-Freq' bands. He sees his father's vision as a cage, and the rebels as the birds. This story documents his first secret meeting with Jaxen Vane in the depths of the Core.</p>
                </div>

            </div>
        </div>
    `,
    init: () => { }
};
