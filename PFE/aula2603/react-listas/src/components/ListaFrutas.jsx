const frutas = [
  { id: 1, nome: "Morango" },
  { id: 2, nome: "Abacaxi" },
  { id: 3, nome: "Maracujá" },
];

export default function ListaFrutas({ titulo }) {
  const listaFrutas = frutas.map((fruta) => {
    return (
      <li>
        <h3>{fruta.nome}</h3>
      </li>
    );
  });

  return (
    <>
      <h1>{titulo}</h1>
      <ul>{listaFrutas}</ul>
    </>
  );
}
