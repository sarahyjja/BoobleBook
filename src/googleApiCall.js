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
        resolve(getListOfFiveBooks(response.data.items));
      })
      .catch(error => {
        reject(error.response.data.error.message);
      });
  });
};

// Abstract this function from the previous to retrive a list of 5 books
const getListOfFiveBooks = books => {
  const keepFive = books.splice(0, 5);
  const keepValuableInfos = keepFive.map(info => {
    return {
      title: info.volumeInfo.title,
      authors: info.volumeInfo.authors.join(", "),
      publisher: info.volumeInfo.publisher
    };
  });
  return keepFive;
};

// Mini function: getTitle
// Mini function: getAuthor
// Mini function: getPublisher

module.exports = { makeGoogleApiCall, getListOfBooks, getListOfFiveBooks };
