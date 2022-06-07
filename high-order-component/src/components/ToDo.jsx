import HOC from "./HOC";

export const ToDo=({data})=>{
   
    return(
        <div>
           {data.slice(0,20).map((todo)=>{
               return(
               <div>
                   <h1>{todo.title}</h1>
               </div>
               )
           })}
        </div>
    )
}

export const ToDoComponent=HOC(ToDo,"todos");
