var baseUrl = "https://restcountries.com/v3.1/name/";
var baseUrl2 = "https://www.travel-advisory.info/api?countrycode="



//   // "https//restcountries.com/v2/name/Canada";
function search(){
    var formName = document.getElementById("user-form");
    var countryName = formName.elements[0].value;
    var Languages = "";
    //var Currency = [];
    var currencyString = "";
    var countryCode = "";
    
   
    console.log(countryName)
    var requestUrl = baseUrl + countryName;
    fetch(requestUrl).then(function(response) {
       return response.json();     
    }).then(function(data) 
    {
        console.log(data);
        //console.log("<img src=\""+String(data[0]['flags']['png'])+"\" alt=\"Country Flag\"> ");
        countryCode = data[0]['cca2'];

       // returning language information 
        for ( index in data[0]['languages']) {
            Languages += data[0]['languages'][index] + " <br>";  
        }
        for ( index in data[0]['currencies']) {
            //Currency.push([data[0]['currencies'][index]['name'], data[0]['currencies'][index]['symbol']])
            currencyString += data[0]['currencies'][index]['name'] + "  "+ data[0]['currencies'][index]['symbol'] + " <br>";
            //console.log(currencyString);  
        }
        
        document.getElementById("Flag").innerHTML="<img src=\""+String(data[0]['flags']['png'])+"\" alt=\"Country Flag\">"
        document.getElementById("Languages").innerHTML=Languages;
        document.getElementById("population").innerHTML=data[0]['population'].toLocaleString("en-US");
        document.getElementById("capital").innerHTML=data[0]['capital'];
        document.getElementById("currencies").innerHTML=currencyString;
        var requestUrl2 = baseUrl2 + countryCode;
        console.log(requestUrl2);
        fetch(requestUrl2).then(function(response) {
            return response.json();     
        }).then(function(data) 
        {
            console.log(data);
            console.log(data['data'][countryCode]['advisory']);
            document.getElementById("message").innerHTML=data['data'][countryCode]['advisory']['message'];
            document.getElementById("source").innerHTML="<a href=\"" + data['data'][countryCode]['advisory']['source']+ "\">"+data['data'][countryCode]['advisory']['source']+"</a>";
        });
    });
     
}