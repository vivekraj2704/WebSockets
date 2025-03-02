import { useEffect, useState } from 'react'
import './App.css'

//better way - create a useSocket hook
function App() {
  const [socket, setSocket] = useState();
  // const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000")
    setSocket(ws);

    ws.onmessage = (ev) => {
      alert(ev.data);
    }
  }, [])

  function sendMessage() {
    if(!socket) {
      return;
    }
    //@ts-ignore
    socket.send(input)
  }
  return (
    <div>
      <input type="text" placeholder='enter your text' value={input} onChange={(e)=> {
        console.log(e.target.value)
        setInput(e.target.value)
      }}/>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default App
