import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8000 });

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
wss.on("connection", (socket) => {
    socket.on("message", (e) => {
        if(typeof e.toString() === "string") {
            socket.send(e.toString())
        }
    })
})