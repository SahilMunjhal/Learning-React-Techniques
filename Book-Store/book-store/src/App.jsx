import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BookStore } from './components/BookStore/BookStore'
import NavBar from './components/NavBar/Navbar'
import { AllRoutes } from './components/Routes/AllRoutes'

function App() {

  return (
    <div className="App">
        <NavBar/>   
        <AllRoutes/>
    </div>
  )
}

export default App
