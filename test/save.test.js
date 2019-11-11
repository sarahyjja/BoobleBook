const fs = require("fs");
const { save, read } = require("../src/save");

describe("Reading and saving some JSON", () => {
  test("If one object is added", () => {
    const data = { title: "Pop", authors: "Sarah", publisher: "Flammarion" };
    const fileContent = read("testStorage.json");

    save("testStorage.json", data);

    expect(fileContent.title).toBe("Pop");
    expect(fileContent.authors).toBe("Sarah");
    expect(fileContent.publisher).toBe("Flammarion");
  });
});
