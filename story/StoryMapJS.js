function initMap() {

  // The location of Hampton Court Palace
  const London = { lat: 51.5072, lng: 0.1276 };
  // The map, centered
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 51.5072, lng: 0.1276 },
  });
  // The marker, positioned at London
  const marker = new google.maps.Marker({
    position: London, GB,
    map: map,
  });
}

