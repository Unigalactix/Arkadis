export const audioModule = {
    ctx: null,
    osc: null,

    init: () => {
        // Initialize Audio Context on first user interaction to bypass browser policies
        const enableAudio = () => {
            if (!audioModule.ctx) {
                audioModule.ctx = new (window.AudioContext || window.webkitAudioContext)();
                console.log("Audio System Initialized");
            }
            document.removeEventListener('click', enableAudio);
        };
        document.addEventListener('click', enableAudio);

        // Attach listeners to interactive elements
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('button') || e.target.closest('.character-card') || e.target.closest('.nav-btn')) {
                audioModule.playHover();
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
