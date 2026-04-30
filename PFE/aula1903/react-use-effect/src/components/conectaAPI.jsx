import { useState, useEffect } from "react";

export default function ConectaAPI() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        setUsuario(data.results[0]);
      })
      .catch((error) => console.log("Erro:", error));
  }, []);

  return (
    <div>
      <h1>Usuário Aleatório</h1>

      {usuario && (
        <>
          <img src={usuario.picture.medium} alt="foto" />
          <p>Nome: {usuario.name.first} {usuario.name.last}</p>
          <p>Email: {usuario.email}</p>
          <p>País: {usuario.location.country}</p>
        </>
      )}
    </div>
  );
}
