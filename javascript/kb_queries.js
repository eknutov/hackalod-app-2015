// tryouts with KB enpoint
// To be removed

var kb_instance = '';        // book instance

kb_Client = new HttpClient();

KB_POSTFIX = "&format=application%2Fsparql-results%2Bjson&timeout=180000&debug=on";


function retrieve_user_clubs()
{
    console.log("function retrieve_user_clubs START");

                                                        // query_books_labels
                                                        // query_concepts
                                                        // query_person_interest
                                                        // query_libraries

    var theUrl = "http://lod.kb.nl/sparql?query=" + query_person_interest + KB_POSTFIX;

    kb_Client.get(theUrl, function(response) {

        kb_instance = JSON.parse(response);

        console.log(">> kb_instance >> (1.8), KB_RESPONSE = ", kb_instance);

    });

}

//=======================================================================================
//=======================================================================================
function retrieve_from_KB()
{
    console.log("function retrieve_from_KB START");

                                                        // query_books_labels
                                                        // query_concepts
                                                        // query_person_interest
                                                        // query_libraries

    var theUrl = "http://lod.kb.nl/sparql?query=" + query_libraries2 + KB_POSTFIX;

    kb_Client.get(theUrl, function(response) {

        kb_instance = JSON.parse(response);

        console.log(">> kb_instance >> (1.2), KB_RESPONSE = ", kb_instance);

    });
}
