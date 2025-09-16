// Class: SWE2511 - Bird Visualizer
// Name: Kaiden Pollesch
// Class Section: 111

window.onload = () => {

    let map = L.map('map').setView([51.505, -0.09], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let marker = L.marker(
        [51.5, -0.09],
        {color: 'black'
    //         cannot change color of marker
    }).addTo(map);

    let circle = L.circle([51.508, -0.11], {
        color: 'yellow',
        fillColor: 'mustard',
        fillOpacity: 0.25,
        radius: 5000
    }).addTo(map);

    let polygon = L.polygon([
        [51.509, -0.08],
        [51.6, -0.06],
        [51.51, -0.1]
    ], {color: 'violet'
    }).addTo(map);

    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");

    // let popup = L.popup()
    //     .setLatLng([51.513, -0.09])
    //     .setContent("I am a standalone popup.")
    //     .openOn(map);
    //
    // function onMapClick(e) {
    //     alert("You clicked the map at " + e.latlng);
    // }
    //
    // map.on('click', onMapClick);

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("This point is  " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);

}