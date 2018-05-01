const mapboxgl = require('mapbox-gl');
const marker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1Ijoiai1odXN0IiwiYSI6ImNqZ28zODd0YTB3dzIzMHFzNzVoajFjYmgifQ.Y9SYxW8-9OMWbHUVtdEfeA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement('div');
// markerDomEl.style.width = '32px';
// markerDomEl.style.height = '39px';
// markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
// new mapboxgl.Marker(markerDomEl).setLngLat([-87.6354, 41.8885]).addTo(map);

console.log('marker', marker);
marker('hotel', [-87.6354, 41.8885]).addTo(map);
