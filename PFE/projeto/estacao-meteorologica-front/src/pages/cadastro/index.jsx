// import { useState } from 'react';
// import Header from '../../components/header';

// export default function Cadastro(){
//     const [nome, setNome] = useState('')
//     const [endereco, setEndereco] = useState('')
//     const [email, setEmail] = useState('')
//     const [celular, setCelular] = useState('')
//     const [documento, setDocumento] = useState('')

//     return(
//         <section className="container">
//             <Header/>
//             <h2>Cadastro de dados pessoais</h2>

//             <form action="">
//                 <label htmlFor="nome">Nome</label>
//                 <input type="text" id='nome' placeholder='Nome Completo' value={nome} onChange={(e) => setNome(e.target.value)} />
//                 <label htmlFor="nome">Endereço</label>
//                 <input type="text" id='endereco' placeholder='Noome Completo' value={nome} onChange={(e) => setNome(e.target.value)} />
//                 <label htmlFor="nome">Email</label>
//                 <input type="text" id='email' placeholder='Noome Completo' value={nome} onChange={(e) => setNome(e.target.value)} />
//                 <label htmlFor="celular">Celular</label>
//                 <input type="text" id='celular' placeholder='0000000-0000' value={nome} onChange={(e) => setNome(e.target.value)} />
//                 <label htmlFor="nome">Documento</label>
//                 <input type="text" id='documento' placeholder='000.000.000-00' value={documento} onChange={(e) => setNome(e.target.value)} />
//             <button>
//                 Salvar
//             </button>
//             </form>
//         </section>
//     )
// }

//----------------------------------------------------------------------
import Header from '../../components/header'

export default function Cadastro() {
  return (
    <>
      <Header />

      <div className="container mt-5">

        <div className="card shadow-lg p-4 rounded-4">
          <h3 className="text-primary mb-4 fw-bold">
            Cadastro de dados pessoais
          </h3>

          <form>
            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Nome</label>
                <input type="text" className="form-control" placeholder="Nome completo" />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Email" />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Endereço</label>
                <input type="text" className="form-control" placeholder="Endereço" />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Celular</label>
                <input type="text" className="form-control" placeholder="Celular" />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Documento</label>
                <input type="text" className="form-control" placeholder="Documento" />
              </div>

            </div>

            <div className="text-end mt-3">
              <button className="btn btn-primary px-4">
                Salvar
              </button>
            </div>

          </form>
        </div>

      </div>
    </>
  )
}
