export default function Contacts() {
  return (
    <div>
      <h2>Байланыс</h2>
      <p className="muted">Команда және Telegram бот.</p>

      <div className="grid2">
        <div className="card">
          <h3>Команда</h3>
          <ul className="ul">
            <li>Нұрсұлтан — әзірлеуші</li>
            <li>Рузана — дизайнер</li>
            <li>Асылжан — өнім менеджері</li>
            <li>Заңғар — тестілеуші</li>
            <li>Әмір — аналитик</li>
          </ul>
        </div>

        <div className="card">
          <h3>Telegram</h3>
          <p className="muted">Бот арқылы да көмек алуға болады:</p>
          <a className="linkBtn" href="https://t.me/ENThelper26_bot" target="_blank" rel="noreferrer">
            @ENThelper26_bot
          </a>
        </div>
      </div>
    </div>
  );
}