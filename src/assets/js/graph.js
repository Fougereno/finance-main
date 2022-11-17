const { red } = require("ansi-colors");

//chart.js
const ctx = document.getElementById('myChart').getContext('2d');


let gradient = ctx.createLinearGradient(0, 0, 0, 450);
gradient.addColorStop(0.5, 'rgba(0, 0, 255, 1)');
gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

new Chart(ctx, {
    type: 'line',
    data: {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
        {   
            data: [0, 2, 8, 18, 40, 73, 134],
            borderWidth: 2,
            borderColor: '#355DFB',
            backgroundColor: gradient,
            fill: true,
            pointRadius: 0,
          },
        {
        data: [0, 9, 32, 64, 114, 188, 372],
        borderWidth: 2,
        borderColor: '#0000DE', 
        backgroundColor: 'rgba(0, 0, 222, 0.1)',
        pointBackgroundColor: '#fff',
        pointRadius: [4, 4, 4, 4, 4, 4, 0] ,
        fill: true,
    },
]
    },
    options: { 
      responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                  color: '#C6D9E9', 
                }
              },
              y: {
                grid: {
                  color: '#C6D9E9', 
                }
              }
        }
      }
});
