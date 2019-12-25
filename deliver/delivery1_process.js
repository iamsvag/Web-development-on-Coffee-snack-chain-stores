$('document').ready(function()
{
  $('.backbtn').click(function(){
        window.location.replace('delivery.html');
    });
		var myVar = setInterval(new_order, 5000);
	
function new_order() {
$.post('delivery4.php', function(data) {
  $('.magazi').html(data);
});
	var jqxhr = $.post('delivery1.php', function(data) {
                    customer_address=data;
                });
          var markers = [];
          var options = {
              zoom:12,
              center:{lat:38.246639,lng:21.734573}
          }
        
        var mapa = new google.maps.Map(document.getElementById('mapdiv'), options);
        var geocoder = new google.maps.Geocoder;
          var geocodern = new google.maps.Geocoder();
          
          var infowindow = new google.maps.InfoWindow;
          jqxhr.done(function(){
            geocodeAddressn(geocodern, mapa);
          });
        
      
    var sem=0;

          var syntetagmenes;
          function geocodeAddressn(geocodern, resultsMap) {
        var addresss = customer_address;
        geocodern.geocode({'address': addresss}, function(results, status) {
          if (status === 'OK') {
              resultsMap.setCenter(results[0].geometry.location);
              syntetagmenes = results[0].geometry.location;
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
              markers.push(marker);
              infowindow.setContent(results[0].formatted_address);
              catched_address = results[0].formatted_address;
              infowindow.open(mapa, marker);
              clearTimeout(myVar);
          } else {
          }
        });
      }
  }
      
  
   $('.delivered').click(function(){
   		var jqxh = $.post('delivered.php', function(data) {
            if (data==1){
                myVar = setInterval(new_order, 5000); 
            }                
        });
   });

});