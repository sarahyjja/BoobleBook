// get a CLI command from user
const { searchBooks } = require("../src/commands");

// mock a request
const mockGoogleRequest = {
  getBooks: query => {
    return new Promise((resolve, reject) => {
      resolve([
        {
          title: "fakeTitle",
          authors: "fakeAuthors",
          publisher: "fakePublisher"
        }
      ]);
    });
  }
};

describe("Create CLI command to search for books", () => {
  // Prompt the user for a query to search a book
  test("that the console prompt the user for a query to search a book", done => {
    searchBooks(mockGoogleRequest, "query").then(message => {
      expect(message).toEqual(
        expect.stringContaining("We found these books for you:")
      );
    });
    done();
  });
});
