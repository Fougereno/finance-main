//chart.js
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
    labels: ['', '', '', '', '', '', ''],
    datasets: [{
        data: [0, 9, 32, 64, 114, 188, 372],
        borderWidth: 2,
        borderColor: '#0000DE', 
        backgroundColor: 'rgba(0, 0, 222, 0.1)',
        pointBackgroundColor: '#fff',
        fill: true,
    }]
    },
    options: {
        scales: {
              y: {
                grid: {
                  display: false
                }
              }
        }
      }
});
