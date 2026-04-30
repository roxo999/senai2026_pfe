import { Link } from "react-router-dom";
import "./contato.css";

export default function Contato() {
  return (
    <section className="container">
      <h2 className="titulo">Contato</h2>

      <p>Entre em contato com a gente!</p>

      <form className="form">
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu email" />
        <textarea placeholder="Sua mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>

      <Link to="/" className="botao-voltar">Voltar</Link>
    </section>
  );
}
