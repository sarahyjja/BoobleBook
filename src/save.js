const fs = require("fs");

// Create save function
const save = (filename, content) => {
  const stringifiedContent = JSON.stringify(content);
  return fs.writeFileSync(filename, stringifiedContent);
};
//  Create read function
const read = filename => {
  const content = fs.readFileSync(filename, { encoding: "utf8" });
  return JSON.parse(content);
};
module.exports = { save, read };
