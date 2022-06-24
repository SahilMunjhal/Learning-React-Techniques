import './App.css'
import { useReducer } from 'react';
import { useState } from 'react'
import { CounterA } from './components/CounterA';
import { CounterB } from "./components/CounterB";
import { CounterC } from "./components/CounterC";
import { createContext } from 'react';

export const CounterContext=createContext();
 
const intialState=0;


const reducer=(state,action)=>{
    switch(action.type){
       case "increment":
         return state+1;
       case "decrement":
          return state-1;
       case "reset":
         return intialState;
    }
};



function App() {
  
  const[count,dispatch]=useReducer(reducer,intialState);
   
  return (
    <CounterContext.Provider value={{counterValue:count,counterDispatch:dispatch}}>
        <div className="App">
          <h1>UseReducer Part-2</h1>
          <h1>Counter : {count}</h1>
          <CounterA/>
          <CounterB/>
         <CounterC/>
       </div>
    </CounterContext.Provider>
  )
};

export default App
