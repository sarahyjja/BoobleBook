const { makeGoogleApiCall } = require("../src/googleApiCall");

describe("Google books API call integration", () => {
  // Test if the function with a hardcoded word return a status code of 200
  test("If returns a status code of 200", () => {
    makeGoogleApiCall("Pop").then(response => {
      expect(response.status).toBe(200);
    });
  });

  // Test 2
  // Test what type of response we get for infos: title/authors/publisher

  // Test 3
  // Error handling: test if passing an empty string will return a prompt 'Missing input'
});
