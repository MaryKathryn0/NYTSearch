//#region Variable Declaration


//#endregion

//#region API Variables
// articlesearch.json?q={query}&fq={filter}
// Example Call
// https://api.nytimes.com/svc/search/v2/articlesearch.json?q={election}&api-key=yourkey
// {election} above is the term the user typed
var nytAPIKey = "jHYddvB3BUPWEx0heZRUb0DUopijsuye";
//#endregion


//#region Function Definitions
function myFunction() {
    alert ("search");
}

function myFunction() {
    alert ("clear");
}


//#endregion



//#region Event Listeners

$("#search").addEventListener("click", myFunction);
$("#clear").addEventListener("click", myFunction);






//#endregion