/*
 *  This javascript is for the Google maps to be displayed on the contact page.
 */

var map; 

function initialize() {
    var LatLngPosition = new google.maps.LatLng(39.704556, -105.084533);
    var mapCanvas = document.getElementById('map');
    
    var options = {
        center: LatLngPosition,
        zoom: 17,
        zoomControl: true,
        infoWindow: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(mapCanvas, options);

    var contentInfo = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h3 id="firstHeading" class="firstHeading">ICAST</h3>' +
      '<div id="bodyContent">' +
      '<address>' +
      '</address>' +
      '777 S. Wadsworth Blvd. #4-205<br/> Lakewood, CO 80226 <br/> 866-590-4377' +
      '</div>' +
      '</div>';

    var infoWindow = new google.maps.InfoWindow({
        content: contentInfo
    });

    var marker = new google.maps.Marker(
        {
            position: LatLngPosition,
            map: map,
            title: "Click on ICAST"
        }
    );
    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    });
}

window.onload = initialize;