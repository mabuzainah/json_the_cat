const request = require('request');

//code from the API about finding the cat breed. 
//https://api.thecatapi.com/v1/breeds/search?q=Siberian

//Create the variables to read from the command line/terminal
const inputFromTerminal = process.argv[2];
//calling the function catBreedFetcher


//create a function to take in parameter from the console log terminal. 
const catBreedFetcher = function (catBreed) {
    request('https://api.thecatapi.com/v1/breeds/search?q='+catBreed, (error, response, body) => {
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.
        //console.log("BELOW IS THE TYPE OF THE BODY");
        //console.log(typeof body);
        
        //handling of what error is thrown? 
        if (error) {
            console.log("See error details: " + error);
        } 
        const data = JSON.parse(body);
        //console.log(data);
        //console.log(typeof data);

        //checking if the data returned is not empty and hence no CatBreed with that name
        if (data.length === 0){
            console.log("Unable to find the breed in question.");
        } else {
            //accessing the description of the first Object returned. 
            console.log(data[0].description);  
        }
    });
};

catBreedFetcher(inputFromTerminal);