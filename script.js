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

$(document).ready(function () {
  var info = {
    modal: $("#modal"),
    button: $("#modal-button"),
    close: $("#close")
  };

  info.button.on("click", function(){
    info.modal.css("display", "block");
  });

  info.close.on("click", function(){
    info.modal.css("display", "none");
  });

  $(document).keyup(function(e){
    if (e.keyCode === 27){
      info.modal.css("display", "none");
    }
  });
});
