// Class: SWE2511 - Coin Flip Charter
// Name: Kaiden Pollesch
// Class Section: 111

/**
 * chartSetup
 * Set up the Google chart properties and other page events
 */
const chartSetup = () => {

    // Initialize the Google chart package
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(createDefaultDisplay);

    // Set up the button handler to call a function that updates the page
    document.getElementById("update").onclick = updateDisplay;
};

/**
 * createDefaultDisplay
 * Create the "default" page - display all data with no filters
 */
const createDefaultDisplay = () => {
    // Convert the provided results object elements to the data format supported by Google charters
    const chartData = new google.visualization.DataTable();
    chartData.addColumn('string', 'Index');
    chartData.addColumn('number', 'Execution Time')
    // Iterate through the result set, insert the appropriate values into the "chartData" object
    results.forEach(((result, index) => {
        chartData.addRow([(index + 1).toString(), result.time]);
    }));

    // Display the chart

    drawChart(chartData);
    // Initialize the HTML of the table
    const tableBody = document.getElementById('tableBody');
    // tableBody.innerHTML = '';
    results.forEach((result, index) => {
        const row = `<tr>
                                <td>${index + 1}</td>
                                <td>${result.id}</td>
                                <td>${result.coins}</td>
                                <td>${result.flips}</td>
                                <td>${result.browser}</td>
                                <td>${result.time}</td>
                            </tr>`;
        tableBody.innerHTML += row;
    })
    // Iterate through the result set, adding table rows and table data
};

/**
 * drawChart
 * Display the given chartData in the Google chart
 */
const drawChart = (chartData) => {
    const options = {
        title: 'Coin Flipper Execution Time',
        width: 1200,
        height: 400,
        legend: { position: 'top' },
        hAxis: {
            title: 'Number of Flips',
            gridlines: {color: 'transparent'},
            minValue: 1,
            slantedTextAngle: 45,
            showTextEvery: 1,
            textPosition: 'out'
        },
        vAxis: {
            title: 'Execution Time (ms)',
            textPosition: 'out',
            minValue: 1,
        },
        chartArea: {left: 75, top: 50, width: '75%', height: 300},
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(chartData, options)
};

// document.getElementById('update').onclick = updateDisplay;

const updateDisplay = () => {
    // Determine which radio button is currently selected.
    const selectedFilter = document.querySelector('input[type="radio"]:checked').id;
    const filterValue = document.getElementById('filter').value.trim();
    let filteredData = results;

    if (filterValue !== "") {
        if (selectedFilter === "id1") {
            filteredData = results.filter(result => result.id.includes(filterValue));
        } else if (selectedFilter === "coins1") {
            filteredData = results.filter(result => result.coins === parseInt(filterValue, 10));
        } else if (selectedFilter === "flips1") {
            filteredData = results.filter(result => result.flips === parseInt(filterValue, 10));
        } else if (selectedFilter === "browser1") {
            filteredData = results.filter(result => result.browser.includes(filterValue));
        }
    } else {
        filteredData = results;
    }

    const chartData = new google.visualization.DataTable();
    chartData.addColumn('string', 'Index');
    chartData.addColumn('number', 'Execution Time');

    // Retrieve the filter expression to determine what rows of the result set to show and hide.
    filteredData.forEach((result) => {
        chartData.addRow([result.originalIndex.toString(), result.time]);
    })

    // Iterate through the results object elements filtering based on filter value and type
    // Create a new "filteredData" object to be used by Google charts based on the filter value
    //    i.e. repopulate it with only the data that the filter does not remove

    // Draw the chart with the new data
    drawChart(chartData);

    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    filteredData.forEach((result) => {
        const row = `
            <td>${result.originalIndex}</td> 
            <td>${result.id}</td> 
            <td>${result.coins}</td> 
            <td>${result.flips}</td> 
            <td>${result.browser}</td>
            <td>${result.time}</td>`;

        tableBody.innerHTML += row;
    })
    // Iterate through the results object elements filtering based on filter value and type
    // When done iterating, set the HTML of the table
    // Data must not be removed from the result set - The 'filtered' data is hidden in the table
    // Thus, the indices of the subset will match those of the original data set.
    //
    // HINT: to show a table row element, set its style.display property to 'table-row'
    // HINT: to hide an element, set its style.display property to 'none'
};

window.onload = () => {
    chartSetup();
};
