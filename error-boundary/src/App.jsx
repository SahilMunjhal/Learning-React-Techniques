import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {TextError} from "./Components/TextError/TextError";
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

function App() {

  return (
    <div className="App">
      <ErrorBoundary>
         <TextError name="munjhal" />
      </ErrorBoundary>
      <ErrorBoundary>
        <TextError name="sahil" />
      </ErrorBoundary>
    </div>
  )
}

export default App
