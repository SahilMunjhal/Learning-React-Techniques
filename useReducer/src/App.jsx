import { useState } from 'react'
import './App.css'
import  CounterOne  from './Components/CounterOne'
import { CounterTwo } from './Components/CounterTwo';

function App() {

  return (
    <div className="App">
        <CounterOne/> 
        <CounterTwo/>
    </div>
  )
}

export default App;
