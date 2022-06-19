import { io }  from "socket.io-client";
const socket = io("http://localhost:5000");
import "./chat.css";
import { useEffect, useState } from "react";

export const Chat=()=>{
    
    const[name,setName]=useState("");
    const[message,setMessage]=useState('');
    const[chat,setChat]=useState([]);

    console.log(chat);

    const handleMessage=(e)=>{
        setMessage(e.target.value);
    };

    useEffect(()=>{
        const temp=prompt("Enter your name");
        setName(temp);
    },[]);

    const handleForm=async (e)=>{
        e.preventDefault();
        const messageInfo={
            message,
            name
        };

       await socket.emit("message",messageInfo);
       setChat([...chat,messageInfo]);
       setMessage('');
    }

    useEffect(()=>{
       socket.on("message",(message)=>{
           console.log(message);
           setChat([...chat,message]);  
       });
    },[socket]);

  return(
      <div>
          <nav>
              <img src="https://cdn.pixabay.com/photo/2014/04/02/10/14/speech-bubbles-303206__340.png" alt="chat-img"
               className="chat-image" />
          </nav>
          <div className="chat-container">
            {chat.map((userInfo)=>{
               return(
                 <div>
                     {userInfo.name===name?<div className="message left">{userInfo.message}</div>:
                        <div className="message right">{userInfo.message}</div>
                     }
                 </div>
               )
            })
        }
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