import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalDetails from './components/PersonalDetails'
import EducationDetails from './components/EducationDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className = "editSide">
      <PersonalDetails/>
      <EducationDetails/>
    </div>
    </>
  )
}

export default App
