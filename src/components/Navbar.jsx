import { NavLink } from "react-router-dom";

export default function Navbar(){
  return(
    <header className="header">
      <div className="container">
        <div className="brand">
          <div className="logo">UTO</div>
          <div>
            <div style={{fontWeight:700}}>ҰБТ Көмекші</div>
            <div style={{opacity:.8,fontSize:13}}>ENT Helper</div>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/">Басты бет</NavLink>
          <NavLink to="/search">Іздеу</NavLink>
          <NavLink to="/ai">AI көмекші</NavLink>
          <NavLink to="/contacts">Байланыс</NavLink>
        </nav>
      </div>
    </header>
  );
}