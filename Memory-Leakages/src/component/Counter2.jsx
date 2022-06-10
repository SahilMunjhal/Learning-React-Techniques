import {useState,useEffect,useRef} from "react";

export const Counter2=()=>{

    const [count,setCount]=useState(0);
    const ref=useRef();
    
    useEffect(()=>{
   
      ref.current=setInterval(()=>{
            setCount(pre=>pre+1);
            console.log("counter 2",count);
        },1000);

        return ()=>{
            clearInterval(ref.current);
        };
        
    });

    return(
        <div>
            <h1>Welcome to the Counter 2 Comonent</h1>
            <h1>Count : {count}</h1>
        </div>
    )
};