export const audioModule = {
    ctx: null,
    osc: null,

    init: () => {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        let lastHoveredElement = null;
        let lastHoverAt = 0;

        // Initialize Audio Context on first user interaction to bypass browser policies
        const enableAudio = () => {
            if (!audioModule.ctx) {
                audioModule.ctx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioModule.ctx.state === 'suspended') audioModule.ctx.resume().catch(() => { });
            document.removeEventListener('click', enableAudio);
        };
        document.addEventListener('click', enableAudio);

        // Attach listeners to interactive elements
        document.addEventListener('pointerover', (event) => {
            if (reducedMotion.matches) return;
            const interactiveElement = event.target.closest('button, .character-card, .nav-btn');
            if (!interactiveElement || interactiveElement.contains(event.relatedTarget)) return;

            const now = performance.now();
            if (interactiveElement === lastHoveredElement || now - lastHoverAt < 80) return;
            lastHoveredElement = interactiveElement;
            lastHoverAt = now;
            audioModule.playHover();
        });

        document.addEventListener('pointerout', (event) => {
            if (lastHoveredElement && !lastHoveredElement.contains(event.relatedTarget)) {
                lastHoveredElement = null;
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target.closest('button') || e.target.closest('a')) {
                audioModule.playClick();
            }
        });

        // Listen for typing in terminal
        const termInput = document.getElementById('terminal-input');
        if (termInput) {
            termInput.addEventListener('input', () => audioModule.playTyping());
        }
    },

    playTone: (freq, type, duration, vol = 0.05) => {
        if (!audioModule.ctx) return;

        const osc = audioModule.ctx.createOscillator();
        const gain = audioModule.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioModule.ctx.currentTime);

        gain.gain.setValueAtTime(vol, audioModule.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioModule.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(audioModule.ctx.destination);

        osc.start();
        osc.stop(audioModule.ctx.currentTime + duration);
    },

    playHover: () => {
        // High pitch short blip
        audioModule.playTone(800, 'sine', 0.1, 0.02);
    },

    playClick: () => {
        // Lower mechanical thud
        audioModule.playTone(300, 'square', 0.1, 0.05);
    },

    playTyping: () => {
        // Random pitch click
        const freq = 600 + Math.random() * 200;
        audioModule.playTone(freq, 'triangle', 0.05, 0.03);
    },

    playAlarm: () => {
        if (!audioModule.ctx) return;
        // Low drone
        const osc = audioModule.ctx.createOscillator();
        const gain = audioModule.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(100, audioModule.ctx.currentTime);
        gain.gain.setValueAtTime(0.05, audioModule.ctx.currentTime);
        osc.connect(gain);
        gain.connect(audioModule.ctx.destination);
        osc.start();
        osc.stop(audioModule.ctx.currentTime + 1.5);
    }
};
