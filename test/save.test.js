const fs = require("fs");
const { save, read } = require("../src/save");

describe("Reading and saving some JSON", () => {
  test("If one object is added", () => {
    const data = { title: "Pop", authors: "Sarah", publisher: "Flammarion" };
    save("testStorage.json", data);

    const fileContent = read("testStorage.json");

    expect(fileContent.title).toBe("Pop");
  });
});
