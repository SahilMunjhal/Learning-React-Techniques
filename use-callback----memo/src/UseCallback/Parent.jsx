import { useCallback, useState } from "react";
import {Title} from "./Title"; 
import Count from "./Count";
import Button from "./Button";
export const Parent=()=>{

   console.log('Parent Rendering');

   const [age,setAge]=useState(10);
   const [salary,setSalary]=useState(20000);

   const handleAge=useCallback(()=>{
       setAge(age+2);
   },[age]);

   const handleSalary=useCallback(()=>{
       setSalary(salary+5000);
   },[salary]);

    return(
        <div>
            <Title/>
            <Count text="age" count={age}/>
            <Button function1={handleAge} text="Increment Age"/>
            <Count text="salary" count={salary}/>
            <Button function1={handleSalary} text="Increment Salary"/>
        </div>
    )
};