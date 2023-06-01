const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const { configArr } = require("./events-config");

let resultObj = {};

configArr.forEach((item) => {
  let { id, ...rest } = item; // use destructuring to separate id from the rest of the object
  let newId = uuidv4(); // generate a new uuid

  // convert all keys to lowercase and assign values
  let lowerCaseKeysObj = Object.keys(rest).reduce((newObj, key) => {
    newObj[key.toLowerCase()] = rest[key];
    return newObj;
  }, {});

  resultObj[newId] = lowerCaseKeysObj; // use the new uuid as the key and the rest of the object as the value
});

// Write the result object to a JSON file
fs.writeFile("event.json", JSON.stringify(resultObj, null, 2), (err) => {
  if (err) {
    console.error("Something went wrong:", err);
  } else {
    console.log("File has been created");
  }
});
