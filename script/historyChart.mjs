/* globals Chart:false, feather:false */
/* 
Bengaluru
Bhubaneswar
Chandigarh
Chennai
Delhi
Hyderabad
Indore
Jaipur
Kolkata
Lucknow
Mumbai
Pune
*/

import {historyData} from './dataStore.mjs';


// init ctx for every chart
const ctxBengaluru = document.getElementById('Bengaluru');
const ctxBhubaneswar = document.getElementById('Bhubaneswar');
const ctxChandigarh = document.getElementById('Chandigarh');
const ctxChennai = document.getElementById('Chennai');
const ctxDelhi = document.getElementById('Delhi');
const ctxHyderabad = document.getElementById('Hyderabad');
const ctxIndore = document.getElementById('Indore');
const ctxJaipur = document.getElementById('Jaipur');
const ctxKolkata = document.getElementById('Kolkata');
const ctxLucknow = document.getElementById('Lucknow');
const ctxMumbai = document.getElementById('Mumbai');
const ctxPune = document.getElementById('Pune');

const labels = ['00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00'];
const data = [0,0,0,0,0,0,0,0,0,0,0,0];

// creating chart for every city
const BengaluruChart = createChart(ctxBengaluru, labels, data, "Bengaluru Aqi History");
const BhubaneswarChart = createChart(ctxBhubaneswar, labels, data, "Bhubaneswar Aqi History");
const ChandigarhChart = createChart(ctxChandigarh, labels, data, "Chandigarh Aqi History");
const ChennaiChart = createChart(ctxChennai, labels, data, "Chennai Aqi History");
const DelhiChart = createChart(ctxDelhi, labels, data, "Delhi Aqi History");
const HyderabadChart = createChart(ctxHyderabad, labels, data, "Hyderabad Aqi History");
const IndoreChart = createChart(ctxIndore, labels, data, "Indore Aqi History");
const JaipurChart = createChart(ctxJaipur, labels, data, "Jaipur Aqi History");
const KolkataChart = createChart(ctxKolkata, labels, data, "Kolkata Aqi History");
const LucknowChart = createChart(ctxLucknow, labels, data, "Lucknow Aqi History");
const MumbaiChart = createChart(ctxMumbai, labels, data, "Mumbai Aqi History");
const PuneChart = createChart(ctxPune, labels, data, "Pune Aqi History");

function createChart(ctx, labels, data, label){
   return new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: label,
            data: data,
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          },
          legend: {
            display: false
          }
        }
    })
}


setInterval( () => {
  for(const city in historyData){
    const chart = getChart(city);
    updateCharData(historyData[city], chart);
  }
}, 4000);

function updateCharData(data, myChart) {
    for(let i = 0; i < data.length; i++) {
        myChart.data.datasets[0].data[i] = data[i][0];
        myChart.data.labels[i] = data[i][1];
    }
    myChart.update();
}


function getChart(name){
  let charName;
  switch (name) {
    case 'Bengaluru':
      charName = BengaluruChart;
      break;
    case 'Bhubaneswar':
      charName = BhubaneswarChart;
      break;
    case 'Chandigarh':
      charName = ChandigarhChart;
      break;
    case 'Chennai':
      charName = ChennaiChart;
      break;
    case 'Delhi':
      charName = DelhiChart;
      break;
    case 'Hyderabad':
      charName = HyderabadChart;
      break;
    case 'Indore':
      charName = IndoreChart;
      break;
    case 'Jaipur':
      charName = JaipurChart;
      break;
    case 'Kolkata':
      charName = KolkataChart;
      break;
    case 'Lucknow':
      charName = LucknowChart;
      break;
    case 'Mumbai':
      charName = MumbaiChart;
      break;
    case 'Pune':
      charName = PuneChart;
      break;
  }
  return charName;
}
/* globals Chart:false, feather:false */

  