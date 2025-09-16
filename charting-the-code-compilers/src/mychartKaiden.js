// Class: SWE2511 - Charting
// Names: Matthew Schulz & Kaiden Pollesch
// Class Section: 111

const drawChart = () => {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Task');
    data.addColumn('number', 'Hours per Week');

    data.addRow(['Sleeping', 49]);
    data.addRow(['Homework', 44]);
    data.addRow(['Classes', 22]);
    data.addRow(['Downtime', 22]);
    data.addRow(['Other', 11]);
    data.addRow(['Eating', 10]);
    data.addRow(['Gospel', 6]);
    data.addRow(['Meetings', 4]);

    const options = {
        title: 'Average Hour per Week Distribution for Kaiden',
        is3D: true,
        height: 700,
        width: 1200,
        legend: 'top',
    };

    const chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
};

window.onload = () => {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
};