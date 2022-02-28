// import fs
const fs = require('fs');
// import util from node
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
//  Function to write data to the JSON file given a destination and some content
const writeToFile = util.promisify(fs.writeFile);

module.exports = { readFromFile, writeToFile };