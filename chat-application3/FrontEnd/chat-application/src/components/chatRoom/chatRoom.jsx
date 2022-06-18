import { useEffect, useState } from "react";
import "./chatRoom.css";

export const ChatRoom=({socket,userName,room})=>{
    
    const[message,setMessage]=useState("");
    const[list,setList]=useState([]);
    const[number,setNumber]=useState(0);
     
    function handleMeassage(e) {
        setMessage(e.target.value);
    }

    const sentMessage=()=>{
        if(message=="")
        return;

        const Message={
            message,
            room,
            userName,
            time:new Date(Date.now()).getHours()+':'+new Date(Date.now()).getMinutes()
        }
        setList([...list,Message]);
        socket.emit('current-message',Message);
    }

    useEffect(()=>{
       setNumber(number+1);
       if(number%2==1){
           return;
       }
       socket.on('recieved-message',(data)=>{
          console.log(data);
          setList((list)=>[...list,data]);
       });
    },[socket]);

    return(
        <div>
            <h1>Welcome to Chat application</h1>
            <div className="message-body">
                {
                list.map((messageContent)=>{
                    return(
                        messageContent.userName=== userName ? 
                        <h3 className="message-right">{messageContent.message}</h3>:
                        <h3 className="message-left">{messageContent.message}</h3>
                 );
                })
               }
            </div>
            <div className="room-footer">
                <input className="chat-footer-input" type="text" placeholder="Enter Your Message" onChange={handleMeassage}/>
                <button className="chat-button" onClick={sentMessage}>Send Message</button>
            </div>
        </div>
    )
};
