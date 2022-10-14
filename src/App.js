import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Character from "./views/Character";
import Data from "./views/Data";
import './App.css';

export default function App() {

  return (
 <div className="App">
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon" element={<Character />} />
      <Route path="/pokemon/:name" element={<Data />} />
    </Routes>
  </BrowserRouter>
 </div>
 );
}
