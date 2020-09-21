// SPARQL routines

//=======================================================================================
// Dydra repository related routines
//=======================================================================================
var mySession = new Dydra.Session({token: DYDRA_TOKEN});
var myRepository = mySession.open(DYDRA_ACCOUNT + "/" + DYDRA_REP);


// temp test query
var query1 = "SELECT * WHERE {?s ?p ?o} LIMIT 10";
var query2 = "SELECT * WHERE {?s ?p ?o} LIMIT 20";

$('.query').text(query1);

var data;  // query response data


var dydra_instance = '';        // book instance

dy_Client = new HttpClient();


// display user info
//=======================================================================================
//=======================================================================================
function show_user_info(user_data)
{
    console.log("show_user_info =>> DATA", user_data);

    document.getElementById("user_info_detailed").innerHTML = "";

    //=================================================================
        for (var i = 0; i < user_data.results.bindings.length; i++)
        {
            //NL_libraries.push(["url2","name2","location2"]);
            //NL_libraries.push(0);

            NL_user.push([user_data.results.bindings[i].o.value, user_data.results.bindings[i].p.value, user_data.results.bindings[i].s.value]);

        }


    // check the user array

    document.getElementById("user_info_detailed").innerHTML += "interested in: " + "<br>";
    for (var j = 0; j < NL_user.length; j++)
    {

        if (NL_user[j][1] == "http://xmlns.com/foaf/0.1/interest")
        {
            document.getElementById("user_info_detailed").innerHTML += "<a href=\""+ NL_user[j][0] + "\" target=\"_blank\" >" + NL_user[j][0] + "<\/a>" + "<br>";
        //"<a href=\""+ NL_user[j][0] + "\" target=\"_blank\" >" + NL_user[j][0] + "<\/a>" + "<br>"
        }

        //document.getElementById("user_info_detailed").innerHTML += "Name : <b>" + NL_user[j][0] + "</b><br>";

        if ((NL_user[j][1] == "http://xmlns.com/foaf/0.1/name") && (NL_user[j][2].substring(0,40) == "http://dydra.com/eknutov/hackalod/person"))    // show only the persons name
        {
            console.log("show_user_info =>> DATA -> IF CASE");
            document.getElementById("user_info_detailed").innerHTML += "Name : <b>" + NL_user[j][0] + "</b><br>";
        }
    }
}






//=======================================================================================
//=======================================================================================
function retrieve_users_from_Dydra()
{

    console.log("function retrieve_from_Dydra USERS");
//=======================================================================================
    myRepository.query(query_DYDRA_test, {
      success: function(data) {

        //console.log("USERS SPARQL query succeeded and returned:");
        //console.log("DATA output", data);

        $('.response').text(JSON.stringify(data, undefined, 2));

        console.log("DATA output AAA", data);
        show_user_info(data);

      },
      failure: function(xhr) {
        $('.response').text(JSON.stringify(xhr, undefined, 2));
      }
    });
}
//=======================================================================================
//=======================================================================================
function retrieve_clubs_from_Dydra()
{


 myRepository.query(query2, {
    success: function(data) {

    // assign the retrieved CLUBS here

    $('.response').text(JSON.stringify(data, undefined, 2));
    },
     failure: function(xhr) {
     $('.response').text(JSON.stringify(xhr, undefined, 2));
    }
    });


}


//=======================================================================================
//=======================================================================================
function update_query_Dydra()
{
      $('.query_DYDRA_add_book').text(query_DYDRA_add_book);

       console.log("adding query", query_DYDRA_add_book );

      myRepository.update(query_DYDRA_add_book, {

        success: function(data) {
          $('.response').text(JSON.stringify(data, undefined, 2));
        },
        failure: function(xhr) {
          $('.response').text(JSON.stringify(xhr, undefined, 2));
        }
      });
}


//=======================================================================================
//=======================================================================================

// STUBS
function run_sparql()
{
    // SPARQL comes here
}



function render_book_list()
{
    // render table
}
