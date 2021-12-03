const args = process.argv;
const request = require('request');
const requestedBreed = String(args[2]);
const apiRequest = 'https://api.thecatapi.com/v1/breeds/search?q='+ requestedBreed;
request(apiRequest, function (error, response, body) {
if (error !== null) {
    console.error('Request returns error: ', error);
    return false;
  }    
const data = JSON.parse(body);
if (Object.entries(data).length === 0) {
    console.log("No data found");
  }
    console.log("The breed description is: " + data[0].description);  
});  