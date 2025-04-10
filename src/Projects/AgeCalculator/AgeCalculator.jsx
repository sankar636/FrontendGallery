import React, { useState } from 'react'

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('')
  const [result, setResult] = useState('')
  const todayDate = new Date().toISOString().split("T")[0] // todayDate 

  const handelCalculate = () => {
    console.log("You clicked");

    if (!birthDate) return;

    let birth = new Date(birthDate)
    let d1 = birth.getDate()
    let m1 = birth.getMonth() + 1 // as month starts form 0
    let y1 = birth.getFullYear()

    let today = new Date()
    let d2 = today.getDate()
    let m2 = today.getMonth() + 1 // as month starts form 0
    let y2 = today.getFullYear()

    let y3 = y2 - y1;
    let m3;
    let d3;

    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m2 += 12;
      m3 = m2 - m1;
    }

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      const daysInLastMonth = new Date(y2, m2 - 1, 0).getDate();
      d3 = daysInLastMonth + d2 - d1;
    }

    setResult(
      <>
        You are <span className="text-red-500">{d3}</span> days,
        <span className="text-red-500">{m3}</span> months, and
        <span className="text-red-500">{y3}</span> years old.
      </>
    );

  }
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200">
      <div className="bg-white shadow-2xl rounded-2xl p-8 h-2/3 w-2/3 text-center">
        <h1 className="text-7xl font-bold text-gray-800 mb-6">
          <span className="text-purple-600">Age</span> Calculator
        </h1>
        <div className="flex justify-center flex-col sm:flex-row items-center gap-4 mt-20">
          <input
            type="date"
            className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
            onClick={handelCalculate}
          >
            Calculate
          </button>
        </div>
      </div>
      {result &&
        <>
          <div className='text-5xl'>
            {result}
          </div>
        </>
      }
    </div>
  );
}

export default AgeCalculator