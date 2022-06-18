const io=require("socket.io")(8000);

const users={}

io.on('connection',socket=>{
    console.log("I am working fine")
    socket.on("new-user-joined",name=>{
       console.log("Its working");
       users[socket.id]=name;
       socket.broadcast.emit("user-joined",name);
    });

    socket.on('send',message=>{
        socket.broadcast.emit('recieve',{message:message,name:user[socket.id]})
    });
});




