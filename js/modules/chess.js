export const chessModule = {
    render: () => `
        <div id="chess-section" class="tab-content space-y-8 animate-fade-in">
            <div class="text-center space-y-4 mb-8">
                <h2 class="text-3xl font-bold text-slate-900 serif">The Grand Game</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">In Arkadis, strategy is not a pastime; it is a way of life.
                    Match your wits against the Archive's tactical AI.</p>
            </div>

            <div class="flex flex-col lg:flex-row gap-12 items-start justify-center">
                <!-- BOARD -->
                <div class="space-y-4">
                    <div id="chess-board" class="grid grid-cols-8 grid-rows-8 w-[320px] h-[320px] md:w-[480px] md:h-[480px] border-4 border-slate-900 shadow-2xl overflow-hidden rounded-lg">
                        <!-- Board squares will be injected here -->
                    </div>
                    <div class="flex justify-between items-center text-xs font-mono uppercase text-gray-500 px-1">
                        <span>A8</span><span>B8</span><span>C8</span><span>D8</span><span>E8</span><span>F8</span><span>G8</span><span>H8</span>
                    </div>
                </div>

                <!-- CONTROLS & INFO -->
                <div class="flex-1 max-w-md space-y-6">
                    <div class="glass-panel p-6 rounded-xl space-y-4">
                        <h3 class="font-bold text-lg mb-2 flex items-center gap-2">
                             <i class="fas fa-brain text-orange-600"></i> Tactical Configuration
                        </h3>
                        
                        <div>
                            <label class="text-xs font-bold text-gray-500 uppercase">Difficulty Level</label>
                            <div class="grid grid-cols-3 gap-2 mt-2">
                                <button data-level="1" class="difficulty-btn font-bold py-2 rounded border-2 border-slate-200 hover:bg-slate-50 transition-colors bg-green-50 border-green-200 text-green-700">Level 1</button>
                                <button data-level="2" class="difficulty-btn font-bold py-2 rounded border-2 border-slate-200 hover:bg-slate-50 transition-colors">Level 2</button>
                                <button data-level="3" class="difficulty-btn font-bold py-2 rounded border-2 border-slate-200 hover:bg-slate-50 transition-colors">Level 3</button>
                            </div>
                        </div>

                        <div id="game-status" class="bg-slate-900 text-white p-4 rounded-lg text-sm font-mono flex justify-between items-center">
                            <span>STATUS: <span id="status-text" class="text-green-400">WAITING FOR MOVE</span></span>
                            <span id="turn-indicator" class="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></span>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <button id="reset-game" class="w-full bg-slate-800 text-white font-bold py-3 rounded-lg hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                                <i class="fas fa-undo"></i> Reset
                            </button>
                            <button id="undo-move" class="w-full border-2 border-slate-800 text-slate-800 font-bold py-3 rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                <i class="fas fa-step-backward"></i> Undo
                            </button>
                        </div>
                    </div>

                    <div class="glass-panel p-6 rounded-xl bg-orange-50/50 border-l-4 border-orange-600">
                        <h4 class="font-bold text-orange-950 mb-2">The Gilded Rules</h4>
                        <p class="text-xs text-orange-900 leading-relaxed">
                            You command the **Gilded Pieces** (Gold). The Archive commands the **Shadow Pieces** (Black). 
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
            .chess-square { width: 100%; height: 100%; display: flex; items-center; justify-center; cursor: pointer; position: relative; }
            .square-light { background-color: #fdfcf8; }
            .square-dark { background-color: #e2e8f0; }
            .square-selected { background-color: #fde68a !important; }
            .square-hint::after { content: ''; position: absolute; width: 25%; height: 25%; background: rgba(0,0,0,0.1); rounded-full; }
            .piece { font-size: 1.5rem; transition: transform 0.2s; z-index: 10; cursor: grab; }
            @media (min-width: 768px) { .piece { font-size: 2.2rem; } }
            .piece-white { color: #b45309; text-shadow: 0 0 2px rgba(0,0,0,0.1); }
            .piece-black { color: #1e293b; }
            .piece:hover { transform: scale(1.1); }
            .difficulty-btn.active { border-color: #b45309; background-color: #fffbeb; color: #b45309; }
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

        // Audio System
        const sounds = {
            move: new Audio('https://images.chesscomfiles.com/chess-themes/sounds/standard/move-self.mp3'),
            capture: new Audio('https://images.chesscomfiles.com/chess-themes/sounds/standard/capture.mp3'),
            check: new Audio('https://images.chesscomfiles.com/chess-themes/sounds/standard/move-check.mp3'),
            promote: new Audio('https://images.chesscomfiles.com/chess-themes/sounds/standard/promote.mp3'),
            gameEnd: new Audio('https://images.chesscomfiles.com/chess-themes/sounds/standard/game-end.mp3')
        };

        const playMoveSound = (move) => {
            if (game.in_checkmate() || game.in_draw()) {
                sounds.gameEnd.play().catch(() => { });
            } else if (move.promotion) {
                sounds.promote.play().catch(() => { });
            } else if (move.captured) {
                sounds.capture.play().catch(() => { });
            } else if (game.in_check()) {
                sounds.check.play().catch(() => { });
            } else {
                sounds.move.play().catch(() => { });
            }
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
