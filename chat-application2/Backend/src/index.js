const app=require('express')();
const server=require('http').createServer(app);
const io=require('socket.io')(server,{
    cors:{
        origin:"*"
    }
});

io.on('connection',(socket)=>{

    socket.on('message',(message)=>{
        console.log(message);
        io.emit('message',message);
    });
});

server.listen(5000,()=>{
    console.log('server is running on port 5000')
});

