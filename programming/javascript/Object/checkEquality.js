// Object Comparison: Check for Equality
// Write a function objectsEqual(obj1, obj2) that takes two objects and returns true if they have identical keys and values, and false otherwise.

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
// // true

// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { a: 1, b: 2, d: 3 };
// // false

// Example 3
// const obj1 = { a: 1, b: 2 };
// const obj2 = { a: 1, b: 2, c: 3 };
// // false

// Example 4
// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { a: 1, b: 2, c: "3" };
// // false

// Example 5
// const obj1 = { 1: 1, 2: 2, 3: "3" };
// const obj2 = { 1: 1, 2: 2, 3: "3" };
// // false

// 1. Brute Force Solution
const checkEquality = (obj1, obj2) => {
  //   console.log(JSON.stringify(obj1));
  //   console.log(JSON.stringify(obj2));
  if (JSON.stringify(obj1) !== JSON.stringify(obj2)) return false;
  else return true;
};

// 2. Optimal Solution

// const checkEquality = (obj1, obj2) => {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) return false;

//   for (let key of keys1) {
//     if (!(key in obj2) || obj1[key] !== obj2[key]) return false;
//     // console.log(!(key in obj2)); this check obj2 has value
//     // console.log(obj1[key], "obj1");
//     // console.log(obj2[key], "obj2");
//   }
//   return true;
// };

console.log(checkEquality(obj1, obj2));
