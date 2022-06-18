import  io  from "socket.io-client";
const socket = io("http://localhost:5000");
import "./chat.css";
import { useEffect, useState } from "react";
const name=prompt("Enter your name");

export const Chat=()=>{
    
    const[message,setMessage]=useState('');
    const[incoming,setIncoming]=useState('');
    const[chat,setChat]=useState([]);

    const handleMessage=(e)=>{
        setMessage(e.target.value);
    }

    const handleForm=(e)=>{
        e.preventDefault();
        socket.emit("message",{message,user:name});
        setMessage('');
    }

    useEffect(()=>{
       socket.on("message",(message)=>{
           console.log(message);
           setChat([...chat,message]);  
       });
    },[]);

  return(
      <div>
          <nav>
              <img src="https://cdn.pixabay.com/photo/2014/04/02/10/14/speech-bubbles-303206__340.png" alt="chat-img"
               className="chat-image" />
          </nav>
          <div className="chat-container">
              <div className="message left">{message}</div>
              <div className="message right">{incoming}</div>
          </div>
          <div className="chat-sent">
             <form action="" className="chat-form" onSubmit={handleForm}>
                 <input type="text" name="chat" placeholder="Enter Your Message" value={message}
                 className="chat-input" onChange={handleMessage}/>
                 <input type="submit" className="chat-submit" />
             </form>
          </div>
      </div>
  )

}