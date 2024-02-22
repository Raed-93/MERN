import { useState } from 'react'
import axios from 'axios';
import './App.css'
import AxiosPokemon from './Componants/AxiosPokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AxiosPokemon/>
    </>
  )
}

export default App
