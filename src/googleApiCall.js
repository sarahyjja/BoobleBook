const axios = require("axios");

// Create the google book API call function
const makeGoogleApiCall = query => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
  return axios.get(url);
};

// Create function to retrieve a list of books -> 10 from the JSON
const getListOfBooks = query => {
  return new Promise((resolve, reject) => {
    makeGoogleApiCall(query)
      .then(response => {
        resolve(response.data.items);
      })
      .catch(error => {
        reject(error.response.data.error.message);
      });
  });
};

// Mini function: getTitle
// Mini function: getAuthor
// Mini function: getPublisher

module.exports = { makeGoogleApiCall, getListOfBooks };
