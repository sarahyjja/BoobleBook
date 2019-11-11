// Create function searchBooks
const searchBooks = (googleRequest, query) => {
  return new Promise((resolve, reject) => {
    googleRequest.getBooks(query).then(books => {
      if (books.length === 0) {
        resolve("Sorry! We haven't find any books matching your query.");
      } else {
        const message = "We found these books for you:";
        resolve(message);
      }
    });
  });
};

// Return the books in the console

module.exports = { searchBooks };
