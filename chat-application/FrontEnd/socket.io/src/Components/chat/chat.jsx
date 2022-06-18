import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

import "./chat.css";

export const Chat=()=>{
    
    const name=prompt("Please Enter Your Name")
    socket.emit("new-user-joined",name)

  return(
      <div>
          <nav>
              <img src="https://cdn.pixabay.com/photo/2014/04/02/10/14/speech-bubbles-303206__340.png" alt="chat-img"
               className="chat-image" />
          </nav>
          <div className="chat-container">
              <div className="message left">Hey,Buddy What are you doing</div>
              <div className="message right">Hi Bro, I am learning Socket-IO</div>
          </div>
          <div className="chat-sent">
             <form action="" className="chat-form">
                 <input type="text"  className="chat-input"/>
                 <input type="submit" className="chat-submit" />
             </form>
          </div>
      </div>
  )

}