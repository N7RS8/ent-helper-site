export default function NotFound({ setPage }) {
  return (
    <div className="card">
      <h2>Бұл бет табылмады</h2>
      <p className="muted">Мәзір арқылы бөлім таңдаңыз.</p>
      <button className="primary" onClick={() => setPage("home")}>Басты бетке</button>
    </div>
  );
}