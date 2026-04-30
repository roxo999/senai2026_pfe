import { useContext } from "react";
import { ContextoTema } from "../contexts/temaContexto.jsx";

export default function Header() {
  const { tema, mudarTema } = useContext(ContextoTema);

  return (
    <header className={`header-${tema}`}>
      <h1>Meu primeiro site com Tema</h1>
      <button onClick={mudarTema}>Mudar Tema</button>
    </header>
  );
}