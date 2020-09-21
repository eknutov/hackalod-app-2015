// common, shared and pre-defined data for the demo

//========================================================================================

var user_info = [["eknutov"],                                                       // user name
             ["Old man and a sea","War and a Peace","50 shades of Grey"],       // book list
             ["adventure","detective","murder mystery"],                        // genres
             ["fight club", "shades of grey club"]];                            // my clubs

// user_info:
// => username
// => 1) book list (from Dydra)
// => 2) my topics (from KB - dynamically from y our book titles)
// => 3) my clubs (from Dydra - based on the topics delivered from KB)


var club_info = [['fight club'],                                                    // club name
             ["murder mystery", "detective", "manual"],                         // club genres
             ["Eindhoven"]];                                                    // club location

// => 1) retrieve clubs (from Dydra) with certain USER topics
// => 2) retrieve club INFO (name and location)

// => 3) retrieve nearby libraries (for the Club)


var common_genres = [];

//========================================================================================

var NL_libraries = [["url","name","location"]];

var NL_user = [["s","p","o"]];


//========================================================================================
