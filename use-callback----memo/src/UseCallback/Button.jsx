import React from "react";

const Button=({function1,text})=>{

    return(
        <div>
            <button onClick={function1}>{text}</button>
        </div>
    )
};

export default React.memo(Button);