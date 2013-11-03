// Enable the visual refresh
google.maps.visualRefresh = true;

var mexico_location = new google.maps.LatLng(19.433, -99.133);
var gdl_location = new google.maps.LatLng(20.667, -103.35);
var content_video = '<div id="gdl_video">' +
											'<iframe id="player" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/2K9gjhbT7xs?enablejsapi=1" frameborder="0">' +
											'</iframe>'
										'</div>';
var info_window = new google.maps.InfoWindow({
	content: content_video
});

function init_map() {
	var mapOptions = {
		center: mexico_location,
		zoom: 6,
		mapTypeId: google.maps.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	// guadalajara marker
	var gdl_marker = new google.maps.Marker({
		position: gdl_location,
			map: map,
	});
	google.maps.event.addListener(gdl_marker, 'click', function (){
		info_window.open(map, gdl_marker);
	});
}

google.maps.event.addDomListener(window, 'load', init_map);
