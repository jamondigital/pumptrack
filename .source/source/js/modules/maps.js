var MapsUi = (function() {
	
	var selectors = {
		body:	   'body',
		container: 'js-maps', // id!
	};
	
	var coords = {
		lat: 47.369922,
		lng: 8.535820
	};

	var	iconMarker = [
			'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 38" height="38" width="28" ><defs><style>.cls-1{fill:#fff;}.cls-2{mask:url(#mask);}.cls-3{fill:#cc4e4e;}</style><mask id="mask" x="1" y="0.79" width="25.72" height="36.35" maskUnits="userSpaceOnUse"><g id="mask-2"><polygon id="path-1" class="cls-1" points="1 37.14 1 0.79 26.71 0.79 26.71 37.14 1 37.14"/></g></mask></defs><title>icon-pin</title><g id="Kontakt"><g id="Kontakt_NB-768-1024" data-name="Kontakt NB-768-1024"><g id="Page-1"><g id="Group-3"><g class="cls-2"><path id="Fill-1" class="cls-3" d="M26.72,13.75A12.64,12.64,0,0,0,13.89.8h-.07A12.65,12.65,0,0,0,1,13.75C1,24.16,12.84,36.1,13.82,37.07v.07l0,0,0,0v-.07c1-1,12.82-12.91,12.82-23.32"/></g></g><path id="Fill-4" class="cls-1" d="M20.74,13.83A6.84,6.84,0,1,1,13.89,7a6.86,6.86,0,0,1,6.84,6.88"/></g></g></g></svg>'
	].join('\n');

	var zoom = 17;

	var _initialize = function() {
	    
	    if ($(selectors.body).find('#' + selectors.container).length < 1) {
		    return;
	    }
	    
	    var myLatlng = new google.maps.LatLng(coords.lat,coords.lng);
	    var mapOptions = {
	        center: myLatlng,
	        zoom: zoom,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	
	    var styles = [
	      {
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#212121"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.icon",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#757575"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#212121"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#757575"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.country",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#9e9e9e"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.land_parcel",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.locality",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#bdbdbd"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#757575"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#181818"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#616161"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#1b1b1b"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#2c2c2c"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#8a8a8a"
		      }
		    ]
		  },
		  {
		    "featureType": "road.arterial",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#373737"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#3c3c3c"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway.controlled_access",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#4e4e4e"
		      }
		    ]
		  },
		  {
		    "featureType": "road.local",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#616161"
		      }
		    ]
		  },
		  {
		    "featureType": "transit",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#757575"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#000000"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#3d3d3d"
		      }
		    ]
		  }
	    ];
	    
	    var map = new google.maps.Map(document.getElementById(selectors.container),mapOptions);
	        map.setOptions({styles: styles});
	
	    var marker = new google.maps.Marker({
	        position: myLatlng,
	        map: map,
            icon: {url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(iconMarker)},
	    });
	};
	
	return {
		init: _initialize,
	}
})();

// Initialize
MapsUi.init();



