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
        const theFinalFiveBooks = getListOfFiveBooks(response.data.items);
        resolve(theFinalFiveBooks);
      })
      .catch(error => {
        const errorMessage = error.response.data.error.message;
        reject(errorMessage);
      });
  });
};

// Abstract this function from the previous to retrive a list of 5 books
const getListOfFiveBooks = books => {
  const keepFive = books.splice(0, 5);
  const mapList = keepFive.map(keepValuableInfos);
  return keepFive;
};

// abstract mapping of infos
const keepValuableInfos = info => {
  return {
    title: getTitle(info),
    authors: getAuthors(info),
    publisher: getPublisher(info)
  };
};

// Mini function: getTitle
const getTitle = receiveTitle => {
  title: receiveTitle.volumeInfo.title;
};

// Mini function: getAuthor
const getAuthors = receiveAuthors => {
  receiveAuthors.volumeInfo.authors
    ? receiveAuthors.volumeInfo.authors.join(", ")
    : "No authors listed";
};

// Mini function: getPublisher
const getPublisher = receivePublisher => {
  receivePublisher.volumeInfo.publisher || "No publisher listed";
};

module.exports = { makeGoogleApiCall, getListOfBooks, getListOfFiveBooks };
