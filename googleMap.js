var App = (function (window, document, undefined) {
	'use strict';

	// Only request the API if this element exists
	if ($('#googleMap').length) {

		// Get latitude and longitude from data attributes
		var map = $('#googleMap'),
		lat = map.data('lat'),
		lng = map.data('lng'),

		// Map init, configuration
		mapInit = function () {
			var mapCenter = new google.maps.LatLng(lat, lng),
			mapOptions = {
				center: mapCenter,
				zoom: 17,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				// scrollwheel: false
			},
			map = new google.maps.Map(document.getElementById("googleMap"), mapOptions),
			marker = new google.maps.Marker({
				position: mapCenter,
				title: "Title",
				map: map
			});
		},

		// Include Google Maps API
		includeAPI = function () {
			var js,
			fjs = document.getElementsByTagName('script')[0];

			if (!document.getElementById('gmap-api')) {
				js = document.createElement('script');
				js.id = 'gmap-api';
				js.setAttribute('async', '');
				js.src = "http://maps.google.com/maps/api/js?sensor=false&callback=App.mapInit";
				fjs.parentNode.insertBefore(js, fjs);
			}
		};

		includeAPI();
	};

	// Make mapInit() public so we can pass it to
	// the Google Maps API callback param
	return {
		mapInit: mapInit
	};
})(window, document);
