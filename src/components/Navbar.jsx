import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-item">Басты бет</Link>
      <Link to="/ai" className="nav-item">AI көмекші</Link>
      <Link to="/contacts" className="nav-item">Байланыс</Link>
    </nav>
  );
}