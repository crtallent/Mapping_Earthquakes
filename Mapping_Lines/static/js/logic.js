// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
    [37.615223, -122.389977],
    [30.18999924, -97.6686639],
    [38.74165, -90.3657],
    [43.677717, -79.624819],
    [40.641766, -73.780968]
  ];

// Create polyline using the line coordinates and make line yellow.
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: .5,
    dashArray: "20,15",
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});   

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


                                                                                                                                                                                                                                                              