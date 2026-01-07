export const bootModule = {
    init: async () => {
        // Check if already booted in this session to avoid annoyance
        if (sessionStorage.getItem('arkadis_booted')) {
            document.getElementById('boot-overlay').remove();
            return;
        }

        const overlay = document.getElementById('boot-overlay');
        overlay.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full w-full bg-black text-green-500 font-mono z-[200]">
                
                <!-- Main Container -->
                <div class="relative w-[300px] h-[400px] border-2 border-green-900 bg-black/80 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,0,0.2)]">
                    
                    <!-- Camera Feed -->
                    <video id="webcam" autoplay playsinline muted class="absolute inset-0 w-full h-full object-cover opacity-50"></video>
                    
                    <!-- Scanning Overlay -->
                    <div class="absolute inset-0 z-10 flex flex-col items-center justify-between p-4">
                        <div class="w-full text-center border-b border-green-500/50 pb-2">
                            <span class="text-xs uppercase tracking-widest animate-pulse">Retina Scan Init...</span>
                        </div>
                        
                        <!-- Target Box -->
                        <div class="w-48 h-48 border-2 border-green-500/30 rounded-full relative flex items-center justify-center">
                            <div class="absolute w-full h-0.5 bg-green-500 animate-scan"></div>
                            <div class="absolute w-2 h-2 bg-green-500 top-0 left-1/2 -ml-1"></div>
                            <div class="absolute w-2 h-2 bg-green-500 bottom-0 left-1/2 -ml-1"></div>
                            <div class="absolute w-2 h-2 bg-green-500 left-0 top-1/2 -mt-1"></div>
                            <div class="absolute w-2 h-2 bg-green-500 right-0 top-1/2 -mt-1"></div>
                        </div>

                        <!-- Status Log -->
                        <div id="boot-log" class="w-full text-[10px] space-y-1 h-20 overflow-hidden text-green-400 opacity-80 bg-black/50 p-2 rounded">
                            <div>> SYSTEM.MOUNT(CAM_01)</div>
                        </div>
                    </div>
                </div>

                <!-- Footer Text -->
                <div class="mt-8 text-center space-y-2">
                    <h1 class="text-2xl font-bold tracking-tight text-white glitch-text" data-text="ARKADIS">ARKADIS</h1>
                    <p class="text-[10px] text-gray-500">SECURE TERMINAL ACCESS REQUIRED</p>
                </div>
            </div>
            <style>
                @keyframes scan {
                    0% { top: 0%; opacity: 0; }
                    50% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                .animate-scan { animation: scan 2s linear infinite; }
            </style>
        `;

        const logDiv = document.getElementById('boot-log');
        const video = document.getElementById('webcam');

        function addLog(msg) {
            logDiv.innerHTML += `<div>> ${msg}</div>`;
            logDiv.scrollTop = logDiv.scrollHeight;
        }

        // Camera Logic
        try {
            addLog("REQUESTING_PERMISSION...");
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            addLog("SIGNAL_ACQUIRED [OK]");
            addLog("ANALYZING_BIOMETRICS...");

            // Artificial delay for "Scanning" effect
            setTimeout(() => {
                addLog("MATCH_FOUND: 99.9%");
                addLog("WELCOME_BACK_COMMANDER");

                // Success UI
                document.querySelector('.animate-scan').style.backgroundColor = '#22c55e'; // Bright Green
                document.querySelector('.border-green-500\\/30').style.borderColor = '#22c55e';

                // Play Sound
                if (window.audioModule) window.audioModule.playTone(800, 'sine', 0.2);

                setTimeout(() => {
                    completeBoot(stream);
                }, 1500);
            }, 2500);

        } catch (err) {
            console.error("Camera denied", err);
            addLog("CAMERA_FAIL: BYPASSING...");
            addLog("USING_FALLBACK_AUTH...");
            setTimeout(() => {
                completeBoot(null);
            }, 2000);
        }

        function completeBoot(stream) {
            // Stop Camera
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }

            // Fade Out
            overlay.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
            setTimeout(() => {
                overlay.remove();
                sessionStorage.setItem('arkadis_booted', 'true');
            }, 1000);
        }
    }
};
