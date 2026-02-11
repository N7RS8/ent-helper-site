export default function Navbar({ page, setPage }) {
  const Btn = ({ id, children }) => (
    <button
      className={"navBtn " + (page === id ? "active" : "")}
      onClick={() => setPage(id)}
    >
      {children}
    </button>
  );

  return (
    <header className="header">
      <div className="headerInner">
        <div className="brand" onClick={() => setPage("home")} role="button">
          <div className="logo">UTO</div>
          <div className="brandText">
            <div className="brandTitle">ҰБТ Көмекші</div>
            <div className="brandSub">ENT Helper</div>
          </div>
        </div>

        <nav className="nav">
          <Btn id="home">Басты бет</Btn>
          <Btn id="search">Іздеу</Btn>
          <Btn id="ai">AI көмекші</Btn>
          <Btn id="contacts">Байланыс</Btn>
        </nav>
      </div>
    </header>
  );
}