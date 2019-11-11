const fs = require("fs");

// Create save function
const save = (filename, content) => {
  const stringifiedContent = JSON.stringify(content);
  return fs.writeFileSync(filename, stringifiedContent);
};

const saveAppending = (filename, content) => {
  let existContent;
  //  if the file file doesnt exist, init the content with an empty list
  try {
    existContent = read(filename);
  } catch (err) {
    existContent = [];
  }
};
//  Create read function
const read = filename => {
  const content = fs.readFileSync(filename, { encoding: "utf8" });
  return JSON.parse(content);
};
module.exports = { save, saveAppending, read };
