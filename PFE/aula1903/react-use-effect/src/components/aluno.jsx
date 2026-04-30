import { useState, useEffect } from "react";

export default function Aluno() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);

  // executa toda vez
  useEffect(() => {
    console.log('App renderizado!');
  });

  // executa na montagem do componente
  useEffect(() => {
    console.log('App montado!');
  }, []);

  useEffect(() => {
    console.log('o nome mudou para,', nome);
  }, [nome]);

  useEffect(() => {
    console.log('a idade mudou para,', idade);
  }, [idade]);

  return(
    <>
      <form action="">
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
      </form>
    </>
  )
}
