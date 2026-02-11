export default function Home(){
  return (
    <div className="container">
      <div className="hero">
        <h1>ҰБТ-ға дайындалуға көмектесетін сайт</h1>
        <p>Мамандық бағыттарын табу, комбинацияны түсіну, FAQ және AI көмекші.</p>

        <div className="heroBtns">
          <a href="/search" className="primary">Іздеуді бастау</a>
          <a href="/ai" className="secondary">AI көмекшіге өту</a>
        </div>
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
      </div>
    </div>
  )
}