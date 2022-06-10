import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import {Parent} from "./UseCallback/Parent";
import {Counter} from "./UseMemo/Counter";

function App() {

  return (
    <div className="App">
       {/* <Parent/> */}
       <Counter/>
    </div>
  )
}

export default App
