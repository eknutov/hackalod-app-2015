// various queries to the Dydra endpoint

//========================================================================================
// from Dydra
//var query_DYDRA_test = "SELECT * WHERE {?s ?p ?o}";
var query_DYDRA_test = "select * where { { graph ?g {?s ?p ?o} } union {?s ?p ?o} }";

var query_DYDRA_add_book = "base <http://dydra.com/eknutov/hackalod/> insert data { <person/Tyler> foaf:interest <ZZZ> }";

var query_DYDRA_test_update = "INSERT DATA { <http://example.org/instance> a <http://schema.org/Thing> . }";

//================================================
// query books and labels
var query_books_labels = "SELECT distinct ?s ?label WHERE {  { ?s a schema:Book }  union   { ?s a schema:EBook }  union  { ?s a schema:CreativeWork }  ?s rdfs:label ?label . } ";

var query_book_titles = "SELECT distinct ?s ?label WHERE { { ?s a schema:Book } union { ?s a schema:EBook } union { ?s a schema:CreativeWork } ?s rdfs:label ?label FILTER (?label = \"ZZZ\") . } "

// look up concepts
var query_concepts = "SELECT distinct ?s ?label WHERE {   ?s a skos:Concept ;     rdfs:label ?label . }";

// find all concepts related to the interests of a person
var query_person_interest = "PREFIX foaf: <http://xmlns.com/foaf/0.1/> SELECT ?o2 ?lab (count(distinct ?o) as ?c1) WHERE {  service <http://dydra.com/eknutov/hackalod/sparql> { ?s a foaf:Person ; foaf:interest ?o } ?o ?p ?z . ?z a skos:Concept ; skos:prefLabel ?lab ; skos:broader* ?o2 . } group by ?o2 ?lab";

// lookup libraries and labels
var query_libraries = "PREFIX local: <http://www.w3.org/2006/vcard/ns#> PREFIX dbr: <http://dbpedia.org/resource/> SELECT distinct ?s ?label ?loc WHERE { ?s a dbr:Library ; rdfs:label ?label ; local:locality ?loc . }";
var query_libraries2 = "PREFIX%20local%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2006%2Fvcard%2Fns%23%3E%20PREFIX%20dbr%3A%20%3Chttp%3A%2F%2Fdbpedia.org%2Fresource%2F%3E%20SELECT%20distinct%20%3Fs%20%3Flabel%20%3Floc%20WHERE%20%7B%20%3Fs%20a%20dbr%3ALibrary%20%3B%20rdfs%3Alabel%20%3Flabel%20%3B%20local%3Alocality%20%3Floc%20.%20%7D";

//========================================================================================
// KB QUERIES
//===========
var query_KB_test = "SELECT * WHERE {?s ?p ?o} LIMIT 100";

// STUBS for now
var query_KB_libraries = "";
var query_KB_books_genres = "";
var query_KB_ZZZ1 = "";
var query_KB_ZZZ2 = "";
