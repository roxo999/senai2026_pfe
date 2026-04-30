import { Link, useLocation } from "react-router-dom";
import "./header.css";

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">

        <h2 className="logo">Estação Meteorológica</h2>

        <nav>
          <ul className="nav-list">

            <li>
              <Link 
                to="/dashboard" 
                className={isActive("/dashboard") ? "active" : ""}
              >
                Home
              </Link>
            </li>

            <li>
              <Link 
                to="/cadastro" 
                className={isActive("/cadastro") ? "active" : ""}
              >
                Cadastro
              </Link>
            </li>

            <li>
              <Link 
                to="/relatorio" 
                className={isActive("/relatorio") ? "active" : ""}
              >
                Relatório
              </Link>
            </li>
            

            <li>
              <Link to="/" className="logout">
                Sair
              </Link>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
}