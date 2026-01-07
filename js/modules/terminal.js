export const terminalModule = {
    render: () => `
        <div id="rebel-terminal" class="fixed bottom-6 right-6 w-80 z-[100] transition-all duration-500 transform translate-y-0">
            <!-- Terminal Header -->
            <div id="terminal-header" class="bg-slate-900 border border-slate-700 p-3 rounded-t-xl flex justify-between items-center cursor-pointer shadow-2xl">
                <div class="flex items-center gap-2 text-teal-400 font-mono text-[10px] uppercase tracking-widest">
                    <span class="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                    Terminal: Intercepted
                </div>
                <button id="terminal-toggle" class="text-slate-500 hover:text-white transition-colors">
                    <i class="fas fa-chevron-up" id="terminal-chevron"></i>
                </button>
            </div>

            <!-- Terminal Body -->
            <div id="terminal-content" class="bg-black/95 border-x border-b border-slate-700 h-0 overflow-hidden transition-all duration-300 font-mono text-[10px] text-teal-500 p-0">
                <div class="p-4 space-y-4">
                    <div class="text-slate-500 border-b border-slate-800 pb-2">
                        [ARKADIS_NET INTERCEPTED]<br>
                        CLEARANCE: LEVEL_UNVEILED<br>
                        --------------------------
                    </div>
                    
                    <div id="terminal-output" class="h-40 overflow-y-auto space-y-2 scrollbar-hide">
                        <p class="text-teal-900">> system.init()</p>
                        <p class="text-teal-900">> scanning_frequencies...</p>
                        <p class="text-teal-400">> ENCRYPTED SIGNAL DETECTED.</p>
                        <p class="text-white font-bold blink">ENTER ACCESS CODE:</p>
                    </div>

                    <div class="flex gap-2">
                        <span class="text-teal-400">$</span>
                        <input type="text" id="terminal-input" placeholder="____" class="bg-transparent border-none outline-none text-white w-full uppercase placeholder:text-teal-900">
                    </div>

                    <div id="terminal-data-leak" class="hidden border-t border-red-900/30 pt-3 mt-3 animate-pulse">
                        <p class="text-red-500 font-bold mb-1 underline">CLASSIFIED_FILE_UNLOCKED</p>
                        <div id="leak-content" class="text-[9px] text-red-400/80 leading-tight"></div>
                    </div>
                </div>
            </div>
        </div>
        <style>
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            .blink { animation: blinker 1s linear infinite; }
            @keyframes blinker { 50% { opacity: 0; } }
            #rebel-terminal.expanded #terminal-content { h-auto; min-height: 300px; p-4; }
            #rebel-terminal.expanded #terminal-chevron { transform: rotate(180deg); transition: transform 0.3s; }
        </style>
    `,
    init: () => {
        const terminal = document.getElementById('rebel-terminal');
        const header = document.getElementById('terminal-header');
        const input = document.getElementById('terminal-input');
        const output = document.getElementById('terminal-output');
        const leakPanel = document.getElementById('terminal-data-leak');
        const leakContent = document.getElementById('leak-content');

        const codes = {
            'JXN-01': "TRANSCRIPT: Captain Vane here. The boat was a setup. The child's device contains real mapping of the Indian Ocean floor. The High Council is hiding 30% more land than we thought. Spread the word.",
            'OMEGA': "PROTOCOL_OMEGA: Arkadis is rigged with 24 thermal-overload charges. In the event of discovery, the entire continent will be submerged. Estimated casualties: 8.4 million.",
            'RENO': "TARGET_LOG: Knight Kington is showing 'Biological Dissonance' Level 4. Relationship with subject SARIEL (Veyrath Lab) is confirmed. Surveillance recommended.",
            'VEIL': "TECHNICAL: The Void Canon isn't just light-bending. It's a dimensional fold. We aren't just hidden; we are vibrating at a different frequency than the rest of the world."
        };

        header.addEventListener('click', () => {
            const content = document.getElementById('terminal-content');
            if (content.style.height === '0px' || !content.style.height) {
                content.style.height = '350px';
                terminal.classList.add('expanded');
                input.focus();
            } else {
                content.style.height = '0px';
                terminal.classList.remove('expanded');
            }
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const val = input.value.toUpperCase();
                input.value = '';

                output.innerHTML += `<p class="text-teal-900">> access_granting [${val}]</p>`;

                if (codes[val]) {
                    output.innerHTML += `<p class="text-white font-bold">ACCESS GRANTED. DECRYPTING...</p>`;
                    leakPanel.classList.remove('hidden');
                    leakContent.textContent = codes[val];

                    // Trigger sound if possible
                } else {
                    output.innerHTML += `<p class="text-red-700">ERROR: INVALID_CODE // AUTH_FAILED</p>`;
                    leakPanel.classList.add('hidden');
                }

                output.scrollTop = output.scrollHeight;
            }
        });
    }
};
