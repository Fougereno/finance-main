const { red } = require("ansi-colors");

//chart.js
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
        {   
            type: 'line',
            data: [0, 2, 8, 18, 40, 73, 134],
            borderWidth: 2,
            borderColor: '#355DFB',
            backgroundColor: 'rgba(53, 93, 251, 0.1)',
            fill: true,
            pointRadius: 0,
          },
        {
        data: [0, 9, 32, 64, 114, 188, 372],
        borderWidth: 2,
        borderColor: '#0000DE', 
        backgroundColor: 'rgba(0, 0, 222, 0.1)',
        pointBackgroundColor: '#fff',
        pointRadius: 4,
        fill: true,
    },
]
    },
    options: { 
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
                display: false,
                grid: {
                  display: false
                }
              }
        }
      }
});
