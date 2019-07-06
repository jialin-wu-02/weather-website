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
    for (var i = 0; i < 24; i++) {
        dataPoints[i] = {y: weatherData.hourly[i].temperature};
    }
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Today's Temperature"
        },
        axisY:{
            includeZero: false
        },
        data: [{        
            type: "line",       
            dataPoints
        }]
    });
    chart.render();
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