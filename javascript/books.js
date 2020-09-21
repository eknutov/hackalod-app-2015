// books routines


var KB_BOOK_POSTFIX = "?output=application/ld+json";

var kb_instance_book = "";

var obj_url_book = "";
//var book_instance = '';        // book instance
//book_Client = new HttpClient();

// add this book to the user library
//========================================================================================

function add_this_book()
{

    // use obj_url_book object to add
    console.log(">> kb_instance >> (1.4), ADDING BOOK URL ", obj_url_book);

    // replace in query "query_DYDRA_add_book" ZZZ with book_ID= obj_url_book
    query_DYDRA_add_book = query_DYDRA_add_book.replace("ZZZ", obj_url_book);

    document.getElementById("user_info_detailed").innerHTML += obj_url_book + "<br>";

    update_query_Dydra();

    //after adding book to the user profile - erase it
    document.getElementById("book_info").innerHTML += "you added this book"
    obj_url_book = "";

    //refresh the user profile
    //retrieve_users_from_Dydra();

}



// resolve book ulr, retrieve JSON object
//========================================================================================

function resolve_book_object(obj_url)
{


    var theUrl = obj_url + KB_BOOK_POSTFIX;

    kb_Client.get(theUrl, function(response) {

        kb_instance_book = JSON.parse(response);


        obj_url_book = obj_url;
        console.log(">> kb_instance >> (1.2), search_book_by_title KB_RESPONSE MY BOOK = ", kb_instance_book);

        //console.log(">> kb_instance >> (1.3), search_book_by_title RETURNED BOOK OBJECT =>> ", kb_instance_book);

        document.getElementById("book_info").innerHTML += "title: <b>"+ kb_instance_book.title + "</b><br>";
        document.getElementById("book_info").innerHTML += "author: <b>"+ kb_instance_book['dc:creator'] + "</b><br>";
        document.getElementById("book_info").innerHTML += "edition: "+ kb_instance_book.edition + "<br>";
        document.getElementById("book_info").innerHTML += "publisher: "+ kb_instance_book.publisher + "<br>";
        document.getElementById("book_info").innerHTML += "ISBN: "+ kb_instance_book.isbn + "<br>";
        //document.getElementById("book_info").innerHTML += "<button onclick=\"add_this_book(" + obj_url + ")\">add this book</button>";
        document.getElementById("book_info").innerHTML += "<button onclick=\"add_this_book()\">add this book</button>  ";
        //document.getElementById("book_info").innerHTML += "<button onclick=\"add_this_book( " + obj_url + " )\">add this book</button>";
        //<button onclick=\"add_this_book()\">add this book</button>
        //return kb_instance_book;
    });

}


// search book
//========================================================================================

function search_book_by_title()            // from KB
{
   console.log("function search_book_by_title START");
   var book_title = document.getElementById("usernameinput").value;
   var book_obj = "";
   console.log("function search_book_by_title TITLE", book_title);


                                                        // query_books_labels
                                                        // query_concepts
                                                        // query_person_interest
                                                        // query_libraries

    var query_book_titles2 = query_book_titles.replace("ZZZ", book_title);


    var theUrl = "http://lod.kb.nl/sparql?query=" + query_book_titles2 + KB_POSTFIX;

    kb_Client.get(theUrl, function(response) {

        kb_instance = JSON.parse(response);

        if (kb_instance.results.bindings.length != 0)
            {
                document.getElementById("book_info").innerHTML = "";
                console.log(">> kb_instance >> (1.2), search_book_by_title KB_RESPONSE NON EMPTY = ", kb_instance.results.bindings[0]);
                document.getElementById("book_info").innerHTML += "Found "+ kb_instance.results.bindings.length +" similar(same) books(creations)" + "<br><br>";
                //book_obj =
                resolve_book_object(kb_instance.results.bindings[0].s.value);
            }
    });

}
