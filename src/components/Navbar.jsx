import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 12, display: "flex", gap: 12 }}>
      <Link to="/">Басты бет</Link>
      <Link to="/search">Іздеу</Link>
      <Link to="/ai">ЖИ көмекші</Link>
      <Link to="/contacts">Байланыс</Link>
    </nav>
  );
}