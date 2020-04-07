// Search for brewery by searchTerm https://api.openbrewerydb.org/breweries/search?query=dog

// Search for single brewery https://api.openbrewerydb.org/breweries/5494

// Search by zip code https://api.openbrewerydb.org/breweries?by_postal=44107

let searchResults = [];




function displayCityWeather() {
    
    let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + "Denver" + "&appid=db5176658b0dab6a2aa19e11a0e01748";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        //variables to capture API response properties
        let name = response.name;
        let tempKelvin = response.main.temp;
        let tempC = (tempKelvin - 273.15).toFixed(1);
        let tempF = (tempC * 1.8 + 32).toFixed(0);

        console.log(name);
        console.log(tempKelvin);
        console.log(tempC);
        console.log(tempF);
    })
};

displayCityWeather();

function bySearchTerm() {
    
    let queryURL = "https://api.openbrewerydb.org/breweries/search?query=dog";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        //variables to capture API response properties
        let name = response[2].name;
        console.log(name);
    })
};

bySearchTerm();



function byZip() {
    
    let queryURL = "https://api.openbrewerydb.org/breweries?by_postal=97209";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        let searchResults = response;
        //variables to capture API response properties
        console.log(response[0].name);
        console.log(response[1].name);
        console.log(response[2].name);
        console.log(response[3].name);
        console.log(searchResults);
    })
};

byZip();

// Function to loop through array of search results returned from ajax call and renders all array values onto page as separate buttons
function renderSearchResults (searchResults) {
    $("#search-results").empty();

    // For loop to cycle through search results array
    for (var i = 0; i < searchResults.length; i++) {

        var a = $("btn-brewSearch");

        a.attr("data-name", searchResults[i]);

        a.text(searchResults[i]);

        $("#search-results").append(a);

        console.log(a);
    }
};

// Click event to push search results into an array that can be displayed on the DOM
$("#btn-brewSearch").on("click", function(event) {
    event.preventDefault();
    let searchTerm = $("#searchInput").val().trim();
    searchResults.push("CHANGE TO AJAX CALL RESULTS");
    renderSearchResults();
});