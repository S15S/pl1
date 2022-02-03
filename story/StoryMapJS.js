function initMap() {

  // The location of London.  This is not centered properly, I'm not sure why nor how to fix it.
  const London = { lat: 51.5072, lng: 0.1276 };
  
  // The map, centered
  // Reference for attempted marker: https://developers.google.com/maps/documentation/javascript/examples/marker-simple
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: London,
  });
  
  // The marker, positioned at London
  new google.maps.Marker({
    position: London,
    map,
    title: "London!",
  });
}

