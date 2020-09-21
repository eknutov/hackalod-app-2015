// google maps snippet in the app
//=======================================================================================
//=======================================================================================

var map;
var myCenter = new google.maps.LatLng(GEO_lat,GEO_lon);            // initial central location for AMS
var geocoder = new google.maps.Geocoder();                      // reverse geocoder for determining location names



// show my libraries for the user
function show_my_libraries()
{

    document.getElementById("map_info").innerHTML += "<br>";

    console.log("function >> show_my_libraries, CURRENT USER CITY", NL_libraries);
    console.log("function >> show_my_libraries, CURRENT USER CITY", current_city);
    for (var j = 0; j < NL_user.length; j++)
    {

        if (NL_user[j][1] == "http://xmlns.com/foaf/0.1/based_near")
        {
            for (var i = 0; i < NL_libraries.length; i++)
            {
               if (NL_user[j][0] == NL_libraries[i][0])
                {
                 document.getElementById("map_info").innerHTML += "Your local library is: " ;
                 document.getElementById("map_info").innerHTML += NL_libraries[i][1] ;
                }
            }


        }
    }
}


// update map related info
//=================================================================================
//=================================================================================
function update_club_map_info()
{
    console.log("function >> update_club_map_info");

    document.getElementById("map_info").innerHTML += "<b>nearest library: </b>" + "AAA" + "<br>";
    document.getElementById("map_info").innerHTML += "<b>related book clubs are: </b>" + "BBB" + "<br>";

}


function update_map_libraries()
{
    console.log("function >> update_map_libraries");
    var city_element = "";
    var uppercase_city = "";
    var int_list = 1;


    document.getElementById("map_info").innerHTML = "Consider visiting your nearby libraries: <br>";

    // lookup libraries from the library list
    //===================================================
    // NL_libraries (url, name, location)

    uppercase_city = current_city.toUpperCase();

    for (var i = 1; i < NL_libraries.length; i++)
        {
            //console.log("update_map_libraries >> CITY ELEMENT", NL_libraries[i][2]);
            city_element = NL_libraries[i][2];
            //NL_libraries[i].[2]
            if (city_element == uppercase_city) // add info about the library if fount in the retrieved library list
                {
                    document.getElementById("map_info").innerHTML += int_list +") " + "<a href=\""+ NL_libraries[i][0] + "\" target=\"_blank\" >" + NL_libraries[i][1] + "<\/a>" + "<br>";
                    int_list++;

                }

        }
}

//=================================================================================
// init Netherlands map
//=================================================================================
function initialize()
{

    // initialize map properties
    var mapProp = {
      center:myCenter,
      zoom:GEO_init_zoom,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    // new map in googleMap HTML element
    map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    google.maps.event.addListener(map, 'click', function(event)
    {
      placeMarker(event.latLng);
    });
}


//=================================================================================
// place pin on the map and display corresponding location name
//=================================================================================
function placeMarker(location) {
    var marker = new google.maps.Marker({
      position: location,
      map: map,
    });

    // get location mame by coordinates

    //Geocoder gcd = new Geocoder(context, Locale.getDefault());
    var latlng = new google.maps.LatLng(location.lat(),location.lng());

    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {                  //Check result 0
        var result = results[0];
        //look for locality tag and administrative_area_level_1
        var city = "";
        var state = "";
        for(var i=0, len=result.address_components.length; i<len; i++) {
            var ac = result.address_components[i];
            if(ac.types.indexOf("locality") >= 0) city = ac.long_name;
            if(ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.long_name;
        }

        if(city != '' && state != '') {

            // save global values for city and region
            current_city = city;
            current_region = state;

            // google info window popup
            var infowindow = new google.maps.InfoWindow(
            {
            // write content of the information window on putting pinpoint on the map
            // content: 'Nearest location: '+ city +'   '+state +'<br>Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
            content: 'Location: '+ city +', '+state
            });
            //=====================================================================
            // call functions to show search results from solr


            //=====================================================================
            // open and show infowindow on map
            update_map_libraries();
            infowindow.open(map,marker);
        }

        //====== system log ====================================================
        //only report if we got real locations System log
        if(city != '' && state != '') {
            //$("#result_location").html("nearest city is: "+city+", region: "+state+"!");              // local variables
            $("#result_location").html("nearest city: "+current_city+"<br> region: "+current_region);   // global variables
        }
    }

});   // end geocode function


  //=================================================================================
  //non-integrated version of geoEncoder
  //result = gcd.getFromLocation(location.lat(), location.lng(), 1);
  //if (addresses.size() > 0)
  //      System.out.println("location name is: ", result.get(0).getLocality());
  //=================================================================================


}


// ============= INIT (script on page load) =======================================
//=================================================================================
//=================================================================================
// initialize google map and add pins listeners

google.maps.event.addDomListener(window, 'load', initialize);
