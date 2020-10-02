//#region Variable Declaration
var searchTerm = $("#searchTerm");
var totalRecords = $("#numRecords");
var startYear = $("#startYear");
var endYear = $("#endYear");

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

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + nytAPIKey;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (article){


    });
};

function clearFunction() {
    console.log("Clear Clicked");

};


//#endregion



//#region Event Listeners

$("#search").addEventListener("click", searchFunction);
$("#clear").addEventListener("click", clearFunction);






//#endregion