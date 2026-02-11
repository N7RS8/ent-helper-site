import { useMemo, useState } from "react";
import { combos, faq } from "../data/entData";

export default function Search() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return combos;
    return combos.filter((x) =>
      (x.title + " " + x.desc).toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      <h2>Іздеу</h2>
      <p className="muted">Комбинация немесе бағыт атауын жазыңыз.</p>

      <div className="searchRow">
        <input
          className="input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Мысалы: мат/физ, медицина, IT..."
        />
      </div>

      <div className="list">
        {results.map((item, idx) => (
          <div key={idx} className="card">
            <div className="tag">{item.title}</div>
            <div style={{ marginTop: 8 }}>{item.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 28 }}>
        <h3>FAQ</h3>
        <div className="list">
          {faq.map((f, i) => (
            <div key={i} className="card">
              <b>{f.q}</b>
              <div className="muted" style={{ marginTop: 6 }}>
                {f.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}