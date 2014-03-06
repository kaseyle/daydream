var initialLocation;
var map;
var service;
var infowindow;

function initialize() {
  var mapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 15
    };
  map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);

  // Try W3C Geolocation (Preferred)
  if(navigator.geolocation) {
    console.log("GEOLOCATION!");
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
      initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      map.setCenter(initialLocation);
      search(initialLocation);
    }, function() {
      handleNoGeolocation(browserSupportFlag);
    });
  }
  // Browser doesn't support Geolocation
  else {
    browserSupportFlag = false;
    handleNoGeolocation(browserSupportFlag);
  }
}

function search(latlong) {
  var request = {
    location: latlong,
    radius: '100',
    query: ['coffee']
  };

  infowindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback)
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag == true) {
    alert("Geolocation service failed.");
    initialLocation = newyork;
  } else {
    alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
    initialLocation = siberia;
  }
  map.setCenter(initialLocation);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
      if (i >= 5) {
        break;
      }
    }
  } else {
    console.log("Nada..." + status);
  }
  var marker = new google.maps.Marker({
    map: map,
    position: initialLocation,
    icon: "https://chart.googleapis.com/chart?chst=d_map_xpin_icon&chld=pin%7Chome%7C00FFFF%7CFF0000"
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent("Current Location");
    infowindow.open(map, this);
    infowindow.css
  });
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
    infowindow.css
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

var js = document.createElement("script");

js.type = "text/javascript";
js.src = "./basic.js";

addBindings('#map-canvas');
