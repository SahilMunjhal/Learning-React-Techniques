import {useState,useEffect} from "react";

export const Counter1=()=>{

    const [count,setCount]=useState(0);
    
    useEffect(()=>{
       let id= setInterval(()=>{
            setCount((pre)=>pre+1);
            console.log(count);
        },1000)

        // return (()=>{
        //     console.log(count);
        //     clearInterval(id);
        // })
    },[]);

    return(
        <div>
            <h1>Welcome to the Counter 1 Comonent</h1>
            <h1>Count : {count}</h1>
        </div>
    )
};