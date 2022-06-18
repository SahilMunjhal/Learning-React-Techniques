const express=require('express');
const app=express();
const http=require('http');
const {Server} = require('socket.io');
const cors=require("cors");

app.use(cors());

const server= http.createServer(app);

const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000"
    }
});

io.on("connection",(socket)=>{
    console.log(socket.id);

    socket.on("disconnect",()=>{
        console.log('user disconnected',socket.id);
    });

    socket.on('joined-room',(room)=>{
        socket.join(room);
        console.log(`A new user joined with room id ${room}`);
    });

    socket.on('current-message',(message)=>{
        console.log(message);

        socket.to(message.room).emit('recieved-message',message);
    });
});

server.listen(2345,()=>{
    console.log('Server is running');
});

