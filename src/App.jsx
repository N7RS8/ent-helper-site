import { Routes, Route } from "react-router-dom";import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AI from "./pages/AI";
import Contacts from "./pages/Contacts";
import Search from "./pages/Search";

export default function App(){
  return(
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/ai" element={<AI/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </>
  );
}