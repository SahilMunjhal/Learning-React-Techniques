import React from "react";

const Memo=({name})=>{
   
    console.log("Rendering Memo Component");

    return(
        <div>
           <h1>{name}</h1>
        </div>
    )
};

export default React.memo(Memo);