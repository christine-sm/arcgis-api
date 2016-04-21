var map;
require([
    "dojo/dom",
    "esri/Color",
    "dojo/keys",
    "dojo/parser",

    "esri/config",
    "esri/sniff",
    "esri/map",
    "esri/SnappingManager",
    "esri/dijit/Measurement",
    "esri/layers/FeatureLayer",
    "esri/renderers/SimpleRenderer",
    "esri/tasks/GeometryService",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleFillSymbol",

    "esri/dijit/Scalebar",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "dijit/TitlePane",
    "dijit/form/CheckBox",
    "dojo/domReady!"
  ], function(
    dom, Color, keys, parser,
    esriConfig, has, Map, SnappingManager, Measurement, FeatureLayer, SimpleRenderer, GeometryService, SimpleLineSymbol, SimpleFillSymbol
  ) {
    parser.parse();
    //This sample may require a proxy page to handle communications with the ArcGIS Server services. You will need to
    //replace the url below with the location of a proxy on your machine. See the 'Using the proxy page' help topic
    //for details on setting up a proxy page.
    esriConfig.defaults.io.proxyUrl = "/proxy/";
    esriConfig.defaults.io.alwaysUseProxy = false;

    //This service is for development and testing purposes only. We recommend that you create your own geometry service for use within your applications
    esriConfig.defaults.geometryService = new GeometryService("https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");

    map = new Map("map", {
      basemap: "streets",
      center: [-77.0884068, 38.8908447],
      zoom: 16
    });

    var sfs = new SimpleFillSymbol(
      "solid",
      new SimpleLineSymbol("solid", new Color([195, 176, 23]), 2),
      null
    );

    var parcelsLayer = new FeatureLayer("https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Louisville/LOJIC_LandRecords_Louisville/MapServer/0", {
      mode: FeatureLayer.MODE_ONDEMAND,
      outFields: ["*"]
    });
    parcelsLayer.setRenderer(new SimpleRenderer(sfs));
    map.addLayers([parcelsLayer]);

    //dojo.keys.copyKey maps to CTRL on windows and Cmd on Mac., but has wrong code for Chrome on Mac
    var snapManager = map.enableSnapping({
      snapKey: has("mac") ? keys.META : keys.CTRL
    });
    var layerInfos = [{
      layer: parcelsLayer
    }];
    snapManager.setLayerInfos(layerInfos);

    var measurement = new Measurement({
      map: map
    }, dom.byId("measurementDiv"));
    measurement.startup();
  });

  // console.log("I'm connected");
  // var map;
  // require([
  //   "esri/map",
  //   "esri/arcgis/utils",
  //   "dojo/domReady!"], function(Map, arcgisUtils) {
  //     arcgisUtils.createMap("fe8a35a42b57430793313245886baf21", "mapDiv").then(function (response) {
  //       map = response.map;
  //   });
  // });
