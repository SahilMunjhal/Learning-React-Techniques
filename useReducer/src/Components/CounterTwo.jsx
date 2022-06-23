import {useReducer} from "react";

const intialState={
    counter:0
}

const reducer=(state,action)=>{
    switch(action.type){
        case "increment":
            return {counter:state.counter+1}
        case "decrement":
            return {counter:state.counter-1}
        case "reset":
            return intialState;
        default :
           return state;
    }
};

export const CounterTwo=()=>{

    const[counterOne,dispatchOne]=useReducer(reducer,intialState);
    const[counterTwo,dispatchTwo]=useReducer(reducer,intialState)

    return(
        <div>
            <div>
                <h1>Counter :{counterOne.counter}</h1>
               <button onClick={()=>dispatchOne({type:"increment"})}>Increment by 1</button>
               <button onClick={()=>dispatchOne({type:"decrement"})}>Decrement by 1</button>
               <button onClick={()=>dispatchOne({type:"reset"})}>Reset</button>
            </div>
            <div>
              <h1>CounterTwo : {counterTwo.counter}</h1>
              <button onClick={()=>dispatchTwo({type:"increment"})}>Increment by 1</button>
              <button onClick={()=>dispatchTwo({type:"decrement"})}>Decrement by 1</button>
              <button onClick={()=>dispatchTwo({type:"reset"})}>Reset</button>
            </div>
        </div>        
    )
};
