import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoxForm from './Components/boxform'
import BoxDisplay from './Components/boxdisplay'

function App() {
  const [arrcolor, setarrcolor] = useState([])
  const changeColor = (newColor) => {
    setarrcolor(newColor);
  }

  return (
    <>
    <BoxForm changeColor = {changeColor}/>
    <BoxDisplay sentColor = {arrcolor}/>
    </>
  )
}

export default App
