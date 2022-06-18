import { useEffect, useState } from "react";
import InputEmoji from "react-input-emoji";
import socketIo, { Socket } from "socket.io-client";
import ReactScrollToBottom from "react-scroll-to-bottom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../Redux/SliceChat";
import useSound from "use-sound";
import alert from '../assets/alert.mp3'

const ENDPOINT = "http://localhost:6789/";

let socket;
export const ChatappUi = () => {
  const [play] = useSound(alert);
  const [text, setText] = useState("");
  const [id, setId] = useState("");
  const [messagedata, setMessagedata] = useState([]);
  const dipatch = useDispatch();
  const data = useSelector((store) => store.data);
  console.log(data);
  function handleOnEnter(text) {
    console.log("enter", text);
    send();
  }

  const send = () => {
    if (text.length > 0) {
      socket.emit("message", { text, id });
      play();
    }
  };

  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ["websocket"] });
    // client-side
    socket.on("connect", () => {
      console.log(socket.id); 
      setId(socket.id);
    });
    socket.on("disconnect", () => {
      console.log(socket.id);
    });
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessagedata([...messagedata, data]);
      dipatch(setData(data));
    });

    return () => {
      socket.off();
    };
  }, [data]);
  return (
    <div>
      <div className="Chat-box-container">
        <ReactScrollToBottom className="scrollBottmWrapper">
          {data &&
            data.map((e) => {
              return (
                <>
                  <p
                    className={e.id === id ? "right-chat-box" : "left-chat-box"}
                    key={e.id}
                  >
                    {" "}
                    {e.text}
                  </p>
                </>
              );
            })}
        </ReactScrollToBottom>
      </div>
      <div className="input-emoji-width-container">
        <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          className="input-emoji-width"
          onEnter={handleOnEnter}
          placeholder="Type a message"
        />
      </div>
    </div>
  );
};
