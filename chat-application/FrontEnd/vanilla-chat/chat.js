const socket=io("http://localhost:8000");

// const name=prompt("Enter Your Name To Proceed");
socket.emit("new-user-joined","Hello");