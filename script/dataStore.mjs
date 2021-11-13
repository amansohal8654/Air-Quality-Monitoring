
export const historyData = {};
export const dataPoints = {};
export const dataQueue = [];

const colors = {
    good : '#55984f',
    satisfied : '#a3c853',
    moderate: '#fff833',
    poor: '#f29c33',
    verypoor: '#e93f33',
    severe: '#af2d24',
}

const ws = new WebSocket("wss://city-ws.herokuapp.com");     
ws.onmessage = function(event) {
    let today = new Date();
    const measurement = JSON.parse(event.data);
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    measurement.map((data) => {
        let color = getColor(data.aqi);
        let aqi = Number.parseFloat(data.aqi).toFixed(2)
        dataPoints[data.city] = [aqi, time, color];
        if(!(data.city in historyData)) historyData[data.city] = [];
        historyData[data.city].push([aqi, time]);
        const length = historyData[data.city].length
        if(length > 12) historyData[data.city].splice(0, Math.abs(length - 12));
    })
    dataQueue.push(dataPoints);
};


function getColor(aqiValue){
    let color = ''
    if(aqiValue < 50){
        color = colors["good"];
    }else if(aqiValue > 50 && aqiValue <= 100){
        color = colors["satisfied"];
    }else if(aqiValue > 100 && aqiValue <= 200){
        color = colors["moderate"];
    }else if(aqiValue > 200 && aqiValue <= 300){
        color = colors["poor"];
    }else if(aqiValue > 300 && aqiValue <= 400){
        color = colors["verypoor"];
    }else{
        color = colors["severe"]
    }
    return color;
}