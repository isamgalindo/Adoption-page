import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./navbar";
import Detail from "./detail";
import Mascotas from "./mascotas";


function App() {
  return (
  <div className="App">
  <NavBar></NavBar>
  <BrowserRouter>
    <Routes >
      <Route path="/" element={<Mascotas />} />
      <Route path="/mascotas" element={<Mascotas />} />
      <Route path="/mascotas/:mascotaId" element={<Detail />} />
    </Routes>
  </BrowserRouter>
  </div>
);
}

export default App;