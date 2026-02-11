const TG = "https://t.me/enthelper";

const team = [
  { name: "Нурсултан", role: "Разработчик" },
  { name: "Рузана", role: "Дизайнер" },
  { name: "Асылжан", role: "Продукт" },
  { name: "Заңғар", role: "Тестировщик" },
  { name: "Әмір", role: "Аналитик" }
];

const state = {
  page: "home",
  msgs: [{ who: "bot", text: "Сәлем! Сұрағыңызды жазыңыз." }]
};

function $(s){ return document.querySelector(s); }

function setPage(p){
  state.page=p;
  renderApp();
}

async function send(){
  const input=$("#aiInput");
  if(!input) return;

  const text=input.value.trim();
  if(!text) return;

  state.msgs.push({who:"user",text});
  input.value="";
  renderApp();

  const r=await fetch("/api/chat",{
    method:"POST",
    headers:{ "Content-Type":"application/json"},
    body:JSON.stringify({message:text})
  });

  const d=await r.json();
  state.msgs.push({who:"bot",text:d.reply});
  renderApp();
}

function Home(){
return `
<section class="hero">
<div class="container">

<div class="hero-card">
<h1>ҰБТ-ға дайындалуға көмектесетін сайт</h1>

<p class="sub">
ENT Helper – кез-келген сұрақтарға жауап беретін,
оқушылар мен студенттерге арналған AI көмекші.
</p>

<div class="actions">
<button class="btn" onclick="window.go('search')">Іздеу</button>
<button class="btn outline" onclick="window.go('ai')">AI көмекші</button>
<a class="btn ghost" href="${TG}" target="_blank">Telegram</a>
</div>
</div>

</div>
</section>
`;
}

function Search(){
return `
<section class="section">
<div class="container">
<h2>Іздеу</h2>
<p>Пәндер комбинациясы бойынша бағыт табу.</p>

<div class="card">
Физмат • География • Информатика • Тарих
</div>
</div>
</section>
`;
}

function Contacts(){
return `
<section class="section">
<div class="container">
<h2>Байланыс</h2>

<div class="card">
Telegram: <a href="${TG}" target="_blank">@enthelper</a>
</div>

<div class="card">
<h3>Команда</h3>
<ul>
${team.map(t=>`<li>${t.name} — ${t.role}</li>`).join("")}
</ul>
</div>

</div>
</section>
`;
}

function AI(){
const msgs=state.msgs.map(m=>
`<div class="msg ${m.who}">
<div class="bubble">${m.text}</div>
</div>`).join("");

return `
<section class="section">
<div class="container">
<h2>AI көмекші</h2>

<div class="chatbox">${msgs}</div>

<div class="chatbar">
<input id="aiInput" placeholder="Сұрақ жазыңыз..." />
<button class="btn" onclick="window.send()">Жіберу</button>
</div>

</div>
</section>
`;
}

function Layout(content){
return `
<header class="top">
<div class="container top-inner">
<div class="brand">ENT Helper</div>
<nav>
<button onclick="window.go('home')">Басты бет</button>
<button onclick="window.go('search')">Іздеу</button>
<button onclick="window.go('contacts')">Байланыс</button>
<button onclick="window.go('ai')">AI</button>
</nav>
</div>
</header>

${content}

<footer class="footer">© 2026 ENT Helper</footer>
`;
}

export function renderApp(){
window.go=setPage;
window.send=send;

const root=$("#app");

let page=
state.page==="home"?Home():
state.page==="search"?Search():
state.page==="contacts"?Contacts():
AI();

root.innerHTML=Layout(page);
}