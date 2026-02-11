import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Басты бет</Link>
      <Link to="/ai">AI</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
}