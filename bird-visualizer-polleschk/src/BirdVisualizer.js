// Class: SWE2511 - Bird Visualizer
// Name: Kaiden Pollesch
// Class Section: 111

const eBirdAPI = "https://api.ebird.org/v2/data/obs/geo/recent";
const eBirdKey = "o30em6raenc8";
fetch("https://api.ebird.org/v2/data/obs/geo/recent?lat=42.86111846270002&lng=-87.85354614257812", {
    method: 'GET',
    headers: {
        'X-eBirdApiToken': eBirdKey
    },
});

/**
 * displayError - Displays an error message
 * @param message - the message to display
 */
const displayError = (message) => {
    const errorMessage = document.getElementById("errorDisplay");
    errorMessage.innerText = message;
    errorMessage.classList.remove("visually-hidden");
}

/**
 * clearError - clears displaying of an error message
 */
const clearError = () => {
    const errorMessage = document.getElementById("errorDisplay");
    errorMessage.classList.add("visually-hidden");
    errorMessage.innerText = "";
}

/**
 * updateBirdSightings - Fetches bird sightings from the eBird API and updates the map and table
 */
const updateBirdSightings = async () => {
 const center = map.getCenter();
 const radius = 25;

 const lat = parseFloat(center.lat);
 const lng = parseFloat(center.lng);

 const url = `${eBirdAPI}?lat=${lat}&lng=${lng}&dist=${radius}&key=${eBirdKey}`;

 try {
     const response = await fetch(url);
     if (response.status !== 200) {
         throw new Error(`Error: ${response.status} ${response.statusText}`);
     }
     const data = await response.json();
     clearError();
     updateMap(data);
     updateTable(data);
 } catch(error) {
     displayError(error.message);
     clearMap();
     clearTable();
 }
}

/**
 * updateMap - Updates the map with bird sighting markers
 * @param data - Array of bird sighting data
 */
const updateMap = (data) => {
   //Remove the old markers
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    //Add the new markers
    data.forEach(sighting => {
        const marker = L.marker([sighting.lat, sighting.lng]).addTo(map);
        marker.bindPopup(`
        <b>${sighting.comName}</b><br>
        Scientific Name: <i>${sighting.sciName}</i><br>
        Location: ${sighting.location}<br>
        Count: ${sighting.howMany}<br>`)
    })
}

/**
 * updateTable - Updates the table with bird sighting data
 * @param data - Array of bird sighting data
 */
const updateTable = (data) => {
    const tableDiv = document.getElementById("table");
    const dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Common Name');
    dataTable.addColumn('string', 'Scientific Name');
    dataTable.addColumn('string', 'Location');
    dataTable.addColumn('number', 'Count');

    //Get the bounds of the current mapview
    const bounds = map.getBounds();

    const filteredData = data.filter(sighting => {
        return bounds.contains([sighting.lat, sighting.lng]);
    });

    filteredData.forEach(sighting => {
        dataTable.addRow([sighting.comName, sighting.sciName, sighting.locName, sighting.howMany]);
    })

    const table = new google.visualization.Table(tableDiv);
    table.draw(dataTable, {showRowNumber: true, width: '100%', height: '100%'});

    google.visualization.events.addListener(table, 'select', () => {
        const selectedItem = table.getSelection()[0];
        if (selectedItem) {
            const sighting = filteredData[selectedItem.row];
            map.panTo(new L.latLng(sighting.lat, sighting.lng))
        }
    })
}

/**
 * clearMap - Clears all markers from the map
 */
const clearMap = () => {
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });
}

/**
 * clearTable - Clears all rows from the table
 */
const clearTable = () => {
    const tableDiv = document.getElementById("table");
    tableDiv.innerHTML = "";
}

/**
 * window.onload - initializes a bird visualizer when the window loads
 */
window.onload = () => {

    // Initialize the map
    const startPoint = [43.044240, -87.906446]; // GPS lat/long location of MSOE athletic field
    window.map = L.map('map').setView(startPoint, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    updateBirdSightings();

    map.on('moveend', updateBirdSightings);
    map.on('zoomend', updateBirdSightings);

    google.charts.load('current', {packages: ['table']});
    google.charts.setOnLoadCallBack(updateBirdSightings);
}