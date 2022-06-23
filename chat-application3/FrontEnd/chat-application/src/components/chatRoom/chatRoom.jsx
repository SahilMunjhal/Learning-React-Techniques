import { useEffect, useState } from "react";
import useSound from "use-sound";
import "./chatRoom.css";
import alert from "../Assets/Message-Sound.mp3";
import {React} from "react";
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import EmojiData from 'emoji-picker-react';

export const ChatRoom=({socket,userName,room})=>{
    
    const[message,setMessage]=useState("");
    const[list,setList]=useState([]);
    const[number,setNumber]=useState(0);
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
      setChosenEmoji(emojiObject);
    };

    const [play]=useSound(alert);
     
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
        play();
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
            <div className="room-footer-input-emoji">
                <input className="chat-footer-input" type="text" placeholder="Enter Your Message"
                 onChange={handleMeassage}/> 
            <div>
            <Picker
              onEmojiClick={onEmojiClick}
              disableAutoFocus={true}
              skinTone={SKIN_TONE_MEDIUM_DARK}
              groupNames={{ smileys_people: 'PEOPLE' }}
              native
            />
          {chosenEmoji && <EmojiData chosenEmoji={chosenEmoji} />}
          </div>
        </div>
                <button className="chat-button" onClick={sentMessage}>Send Message</button>
            </div>
        </div>
    )
};
