var gm = google.maps;
var map;

var initialize = function initialize() {
  var mapOptions = {
    zoom: 4,
    center: new gm.LatLng(39, -92),
    mapTypeId: gm.MapTypeId.ROADMAP
  };
  var mapElement = $('#map').get(0);
  map = new gm.Map(mapElement, mapOptions);
};

$(document).ready(initialize);
