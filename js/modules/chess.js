export const chessModule = {
    render: () => `
        <div id="chess-section" class="tab-content space-y-8 animate-fade-in">
            <div class="text-center space-y-3 mb-8">
                <div class="text-[10px] uppercase tracking-[0.28em] text-gray-500">Arkadis Strategic Command</div>
                <h2 class="text-3xl font-bold text-slate-900 serif">The Grand Game</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">In Arkadis, strategy is not a pastime; it is a way of life.
                    Match your wits against the Archive's tactical AI.</p>
            </div>

            <div class="scene-bushes mb-4"></div>

            <div class="flex flex-col lg:flex-row gap-10 items-start justify-center">
                <!-- BOARD -->
                <div class="chess-board-shell">
                    <div class="player-rail">
                        <div class="player-avatar player-avatar-ai"><i class="fas fa-microchip"></i></div>
                        <div class="player-copy"><strong>ARKADIS ARCHIVE</strong><span>Tactical intelligence</span></div>
                        <span class="player-rating">AI · 2400</span>
                    </div>
                    <div id="chess-board" class="chess-board" role="grid" aria-label="Arkadis chess board">
                        <!-- Board squares will be injected here. -->
                    </div>
                    <div class="player-rail">
                        <div class="player-avatar"><i class="fas fa-user"></i></div>
                        <div class="player-copy"><strong>COMMANDER</strong><span>Silver pieces</span></div>
                        <span class="player-rating">YOU · WHITE</span>
                    </div>
                </div>

                <!-- CONTROLS & INFO -->
                <div class="flex-1 max-w-md space-y-6">
                    <div class="glass-panel p-6 rounded-xl space-y-4">
                        <h3 class="font-bold text-lg mb-2 flex items-center gap-2">
                                <i class="fas fa-brain"></i> Tactical Configuration
                        </h3>
                        
                        <div>
                            <label class="text-xs font-bold text-gray-500 uppercase">Difficulty Level</label>
                            <div class="difficulty-control mt-2" role="group" aria-label="Difficulty level">
                                <button data-level="1" class="difficulty-btn active"><span>01</span>Initiate</button>
                                <button data-level="2" class="difficulty-btn"><span>02</span>Strategist</button>
                                <button data-level="3" class="difficulty-btn"><span>03</span>Oracle</button>
                            </div>
                        </div>

                        <div id="game-status" class="chess-status text-sm font-mono flex justify-between items-center">
                            <span>STATUS: <span id="status-text" class="text-green-400">WAITING FOR MOVE</span></span>
                            <span id="turn-indicator" class="turn-indicator animate-pulse"></span>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <button id="reset-game" class="chess-command chess-command-primary">
                                <i class="fas fa-undo"></i> Reset
                            </button>
                            <button id="undo-move" class="chess-command">
                                <i class="fas fa-step-backward"></i> Undo
                            </button>
                        </div>
                    </div>

                    <div class="glass-panel p-6 rounded-xl chess-rules">
                        <h4 class="font-bold mb-2">The Silver Doctrine</h4>
                        <p class="text-xs text-gray-600 leading-relaxed">
                            You command the Silver Pieces. The Archive commands the Obsidian Pieces.
                            Victory is achieved through total strategic dominance.
                        </p>
                    </div>

                    <div id="move-history" class="glass-panel p-4 rounded-xl h-32 overflow-y-auto text-[10px] font-mono scroll-bar-thin">
                        <div class="text-gray-400">Game History...</div>
                    </div>
                </div>
            </div>
        </div>
        <style>
            .chess-board-shell { width: min(92vw, 34rem); padding: .75rem; border: 1px solid rgba(204,204,204,.24); border-radius: 14px; background: linear-gradient(145deg,#1c1c1c,#090909); box-shadow: inset 0 1px 0 rgba(255,255,255,.1),0 28px 70px rgba(0,0,0,.52); }
            .chess-board { display: grid; grid-template-columns: repeat(8,minmax(0,1fr)); grid-template-rows: repeat(8,minmax(0,1fr)); width: 100%; aspect-ratio: 1; overflow: hidden; border: 1px solid #050505; box-shadow: 0 0 0 1px #565656,inset 0 0 28px rgba(0,0,0,.38); }
            .player-rail { display: flex; align-items: center; gap: .65rem; min-height: 3.25rem; padding: .5rem .25rem; }
            .player-avatar { width: 2.25rem; height: 2.25rem; display: grid; place-items: center; border: 1px solid #8a8a8a; border-radius: 50%; color: #171717; background: var(--metal-gradient); }
            .player-avatar-ai { color: #d4d4d4; background: linear-gradient(145deg,#4d4d4d,#111); }
            .player-copy { display: flex; flex-direction: column; line-height: 1.15; }
            .player-copy strong { color: #dedede; font-size: .72rem; letter-spacing: .08em; }
            .player-copy span,.player-rating { color: #898989; font-size: .62rem; }
            .player-rating { margin-left: auto; letter-spacing: .06em; }
            .chess-square { appearance: none; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; padding: 0; border: 0; cursor: pointer; position: relative; }
            .square-light { background: linear-gradient(145deg,#c8c8c8,#a7a7a7); }
            .square-dark { background: linear-gradient(145deg,#454545,#303030); }
            .square-selected { box-shadow: inset 0 0 0 4px #efefef,inset 0 0 20px rgba(255,255,255,.32) !important; z-index: 2; }
            .square-hint::after { content: ''; position: absolute; width: 22%; height: 22%; border-radius: 50%; background: rgba(22,22,22,.3); box-shadow: 0 0 0 3px rgba(240,240,240,.22); }
            .piece { font-size: clamp(1.55rem,6vw,2.65rem); z-index: 3; pointer-events: none; transition: transform .18s ease,filter .18s ease; }
            .piece-white { color: #ededed; filter: drop-shadow(0 3px 2px rgba(0,0,0,.55)); }
            .piece-black { color: #171717; filter: drop-shadow(0 1px 0 #9c9c9c) drop-shadow(0 3px 2px rgba(0,0,0,.6)); }
            .chess-square:hover .piece { transform: translateY(-3px) scale(1.04); filter: brightness(1.08); }
            .difficulty-control { display: grid; grid-template-columns: repeat(3,1fr); padding: 3px; border: 1px solid rgba(137,137,137,.28); border-radius: 8px; background: rgba(0,0,0,.28); }
            .difficulty-btn { min-width: 0; padding: .55rem .35rem; border: 0; border-radius: 5px; color: #898989; font-size: .68rem; transition: background .18s ease,color .18s ease; }
            .difficulty-btn span { display: block; margin-bottom: .15rem; font-size: .55rem; opacity: .7; }
            .difficulty-btn.active { color: #111; background: var(--metal-gradient); box-shadow: 0 4px 14px rgba(0,0,0,.28); }
            .chess-status { padding: 1rem; border: 1px solid rgba(137,137,137,.24); border-radius: 8px; color: #d0d0d0; background: rgba(4,4,4,.62); }
            .turn-indicator { width: .7rem; height: .7rem; border: 1px solid #f0f0f0; border-radius: 50%; background: #dcdcdc; box-shadow: 0 0 12px rgba(220,220,220,.46); }
            .chess-command { width: 100%; min-height: 2.8rem; display: flex; align-items: center; justify-content: center; gap: .5rem; border: 1px solid rgba(156,156,156,.4); border-radius: 8px; color: #c8c8c8; background: rgba(255,255,255,.035); font-weight: 700; transition: background .18s ease,border-color .18s ease; }
            .chess-command:hover { border-color: #cccccc; background: rgba(255,255,255,.08); }
            .chess-command-primary { color: #111; background: var(--metal-gradient); }
            .chess-rules { border-left: 3px solid #9c9c9c !important; }
        </style>
    `,
    init: () => {
        if (!window.Chess) {
            console.error('chess.js not loaded');
            return;
        }

        const game = new Chess();
        const boardEl = document.getElementById('chess-board');
        const statusText = document.getElementById('status-text');
        const turnIndicator = document.getElementById('turn-indicator');
        const moveHistoryEl = document.getElementById('move-history');

        let selectedSquare = null;
        let difficulty = 1; // 1: Easy, 2: Medium, 3: Hard

        let chessAudioContext = null;

        const playMoveSound = (move) => {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (!AudioContextClass || !move) return;

            chessAudioContext ||= new AudioContextClass();
            if (chessAudioContext.state === 'suspended') chessAudioContext.resume().catch(() => { });

            const isGameEnd = game.in_checkmate() || game.in_draw();
            const frequencies = isGameEnd
                ? [220, 164]
                : [move.promotion ? 660 : move.captured ? 250 : game.in_check() ? 520 : 390];

            frequencies.forEach((frequency, index) => {
                const start = chessAudioContext.currentTime + index * 0.1;
                const oscillator = chessAudioContext.createOscillator();
                const gain = chessAudioContext.createGain();
                oscillator.type = isGameEnd ? 'triangle' : 'sine';
                oscillator.frequency.setValueAtTime(frequency, start);
                gain.gain.setValueAtTime(0.045, start);
                gain.gain.exponentialRampToValueAtTime(0.001, start + 0.14);
                oscillator.connect(gain).connect(chessAudioContext.destination);
                oscillator.start(start);
                oscillator.stop(start + 0.14);
            });
        };

        const pieceIcons = {
            'p': 'fa-chess-pawn',
            'r': 'fa-chess-rook',
            'n': 'fa-chess-knight',
            'b': 'fa-chess-bishop',
            'q': 'fa-chess-queen',
            'k': 'fa-chess-king'
        };

        const renderBoard = () => {
            boardEl.innerHTML = '';
            const board = game.board();

            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    const square = board[i][j];
                    const squareName = String.fromCharCode(97 + j) + (8 - i);
                    const isDark = (i + j) % 2 === 1;

                    const squareDiv = document.createElement('div');
                    squareDiv.className = `chess-square ${isDark ? 'square-dark' : 'square-light'}`;
                    squareDiv.dataset.square = squareName;

                    if (selectedSquare === squareName) {
                        squareDiv.classList.add('square-selected');
                    }

                    if (square) {
                        const pieceIcon = document.createElement('i');
                        pieceIcon.className = `fas ${pieceIcons[square.type]} piece piece-${square.color === 'w' ? 'white' : 'black'}`;
                        squareDiv.appendChild(pieceIcon);
                    }

                    squareDiv.addEventListener('click', () => handleSquareClick(squareName));
                    boardEl.appendChild(squareDiv);
                }
            }
        };

        const handleSquareClick = (square) => {
            if (game.game_over() || game.turn() === 'b') return;

            if (selectedSquare === square) {
                selectedSquare = null;
                renderBoard();
                return;
            }

            const piece = game.get(square);

            // If selecting own piece
            if (piece && piece.color === 'w') {
                selectedSquare = square;
                renderBoard();
                // Show hints
                const moves = game.moves({ square: square, verbose: true });
                moves.forEach(m => {
                    const hintSquare = document.querySelector(`[data-square="${m.to}"]`);
                    if (hintSquare) hintSquare.classList.add('square-hint');
                });
                return;
            }

            // If move attempted
            if (selectedSquare) {
                const moveObj = {
                    from: selectedSquare,
                    to: square,
                    promotion: 'q'
                };

                const move = game.move(moveObj);

                if (move) {
                    selectedSquare = null;
                    playMoveSound(move);
                    updateUI();
                    setTimeout(makeComputerMove, 700);
                } else {
                    selectedSquare = null;
                    renderBoard();
                }
            }
        };

        const updateUI = () => {
            renderBoard();

            if (game.in_checkmate()) {
                statusText.textContent = game.turn() === 'w' ? 'CHECKMATE - ARCHIVE WINS' : 'CHECKMATE - YOU WIN';
                statusText.classList.replace('text-green-400', 'text-red-500');
            } else if (game.in_draw()) {
                statusText.textContent = 'GAME DRAW';
                statusText.classList.replace('text-green-400', 'text-yellow-500');
            } else if (game.in_check()) {
                statusText.textContent = 'CHECK!';
            } else {
                statusText.textContent = game.turn() === 'w' ? 'YOUR MOVE' : 'CALCULATING...';
            }

            turnIndicator.style.backgroundColor = game.turn() === 'w' ? '#f97316' : '#1e293b';

            // Update History
            const history = game.history();
            if (history.length > 0) {
                moveHistoryEl.innerHTML = history.map((m, i) =>
                    `<div class="py-1 border-b border-gray-100 flex gap-2">
                        <span class="text-gray-400">${Math.floor(i / 2 + 1)}.</span>
                        <span class="${i % 2 === 0 ? 'text-orange-600 font-bold' : 'text-slate-800'}">${m}</span>
                    </div>`
                ).reverse().join('');
            }
        };

        // --- AI LOGIC ---
        const makeComputerMove = () => {
            if (game.game_over()) return;

            let moveStr;
            if (difficulty === 1) {
                moveStr = getEasyMove();
            } else if (difficulty === 2) {
                moveStr = getMediumMove();
            } else {
                moveStr = getHardMove();
            }

            const move = game.move(moveStr);
            playMoveSound(move);
            updateUI();
        };

        const getEasyMove = () => {
            const moves = game.moves();
            // Random move
            return moves[Math.floor(Math.random() * moves.length)];
        };

        const getMediumMove = () => {
            return minimaxRoot(2, true);
        };

        const getHardMove = () => {
            return minimaxRoot(3, true);
        };

        // Simple Minimax
        const evaluateBoard = (board) => {
            let totalEvaluation = 0;
            const pieceValues = { 'p': 10, 'r': 50, 'n': 30, 'b': 30, 'q': 90, 'k': 900 };

            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    const piece = board[i][j];
                    if (piece) {
                        const val = pieceValues[piece.type];
                        totalEvaluation += (piece.color === 'w' ? -val : val);
                    }
                }
            }
            return totalEvaluation;
        };

        const minimaxRoot = (depth, isMaximisingPlayer) => {
            const newGameMoves = game.moves();
            let bestMove = -9999;
            let bestMoveFound;

            for (let i = 0; i < newGameMoves.length; i++) {
                const newGameMove = newGameMoves[i];
                game.move(newGameMove);
                const value = minimax(depth - 1, -10000, 10000, !isMaximisingPlayer);
                game.undo();
                if (value >= bestMove) {
                    bestMove = value;
                    bestMoveFound = newGameMove;
                }
            }
            return bestMoveFound;
        };

        const minimax = (depth, alpha, beta, isMaximisingPlayer) => {
            if (depth === 0) return evaluateBoard(game.board());

            const newGameMoves = game.moves();
            if (isMaximisingPlayer) {
                let bestMove = -9999;
                for (let i = 0; i < newGameMoves.length; i++) {
                    game.move(newGameMoves[i]);
                    bestMove = Math.max(bestMove, minimax(depth - 1, alpha, beta, !isMaximisingPlayer));
                    game.undo();
                    alpha = Math.max(alpha, bestMove);
                    if (beta <= alpha) return bestMove;
                }
                return bestMove;
            } else {
                let bestMove = 9999;
                for (let i = 0; i < newGameMoves.length; i++) {
                    game.move(newGameMoves[i]);
                    bestMove = Math.min(bestMove, minimax(depth - 1, alpha, beta, !isMaximisingPlayer));
                    game.undo();
                    beta = Math.min(beta, bestMove);
                    if (beta <= alpha) return bestMove;
                }
                return bestMove;
            }
        };

        // UI Listeners
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                difficulty = parseInt(this.dataset.level);
                document.querySelectorAll('.difficulty-btn').forEach(b => {
                    b.classList.remove('bg-green-50', 'border-green-200', 'text-green-700', 'bg-blue-50', 'border-blue-200', 'text-blue-700', 'bg-red-50', 'border-red-200', 'text-red-700');
                });
                const colors = { 1: 'green', 2: 'blue', 3: 'red' };
                const c = colors[difficulty];
                this.classList.add(`bg-${c}-50`, `border-${c}-200`, `text-${c}-700`);
            });
        });

        document.getElementById('reset-game').addEventListener('click', () => {
            game.reset();
            selectedSquare = null;
            updateUI();
        });

        document.getElementById('undo-move').addEventListener('click', () => {
            game.undo(); // undo computer
            game.undo(); // undo player
            selectedSquare = null;
            updateUI();
        });

        renderBoard();
        updateUI();
    }
};
