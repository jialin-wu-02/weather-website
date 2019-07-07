fetch("/forecast?address=" + document.title).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            alert(data.error);
            return ;
        }
        loadChart(data);
    })
});

const loadChart = (weatherData) => {
    let d = new Date();
    let dataPoints = [];
    let labels = []
    let hour = d.getHours();
    for (var i = 0; i < 24; i++) {
        dataPoints[i] = weatherData.hourly[i].temperature;
        labels[i] = (i + hour) % 24 + ":00";
    }
    var ctx = document.getElementById('hourlyChart');
    var hourlyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: 'Celsius Degree',
                data: dataPoints,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)', 
                borderWidth: 2
            }]
        },
        options: {
            title: {
                display: true,
                text: "Temperature for the Next 24 Hours",
                fontSize: 24,
                fontFamily: "Arial"
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    dataPoints = [];
    labels = []
    let day = d.getDay();
    const week = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
    for (var i = 0; i < 7; i++) {
        dataPoints[i] = (weatherData.daily[i].temperatureHigh + weatherData.daily[i].temperatureLow) / 2;
        labels[i] = week[(day + i) % 7];
    }
    console.log(dataPoints);
    var dc = document.getElementById('dailyChart');
    var dailyChart = new Chart(dc, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Celsius Degree',
                data: dataPoints,
                backgroundColor: 'rgba(250, 102, 102, 0.3)',
                borderColor: 'rgba(250, 102, 102, 1)', 
                borderWidth: 2
            }]
        },
        options: {
            title: {
                display: true,
                text: "Temperature for the Next Seven Days",
                fontSize: 24,
                fontFamily: "Arial"
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}