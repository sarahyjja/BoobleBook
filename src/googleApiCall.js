const axios = require("axios");

const makeGoogleApiCall = query => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
  const encodedURL = encodeURI(url);
  return axios.get(encodedURL);
};

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

const getListOfFiveBooks = books => {
  const keepFive = books.splice(0, 5);
  const mapList = keepFive.map(keepValuableInfos);
  return mapList;
};

const keepValuableInfos = info => {
  return {
    title: getTitle(info),
    authors: getAuthors(info),
    publisher: getPublisher(info)
  };
};

const getTitle = info => {
  return info.volumeInfo.title;
};

const getAuthors = info => {
  return info.volumeInfo.authors
    ? info.volumeInfo.authors.join(", ")
    : "No authors listed";
};

const getPublisher = info => {
  return info.volumeInfo.publisher || "No publisher listed";
};

module.exports = {
  makeGoogleApiCall,
  getListOfBooks,
  getListOfFiveBooks
};
