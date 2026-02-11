import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero">
      <h1>ҰБТ-ға дайындалуға көмектесетін сайт</h1>

      <div className="buttons">
        <Link to="/search" className="btn-primary">
          Іздеуді бастау
        </Link>

        <Link to="/ai" className="btn-secondary">
          AI көмекші
        </Link>
      </div>
    </div>
  );
}