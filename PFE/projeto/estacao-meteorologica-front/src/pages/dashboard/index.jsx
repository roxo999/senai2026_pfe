import Header from '../../components/header'
import "./dashboard.css"
import GraficoBarra from '../../components/graficoBarra'

export default function Dashboard() {
  return (
    <>
      <Header />

      <main className="dashboard-container">

        {/* ===== CARDS ===== */}
        <section className="cards">

          <div className="card">
            <div className="card-info">
              <h6>Temperatura</h6>
              <h2>28°C</h2>
            </div>
          </div>

          <div className="card">
            <div className="card-info">
              <h6>Umidade</h6>
              <h2>60%</h2>
            </div>
          </div>

          <div className="card">
            <div className="card-info">
              <h6>Vento</h6>
              <h2>12 km/h</h2>
            </div>
          </div>

        </section>

        {/* ===== GRÁFICO ===== */}
        <section className="grafico-container">
          <div className="section-header">
            <h5>Visão geral do clima</h5>
          </div>

          <div className="graficos">
            <GraficoBarra />
          </div>
        </section>

        {/* ===== TABELA ===== */}
        <section className="tabela-container">

          <div className="section-header">
            <h5>Leituras recentes</h5>
          </div>

          <table>
            <thead>
              <tr>
                <th>Horário</th>
                <th>Temperatura</th>
                <th>Umidade</th>
                <th>Vento</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>08:00</td>
                <td>26°C</td>
                <td>65%</td>
                <td>10 km/h</td>
              </tr>

              <tr>
                <td>10:00</td>
                <td>28°C</td>
                <td>60%</td>
                <td>12 km/h</td>
              </tr>

              <tr>
                <td>12:00</td>
                <td>30°C</td>
                <td>55%</td>
                <td>14 km/h</td>
              </tr>
            </tbody>
          </table>

        </section>

      </main>
    </>
  )
}