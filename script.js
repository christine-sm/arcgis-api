console.log("I'm connected");

require(["esri/map", "dojo/domReady!"], function(Map) {
  map = new Map("mapDiv", {
    center: [-77.0884068, 38.8908447],
    zoom: 17,
    basemap: "streets"
  });
});
