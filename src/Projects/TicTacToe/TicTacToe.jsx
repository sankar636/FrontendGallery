import { useState } from "react";

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const winner = checkWinner(board);
  
    function handleClick(index) {
      if (board[index] || winner) return; 
  
      const newBoard = [...board];
      newBoard[index] = isXTurn ? "X" : "O";
      setBoard(newBoard);
      setIsXTurn(!isXTurn);
    }
  
    function checkWinner(board) {
      const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
      ];
  
      for (let [a, b, c] of winningCombos) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a]; // X or O wins
        }
      }
      return board.includes(null) ? null : "Draw"; 
    }
  
    function resetGame() {
      setBoard(Array(9).fill(null));
      setIsXTurn(true);
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-3xl font-bold mb-4">Tic-Tac-Toe</h1>
                <div className={`text-5xl ${!winner ? "text-red-500 " : "text-gray-100"} `}>{isXTurn ? 'X' : 'O'} turn</div>
                <div className="grid grid-cols-3 gap-2">
                    {board.map((value, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(index)}
                            className={`w-24 h-24 text-3xl font-bold border shadow-md hover:bg-gray-200  ${value !== null ? "bg-white" :(isXTurn ?"bg-red-500" :"bg-green-400") }`}
                        >
                            {value}
                        </button>
                    ))}
                </div>

                {winner && (
                    <p className="mt-4 text-xl font-semibold">
                        {winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`}
                    </p>
                )}

                <button
                    onClick={resetGame}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                >
                    Restart Game
                </button>
            </div>
        </>
    )
}