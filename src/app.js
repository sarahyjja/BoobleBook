const { makeGoogleApiCall, bookmarkByIndex } = require("./googleApiCall");
const { searchBooks } = require("./commands");

// const firstParameter = process.argv[2];
// searchBooks(makeGoogleApiCall, "Pop").then(message =>
//   console.log(message)
// );
// console.log(firstParameter);
// searchBooks(makeGoogleApiCall, firstParameter).then(message =>
//   console.log(message)
// );

switch (process.argv[2]) {
  case "search":
    searchBooks(makeGoogleApiCall, process.argv[3]).then(msg =>
      // Each search will be save and overwrite in json file -> searchStorage.json
      console.log(msg)
    );
    break;
  case "save":
    // read searchStorage.json
    // select result -> create function to select a book -> bookmark
    const selectResult = bookmarkByIndex(process.argv[3]);
    console.log(selectResult);
    // save to bookshelf.json
    console.log(bookmarkByIndex(process.argv[3]));
    break;
  case "list":
    // show bookshelf.json
    console.log(getBookmarks());
    break;
  default:
    console.log("Please, give me a valid command :-)");
}
