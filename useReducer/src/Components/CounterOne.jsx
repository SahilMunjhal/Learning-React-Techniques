import { useReducer } from "react";

const intialState={
    counter1:0,
    counter2:0
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'increment 1':
            return {...state,counter1:state.counter1+1};
        case 'decrement 1':
            return {...state,counter1:state.counter1-1};
        case 'increment 5':
            return {...state,counter2:state.counter2+5};
        case 'decrement 5':
            return {...state,counter2:state.counter2-5}; 
        case "reset" :
            return intialState;
        default:
            return state;
    }
};


function Counter(){

    const[counter,dispatch]=useReducer(reducer,intialState);

    return(
        <div>
            <h1>Counter 1 : {counter.counter1}</h1>
            <h1>Counter 2 : {counter.counter2}</h1>
            <div>
               <button onClick={()=>dispatch({type:"increment 1",value:1})}>Increment By 1</button>
               <button onClick={()=>dispatch({type:'decrement 1',value:1})}>Decrement by 1</button>
               <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            </div>
            <div>
               <button onClick={()=>dispatch({type:"increment 5",value:5})}>Increment By 5</button>
               <button onClick={()=>dispatch({type:'decrement 5',value:5})}>Decrement by 5</button>
               <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            </div>
        </div>
    )
};

export default Counter;