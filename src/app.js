const { makeGoogleApiCall } = require("./googleApiCall");
const { searchBooks } = require("./commands");

searchBooks(makeGoogleApiCall, "Pop").then(console.log("hello"));
