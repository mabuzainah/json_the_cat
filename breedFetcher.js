const request = require('request');

//code from the API about finding the cat breed. 
//https://api.thecatapi.com/v1/breeds/search?q=Siberian

request('https://api.thecatapi.com/v1/breeds/search?q=Siberian', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log("BELOW IS THE TYPE OF THE BODY");
  console.log(typeof body);
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
  for (let i of Object.keys(data) ) {
      if (i === 'description') {
          console.log(data.description);
      }
  }
});


// const catBreedFetcher = function (catBreed) {

// };