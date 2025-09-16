// Class: SWE2511 - Charting
// Names: Matthew Schulz & Kaiden Pollesch
// Class Section: 111

const drawChart = () => {
    const data = new google.visualization.DataTable();
    data.addColumn('number', 'Year');
    data.addColumn('number', '# of Wolves');
    data.addColumn('number', '# of Moose');

    data.addRow([2010, 16, 510]);
    data.addRow([2011, 16, 515]);
    data.addRow([2012, 9, 750]);
    data.addRow([2013, 8, 975]);
    data.addRow([2014, 9, 1050]);
    data.addRow([2015, 3, 1250]);
    data.addRow([2016, 2, 1300]);
    data.addRow([2017, 2, 1600]);
    data.addRow([2018, 2, 1500]);
    data.addRow([2019, 14, 2060]);

    const options = {
        width: 1200,
        height: 400,
        legend: 'top',
        title: 'Wolves and Moose on Isle Royale',
        chartArea: { width: '90%', height: '80%'},
        vAxis: {
            scaleType: 'log',
        },
        hAxis: {
            format: '',
        },
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
};

window.onload = () => {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
};