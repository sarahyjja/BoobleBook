// get a CLI command from user
const {
  searchBooks,
  bookmarkByIndex,
  getBookmarks
} = require("../src/commands");
const {
  mockGoogleRequest,
  mockEmptyGoogleRequest,
  mockWrongGoogleRequest
} = require("./mockGoogle");
const { save, saveAppending, read } = require("../src/save");
const fs = require("fs");

afterEach(() => {
  try {
    fs.unlinkSync("mostRecentSearchStorage.json");
    fs.unlinkSync("bookshelf.json");
  } catch (err) {}
});

describe("Create CLI command to search for books", () => {
  test("that the console retrieve a message to annonce the matching results", done => {
    searchBooks(mockGoogleRequest, "query").then(message => {
      expect(message).toEqual(
        expect.stringContaining("We found these books for you:")
      );
    });
    done();
  });

  test("If formatInfosReceived retrieves the formatted infos", done => {
    searchBooks(mockGoogleRequest, "query").then(bookInfo => {
      expect(bookInfo).toEqual(expect.stringContaining("title: fakeTitle"));
      expect(bookInfo).toEqual(expect.stringContaining("authors: fakeAuthors"));
      expect(bookInfo).toEqual(
        expect.stringContaining("publisher: fakePublisher")
      );
    });
    done();
  });

  test("that the console inform the user when no book are matching the query", done => {
    searchBooks(mockEmptyGoogleRequest, "query").then(message => {
      expect(message).toEqual(
        "Sorry! We haven't found any books matching your query."
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

  test("if the query is wrong", done => {
    searchBooks(mockWrongGoogleRequest, "1092%&^").then(message => {
      expect(message).toEqual("The query is wrong, please try again");
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
  });

  test("that saves a book in the bookshelf", () => {
    const content = [
      { title: "Pop", authors: "Sarah", publisher: "Flammarion" },
      { title: "Art", authors: "Anna", publisher: "Grasset" }
    ];
    save("mostRecentSearchStorage.json", content);

    const message = bookmarkByIndex(1);
    expect(message).toEqual("Book selected and saved in your bookshelf!");

    const bookInShelf = read("bookshelf.json");
    expect(bookInShelf).toEqual([
      { title: "Art", authors: "Anna", publisher: "Grasset" }
    ]);
    console.log(bookInShelf);
  });
});
