import React, { useState, useEffect, useRef } from "react";

const NumberMemoryGame = () => {
  // State for stopwatch timer
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Game state
  const [gameNumbers, setGameNumbers] = useState(Array(9).fill(""));
  const [previewNumbers, setPreviewNumbers] = useState([]);
  const [showPreview, setShowPreview] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [win, setWin] = useState(null);

  const intervalRef = useRef(null);

  // Start or stop timer based on isRunning
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Generate random numbers when component mounts
  useEffect(() => {
    generateNumbers();
  }, []);

  // Hide preview numbers after 5 seconds
  useEffect(() => {
    if (showPreview) {
      const timeout = setTimeout(() => setShowPreview(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [showPreview]);

  // Format time from seconds to hh:mm:ss
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  // Generate random preview numbers and reset game state
  const generateNumbers = () => {
    const numbers = Array.from({ length: 9 }, () => Math.floor(Math.random() * 9) + 1);
    setPreviewNumbers(numbers);
    setGameNumbers(Array(9).fill(""));
    setShowPreview(true);
    setWin(null);
    watchReset();
    watchStart();
  };

  // Control functions for stopwatch
  const watchStart = () => setIsRunning(true);
  const watchStop = () => setIsRunning(false);
  const watchReset = () => {
    setIsRunning(false);
    setTimer(0);
  };

  // Fill number in a cell and check for match
  const handleCellClick = (index, value) => {
    const newGameNumbers = [...gameNumbers];
    newGameNumbers[index] = value;
    setGameNumbers(newGameNumbers);
    checkMatch(newGameNumbers);
  };

  // Check if user input matches the preview numbers
  const checkMatch = (numbersToCheck) => {
    const filled = numbersToCheck.every(num => num !== "");
    if (filled) {
      const isMatch = numbersToCheck.every((num, idx) => String(num) === String(previewNumbers[idx]));
      setWin(isMatch);
      setShowPreview(true);
      watchStop();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-200 p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-6">
        <div className="flex flex-col md:flex-row">

          {/* Left Section - Game Board */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Match the Numbers</h2>
            <div className="text-center text-xl font-mono bg-gray-800 text-white p-2 rounded mb-6">
              {formatTime(timer)}
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {gameNumbers.map((num, index) => (
                <div
                  key={index}
                  className="bg-gray-200 h-20 flex items-center justify-center rounded-lg shadow-inner cursor-pointer hover:bg-gray-300 relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className="text-2xl">{num}</span>
                  {hoveredIndex === index  && (
                    <div className="absolute z-10 grid grid-cols-3 gap-1 bg-white border border-gray-300 rounded shadow p-1 top-full">
                      {Array.from({ length: 9 }, (_, i) => i + 1).map((value) => (
                        <div
                          key={value}
                          className="hover-number w-8 h-8 bg-gray-100 flex items-center justify-center rounded cursor-pointer hover:bg-blue-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCellClick(index, value);
                            setHoveredIndex(null);
                          }}
                        >
                          {value}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {win === true && <p className="text-center text-xl font-bold bg-green-500 text-white rounded p-2">Winner!</p>}
            {win === false && <p className="text-center text-xl font-bold bg-red-500 text-white rounded p-2">You Lost!</p>}
            <button
              onClick={generateNumbers}
              className="w-full py-3 mt-4 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-700 transition"
            >
              Restart Game
            </button>
          </div>

          {/* Right Section - Preview Grid & Controls */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Memorize the Pattern</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {previewNumbers.map((num, index) => (
                <div key={index} className="bg-gray-800 text-white h-20 flex items-center justify-center rounded-lg">
                  <span className={showPreview ? "block" : "invisible"}>{num}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <button onClick={watchStart} className="w-full py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-700 transition">Start Timer</button>
              <button onClick={watchStop} className="w-full py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-700 transition">Stop Timer</button>
              <button onClick={watchReset} className="w-full py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-700 transition">Reset Timer</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NumberMemoryGame;
