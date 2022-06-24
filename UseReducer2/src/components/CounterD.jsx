import { useContext } from "react";
import { CounterContext } from "../App";

export const CounterD=()=>{

    const counterContext=useContext(CounterContext);

    return(
        <div>
           <div>
              <button onClick={()=>counterContext.counterDispatch({type:'increment'})}>Increment By 1</button>
              <button onClick={()=>counterContext.counterDispatch({type:'decrement'})}>Decrement by 1</button>
              <button onClick={()=>counterContext.counterDispatch({type:'reset'})}>Reset</button>
           </div>
        </div>
    )
};