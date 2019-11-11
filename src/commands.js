const { save, read } = require("./save");

// Create function searchBooks
const searchBooks = (googleRequest, query) => {
  return new Promise((resolve, reject) => {
    googleRequest.getBooks(query).then(books => {
      // query error handling
      if (!query) resolve("Please, add a word after the search command");
      // no matching query error handling
      if (books.length === 0) {
        resolve("Sorry! We haven't find any books matching your query.");
      } else {
        save("mostRecentSearchStorage.json", books);
        const resultMsg = annonceResultMsg(
          books.map(infos => {
            formatInfosReceived(infos);
          })
        );
        resolve(resultMsg);
      }
    });
  });
};

// message abstraction
const annonceResultMsg = booksDisplay => {
  return `We found these books for you:
  ${booksDisplay}`;
};

// Return the books in the console
const formatInfosReceived = info => {
  return `
Title: ${info.title}
Authors: ${info.authors}
Publisher: ${info.publisher}
  `;
};

module.exports = { searchBooks };
