import { useState } from "react";

export default function AI(){
  const [q,setQ]=useState("");
  const [ans,setAns]=useState("");

  const ask=async()=>{
    const r = await fetch("/api/chat",{
      method:"POST",
      headers:{ "Content-Type":"application/json"},
      body:JSON.stringify({message:q})
    });
    const d = await r.json();
    setAns(d.answer);
  };

  return(
    <div style={{padding:20}}>
      <h2>AI көмекші</h2>

      <input
        value={q}
        onChange={e=>setQ(e.target.value)}
        style={{padding:10,width:"60%"}}
      />
      <button onClick={ask} style={{padding:10,marginLeft:10}}>
        сұрау
      </button>

      <p style={{marginTop:20}}>{ans}</p>
    </div>
  );
}