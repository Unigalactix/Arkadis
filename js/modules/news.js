export const newsModule = {
    render: () => `
        <div id="news-ticker-bar" class="fixed bottom-0 left-0 w-full h-8 z-[90] flex items-center overflow-hidden">
            <div class="ticker-label px-4 h-full flex items-center text-[10px] font-bold uppercase tracking-widest z-10">
                <i class="fas fa-broadcast-tower mr-2"></i> LIVE FEED
            </div>
            <div class="flex-1 overflow-hidden relative h-full">
                <div id="ticker-content" class="absolute whitespace-nowrap animate-ticker text-xs font-mono py-1.5 pl-4">
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
            #news-ticker-bar {
                color: var(--silver-300);
                background: var(--liquid-refraction);
                border-top: 1px solid var(--glass-border);
                box-shadow: inset 0 1px 0 var(--liquid-rim), 0 -12px 34px rgba(0,0,0,.28);
                backdrop-filter: blur(30px) saturate(155%) contrast(106%);
                -webkit-backdrop-filter: blur(30px) saturate(155%) contrast(106%);
            }
            .ticker-label {
                color: #111;
                background: var(--metal-gradient);
                box-shadow: inset 0 1px 0 rgba(255,255,255,.68), 8px 0 20px rgba(0,0,0,.28);
            }
            @media (max-width: 767px) {
                #news-ticker-container {
                    display: block;
                    flex: 0 0 2rem;
                    height: 2rem;
                }
                #news-ticker-bar {
                    position: sticky !important;
                    left: auto !important;
                    bottom: 0;
                    margin-top: 0;
                }
            }
            @media (min-width: 768px) {
                body { padding-bottom: 2rem; }
            }
            @media (prefers-reduced-motion: reduce) {
                .animate-ticker { animation: none; }
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
