import {useState,useEffect,useRef} from "react";

export const Counter1=()=>{

    const [count,setCount]=useState(0);
    const ref=useRef();
    
    useEffect(()=>{
        
      ref.current=setInterval(()=>{
            setCount(pre=>pre+1);
            console.log("Counter 1",count);
        },1000)  

        return ()=>{
            clearInterval(ref.current);
        }
    });

    return(
        <div>
            <h1>Welcome to the Counter 1 Comonent</h1>
            <h1>Count : {count}</h1>
        </div>
    )
};