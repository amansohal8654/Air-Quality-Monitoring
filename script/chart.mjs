/* globals Chart:false, feather:false */

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Bengaluru", "Bhubaneswar", "Chandigarh", "Chennai", "Delhi", "Hyderabad", "Indore", "Jaipur", "Kolkata", "Lucknow", "Mumbai", "Pune"],
        datasets: [{
            label: 'AQI',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: [
                '#55984f',
                '#a3c853',
                '#fff833',
                '#f29c33',
                '#e93f33',
                '#af2d24',
                '#55984f',
                '#a3c853',
                '#fff833',
                '#f29c33',
                '#e93f33',
                '#af2d24',
            ],
            borderColor: [
                '#55984f',
                '#a3c853',
                '#fff833',
                '#f29c33',
                '#e93f33',
                '#af2d24',
                '#55984f',
                '#a3c853',
                '#fff833',
                '#f29c33',
                '#e93f33',
                '#af2d24',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
  

export function addData(data) {
    const cities = myChart.data.labels;
    for(let i = 0; i < cities.length; i++) {
        myChart.data.datasets[0].data[i] = data[cities[i]][0];
        myChart.data.datasets[0].backgroundColor[i] = data[cities[i]][2];
        myChart.data.datasets[0].borderColor[i] = data[cities[i]][2];
    }
    myChart.update();
}