var Script = function () {



    var lineChartData = {
        labels : ["","","","","","",""],
        datasets : [
            {
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                data : [65,59,90,81,56,55,40]
            },
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [28,48,40,19,96,27,100]
            }
        ]

    };
    var pieData = [
        {
            value: 30,
            color:"#1abc9c"
        },
        {
            value : 50,
            color : "#16a085"
        },
        {
            value : 100,
            color : "#27ae60"
        }

    ];
    var barChartData = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                label: 'Chart1',
                backgroundColor : "rgba(220,220,220,0.5)",
                data : [65,59,90,81,56,55,40]
            },
            {
                label: 'Chart2',
                backgroundColor : "rgba(151,187,205,0.5)",
                data : [28,48,40,19,96,27,100]
            }
        ]
    

    };
    var chartData = [
        {
            value : Math.random(),
            color: "#D97041"
        },
        {
            value : Math.random(),
            color: "#C7604C"
        },
        {
            value : Math.random(),
            color: "#21323D"
        },
        {
            value : Math.random(),
            color: "#9D9B7F"
        },
        {
            value : Math.random(),
            color: "#7D4F6D"
        },
        {
            value : Math.random(),
            color: "#584A5E"
        }
    ];



    new Chart(document.getElementById("bar").getContext("2d"), 
        {
            type: 'bar',
            data: barChartData,
            options: {
                scales: {
                    xAxes: [{
                            stacked: true
                    }],
                    yAxes: [{
                            stacked: true
                    }]
                }
            }
        });

}();