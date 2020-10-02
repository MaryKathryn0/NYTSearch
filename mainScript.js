//#region Variable Declaration
var x =$("#searchTerm");
var x =$("#numRecords");
var x =$("#startYear");
var x =$("#endYear");

//#endregion

//#region API Variables
// articlesearch.json?q={query}&fq={filter}
// Example Call
// https://api.nytimes.com/svc/search/v2/articlesearch.json?q={election}&api-key=yourkey
// {election} above is the term the user typed
var nytAPIKey = "jHYddvB3BUPWEx0heZRUb0DUopijsuye";
//#endregion


//#region Function Definitions

function searchFunction() {
    console.log("Search Clicked");
}

function clearFunction() {
    console.log("Clear Clicked");

}


//#endregion



//#region Event Listeners

$("#search").addEventListener("click", searchFunction);
$("#clear").addEventListener("click", clearFunction);






//#endregion