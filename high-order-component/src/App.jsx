import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import UserComponent from "./components/User";
import {ToDoComponent} from "./components/ToDo";

function App() {

  return (
    <div className="App">
      <div id='main-div'>
         <UserComponent/>
         <ToDoComponent/>
      </div>    
    </div>
  )
}

export default App
