function initMap() {

  // The location of Hampton Court Palace
  const Hampton = { lat: 51.4036, lng: 0.3378 };
  // The map, centered
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 51.4036, lng: 0.3378 },
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: Hampton,
    map: map,
  });
}

