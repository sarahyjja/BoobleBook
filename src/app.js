const { makeGoogleApiCall } = require("./googleApiCall");
const { searchBooks } = require("./commands");

switch (process.argv[2]) {
  case "search":
    searchBooks(makeGoogleApiCall, process.argv[3]).then(msg =>
      // Each search will be save and overwrite in json file -> searchStorage.json
      console.log(msg)
    );
    break;
  case "save":
    // read searchStorage.json
    // select result
    // save to bookshelf.json
    console.log("save part");
    break;
  case "list":
    // show bookshelf.json
    console.log("list part");
    break;
  default:
    console.log("Please, give me a valid command :-)");
}
