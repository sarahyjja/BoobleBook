const { save, saveAppending, read } = require("./save");

// Create function searchBooks
const searchBooks = (googleRequest, query) => {
  return new Promise((resolve, reject) => {
    // query error handling
    if (!query) resolve("Please, add a word after the search command");

    googleRequest.getListOfBooks(query).then(books => {
      // const rightQuery = /([^w]$)/;

      if (books.length === 0) {
        resolve("Sorry! We haven't found any books matching your query.");
        // } else if (books.match(rightQuery)) {
        //   resolve("The query is wrong, please try again");
      } else {
        save("mostRecentSearchStorage.json", books);
        const resultMsg = annonceResultMsg(
          books.map(formatInfosReceived).join("\n")
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
const formatInfosReceived = (info, index, array) => {
  return `
${index}
Title: ${info.title}
Authors: ${info.authors}
Publisher: ${info.publisher}
  `;
};

// Add number to select book
const bookmarkByIndex = index => {
  if (index < 0 || index > 4) return "Invalid selection number";

  const mostRecentSearch = read("mostRecentSearchStorage.json");
  const selectedBook = mostRecentSearch[index];
  saveAppending("bookshelf.json", selectedBook);
  return "Book selected and saved in your bookshelf!";
};

// Answer to list command
const getBookmarks = () => {
  let bookmarks;
  try {
    bookmarks = read("bookshelf.json");
  } catch (err) {
    return "No bookmarks found!";
  }

  if (bookmarks) {
    return annonceResultMsg(bookmarks.map(formatInfosReceived).join("\n"));
  } else {
    return "No bookmarks found!";
  }
};

module.exports = { searchBooks, bookmarkByIndex, getBookmarks };
