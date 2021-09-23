const request = require('request');


// request('https://api.thecatapi.com/v1/breeds/search?q=siberian', (error, response, body) => {
//   const data = JSON.parse(body);
//   let a = data[0].description
//   console.log(a);
  
// })


const fetchBreedDescription = (breedName, cb) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      return cb(error);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return cb('Breed Not Found');
    }
    cb(null, data[0].description);
  });
};

module.exports = {
  fetchBreedDescription
};