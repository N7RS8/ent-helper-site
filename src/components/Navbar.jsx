import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ padding: 20, display: "flex", gap: 20 }}>
      <Link to="/">Басты бет</Link>
      <Link to="/ai">AI баланс</Link>
      <Link to="/contacts">Контакты</Link>
    </div>
  );
}