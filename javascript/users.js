// Book Club users / from Dydra store
//========================================================================================
//========================================================================================

var user_instance = '';        // book instance

user_Client = new HttpClient();

//========================================================================================

function retrieve_user_info()   // from Dydra
{

    console.log(">> retrieve_user_info (from Dydra) >>");

    var theUrl = "http://qa.nxp.dydra.com/nxp/internal-data/"+"lm-construct-document-overview.jsonld"+"?auth_token="+DYDRA_TOKEN;

    user_Client.get(theUrl, function(response) {

        user_instance = JSON.parse(response);

        console.log(">> retrieve_doc_overview >> (1.2), USER_RESPONSE = ", user_instance);

    });

    var username;
    username = document.getElementById("usernameinput").value;

    console.log("user_id >>", username);
    console.log("user_info >>", user_info);

}

//========================================================================================

function render_user_info()
{
    var username;
    username = document.getElementById("usernameinput").value;

    // run Dydra SPARQL here to retrieve user info

    console.log("user_id >>", username);
    console.log("user_info >>", user_info);

    document.getElementById("user_info_detailed").innerHTML += "<b>username: </b> " + username + "<br>";
    document.getElementById("user_info_detailed").innerHTML += "<b>my genres: </b> " + user_info[2] + "<br>";

    document.getElementById("user_info_detailed").innerHTML += "<b>my books: </b> " + user_info[1] + "<br>";
    document.getElementById("user_info_detailed").innerHTML += "<b>my clubs: </b> " + user_info[3] + "<br>";
}

//========================================================================================
