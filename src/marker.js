const mapboxgl = require('mapbox-gl');

function buildMarker(type, coords) {
    console.log('map', map);
  let markerURL;
  if (type === 'hotel') {
    markerURL = 'http://i.imgur.com/D9574Cu.png';
  } else if (type === 'activity') {
    markerURL = 'http://i.imgur.com/WbMOfMl.png';
  } else if (type === 'restaurant') {
    markerURL = 'http://i.imgur.com/cqR6pUI.png';
  }
  const markerDomEl = document.createElement('div');
//   markerDomEl.style.backgroundSize = 'contain';
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${markerURL})`;
  new mapboxgl.Marker(markerDomEl).setLngLat(coords);
//   console.log(newmarker);
// .addTo(map)
}

module.exports = buildMarker;
