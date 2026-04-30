import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function GraficoBarra() {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#444',
          font: {
            size: 12
          }
        }
      },
      title: {
        display: true,
        text: 'Monitoramento Climático por Mês',
        color: '#2d2d2d',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#666'
        },
        grid: {
          display: false
        }
      },
      y: {
        ticks: {
          color: '#666'
        },
        grid: {
          color: '#eee'
        }
      }
    }
  }

  const labels = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ]

  const data = {
    labels,
    datasets: [
      {
        label: 'Chuva (mm)',
        data: [120, 90, 150, 80, 60, 40, 30, 50, 70, 110, 130, 140],
        backgroundColor: 'rgba(178, 58, 138, 0.7)', // rosa
        borderRadius: 6
      },
      {
        label: 'Temperatura (°C)',
        data: [30, 29, 27, 25, 23, 21, 20, 22, 24, 26, 28, 29],
        backgroundColor: 'rgba(123, 44, 191, 0.7)', // lilás
        borderRadius: 6
      }
    ]
  }

  return (
    <div style={{ height: '350px', width: '100%' }}>
      <Bar options={options} data={data} />
    </div>
  )
}