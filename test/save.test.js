const fs = require("fs");
const { save, saveAppending, read } = require("../src/save");

afterEach(() => {
  fs.unlinkSync("testStorage.json");
});

describe("Reading and saving some JSON", () => {
  test("If one object is added", () => {
    const data = { title: "Pop", authors: "Sarah", publisher: "Flammarion" };
    save("testStorage.json", data);
    const fileContent = read("testStorage.json");

    expect(fileContent.title).toBe("Pop");
    expect(fileContent.authors).toBe("Sarah");
    expect(fileContent.publisher).toBe("Flammarion");
  });

  test("If a list of objects are added", () => {
    const data = [
      { title: "hello", authors: "Sarah", publisher: "Flammarion" },
      { title: "Art", authors: "Anna", publisher: "Grasset" }
    ];
    save("testStorage.json", data);
    const fileContent = read("testStorage.json");

    expect(fileContent[0].title).toBe("hello");
    expect(fileContent[0].authors).toBe("Sarah");
    expect(fileContent[0].publisher).toBe("Flammarion");

    expect(fileContent[1].title).toBe("Art");
    expect(fileContent[1].authors).toBe("Anna");
    expect(fileContent[1].publisher).toBe("Grasset");
  });

  test("If the file is overwritten each time saving to the file", () => {
    const data = { title: "Art", authors: "Anna", publisher: "Grasset" };
    save("testStorage.json", data);
    save("testStorage.json", data);
    const fileContent = read("testStorage.json");

    expect(fileContent).toStrictEqual(data);
  });

  test("If the saveAppending function appends all the objects inside of an array", () => {
    const data = { title: "Art", authors: "Anna", publisher: "Grasset" };
    saveAppending("testStorage.json", data);
    saveAppending("testStorage.json", data);
    const fileContent = read("testStorage.json");

    expect(fileContent).toStrictEqual([data, data]);
    console.log("file content", fileContent);
  });
});
