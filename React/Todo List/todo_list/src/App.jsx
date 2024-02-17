import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tab1 from './Components/Tab1'
import Tab2 from './Components/Tab2'

function App() {
  const [tab, setTab] = useState([]);
  const addTab = (tabName) => {
    setTab([...tab, tabName]);
    }

    const deleteTab = (i) =>{
         const updateTab = [...tab];
         updateTab.splice(i,1);
         setTab(updateTab);
    }

  return (
    <>
     <Tab2 onSubmit = {addTab}/>
     
    <Tab1 tab ={tab} deleteTab = {deleteTab}/>
   
    </>
  )
}

export default App
