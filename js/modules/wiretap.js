export const wiretapModule = {
    render: () => `
        <div id="wiretap-section" class="tab-content hidden space-y-8 animate-fade-in pb-24 h-[calc(100vh-200px)]">
            <div class="flex flex-col h-full bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl relative">
                
                <!-- CRT Effect for this specific window -->
                <div class="absolute inset-0 pointer-events-none z-20 bg-[url('https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif')] opacity-[0.03] bg-cover"></div>

                <!-- Header -->
                <div class="bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center z-30">
                    <div class="flex items-center gap-3">
                        <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                        <span class="text-xs font-mono text-red-400 uppercase tracking-widest">LIVE INTERCEPT // SIGNAL_LOCKED</span>
                    </div>
                    <div class="text-xs text-gray-500 font-mono">FREQ: 89.4 MHz</div>
                </div>

                <!-- Chat Area -->
                <div id="wiretap-logs" class="flex-1 overflow-y-auto p-6 space-y-4 font-mono text-sm bg-black/50 relative">
                    <!-- Messages will auto-inject here via JS -->
                </div>

                <!-- Active Listeners -->
                <div class="bg-gray-900 p-2 border-t border-gray-800 text-[10px] text-gray-600 font-mono flex justify-between px-4">
                    <span>LISTENING_POST_ALPHA</span>
                    <span>ENCRYPTION: BROKEN</span>
                </div>
            </div>
        </div>
    `,
    init: () => {
        const logContainer = document.getElementById('wiretap-logs');
        if (!logContainer) return;

        // Message Script
        const script = [
            { sender: 'UNKNOWN', text: "Target is on the move.", delay: 1000, color: 'text-gray-400' },
            { sender: 'R. KINGION', text: "Copy. The package is secure?", delay: 2500, color: 'text-orange-400' },
            { sender: 'SARIEL (Veyrath Lab)', text: "Hardly. The containment field is fluctuating. Reno, if this leaks...", delay: 4500, color: 'text-teal-400' },
            { sender: 'R. KINGION', text: "It won't. I'll handle the Council. You just keep the biologicals stable.", delay: 7000, color: 'text-orange-400' },
            { sender: 'UNKNOWN', text: "ALERT: Signature detected on Tier-2.", delay: 10000, color: 'text-red-500 animate-pulse' },
            { sender: 'SARIEL (Veyrath Lab)', text: "Is it him? The Heir?", delay: 12000, color: 'text-teal-400' },
            { sender: 'R. KINGTON', text: "Go dark. Now.", delay: 14000, color: 'text-orange-400' },
            { sender: 'SYSTEM', text: "--- CONNECTION LOST ---", delay: 16000, color: 'text-gray-600 italic' }
        ];

        let i = 0;

        // Clear previous logs
        logContainer.innerHTML = '';

        function playLog() {
            if (i >= script.length) return;

            const msg = script[i];

            setTimeout(() => {
                const div = document.createElement('div');
                div.className = `flex flex-col gap-1 opacity-0 animate-fade-in`;
                div.innerHTML = `
                    <span class="text-[10px] font-bold opacity-50 ${msg.color}">${msg.sender}</span>
                    <span class="${msg.color} bg-white/5 p-2 rounded-lg inline-block w-fit max-w-[80%] border-l-2 border-current hover:bg-white/10 transition-colors cursor-pointer">
                        ${msg.text}
                    </span>
                `;

                logContainer.appendChild(div);

                // Play Sound
                if (window.audioModule) window.audioModule.playTyping();

                // Scroll to bottom
                logContainer.scrollTop = logContainer.scrollHeight;

                i++;
                playLog();
            }, msg.delay - (i > 0 ? script[i - 1].delay : 0));
        }

        playLog();
    }
};
