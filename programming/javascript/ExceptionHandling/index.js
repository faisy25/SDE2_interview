// 1. Function divide (JS Example)

// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero");
//   }
//   return a / b;
// }
// try {
//   const dividend = divide(10, 0);
//   console.log("Answer", dividend);
// } catch (error) {
//   console.log("Error", error.message);
// }

// OR

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (error) {
    // console.log("Error", error.message);
    return "Error", error.message;
  }
}
console.log(divide(10, 0));
console.log(divide(10, 5));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Handle file system exception (Nodejs)

const fs = require("fs");

const readFromFile = (filename) => {
  try {
    let data = fs.readFileSync(filename, "utf-8");
    console.log("File content:", data);
  } catch (err) {
    console.log("Error reading file", err.message);
  }
};

readFromFile("nonexistentfile.txt");
readFromFile("../notes.txt");

// You can add finally with try and catch which always run at the end
// USING FINALLY

const readFromFileFinally = (filename) => {
  let check = false;
  try {
    let data = fs.readFileSync(filename, "utf-8");
    console.log("File content:", data);
    check = true;
  } catch (err) {
    check = false;
    console.log("Error reading file", err.message);
  } finally {
    if (!check) console.log("Operation failed");
    else console.log("Operation sucessful");
  }
};

readFromFileFinally("nonexistentfile.txt");
readFromFileFinally("../notes.txt");
