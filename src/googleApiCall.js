const axios = require("axios");
// Create the google book API call function
const makeGoogleApiCall = query => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
  return axios.get(url);
};

// Mini function: getTitle
// Mini function: getAuthor
// Mini function: getPublisher

module.exports = { makeGoogleApiCall };
