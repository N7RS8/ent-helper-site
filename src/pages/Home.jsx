import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();

  return (
    <>
      <div className="hero">
        <h1>ҰБТ-ға дайындалуға көмектесетін сайт</h1>
        <p>
          Мамандық бағыттарын табу, комбинацияны түсіну, FAQ және AI көмекші.
        </p>

        <div style={{ marginTop: 20 }}>
          <button className="btn primary" onClick={() => nav("/search")}>
            Іздеуді бастау
          </button>
          <button className="btn ghost" style={{ marginLeft: 10 }}>
            AI көмекшіге өту
          </button>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Іздеу</h3>
          <p>Пәндер комбинациясы бойынша бағыт табу.</p>
        </div>

        <div className="card">
          <h3>FAQ</h3>
          <p>Жиі қойылатын сұрақтарға дайын жауап.</p>
        </div>

        <div className="card">
          <h3>AI көмекші</h3>
          <p>Сұрақ қойып, жылдам кеңес алу.</p>
        </div>
      </div>
    </>
  );
}