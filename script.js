let nameInput=''
    zipInput=''
    searchResults=['']
    WeatherSearchResults=['']

// api search by zipcode

let zipBtn=document.getElementById("searchInput2")
zipBtn.addEventListener("keyup", function(event) {
     if (event.keyCode === 13) {
    zipInput = document.getElementById("searchInput2").value;
    breweryByZip();
    
    $("#searchInput2").val("")
    
    }});
    

// search by name

            // get values from name button
     let nameBtn=document.getElementById("searchInput1")
    nameBtn.addEventListener("keyup", function(event) {
         if (event.keyCode === 13) {
        nameInput = document.getElementById("searchInput1").value;
        breweryBySearchTerm();
        
        $("#searchInput1").val("")
        
        }});


                // Query to "get" brewery by name api data
        function breweryBySearchTerm() {
    
            let queryURL = "https://api.openbrewerydb.org/breweries/search?query="+nameInput;
        
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
        
                //variables to capture API response properties
                 searchResults = response;
              searchCityWeather();  
            })
        };
        
        
           // Query to "get"  by name weather api data
        function searchCityWeather() {
    
            let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + nameInput + "&units=imperial&appid=db5176658b0dab6a2aa19e11a0e01748";
            
        
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                WeatherSearchResults = response
                   addbrew()
            })};



    // function to generate Brewery list in a grid
 function addbrew(){
    $(".brewBox").remove()
    for (i=0; i< searchResults.length; i++){
        $(".brewbox").remove()
      
      
    //   Individual values for each div
        name = searchResults[i].name
      city = searchResults[i].city
      address = searchResults[i].street 
      type = searchResults[i].brewery_type
      phone = phone ='('+ searchResults[i].phone.slice(0,3)+")"+searchResults[i].phone.slice(3,6)+'-'+searchResults[i].phone.slice(6,10)
      website = searchResults[i].website_url
      
    //   creates containers for brewery response data
      newContainer = document.createElement('div')
      newContainer.className = 'brewBox container grid'
      newContainer.id = "brewBox grid"
     
      $(".breweryResults").append(newContainer)
      
       const webButton =  document.createElement('div')
       webButton.classList.add('website')  
       newContainer.append(webButton)
        webButton.outerHTML = "<a class=website href="+website+">"+website+"</a>"
     
     
      // Creats divs for brewery listing
        const varList=[name,address,phone]  
      altVarList=["name",'address','phone']
      for (x=0; x < varList.length; x++){
        g = varList[x] , h = altVarList[x] 
         newDiv = document.createElement('div')
           newDiv.className = h
            newDiv.append(g)  
        newContainer.append(newDiv);
                   // Adds onclick event for website_url    
   
    }}   
      createweather()}



    // display weather information (this is the fun one!!!!)
   function createweather(){
    // document.getElementById('today').style.backgroundImage="url(./lib/"+iconId+"d.png)"
    iconId=WeatherSearchResults.weather[0].icon.slice(0,2)
    icon=""

    var skyIcon;
    switch (iconId ){
      case 01:
       icon= "01.jpeg";
        break;
      case 02:
       icon= "02.png";
        break;
      case 03:
        icon = "02.png";
        break;
      case 04:
        icon = "01.jpeg";
        break;
      case 09:
        icon= "01.jpeg";
        break;
      case 10:
        icon="01.jpeg";
        break;
      case 11:
        icon="01.jpeg";
        break;
      default:
        icon= "01.jpeg";
    }
    // x="url(./lib/"+skyIcon+")"
    document.getElementById('sky').style.backgroundImage="url(./images/"+icon+")";
    // let TemperatureDiv = document.createElement("div");

    //variables to capture API response properties
    let tempF = WeatherSearchResults.main.temp.toFixed(1);
    let tempC = ((tempF - 32)/1.8).toFixed(0);
    let windSpeed = WeatherSearchResults.wind.speed;

    // div to hold and display current weather data for the searched city
    let currentWeatherDiv = $("<div class='weather'>");

    //compile and display current temperature information
    let pTemp = $("<p>").text("Temperature: " + tempF + "° F" + " (" + tempC + "° C)");
    currentWeatherDiv.append(pTemp);

    //wind speed information
    let pWindSpeed = $("<p>").text("Wind Speed: " + windSpeed + " MPH");
    currentWeatherDiv.append(pWindSpeed);

    //placing all current weather variables into HTML
    $(".weather").prepend(currentWeatherDiv);
    console.log(currentWeatherDiv)

   }