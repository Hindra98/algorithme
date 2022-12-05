
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./composant/Header";
import Home from "./pages/Home";
import Filieres from "./pages/Filieres";
import Realisations from "./pages/Realisations";
import VieEstudiantine from "./pages/VieEstudiantine";
import Profil from "./pages/Profil";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import PassOublie from "./pages/PassOublie";

function App() {
  return (
  <>
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/filieres" element={<Filieres />} />
      <Route path="/realisations" element={<Realisations />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/vie-estudiantine" element={<VieEstudiantine />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/pass-oublie" element={<PassOublie />} />
    </Routes>
  </Router>
  </>
  );
}

export default App;
