import PersonCard from './Components/PersonCard'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
     <PersonCard firstName = "Raed" lastName = "Ahmad" Age ={30} hairColor = "brwon"/>
     <PersonCard firstName = "mutaz" lastName = "japer" Age ={30} hairColor = "brwon"/>
     <PersonCard firstName = "Raed" lastName = "Ahmad" Age ={30} hairColor = "brwon"/>
 
    </>
  )
}

export default App
