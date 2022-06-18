import io from "socket.io-client";
import {useState} from "react";
import { ChatRoom } from "../chatRoom/chatRoom";
import "./chat.css";

const socket=io('http://localhost:2345');


export const Chat=()=>{
   const[user,setUser]=useState('');
   const[room,setRoom]=useState('');
   const[status,setStatus]=useState(false);

   const handleUser=(e)=>{
      setUser(e.target.value);
   };

   const handleRoom=(e)=>{
      setRoom(e.target.value);
   };

   const joinedRoom=()=>{
       if(user!=="" && room!==""){
           socket.emit("joined-room",room);
           setStatus(true);
       }else{
           alert("Please Provide Necessary Details");
       }
   }

    return(
        <div className="room-body">
            {status ? 
                <ChatRoom socket={socket} userName={user} room={room}/> :
            <div>
                <img className="room-img" src="https://cdn.pixabay.com/photo/2014/04/02/10/14/speech-bubbles-303206__340.png" 
                alt="chat-img" />
                <h1 className="room-heading">Joined a Particular Room</h1>
                <input type="text" placeholder="Enter User Name" onChange={handleUser}/>
                <input type="text" placeholder="Enter Your Room ID" onChange={handleRoom}/>
                <button className="room-button" onClick={joinedRoom}>Joined A Room</button>
            </div> 
            }
        </div>
    )
};

