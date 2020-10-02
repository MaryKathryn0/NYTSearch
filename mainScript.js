//#region Variable Declaration
var x =$("#searchTerm");
var x =$("#numRecords");
var x =$("#startYear");
var x =$("#endYear");

//#endregion

//#region API Variables

//#endregion


//#region Function Definitions
function searchFunction() {
    alert ("search");
}

function clearFunction() {
    alert ("clear");
}


//#endregion



//#region Event Listeners

$("#search").addEventListener("click", searchFunction);
$("#clear").addEventListener("click", clearFunction);






//#endregion