import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="header">
      <div className="headerInner">
        <div className="brand">
          <div className="logo">UTO</div>
          <div>
            <div className="title">ҰБТ Көмекші</div>
            <div className="subtitle">ENT Helper</div>
          </div>
        </div>

        <div className="nav">
          <Link to="/" className="btn">Басты бет</Link>
          <Link to="/search" className="btn ghost">Іздеу</Link>
          <Link to="/contacts" className="btn ghost">Байланыс</Link>
        </div>
      </div>
    </div>
  );
}