// Class: SWE2511 - Charting
// Names: Matthew Schulz & Kaiden Pollesch
// Class Section: 111

const drawChart = () => {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Task');
    data.addColumn('number', 'Hours per Week');

    data.addRow(['Classes', 18]);
    data.addRow(['Work', 20]);
    data.addRow(['Commuting', 3]);
    data.addRow(['Meetings', 5]);
    data.addRow(['Homework', 42]);
    data.addRow(['Sleeping', 40]);
    data.addRow(['Downtime', 21]);

    const options = {
        title: 'Average Hour per Week Distribution for Matthew',
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