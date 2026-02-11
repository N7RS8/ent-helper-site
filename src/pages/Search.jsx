import { subjects } from "../data/entData";

export default function Search() {
  return (
    <div>
      <h1>Пәндер</h1>

      <ul>
        {subjects.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}