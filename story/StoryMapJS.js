function initMap() {

  // The location of London.  This is not centered properly, I'm not sure why nor how to fix it.
  const London = { lat: 51.5072, lng: 0.1276 };
  
  // The map, centered
  // Reference for attempted marker: https://developers.google.com/maps/documentation/javascript/examples/marker-simple
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: London,
  });
  
  // The marker, positioned at London
  new google.maps.Marker({
    position: London,
    map,
    title: "London!",
  });
}
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

