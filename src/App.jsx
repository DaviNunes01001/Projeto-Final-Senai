import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "../public/Home/Home"
import Contato from "../public/Contato/Contato"
import Produto from "../public/Produto/Produto"
import Sobre from "../public/Sobre/Sobre"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/contato" element={<Produto />} />
      </Routes>
    </>
  );
}

export default App;
