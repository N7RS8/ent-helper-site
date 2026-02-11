import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="header">
      <div className="headerInner">

        <div className="brand">
          <div className="logo">UTO</div>
          <div>
            <div className="title">ҰБТ Көмекші</div>
            <div className="subtitle">ENT Helper</div>
          </div>
        </div>

        <nav className="menu">
          <Link to="/">Басты бет</Link>
          <Link to="/search">Іздеу</Link>
          <Link to="/ai">AI көмекші</Link>
          <Link to="/contacts">Байланыс</Link>
        </nav>

      </div>
    </header>
  );
}