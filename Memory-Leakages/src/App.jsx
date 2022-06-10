import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Counter1} from "./component/Counter1";

function App() {
   const[state,setState]=useState(true); 
   
   const handleToggle=()=>{
      {state?setState(false):setState(true)}
   }

  return (
    <div className="App">
       <h1>Welocome to memory lekage components</h1>
       <button onClick={handleToggle}>Toggle the Counter</button>
       <Counter1/>
    </div>
  )
}

export default App
