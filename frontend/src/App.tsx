// import { useEffect, useRef, useState } from 'react'
// import './App.css'

// import { useEffect } from "react"

// //better way - create a useSocket hook
// function App() {
//   // const [socket, setSocket] = useState<WebSocket>();
//   // const inputRef = useRef<HTMLInputElement>(null);
//   const [input, setInput] = useState<string>("");
//   const [allMessage, setAllMessage] = useState<{msg: string}[]>([]);
//   const socketRef = useRef<WebSocket>(null);

//   useEffect(() => {
//     const ws = new WebSocket("ws://localhost:8000")
    
//     // setSocket(ws);
//     socketRef.current = ws

//     ws.onmessage = (ev) => {
//       setAllMessage((prevMessage) => [...prevMessage, {msg: ev.data}]);
//     }
//   }, [])

//   function sendMessage() {
//     if(socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
//       socketRef.current.send(input)
//       setInput("");
//     }
//   }
//   return (
//     <div>
//       <div>
//         {allMessage.map((ind) => {
//           return <div>
//             {ind.msg}
//           </div>
//         })}
//       </div>
//       <input type="text" placeholder='enter your text' value={input} onChange={(e)=> {
//         console.log(e.target.value)
//         setInput(e.target.value)
//       }}/>
//       <button onClick={sendMessage}>Send Message</button>
//     </div>
//   )
// }

// export default App

// import { useRef, useState, useEffect } from "react"
// export default function App() {
//   const[inputVal, setInputVal] = useState<string>("");
//   const socketRef = useRef<WebSocket>(null);

//   function SubmitHandler() {
//     if(socketRef.current && inputVal) {
//       socketRef.current.send(inputVal)
//     }
//   }

//   useEffect(() => {
//     const ws = new WebSocket("ws://localhost:8000")
//     socketRef.current = ws

//     ws.onmessage = (ev) => {
//       alert(ev.data)
//     }
//   }, [])

//   return(
//     <div>
//       <input type="text" value={inputVal} onChange={(e) => {
//         setInputVal(e.target.value)
//       }}/>
//       <button onClick={SubmitHandler}>Send Message</button>
//     </div>
//   )
// }



//Simple Broadcast Chat App

export default function App() {
  return(
    <div className="w-screen h-screen bg-gray-800 p-4 border flex justify-center items-center">
      <div className="w-[60vh] h-[80vh] bg-gray-500 rounded-2xl">
        <div className="flex gap-2 items-center justify-center mt-[2vh]">
          <div>Room:</div>
          <div></div>
        </div>
        <div className="bg-gray-400 h-[60vh] w-[55vh] ml-[2.5vh] mt-[2.5vh] rounded-xl">
          {/* messages will appear here */}
        </div>
        <div className="flex justify-center mt-[3vh] w-[55vh] ml-[2.5vh] gap-3">
          <input type="text" className="bg-white w-[40vh] h-[4vh] rounded-2xl"/>
          <button className="bg-black text-white rounded-2xl w-[8vh]">Send</button>
        </div>
      </div>
    </div>
  )
}