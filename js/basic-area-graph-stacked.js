var options = {
    chart: {
        height: window.innerHeight - 198,
        type: 'area',
        stacked: true,
        toolbar: {
            show: true,
        },
        events: {
            selection: function (chart, e) {
                console.log(new Date(e.xaxis.min))
            }
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 3
    },
    series: [{
        name: 'In use',
        data: []
    }],
    //colors: ['#225de4', '#4274e8', '#628cec', '#81a3f0'],
    //colors: ['#117DBB'], // cpu
    colors: ['#9528B4'], // ethernet
    grid: {
        row: {
            colors: ['#ffffff'],
            opacity: 0.5
        },
    },
    legend: {
        show:false
    },
    xaxis: {
        show: false, labels: { show: false, }
    },
    tooltip: {
        enabled: false
    }
}

var cpuchart = new ApexCharts(document.querySelector("#cpuchart"), options);
cpuchart.render();
var ethernet0chart = new ApexCharts(document.querySelector("#ethernet0chart"), options);
ethernet0chart.render();
var ethernet1chart = new ApexCharts(document.querySelector("#ethernet1chart"), options);
ethernet1chart.render();
var ethernet2chart = new ApexCharts(document.querySelector("#ethernet2chart"), options);
ethernet2chart.render();
var ethernet3chart = new ApexCharts(document.querySelector("#ethernet3chart"), options);
ethernet3chart.render();
var gpu0chart = new ApexCharts(document.querySelector("#gpu0chart"), options);
gpu0chart.render();
var gpu1chart = new ApexCharts(document.querySelector("#gpu1chart"), options);
gpu1chart.render();
var gpu2chart = new ApexCharts(document.querySelector("#gpu2chart"), options);
gpu2chart.render();
var gpu3chart = new ApexCharts(document.querySelector("#gpu3chart"), options);
gpu3chart.render();
var gpu0memorychart = new ApexCharts(document.querySelector("#gpu0memorychart"), options);
gpu0memorychart.render();
var gpu1memorychart = new ApexCharts(document.querySelector("#gpu1memorychart"), options);
gpu1memorychart.render();
var gpu2memorychart = new ApexCharts(document.querySelector("#gpu2memorychart"), options);
gpu2memorychart.render();
var gpu3memorychart = new ApexCharts(document.querySelector("#gpu3memorychart"), options);
gpu3memorychart.render();
var memorychart = new ApexCharts(document.querySelector("#memorychart"), options);
memorychart.render();
var storagechart = new ApexCharts(document.querySelector("#storagechart"), options);
storagechart.render();
