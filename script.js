require([
  "esri/map",
  "esri/arcgis/utils",
  "esri/dijit/Directions",
  "dojo/parser",
  "dijit/layout/BorderContainer", "dijit/layout/ContentPane",
  "dojo/domReady!"
], function(Map, arcgisUtils, Directions, parser) {
    parser.parse();
    var map;
    arcgisUtils.createMap("fe8a35a42b57430793313245886baf21", "map").then(function (response) {
      map = response.map;
      var directions = new Directions({
        map: map
      }, "dir");
      directions.startup();
    });
});
