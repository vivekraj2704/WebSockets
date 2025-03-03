// import { WebSocketServer } from 'ws';

// const wss = new WebSocketServer({ port: 8000 });

//event handler
// wss.on("connection", function(socket) {
//     console.log('user connected')
//     setInterval(() => {
//         socket.send("hello" + Math.random())
//     }, 500)

//     socket.on("message", (e) => {
//         console.log(e)
//     })
// })


//ping-pong or echo 
// wss.on("connection", (socket) => {
//     let message = "empty";
//     socket.on("message", (e) => {
//         message = e.toString();
//         execute();
//     })

//     function execute() {
//         socket.send(message);
//     }

// })


//another 
// wss.on("connection", (socket) => {
//     socket.on("message", (e) => {
//         if(typeof e.toString() === "string") {
//             socket.send(e.toString())
//         }
//     })
// })


//Creating a broadcasting chat app
// import { WebSocketServer, WebSocket } from "ws";

// const wss = new WebSocketServer({ port: 8000 });

// let allSockets: WebSocket[] = [];

// wss.on("connection", function(socket) {
//     allSockets.push(socket);

//     socket.on("message", (message) => {
//         console.log("Message received: " + message.toString())
//         // socket.send(message.toString() + ": sent from server")
//         allSockets.forEach((ind) => {
//             ind.send(message.toString())
//         })
//     })

//     socket.on("disconnect", () => {
//         allSockets.filter((ind) => ind != socket);
//     })
// })


import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8000 })

interface User{
    socket: WebSocket, 
    room: string
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message.toString());
    if(parsedMessage.type === "join") {
        allSockets.push({
            socket, 
            room: parsedMessage.payload.roomId
        })
    }

    if(parsedMessage.type === "chat") {
        const currentUser = allSockets.find((x) => x.socket == socket)
        const currentUserRoom = currentUser?.room

        allSockets.forEach((ind) => {
            if(ind.room == currentUserRoom) {
                ind.socket.send(parsedMessage.payload.message)
            }}
        )
    }
  })  
})