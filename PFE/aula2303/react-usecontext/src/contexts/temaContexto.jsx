import { createContext, useState } from "react";

export const ContextoTema = createContext();

export default function TemaProvedor({ children }) {
  const [tema, setTema] = useState("light");

  function mudarTema() {
    setTema((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ContextoTema.Provider value={{ tema, mudarTema }}>
      {children}
    </ContextoTema.Provider>
  );
}