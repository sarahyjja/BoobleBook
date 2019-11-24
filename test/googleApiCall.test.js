const {
  makeGoogleApiCall,
  getListOfBooks,
  getListOfFiveBooks
} = require("../src/googleApiCall");

describe("Google books API call integration", () => {
  test("If returns a status code of 200", () => {
    makeGoogleApiCall("Pop").then(response => {
      expect(response.status).toBe(200);
    });
  });

  test("If the response body returns valid infos", done => {
    makeGoogleApiCall("Pop").then(response => {
      expect(typeof response.data.items[0].volumeInfo.title).toBe("string");
      expect(Array.isArray(response.data.items[0].volumeInfo.authors)).toBe(
        true
      );
      expect(typeof response.data.items[0].volumeInfo.publisher).toBe("string");
    });
    done();
  });

  test("If passing an empty query will returns the status code of 400 and an error message", done => {
    makeGoogleApiCall("").catch(error => {
      expect(error.response.status).toBe(400);
      expect(error.response.data.error.message).toBe("Missing query.");
    });
    done();
  });
});

describe("Google books API retrieves a list of books", () => {
  test("If getListOfBooks returns a list of 10 books", done => {
    getListOfBooks("Pop").then(listOfBooks => {
      expect(listOfBooks.length).toBe(10);

      // expect(typeof listOfBooks[0].title).toBe("string");
      // expect(typeof listOfBooks[0].authors).toBe("string");
      // expect(typeof listOfBooks[0].publisher).toBe("string");
    });
    done();
  });

  test("If getListOfFiveBooks returns a list of exactly 5 books", () => {
    infosResponse = [
      { volumeInfo: { title: "OtherFakeTitle" } },
      { volumeInfo: { title: "OtherFakeTitle" } },
      { volumeInfo: { title: "OtherFakeTitle" } },
      { volumeInfo: { title: "OtherFakeTitle" } },
      { volumeInfo: { title: "OtherFakeTitle" } },
      { volumeInfo: { title: "OtherFakeTitle" } },
      { volumeInfo: { title: "OtherFakeTitle" } },
      { volumeInfo: { title: "OtherFakeTitle" } }
    ];
    const fiveBook = getListOfFiveBooks(infosResponse.splice(0, 5));
    expect(fiveBook.length).toBe(5);
  });
});

describe("Management of boolean infos of Google books API ", () => {
  test("If empty/undefined infos are retrieves as 'No ... listed'", () => {
    infosResponse = [
      {
        volumeInfo: {
          title: "OtherFakeTitle"
        }
      }
    ];
    const firstBook = getListOfFiveBooks(infosResponse);
    expect(firstBook.length).toBe(1);
    expect(firstBook[0].title).toBe("OtherFakeTitle");
    expect(firstBook[0].authors).toBe("No authors listed");
    expect(firstBook[0].publisher).toBe("No publisher listed");
  });
});
