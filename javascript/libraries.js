// library, map suggestion
//=======================================================================================
//=======================================================================================

function render_library_list()
{
    // STUB
    // console.log(">> render_library_list = ", NL_libraries);

}

function create_library_list()
{
    libraries = "";

    var theUrl = "http://lod.kb.nl/sparql?query=" + query_libraries2 + KB_POSTFIX;

    kb_Client.get(theUrl, function(response) {

        kb_instance = JSON.parse(response);

        //=================================================================
        for (var i = 0; i < kb_instance.results.bindings.length; i++)
        {
            //NL_libraries.push(["url2","name2","location2"]);
            //NL_libraries.push(0);

            NL_libraries.push([kb_instance.results.bindings[i].s.value,kb_instance.results.bindings[i].label.value,kb_instance.results.bindings[i].loc.value]);
        }

        render_library_list();
    });
}
