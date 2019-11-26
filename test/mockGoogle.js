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

const mockEmptyGoogleRequest = {
  getBooks: query => {
    return new Promise((resolve, reject) => {
      resolve([]);
    });
  }
};

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
