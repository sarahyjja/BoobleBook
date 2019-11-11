// get a CLI command from user
const {
  searchBooks,
  bookmarkByIndex,
  getBookmarks
} = require("../src/commands");
const { mockGoogleRequest, mockEmptyGoogleRequest } = require("./mockGoogle");
const { save, saveAppending, read } = require("../src/save");
const fs = require("fs");

afterEach(() => {
  try {
    fs.unlinkSync("mostRecentSearchStorage.json");
    fs.unlinkSync("bookshelf.json");
  } catch (err) {}
});

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

  test("that the console inform the user when no book are matching the query", done => {
    searchBooks(mockEmptyGoogleRequest, "query").then(message => {
      expect(message).toEqual(
        "Sorry! We haven't find any books matching your query."
      );
    });
    done();
  });
  test("if the query is empty", done => {
    searchBooks(mockEmptyGoogleRequest, "").then(message => {
      expect(message).toEqual("Please, add a word after the search command");
    });
    done();
  });

  test("that saves a bookmark based on existing searches", () => {
    const content = [
      { title: "Pop", authors: "Sarah", publisher: "Flammarion" },
      { title: "Art", authors: "Anna", publisher: "Grasset" }
    ];
    save("mostRecentSearchStorage.json", content);

    const emptyMessage = getBookmarks();
    expect(emptyMessage).toEqual("No bookmarks found!");

    // bookmarkByIndex(1);

    // const message = getBookmarks();
    // expect(message).toEqual(
    //   expect.stringContaining("We found these books for you:")
    // );
  });
});
