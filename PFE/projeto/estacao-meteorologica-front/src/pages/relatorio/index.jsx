import Header from '../../components/header'
import './relatorio.css'
import GraficoBarra from '../../components/graficoBarra'

export default function Relatorio() {

  const leituras = [
    { horario: "12:00", qualidadeAr: "Boa", iqa: 42, temperatura: '26°C', umidade:'68%' },
    { horario: "11:00", qualidadeAr: "Moderada", iqa: 55, temperatura: '30°C', umidade:'50%' },
    { horario: "18:00", qualidadeAr: "Boa", iqa: 60, temperatura: '20°C', umidade:'75%' },
    { horario: "10:00", qualidadeAr: "Ruim", iqa: 20, temperatura: '39°C', umidade:'40%' }
  ]

  return (
    <>
      <Header />

      <div className="container-relatorio">

        <div className="topo">
          <h2>Relatório Meteorológico</h2>
          <p>Monitoramento da temperatura, umidade e qualidade do ar</p>
        </div>

        {/* GRÁFICO */}
        <section className="card grafico">
          <h4>Visão Geral</h4>
          <GraficoBarra />
        </section>

        {/* TABELA */}
        <section className="card tabela">
          <h4>Leituras recentes</h4>

          <table>
            <thead>
              <tr>
                <th>Horário</th>
                <th>Qualidade do ar</th>
                <th>IQA</th>
                <th>Temperatura</th>
                <th>Umidade</th>
              </tr>
            </thead>

            <tbody>
              {leituras.map((item, index) => (
                <tr key={index}>
                  <td>{item.horario}</td>
                  <td className={`status ${item.qualidadeAr.toLowerCase()}`}>
                    {item.qualidadeAr}
                  </td>
                  <td>{item.iqa}</td>
                  <td>{item.temperatura}</td>
                  <td>{item.umidade}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </section>

      </div>
    </>
  )
}