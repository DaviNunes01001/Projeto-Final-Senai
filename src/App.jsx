import "./App.css";
import { Route, Routes,} from "react-router-dom";
import Contato from "./pages/Contato/Contato";
import Sobre from "./pages/Sobre/Sobre";
import Header from "./components/Header/Header"
import Gerenciador from "./components/listagem/listagem"
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/gerenciador" element={<Gerenciador />} />
    </Routes>
    </>
  );
}

export default App;
