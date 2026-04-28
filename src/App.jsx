import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Route, Routes } from "react-router-dom";


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
