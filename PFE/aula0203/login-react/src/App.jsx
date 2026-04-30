import './App.css'
import logSesi from './assets/img/sesi.png'
import logSenai from './assets/img/senai.png'

export default function App() {
  
  return (
    <> 

    <div className="container">

      <img src={logSesi} alt="logo do Sesi" className="logo" />
      <img src={logSenai} alt="logo do senai" className="logo" />
      <h1 className="titulo">Login</h1>
      <span className="subtitulo">para continuar</span>
      <label htmlFor="nome" className="label">Nome</label>
      <input type="text" className="campo" id="nome" placeholder='Seu nome' />
      <label htmlFor="senha" className="label">Senha</label>
      <input type="text" className="campo" id='senha' placeholder='***' />
      <button className="botao">Login</button>
      <span className="textoFooter">Esqueceu a senha?</span>
      <span className="textoFooter">Cadastre-se</span>


    </div>

   </>

  )
}

//export default App;
