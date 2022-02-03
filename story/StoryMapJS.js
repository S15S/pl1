function initMap() {
  // The map, centered on London
  // Reference for attempted marker: https://developers.google.com/maps/documentation/javascript/examples/marker-simple
  const London = { lat: 51.5072, lng: 0.1276 }
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: London,
  });
  
  new google.maps.Marker ({
    position: London,
    map,
    title: "Welcome to London!"
  });
}
  
 // Below was my attempt at creating a triangle. I used https://developers.google.com/maps/documentation/javascript/examples/polygon-simple for reference
 // when I tried this code it made my index page come up blank.  I wanted to have the polygon connecting 3 well-known museums in London
 // I don't know javascript so unfortunately I don't know why or how I went wrong seeing as though I tried to emulate the reference-- I was planning on chaning the colours and line weights as well.
// const Museumcoords = [
   // { lat: 51.4967, lng: 0.1764 },
    //{ lat: 51.4966, lng: 0.1722 },
    //{ lat: 51.5194, lng: 0.1270 },
    //{ lat: 51.4967, lng: 0.1764 },
  //];
  //const TriMuseums = new google.maps.Polygon({
    //paths: Museumcoords,
    //strokeColor: "#FF0000",
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: "#FF0000",
    //fillOpacity: 0.35,
  //});

  //TriMuseums.setMap(map);
/}

