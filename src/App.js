import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Wheel from "./Wheel";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wheel" element={<Wheel />} />
      </Routes>
    </BrowserRouter>
  );
}
