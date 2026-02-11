import { useState } from "react";
import "./ai.css";

export default function AI(){

  const [messages,setMessages]=useState([
    {text:"Сәлем! Мен ҰБТ бойынша көмекшімін.",bot:true}
  ]);
  const [input,setInput]=useState("");

  const send=()=>{
    if(!input) return;

    const newMsg={text:input,bot:false};

    setMessages([...messages,newMsg,
      {text:"Жақсы! Маған нақты пән жаз: математика, тарих, комбинация.",bot:true}
    ]);

    setInput("");
  };

  return(
    <div className="chatPage">

      <h2>AI көмекші</h2>

      <div className="chatBox">
        {messages.map((m,i)=>(
          <div key={i} className={m.bot?"msg bot":"msg user"}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="chatInput">
        <input
          value={input}
          onChange={e=>setInput(e.target.value)}
          placeholder="Сұрақ жаз..."
        />
        <button onClick={send}>Жіберу</button>
      </div>

    </div>
  )
}