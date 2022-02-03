function initMap() {
  // The map, centered on London
  // Reference for attempted marker: https://developers.google.com/maps/documentation/javascript/examples/marker-simple
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 51.5072, lng: 0.1276 },
  });
  
const Museumcoords = [
    { lat: 51.4967, lng: 0.1764 },
    { lat: 51.4966, lng: 0.1722 },
    { lat: 51.5194, lng: 0.1270 },
    { lat: 51.4967, lng: 0.1764 },
  ];
  const TriMuseums = new google.maps.Polygon({
    paths: Museumcoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  TriMuseums.setMap(map);
}

