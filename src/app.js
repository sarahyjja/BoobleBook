const googleApiCall = require("./googleApiCall");
const { searchBooks, bookmarkByIndex, getBookmarks } = require("./commands");

switch (process.argv[2]) {
  case "search":
    searchBooks(googleApiCall, process.argv[3]).then(console.log);
    break;
  case "save":
    console.log(bookmarkByIndex(process.argv[3]));
    break;
  case "list":
    console.log(getBookmarks());
    break;
  default:
    console.log("Please, give me a valid command :-)");
}
