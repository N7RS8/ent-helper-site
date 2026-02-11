import { Link } from "react-router-dom";
import "./home.css";

export default function Home(){
  return(
    <div className="hero">

      <h1>ҰБТ-ға дайындалуға көмектесетін сайт</h1>
      <p>
        Мамандық бағыттарын табу, комбинацияны түсіну, FAQ және AI көмекші.
      </p>

      <div className="heroBtns">
        <Link to="/search" className="mainBtn">Іздеуді бастау</Link>
        <Link to="/ai" className="secBtn">AI көмекшіге өту</Link>
      </div>

      <div className="cards">

        <div className="card">
          <h3>Іздеу</h3>
          <p>Пәндер комбинациясы бойынша бағыт табу.</p>
        </div>

        <div className="card">
          <h3>FAQ</h3>
          <p>Жиі қойылатын сұрақтарға дайын жауап.</p>
        </div>

        <div className="card">
          <h3>AI көмекші</h3>
          <p>Сұрақ қойып, жылдам жауап алу.</p>
        </div>

      </div>

    </div>
  );
}