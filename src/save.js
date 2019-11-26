const fs = require("fs");

const save = (filename, content) => {
  const stringifiedContent = JSON.stringify(content);
  return fs.writeFileSync(filename, stringifiedContent);
};

const saveAppending = (filename, content) => {
  let existingContent;
  try {
    existingContent = read(filename);
  } catch (err) {
    existingContent = [];
  }

  existingContent.push(content);
  return save(filename, existingContent);
};

const read = filename => {
  const content = fs.readFileSync(filename, { encoding: "utf8" });
  return JSON.parse(content);
};

module.exports = { save, saveAppending, read };
