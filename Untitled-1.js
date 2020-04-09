let searchInput=''
    searchResults=['']
    WeatherSearchResults=['']


let BtnInput=document.getElementById("searchInput1")
BtnInput.addEventListener("keyup", function(event) {
     if (event.keyCode === 13) {
    searchInput = document.getElementById("searchInput1").value;
    breweryByZip();
    
    $("#searchInput1").val("Enter Your Beer Location")
    
    }});
    

    function breweryByZip() {
    
        let queryURL = "https://api.openbrewerydb.org/breweries?by_postal=97209";
        console.log(queryURL);
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){  
            
    
    
             searchResults = response;
           
            addbrew()
            //variables to capture API response properties
            
            
        })}

     

 // function for brewery list
 function addbrew(){
    for (i=0; i< searchResults.length; i++){
        $(".brewbox").remove()
      name = searchResults[i].name
      city = searchResults[i].city
      address = searchResults[i].street 
      type = searchResults[i].brewery_type
      phone = phone ='('+ searchResults[i].phone.slice(0,3)+")"+searchResults[i].phone.slice(3,6)+'-'+searchResults[i].phone.slice(6,10)
      website = searchResults[i].website_url
      newContainer = document.createElement('div')
      newContainer.className = 'brewBox container grid'
      newContainer.id = "brewBox"+i
      
      
     
      
      // Creats divs for brewery list
      $(".breweryResults").append(newContainer)
      const varList=[name,city,address,phone]  
      altVarList=["name",'city','address','phone']
      for (x=0; x < varList.length; x++){
        g = varList[x] , h = altVarList[x] 
         newDiv = document.createElement('div')
           newDiv.className = h
            newDiv.append(g)  
        newContainer.append(newDiv);}
        const webButton =  document.createElement('a')
        newContainer.append(webButton)
        webButton.outerHTML = "<a class=website href="+website+">"+website+"</a>"
             
    }WeatherByZip}





        //   Weather
        //             api
        //                     section

        function WeatherByZip() {
    
    let queryURL = "https://api.openbrewerydb.org/breweries?by_postal=97209";
    

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){  
        


         WeatherSearchResults = response;
     
        //variables to capture API response properties
        
        console.log(WeatherSearchResults);
    });}
    
   