import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TicTacToe from '../Projects/TicTacToe/TicTacToe.jsx'
import Calculator from '../Projects/Calculator/Calculator.jsx'
import TodoApp from '../Projects/TodoApp/TodoApp.jsx'
import CurrencyConverter from '../Projects/CurrencyConverter/Pages/CurrencyConverter.jsx'
import BgChanger from '../Projects/BgChanger/BgChanger.jsx'
import PasswordGenerator from '../Projects/PasswordGenerator/PasswordGenerator.jsx'
import WeatherApp from '../Projects/WeatherApp/WeatherApp.jsx'
import NumberMemoryGame from '../Projects/NumberMemoryGame/NumberMemoryGame.jsx'
import AgeCalculator from '../Projects/AgeCalculator/AgeCalculator.jsx'
const ProjectDisplay = () => {
  return (
    <div>
        <h1></h1>
        <div>
            <Routes>
                <Route path="/tictactoe" element={<TicTacToe />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/todoapp" element={<TodoApp />} />
                <Route path="/currencyconverter" element={<CurrencyConverter />} />
                <Route path="/bgchanger" element={<BgChanger />} />
                <Route path="/passwordgenerator" element={<PasswordGenerator />} />
                <Route path="/weatherapp" element={<WeatherApp />} />
                <Route path="/numbermemorygame" element={<NumberMemoryGame />} />
                <Route path="/agecalculator" element={<AgeCalculator />} />
                <Route path="/calculator" element={<Calculator />} />
            </Routes>
        </div>
    </div>
  )
}

export default ProjectDisplay