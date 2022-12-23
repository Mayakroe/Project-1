var baseUrl = "https://restcountries.com/v3.1/name/";



//   // "https//restcountries.com/v2/name/Canada";
function search(){
    var formName = document.getElementById("user-form");
    var countryName = formName.elements[0].value;
    //var output = "";
    var Languages = "";
   
    console.log(countryName)
    var requestUrl = baseUrl + countryName;
    fetch(requestUrl).then(function(response) {
       return response.json();     
    }).then(function(data) 
    {
        //output = data
        console.log(data);
        console.log("<img src=\""+String(data[0]['flags']['png'])+"\" alt=\"Country Flag\"> ");


       // returning language information 
        for ( index in data[0]['languages']) {
            //console.log(data[0]['languages'][index]);
            Languages += data[0]['languages'][index] + " <br>";
        }
        document.getElementById("Flag").innerHTML="<img src=\""+String(data[0]['flags']['png'])+"\" alt=\"Country Flag\">"
        document.getElementById("Languages").innerHTML=Languages;
        document.getElementById("population").innerHTML=data[0]['population'];
    });
    
}

// plain JavaScript



// jQuery method
//$.ajax(requestUrl).then(function(response) {
   // console.log(response);
//});