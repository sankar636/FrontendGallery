import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState('')

  const handelCalculate = (value) => {
    if(value === "C"){
      setInput("")
    }else if(value === 'undo'){
      setInput(input.slice(0,-1)); // it will undo one number or operation from right side 
    }else if(value === '='){
      // setInput(eval(input))
      try {
        const result = eval(input);
        console.log(result);
        setInput(result.toString())
      } catch (error) {
        console.log(error);        
      }

    }else{
      setInput(input + value)
    }
  }
  const buttons = [
    "C", "undo", "/", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", "00", "."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 to-purple-300 flex items-center justify-center">
      <div className="bg-gray-400 border-black border-[2px] shadow-2xl rounded-2xl w-80 p-6 space-y-4">
        <div className="bg-gray-100 rounded border-[5px] border-black  text-right px-4 py-6 text-3xl font-mono text-gray-800 h-20 flex items-center justify-end overflow-x-auto  hover:bg-black hover:text-white">
          {input || ""}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((value, idx) => (
            <button
              key={idx}
              onClick={() => {handelCalculate(value)}}
              className={`text-xl py-4 rounded-lg font-semibold border-[2px] border-red shadow-md transition-all 
                ${
                  value === "C"
                    ? "bg-red-400 text-white hover:bg-red-500"
                    : value === "undo"
                    ? "bg-yellow-400 text-white hover:bg-yellow-500"
                    : value === "="
                    ? "col-span-1 bg-green-500 text-white hover:bg-green-600"
                    : ["/", "*", "-", "+", "."].includes(value)
                    ? "bg-purple-400 text-white hover:bg-purple-500"
                    : "bg-gray-200 hover:bg-blue-300"
                }
              `}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
