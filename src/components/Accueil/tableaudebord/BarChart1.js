import React from 'react'
import { Bar, defaults } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const BarChart1 = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ['Inscrits','Vaccinés 1ère dose','Vacciné 2ème dose','Vacciné 3ème dose'],
          datasets: [
            {
              label: 'Nombre des vaccinés',
              data: [7568743,6730944,5186199,30897],
              backgroundColor: [
               'red','blue','yellow','green',
                /*'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',*/
              ],
              /*borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],*/
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default BarChart1
