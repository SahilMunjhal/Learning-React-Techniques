const express=require('express')
const app=express()
const cors=require('cors')
const http=require('http')
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port=process.env.PORT || 6789
app.use(cors())
app.get('/', (req, res) => {
    res.send('welcome to sever');
  });

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    socket.on('message', ({text,id}) => {
        io.emit("sendMessage",({text,id}))
        console.log('message: ' + text);
      });
  });

server.listen(port,()=>{
    console.log("I am listening at 6789")
})