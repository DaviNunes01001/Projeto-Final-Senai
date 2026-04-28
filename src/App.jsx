import "./App.css";
import { Route, Routes,} from "react-router-dom";
import Contato from "./pages/Contato/Contato";
import Sobre from "./pages/Sobre/Sobre";

function App() {
  return (
    <>
    <Routes>
      <Route path="/contato" element={<Contato />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
    </>
  );
}

export default App;