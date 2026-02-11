import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar(){
  return(
    <div className="nav">
      <Link to="/">Басты бет</Link>
      <Link to="/ai">AI көмекші</Link>
      <Link to="/contacts">Байланыс</Link>
    </div>
  );
}