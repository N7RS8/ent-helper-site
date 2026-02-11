import { useState } from "react";

export default function AI() {
  const [q, setQ] = useState("");
  const [ans, setAns] = useState("");

  function ask() {
    setAns("Жауап: дайындықты күн сайын 2-3 сағаттан бастаңыз.");
  }

  return (
    <div>
      <h1>AI көмекші</h1>

      <input
        value={q}
        onChange={(e)=>setQ(e.target.value)}
        placeholder="Сұрақ жазыңыз"
      />

      <button onClick={ask}>Сұрау</button>

      <p>{ans}</p>
    </div>
  );
}