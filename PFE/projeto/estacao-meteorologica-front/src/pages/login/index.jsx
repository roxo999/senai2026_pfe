import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './login.css'

export default function Login() {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()

    // login simples (simulação)
    if (usuario && senha) {
      navigate('/dashboard')
    } else {
      alert('Preencha todos os campos')
    }
  }

  return (
    <section className="container-login">
      <div className="box-login">

        {/* LADO ESQUERDO */}
        <div className="lado-esquerdo">
          <h1>Estação</h1>
          <p>Sistema de Monitoramento Climático</p>
        </div>

        {/* LADO DIREITO */}
        <div className="lado-direito">
          <h2>Login</h2>

          <form onSubmit={handleLogin}>

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

            <button type="submit" className="btn-login">
              Entrar
            </button>

          </form>

          <p className="register-text">
            Não tem conta? <Link to="/register">Cadastre-se</Link>
          </p>
        </div>

      </div>
    </section>
  )
}