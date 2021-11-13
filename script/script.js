import { addData } from './chart.mjs';
import { dataQueue } from './dataStore.mjs';

const table = document.querySelector("#table");
const tBody = table.getElementsByTagName("tbody");

export const historyData = {};

//Updating data every second
setInterval(() => {
    if(dataQueue.length > 0) {
        const aqiData = dataQueue.shift()
        updateDomEverSecond(aqiData);
        addData(aqiData);
    }
}, 1000);

function updateDomEverSecond(cityData) {
    const allTr = tBody[0].children;
    for(const tr of allTr){
        const aqiValue = cityData[tr.children[0].innerHTML];
        tr.children[1].innerHTML = aqiValue[0];
        tr.style.backgroundColor = aqiValue[2];
        tr.animate( {
            easing: 'ease-in-out',
            duration: 500,
            delay: 500,
        });
        tr.children[2].innerHTML = aqiValue[1];
    }
}
