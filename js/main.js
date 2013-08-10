var gm = google.maps;
var map;
var collections = {};
var citiesBuilt = false;
var flightsBuilt = false;
var ballparksBuilt = false;

var initializeMap = function initializeMap() {
  google.maps.visualRefresh = true;
  var mapOptions = {
    zoom: 4,
    center: new gm.LatLng(39, -92),
    mapTypeId: gm.MapTypeId.ROADMAP
  };
  var mapElement = $('#map').get(0);
  map = new gm.Map(mapElement, mapOptions);
};

var toggleCities = function toggleCities() {
  var active = $('#cities_toggle').hasClass('active');
  if ( !active ) {
    showCityMarkers();
  } else {
    hideCityMarkers();
  }
};

var toggleFlights = function toggleFlights() {
  var active = $('#flights_toggle').hasClass('active');
  if ( !active ) {
    showFlightPaths();
  } else {
    hideFlightPaths();
  }
};

var toggleBallparks = function toggleBallparks() {

};

var bindFilters = function bindFilters() {
  $('#cities_toggle').click(toggleCities);
  $('#flights_toggle').click(toggleFlights);
  $('#ballparks_toggle').click(toggleBallparks);
};

var initialize = function initialize() {
  initializeMap();
  bindFilters();
};

var buildCityMarkers = function buildCityMarkers() {

};

var showCityMarkers = function showCityMarkers() {

};

var hideCityMarkers = function hideCityMarkers() {

};

var buildFlightPaths = function buildFlightPaths() {
  if ( flightsBuilt ) {
    return;
  }

  collections.flights = {};

  for ( var flight in myFlights) {
    var first, second;
    var src = myFlights[flight].src;
    var dest = myFlights[flight].dest;
    if ( src < dest ) {
      first = src;
      second = dest;
    } else {
      first = dest;
      second = src;
    }
    var key = first + second;
    if ( collections.flights[key] === undefined ) {
      var coordinates = [ iata[first], iata[second] ];
      var flightPath = new gm.Polyline({
        path: coordinates,
        strokeColor: '#003366',
        geodesic: true,
        strokeOpacity: 0.75,
        strokeWeight: 1
      });
      collections.flights[key] = flightPath;
    } else {
      collections.flights[key].strokeWeight++;
    }
  }

  flightsBuilt = true;
};

var showFlightPaths = function showFlightPaths() {
  buildFlightPaths();
  for ( var path in collections.flights ) {
    collections.flights[path].setMap(map);
  }
};

var hideFlightPaths = function hideFlightPaths() {
  buildFlightPaths();
  for ( var path in collections.flights ) {
    collections.flights[path].setMap(null);
  }
};

var buildBallparkMarkers = function buildBallparkMarkers() {

};

var showBallparkMarkers = function showBallparkMarkers() {

};

var hideBallparkMarkers = function hideBallparkMarkers() {

};


$(document).ready(initialize);
