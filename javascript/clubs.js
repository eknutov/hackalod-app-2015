// Book Clubs related functions
//========================================================================================

var club_instance = '';        // book instance

club_Client = new HttpClient();

//========================================================================================
function render_user_interests()
{

    document.getElementById("club_info_detailed").innerHTML = "you are interested in these topics: <br>";

    for (var i = 0; (i < club_instance.results.bindings.length) && (i < 13); i++)
    {
       //document.getElementById("club_info_detailed").innerHTML += club_instance.results.bindings[i].lab.value + "<br>";

       document.getElementById("club_info_detailed").innerHTML += "<a href=\""+ club_instance.results.bindings[i].o2.value + "\" target=\"_blank\" >" + club_instance.results.bindings[i].lab.value + "<\/a>" + "<br>";
    }
}

//========================================================================================
//========================================================================================
function retrieve_user_clubs()
{
    console.log("function retrieve_user_clubs START");

                                                        // query_books_labels
                                                        // query_concepts
                                                        // query_person_interest
                                                        // query_libraries

    var theUrl = "http://lod.kb.nl/sparql?query=" + query_person_interest + KB_POSTFIX;

    club_Client.get(theUrl, function(response) {

        club_instance = JSON.parse(response);

        console.log(">> kb_instance >> (1.8), USER_CLUBS = ", club_instance);
        render_user_interests();
    });
}



//========================================================================================
//========================================================================================
function render_club_info()            // from Dydra
{
    document.getElementById("club_info_detailed").innerHTML += "<b>club name: </b>" + club_info[0] + "<br>";
    document.getElementById("club_info_detailed").innerHTML += "<b>club topics: </b> " + club_info[1] + "<br>";
    document.getElementById("club_info_detailed").innerHTML += "<b>club location: </b> " + club_info[2] + "<br>";
}


//========================================================================================
//========================================================================================
// STUB
function add_my_club()
{
    console.log("add_my_club >>");
}
