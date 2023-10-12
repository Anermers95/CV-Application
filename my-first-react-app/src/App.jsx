import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalDetails from './components/PersonalDetails'
import EducationDetails from './components/EducationDetails'
import WorkDetails from './components/WorkDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <div className = "editSide">
        <PersonalDetails/>
        <EducationDetails/>
        <WorkDetails/>
      </div>
      <div className='preview-section'></div>
    </div>
  )
}

export default App
