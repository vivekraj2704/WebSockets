import { useEffect, useRef, useState } from 'react'
import './App.css'

//better way - create a useSocket hook
function App() {
  // const [socket, setSocket] = useState<WebSocket>();
  // const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>("");
  const [allMessage, setAllMessage] = useState<{msg: string}[]>([]);
  const socketRef = useRef<WebSocket>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000")
    
    // setSocket(ws);
    socketRef.current = ws

    ws.onmessage = (ev) => {
      setAllMessage((prevMessage) => [...prevMessage, {msg: ev.data}]);
    }
  }, [])

  function sendMessage() {
    if(socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(input)
      setInput("");
    }
  }
  return (
    <div>
      <div>
        {allMessage.map((ind) => {
          return <div>
            {ind.msg}
          </div>
        })}
      </div>
      <input type="text" placeholder='enter your text' value={input} onChange={(e)=> {
        console.log(e.target.value)
        setInput(e.target.value)
      }}/>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default App
