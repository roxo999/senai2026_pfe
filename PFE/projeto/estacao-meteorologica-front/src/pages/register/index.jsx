import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!usuario || !senha || !confirmaSenha) {
      alert("Preencha todos os campos");
      return;
    }

    if (senha !== confirmaSenha) {
      alert("As senhas não coincidem");
      return;
    }

    alert("Cadastro realizado com sucesso!");
    navigate("/");
  }

  return (
    <section className="container-register">
      <div className="box-register">

        {/* LADO ESQUERDO */}
        <div className="lado-esquerdo">
          <h1>Cadastro</h1>
          <p>Crie sua conta</p>
        </div>

        {/* LADO DIREITO */}
        <div className="lado-direito">
          <h2>Cadastro de Usuário</h2>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label htmlFor="usuario">Usuário</label>
              <input
                type="text"
                id="usuario"
                placeholder="Digite seu usuário"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="confsenha">Confirmar senha</label>
              <input
                type="password"
                id="confsenha"
                placeholder="Confirme sua senha"
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-register">
              Cadastrar
            </button>

          </form>

          <p className="login-link">
            Já tem conta? <Link to="/">Fazer login</Link>
          </p>
        </div>

      </div>
    </section>
  );
}