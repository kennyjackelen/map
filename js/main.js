var gm = google.maps;
var map;
var collections = {};
var citiesBuilt = false;
var flightsBuilt = false;
var ballparksBuilt = false;
var curHoverPath;
var infoWindow;
var infoWindowTimeout;

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
  var active = $('#ballparks_toggle').hasClass('active');
  if ( !active ) {
    showBallparkMarkers();
  } else {
    hideBallparkMarkers();
  }

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

var showInfoWindow = function showInfoWindow( firstCity, secondCity, flightPath, mapEvent ) {
  var numTimes = flightPath.strokeWeight - 1;
  var infoString = "Between " + firstCity + " and " + secondCity + "<br/>" + "Traveled " + numTimes  + " time" + (numTimes != 1?"s":"");
  if ( !infoWindow || curHoverPath !== flightPath ) {
    if (infoWindow) {
      infoWindow.close();
    }
    infoWindow = new gm.InfoWindow;
    infoWindow.open(map);
    infoWindow.setContent(infoString);
    infoWindow.setPosition(mapEvent.latLng);
    curHoverPath = flightPath;
    window.clearTimeout(infoWindowTimeout);
    infoWindowTimeout = window.setTimeout(hideInfoWindow, 2000);
  }
};

var hideInfoWindow = function hideInfoWindow() {
  infoWindow.close();
  infoWindow = null;
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
        strokeWeight: 2
      });
      gm.event.addListener(flightPath, 'mouseover', buildInfoWindowClosure(first, second, flightPath));

      collections.flights[key] = flightPath;
    } else {
      collections.flights[key].strokeWeight++;
    }
  }

  flightsBuilt = true;
};

var buildInfoWindowClosure = function buildInfoWindowClosure(first, second, flightPath) {
  return function(e) {
    showInfoWindow(first, second, flightPath, e);
  };
};

var showFlightPaths = function showFlightPaths() {
  buildFlightPaths();
  for ( var path in collections.flights ) {
    collections.flights[path].setMap(map);
  }
};

var hideFlightPaths = function hideFlightPaths() {
  for ( var path in collections.flights ) {
    collections.flights[path].setMap(null);
  }
};

var buildBallparkMarkers = function buildBallparkMarkers() {
  if ( ballparksBuilt ) {
    return;
  }

  collections.ballparks = [];

  for ( var ballpark in visitedBallparks) {
    var team = visitedBallparks[ballpark];
    var icon = {
      url: 'img/mlb_logos/' + team + '.png',
      anchor: new gm.Point(15,15)
    };
    if ( ballparks.anchors[team] !== undefined ) {
      icon.anchor = ballparks.anchors[team];
    }
    var ballparkMarker = new gm.Marker({
      position: ballparks.locations[team],
      title: ballparks.names[team],
      icon: icon
    });
    
    collections.ballparks.push(ballparkMarker);
  }

  for ( var ballpark in unvisitedBallparks) {
    var team = unvisitedBallparks[ballpark];
    var icon = {
      url: 'img/mlb_logos/faded/' + team + '.png',
      anchor: new gm.Point(15,15)
    };
    if ( ballparks.anchors[team] !== undefined ) {
      icon.anchor = ballparks.anchors[team];
    }
    var ballparkMarker = new gm.Marker({
      position: ballparks.locations[team],
      title: ballparks.names[team],
      icon: icon
    });
    
    collections.ballparks.push(ballparkMarker);
  }

  ballparksBuilt = true;

};

var showBallparkMarkers = function showBallparkMarkers() {
  buildBallparkMarkers();
  for (var ballpark in collections.ballparks) {
    collections.ballparks[ballpark].setMap(map);
  }
};

var hideBallparkMarkers = function hideBallparkMarkers() {
  for (var ballpark in collections.ballparks) {
    collections.ballparks[ballpark].setMap(null);
  }
};


$(document).ready(initialize);
