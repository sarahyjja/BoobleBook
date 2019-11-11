const { makeGoogleApiCall } = require("./googleApiCall");
const { searchBooks } = require("./commands");

switch (process.argv[2]) {
  case "search":
    searchBooks(makeGoogleApiCall, process.argv[3]).then(msg =>
      console.log(msg)
    );
    break;
  case "save":
    console.log("save part");
    break;
  default:
    console.log("Please, give me a valid command :-)");
}
