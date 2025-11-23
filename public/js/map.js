let map, marker;

// Minimal neutral view (required to initialize Leaflet)
map = L.map("map").setView([0, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);

// Fetch coordinates from location name
fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${place}`)
  .then((res) => res.json())
  .then((data) => {
    const lat = data[0].lat;
    const lon = data[0].lon;

    // Center map
    map.setView([lat, lon], 12);

    // Add marker
    marker = L.marker([lat, lon])
      .addTo(map)
      .bindPopup("Exact Location will be provided after booking")
      .Popup();
  });
