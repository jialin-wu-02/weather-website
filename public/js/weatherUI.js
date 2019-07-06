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
    let dataPoints = [];
    let labels = []
    for (var i = 0; i < 24; i++) {
        dataPoints[i] = weatherData.hourly[i].temperature;
        labels[i] = i;
    }
    var ctx = document.getElementById('hourlyChart');
    var hourlyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: 'Temperature',
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
    // var chart = new CanvasJS.Chart("chartContainer", {
    //     animationEnabled: true,
    //     theme: "light2",
    //     title:{
    //         text: "Today's Temperature"
    //     },
    //     axisY:{
    //         includeZero: false
    //     },
    //     data: [{        
    //         type: "line",       
    //         dataPoints
    //     }]
    // });
    // chart.render();
}

// window.onload = function () {
//     var chart = new CanvasJS.Chart("chartContainer", {
//         animationEnabled: true,
//         theme: "light2",
//         title:{
//             text: "Today's Temperature"
//         },
//         axisY:{
//             includeZero: false
//         },
//         data: [{        
//             type: "line",       
//             dataPoints: [
//                 { y: 450 },
//                 { y: 414},
//                 { y: 520 },
//                 { y: 460 },
//                 { y: 450 },
//                 { y: 500 },
//                 { y: 480 },
//                 { y: 480 },
//                 { y: 410 },
//                 { y: 500 },
//                 { y: 480 },
//                 { y: 510 }
//             ]
//         }]
//     });
//     chart.render();
// }