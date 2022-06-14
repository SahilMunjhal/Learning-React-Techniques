import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css';
import {useDispatch,useSelector} from "react-redux";
import { add_user_thunk } from './Redux/User/action';
import axios from "axios";

function App() {
   
   const dispatch=useDispatch();
   const [user,setUser]=useState({
     email:"",
     password:""
   });
   
   const data=useSelector(state=>state.todo);
   
   useEffect(()=>{
      dispatch(add_user_thunk());
   });


   const handleValue=(event)=>{
      const{name,value}=event.target;
      setUser({...user,[name]:value});
   } 

   const handleSubmit=(event)=>{
      event.preventDefault();
      axios.post("http://localhost:2345/users",user);
   }
   
  return (
    <div className="App">
       <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleValue} name="email"/>
          <input type="text" onChange={handleValue} name="password"/>
          <input type="submit" />
       </form>
       <div>
          {data.map((user)=>{
            return(
              <div>
                <h1>{user.email}</h1>
                <h1>{user.password}</h1>
              </div>
            )
          })}
       </div>
    </div>
  )
}

export default App
