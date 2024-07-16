// Object Comparison: Check for Subset
// Write a function isSubset(subObj, mainObj) that takes two objects and returns true if subObj is a subset of mainObj, and false otherwise.

// const mainObj = { a: 1, b: 2, c: 3 };
// const subObj = { a: 1, b: 2 };
// // Output: true

// const mainObj = { a: 1, b: { x: 2, y: 3 }, c: 3 };
// const subObj = { b: { x: 2 } };
// // Output: true

// const mainObj = { a: 1, b: 2, c: 3 };
// const subObj = { a: 1, d: 4 };
// // Output: false

// const mainObj = { a: { p: 1, q: 2 }, b: 3 };
// const subObj = { a: { p: 1 } };
// // Output: true

// const mainObj = { a: { p: 1, q: 2 }, b: 3 };
// const subObj = { a: { r: 4 } };
// // Output: false

const mainObj = { a: { p: 1, q: 2 }, b: 3, d: 4, e: 6 };
const subObj = { a: { p: 1 }, b: 3 };
// Output = true

// 1. Recursive Optimal Solution

const checkSubset = (mainObj, subObj) => {
  return Object.keys(subObj).every((ele) => {
    // console.log("elements", ele);
    if (typeof subObj[ele] == "object") {
      return checkSubset(mainObj[ele], subObj[ele]);
    }
    // console.log("sub :", subObj[ele]);
    // console.log(mainObj[ele]);
    return subObj[ele] === mainObj[ele];
  });
};

console.log(checkSubset(mainObj, subObj));
