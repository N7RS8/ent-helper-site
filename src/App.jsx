import { Routes, Route } from "react-router-dom";import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AI from "./pages/AI";
import Contacts from "./pages/Contacts";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}