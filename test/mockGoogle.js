// mock a success request
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

// mock an empty request
const mockEmptyGoogleRequest = {
  getBooks: query => {
    return new Promise((resolve, reject) => {
      resolve([]);
    });
  }
};

// mock a wrong request
const mockWrongGoogleRequest = {
  getBooks: query => {
    return new Promise((resolve, reject) => {
      const regex = /([^w]$)/;
      resolve("The query is wrong, please try again");
    });
  }
};
module.exports = {
  mockGoogleRequest,
  mockEmptyGoogleRequest,
  mockWrongGoogleRequest
};
