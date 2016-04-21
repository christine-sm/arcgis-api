console.log("I'm connected");
var map;
require([
  "esri/map",
  "esri/arcgis/utils",
  "dojo/domReady!"], function(Map, arcgisUtils) {
    arcgisUtils.createMap("fe8a35a42b57430793313245886baf21", "mapDiv").then(function (response) {
      map = response.map;
  });
});
