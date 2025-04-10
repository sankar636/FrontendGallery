import React from 'react'
import ProjectTile from './ProjectTile'
import { useState } from 'react'
import Calculator from '../assets/calculator.jpg'
import TicTacToe from '../assets/TicTacToe.jpg'
import CurrencyConverter from '../assets/CurrencyConverter.jpg'
import WeatherApp from '../assets/WeatherApp.jpg'
import ToDo from '../assets/ToDo.jpg'
import BgColor from '../assets/BgColor.jpg'
import PasswordGenerator from '../assets/PasswordGenerator.jpg'
import NumberGame from '../assets/NumberGame.jpg'
import AgeCalculator from '../assets/AgeCalculator.jpg'
import NoteApp from '../assets/NoteApp.jpg'
import { Link } from 'react-router-dom'


const ProjectList = () => {
    const projects = [
        {
            name: "TicTacToe",
            image: TicTacToe,
            description: "A simple TicTacToe Game",
            // component:<TicTacToe />
        },
        {
            name: "NumberMemoryGame",
            image: NumberGame,
            description: "A Number Memory Game"
        },
        {
            name: "CurrencyConverter",
            image: CurrencyConverter,
            description: "A Currency Converter App"
        },
        {
            name: "WeatherApp",
            image: WeatherApp,
            description: "A Weather App"

        },
        {
            name: "TodoApp",
            image: ToDo,
            description: "A Todo List App"
        },
        {
            name: "BgChanger",
            image: BgColor,
            description: "A Background Color Changer App"
        },
        {
            name: "PasswordGenerator",
            image: PasswordGenerator,
            description: "A Password Generator App"

        },
        {
            name: "Calculator",
            image: Calculator,
            description: "A simple Calculator"
        },
        {
            name: "AgeCalculator",
            image: AgeCalculator,
            description: "A Age Calculator App"
        }
    ]
    const [selectedProject, setSelectedProject] = useState(null)
    const handleProjectClick = (project) => {
        setSelectedProject(project)
    }
    return (
        <div>
            {
                projects.map((proj, index) => (
                    <Link to={`/${proj.name.toLowerCase()}`} key={index}>
                        <ProjectTile                            
                            project={proj}
                            onClick={() => handleProjectClick(proj)}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default ProjectList