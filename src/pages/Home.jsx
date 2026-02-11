export default function Home({ setPage }) {
  return (
    <div className="hero">
      <div className="heroCard">
        <h1>ҰБТ-ға дайындалуға көмектесетін сайт</h1>
        <p className="muted">
          Мамандық бағыттарын табу, комбинацияны түсіну, FAQ және AI көмекші.
        </p>

        <div className="heroActions">
          <button className="primary" onClick={() => setPage("search")}>
            Іздеуді бастау
          </button>
          <button className="ghost" onClick={() => setPage("ai")}>
            AI көмекшіге өту
          </button>
        </div>

        <div className="grid3">
          <div className="card">
            <h3>Іздеу</h3>
            <p className="muted">Пәндер комбинациясы бойынша бағыт табу.</p>
          </div>
          <div className="card">
            <h3>FAQ</h3>
            <p className="muted">Жиі қойылатын сұрақтарға дайын жауап.</p>
          </div>
          <div className="card">
            <h3>AI көмекші</h3>
            <p className="muted">Сұрақ қойып, жылдам кеңес алу.</p>
          </div>
        </div>
      </div>
    </div>
  );
}