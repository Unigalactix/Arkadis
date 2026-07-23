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
        const content = document.getElementById('ticker-content');
        if (!content) return;

        const orderNews = [
            "GEOTHERMAL OUTPUT STABLE AT 98%...",
            "NEW BIO-DOME OPENING IN SECTOR 3 - APPLY TODAY...",
            "PYRO-BALL FINALS: EMBERFIST WINS 4-0...",
            "TRAVEL ADVISORY: SURFACE STORMS CLEARING...",
            "THE ORDER PROTECTS. THE ORDER PROVIDES."
        ];
        content.textContent = orderNews.join(" ••• ");
    }
};
