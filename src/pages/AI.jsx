import React, { useState } from "react";

const API = "https://ent-helper-site-2.onrender.com/api/chat";

export default function AI() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });

      const data = await res.json();
      setAnswer(data.reply);
    } catch (err) {
      setAnswer("Қате шықты. Қайта көріңіз.");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>AI Көмекші</h2>

      <input
        style={{ padding: 10, width: "70%" }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Сұрақ жазыңыз..."
      />

      <button
        style={{ padding: 10, marginLeft: 10 }}
        onClick={sendMessage}
      >
        Жіберу
      </button>

      {loading && <p>Жауап күтілуде...</p>}

      {answer && (
        <div style={{ marginTop: 20 }}>
          <b>Жауап:</b>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}