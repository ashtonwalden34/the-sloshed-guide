// Search for brewery by searchTerm https://api.openbrewerydb.org/breweries/search?query=dog

// Search for single brewery https://api.openbrewerydb.org/breweries/5494

// Search by zip code https://api.openbrewerydb.org/breweries?by_postal=44107






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
    
    let queryURL = "https://api.openbrewerydb.org/breweries?by_postal=84101";
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

byZip();