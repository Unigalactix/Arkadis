export const newsModule = {
    render: () => `
        <div id="news-ticker-bar" class="fixed bottom-0 left-0 w-full h-8 bg-slate-900 border-t border-slate-700 z-[90] flex items-center overflow-hidden">
            <div class="px-4 bg-orange-700 h-full flex items-center text-[10px] font-bold text-white uppercase tracking-widest z-10 shadow-lg">
                <i class="fas fa-broadcast-tower mr-2"></i> LIVE FEED
            </div>
            <div class="flex-1 overflow-hidden relative h-full">
                <div id="ticker-content" class="absolute whitespace-nowrap animate-ticker text-xs font-mono text-orange-400 py-1.5 pl-4">
                    Wait...
                </div>
            </div>
        </div>
        <style>
            @keyframes ticker {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
            }
            .animate-ticker {
                animation: ticker 20s linear infinite;
            }
        </style>
    `,

    init: () => {
        newsModule.updateMode(window.isUnveiledMode || false);
    },

    updateMode: (isUnveiled) => {
        const content = document.getElementById('ticker-content');
        const header = document.querySelector('#news-ticker-bar div:first-child');

        if (!content) return;

        if (isUnveiled) {
            header.className = "px-4 bg-red-900 h-full flex items-center text-[10px] font-bold text-white uppercase tracking-widest z-10 shadow-lg";
            header.innerHTML = `<i class="fas fa-radiation mr-2"></i> LEAKED SIGNAL`;
            content.className = "absolute whitespace-nowrap animate-ticker text-xs font-mono text-red-500 py-1.5 pl-4";

            const rebelNews = [
                "WARNING: WATER CONTAMINATION DETECTED IN SECTOR 7...",
                "RIOT CONTROL UNITS DEPLOYED TO THE 'STEAM' DISTRICT...",
                "3 CITIZENS MISSING AFTER 'ROUTINE CHECK'...",
                "THE VEIL IS FLICKERING - ENERGY SPIKE AT 300%...",
                "REMEMBER: THEY ARE WATCHING YOU."
            ];
            content.textContent = rebelNews.join(" +++ ");
        } else {
            header.className = "px-4 bg-orange-700 h-full flex items-center text-[10px] font-bold text-white uppercase tracking-widest z-10 shadow-lg";
            header.innerHTML = `<i class="fas fa-broadcast-tower mr-2"></i> LIVE FEED`;
            content.className = "absolute whitespace-nowrap animate-ticker text-xs font-mono text-orange-400 py-1.5 pl-4";

            const orderNews = [
                "GEOTHERMAL OUTPUT STABLE AT 98%...",
                "NEW BIO-DOME OPENING IN SECTOR 3 - APPLY TODAY...",
                "PYRO-BALL FINALS: EMBERFIST WINS 4-0...",
                "TRAVEL ADVISORY: SURFACE STORMS CLEARING...",
                "THE ORDER PROTECTS. THE ORDER PROVIDES."
            ];
            content.textContent = orderNews.join(" ••• ");
        }
    }
};
