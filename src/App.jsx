import { useState } from 'react'
import './App.css'
import ProjectList from './components/ProjectList'
import ProjectDisplay from './components/ProjectDisplay'

function App() {
  
  const [selectedProject, setSelectedProject] = useState(null)
  return (
    <>
     <div className='flex h-screen'>
      <div className='w-1/4 bg-gray-300 overflow-auto'>
          <ProjectList setSelectedProject={setSelectedProject} />
      </div>
      <div className='w-3/4 bg-gray-100 overflow-auto'>
          <ProjectDisplay setSelectedProject={selectedProject} />
      </div>
     </div>
    </>
  )
}

export default App
