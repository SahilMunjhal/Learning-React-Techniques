import HOC from "./HOC";

const Users=({data})=>{


    return(
        <div>
           {data.map((user)=>{
               return(
                   <div>
                      <h1>{user.name}</h1>
                   </div>
               )
           })}
        </div>
    )
}

const UserComponent=HOC(Users,"users");

export default UserComponent;
