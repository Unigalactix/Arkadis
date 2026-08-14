const splashVideoSrc = 'legacy/rotate_logo_3d.mp4';
let loadingRemovalTimer;

function splashMarkup({ id, label, loop = false }) {
    return `
        <div class="arkadis-splash-shell">
            <video id="${id}" class="arkadis-splash-video" autoplay muted playsinline preload="auto" ${loop ? 'loop' : ''}
                aria-label="Arkadis rotating logo">
                <source src="${splashVideoSrc}" type="video/mp4">
            </video>
            <div class="arkadis-splash-copy">
                <span class="arkadis-splash-wordmark">ARKADIS</span>
                <span class="arkadis-splash-label">${label}</span>
            </div>
        </div>
    `;
}

export const bootModule = {
    init: () => {
        const overlay = document.getElementById('boot-overlay');
        if (!overlay) return;

        if (sessionStorage.getItem('arkadis_booted')) {
            overlay.remove();
            return;
        }

        overlay.classList.add('arkadis-splash-overlay');
        overlay.innerHTML = splashMarkup({
            id: 'launch-splash-video',
            label: 'Initializing secure archive'
        });

        const video = document.getElementById('launch-splash-video');
        let completed = false;

        video.muted = true;
        video.defaultMuted = true;

        const completeBoot = () => {
            if (completed) return;
            completed = true;
            overlay.classList.add('arkadis-splash-exit');

            window.setTimeout(() => {
                overlay.remove();
                sessionStorage.setItem('arkadis_booted', 'true');
            }, 500);
        };

        video.addEventListener('ended', completeBoot, { once: true });
        video.addEventListener('error', completeBoot, { once: true });
        video.addEventListener('canplay', () => video.play().catch(() => { }), { once: true });
        video.play().catch(() => { });
        window.setTimeout(completeBoot, 5500);
    },

    showLoading: (label = 'Loading archive') => {
        window.clearTimeout(loadingRemovalTimer);

        const existingOverlay = document.getElementById('arkadis-loading-overlay');
        if (existingOverlay) {
            existingOverlay.classList.remove('arkadis-splash-exit');
            existingOverlay.querySelector('.arkadis-splash-label').textContent = label;
            return;
        }

        const overlay = document.createElement('div');
        overlay.id = 'arkadis-loading-overlay';
        overlay.className = 'arkadis-splash-overlay arkadis-loading-overlay';
        overlay.innerHTML = splashMarkup({
            id: 'loading-splash-video',
            label,
            loop: true
        });

        const video = overlay.querySelector('video');
        video.muted = true;
        video.defaultMuted = true;
        video.addEventListener('canplay', () => video.play().catch(() => { }), { once: true });
        document.body.appendChild(overlay);
        video.load();
        video.play().catch(() => { });

        requestAnimationFrame(() => overlay.classList.add('arkadis-splash-active'));
    },

    hideLoading: () => {
        const overlay = document.getElementById('arkadis-loading-overlay');
        if (!overlay) return;

        overlay.classList.add('arkadis-splash-exit');
        loadingRemovalTimer = window.setTimeout(() => overlay.remove(), 220);
    }
};
