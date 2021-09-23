const request = require('request');


// request('https://api.thecatapi.com/v1/breeds/search?q=siberian', (error, response, body) => {
//   const data = JSON.parse(body);
//   let a = data[0].description
//   console.log(a);
  
// })

const arg = process.argv.slice(2);
request('https://api.thecatapi.com/v1/breeds/search?q=' + arg, (error, response, body) => {
  if (error) {
    return console.log(error);
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    return console.log('Breed Not Found');
  }
  console.log(data[0].description);
});