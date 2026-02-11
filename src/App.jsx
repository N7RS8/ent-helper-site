import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Ai from "./pages/AI";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <Navbar page={page} setPage={setPage} />

      <main className="container">
        {page === "home" && <Home setPage={setPage} />}
        {page === "search" && <Search />}
        {page === "ai" && <Ai />}
        {page === "contacts" && <Contacts />}
        {!["home", "search", "ai", "contacts"].includes(page) && <NotFound setPage={setPage} />}
      </main>

      <Footer />
    </div>
  );
}