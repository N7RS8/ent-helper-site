import { useState } from "react";

export default function AI(){
  const [msg,setMsg]=useState("");
  const [chat,setChat]=useState([]);

  const send=()=>{
    if(!msg) return;
    setChat([...chat,{user:msg,bot:"Жақсы! Сұрағың қабылданды."}]);
    setMsg("");
  };

  return(
    <div className="container">
      <h2>AI көмекші</h2>

      {chat.map((c,i)=>(
        <div key={i}>
          <div>Сен: {c.user}</div>
          <div>AI: {c.bot}</div>
        </div>
      ))}

      <input value={msg} onChange={e=>setMsg(e.target.value)} />
      <button onClick={send}>Жіберу</button>
    </div>
  );
}