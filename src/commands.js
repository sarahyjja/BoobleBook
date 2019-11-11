// Create function searchBooks
const searchBooks = (googleRequest, query) => {
  return new Promise((resolve, reject) => {
    googleRequest.getBooks(query).then(books => {
      if (books.length === 0) {
        resolve("Sorry! We haven't find any books matching your query.");
      } else {
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
  `
Title: ${info.title}
Authors: ${info.authors}
publisher: ${info.publisher}
  `;
};

module.exports = { searchBooks };
