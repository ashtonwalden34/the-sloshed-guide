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