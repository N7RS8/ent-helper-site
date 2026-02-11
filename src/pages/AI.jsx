import React, { useEffect, useRef, useState } from "react";

export default function Ai() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Сәлем! Мен ҰБТ бойынша көмектесемін. Сұрағыңды жаз 😊" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(customText) {
    const text = (customText ?? input).trim();
    if (!text || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    try {
      const r = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await r.json();
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.reply || "Жауап шықпады." },
      ]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Серверге қосыла алмадым. server қосулы ма?" },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const styles = {
    page: { maxWidth: 980, margin: "0 auto", padding: 24 },
    title: { fontSize: 28, fontWeight: 800, marginBottom: 6 },
    sub: { opacity: 0.8, marginBottom: 16 },
    chat: {
      background: "white",
      borderRadius: 16,
      padding: 16,
      minHeight: 320,
      border: "1px solid #e5e7eb",
    },
    row: (role) => ({
      display: "flex",
      justifyContent: role === "user" ? "flex-end" : "flex-start",
      marginBottom: 10,
    }),
    bubble: (role) => ({
      maxWidth: "75%",
      padding: "10px 12px",
      borderRadius: 14,
      background: role === "user" ? "#0b6cff" : "#eef2ff",
      color: role === "user" ? "white" : "#111827",
      border: role === "user" ? "none" : "1px solid #dbeafe",
      whiteSpace: "pre-wrap",
    }),
    quick: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      margin: "12px 0 10px",
      justifyContent: "flex-end",
    },
    qbtn: {
      padding: "8px 12px",
      borderRadius: 999,
      border: "1px solid #bfdbfe",
      background: "#dbeafe",
      cursor: "pointer",
      fontWeight: 600,
    },
    inputRow: { display: "flex", gap: 12, marginTop: 12 },
    input: {
      flex: 1,
      padding: 12,
      borderRadius: 12,
      border: "1px solid #cbd5e1",
      outline: "none",
    },
    btn: {
      padding: "12px 16px",
      borderRadius: 12,
      border: "none",
      background: "#0b6cff",
      color: "white",
      cursor: "pointer",
      fontWeight: 700,
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.title}>AI көмекші</div>
      <div style={styles.sub}>ҰБТ, пән таңдау, дайындық жоспары туралы сұра.</div>

      <div style={styles.chat}>
        {messages.map((m, i) => (
          <div key={i} style={styles.row(m.role)}>
            <div style={styles.bubble(m.role)}>{m.text}</div>
          </div>
        ))}

        {loading && (
          <div style={styles.row("bot")}>
            <div style={styles.bubble("bot")}>Жауап жазып жатырмын...</div>
          </div>
        )}

        <div ref={endRef} />
      </div>

      <div style={styles.quick}>
        <button style={styles.qbtn} onClick={() => send("Математикадан көмектес: тригонометрия тақырыбын түсіндір.")}>
          Математика
        </button>
        <button style={styles.qbtn} onClick={() => send("ҰБТ-ға 30 күндік оқу жоспарын жасап бер.")}>
          Оқу жоспары
        </button>
        <button style={styles.qbtn} onClick={() => send("Комбинацияны қалай таңдаймын? 2-3 нұсқа ұсын.")}>
          Комбинация
        </button>
      </div>

      <div style={styles.inputRow}>
        <input
          style={styles.input}
          placeholder="Сұрақ жаз..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button style={styles.btn} onClick={() => send()}>
          Жіберу
        </button>
      </div>
    </div>
  );
}