import { useMemo, useState } from "react"

export const Counter=()=>{
    const[count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(0);

    const IncrementOne=()=>{
       setCount1(count1+1)
    }

    const IncrementTwo=()=>{
        setCount2(count2+2)
     }

     const isEven=useMemo(()=>{
        let i=0;
        while(i<900000000){
            i++;
        }
         if(count1%2==0){
             return true;
         }else{
             return false;
         }
     },[count1]);

    return(
        <div>
            <h1>Count 1 : {count1} <span>{isEven?"Even":"Odd"}</span> </h1>
            <h1>Count 2 : {count2}</h1>
            <button onClick={IncrementOne}>Increment One</button>
            <button onClick={IncrementTwo}>IncrementTwo</button>
        </div>
    )
}