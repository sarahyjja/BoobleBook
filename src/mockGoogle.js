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
module.exports = { mockGoogleRequest, mockEmptyGoogleRequest };
