// Class: SWE2511 - Bird Visualizer
// Name: Kaiden Pollesch
// Class Section: 111

window.onload = () => {

    let map = L.map('map').setView([43.035, -87.90], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // let icon1 = L.icon({
    //     iconUrl: 'goHugo-gopher-hero.png',
    //     shadowUrl: 'leaf-shadow.png',
    //
    //     iconSize:     [38, 95], // size of the icon
    //     shadowSize:   [50, 64], // size of the shadow
    //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //     shadowAnchor: [4, 62],  // the same for the shadow
    //     popupAnchor:  [-3, -76], // point from which the popup should open relative to the iconAnchor
    // });

    // L.marker([51.5, -0.09], {icon: icon1}).addTo(map);

    let icon = L.Icon.extend({
        options: {
            shadowUrl: 'leaf-shadow.png',
            iconSize:     [100, 100],
            shadowSize:   [0, 0],
            iconAnchor:   [22, 94],
            shadowAnchor: [0, 62],
            popupAnchor:  [-3, -76]
        }
    });

    let icon1 = new icon({iconUrl: 'goHugo-gopher-hero.png'}),
        icon2 = new icon({iconUrl: 'gopher-side_color.png'}),
        icon3 = new icon({iconUrl: 'flying_bird.png'});

    L.icon = function (options) {
        return new L.Icon(options);
    };

    L.marker([43.035, -87.90], {icon: icon1}).addTo(map).bindPopup("I am a goHugo Gopher with a Cape!");
    L.marker([43.041042, -87.906847], {icon: icon2}).addTo(map).bindPopup("I am a Gopher looking into the sun.");
    L.marker([43.029624, -87.926073], {icon: icon3}).addTo(map).bindPopup("I am bird.");
}