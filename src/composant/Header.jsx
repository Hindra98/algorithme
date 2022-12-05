import { useLocation, useNavigate } from "react-router-dom";
import logo from "../icons/fav.png";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <nav className="bg-white border-b shadow-md sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img src={logo} alt="IFPIA" className="h-5 cursor-pointer" onClick={()=>navigate("/")} />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 px-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={()=>navigate("/")}
            >
              Accueil
            </li>
            <li
              className={`cursor-pointer py-3 px-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/filieres") && "text-black border-b-red-500"
              }`}
              onClick={()=>navigate("/filieres")}
            >
              Filières
            </li>
            <li
              className={`cursor-pointer py-3 px-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/realisations") && "text-black border-b-red-500"
              }`}
              onClick={()=>navigate("/realisations")}
            >
              Réalisations
            </li>
            <li
              className={`cursor-pointer py-3 px-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/inscription") && "text-black border-b-red-500"
              }`}
              onClick={()=>navigate("/inscription")}
            >
              Inscription en ligne
            </li>
            <li
              className={`cursor-pointer py-3 px-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/vie-estudiantine") &&
                "text-black border-b-red-500"
              }`}
              onClick={()=>navigate("/vie-estudiantine")}
            >
              Vie estudiantine
            </li>
          </ul>
        </div>
      </header>
    </nav>
  );
}
