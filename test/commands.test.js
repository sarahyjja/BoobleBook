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
  test("that the console retrieve a message to annonce the matching results", done => {
    searchBooks(mockGoogleRequest, "query").then(message => {
      expect(message).toEqual(
        expect.stringContaining("We found these books for you:")
      );
    });
    done();
  });

  // test("that the console retrieve the book list of the user query", done => {
  //   searchBooks(mockGoogleRequest, "query").then(bookInfo => {
  //     expect(bookInfo).toEqual(expect.stringContaining("title: fakeTitle"));
  //     // expect(message).toContain("title: fakeAuthors");
  //     // expect(message).toContain("title: fakePublisher");
  //   });
  //   done();
  // });
});
