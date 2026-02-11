import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Search from "./pages/Search";
import AI from "./pages/AI";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}