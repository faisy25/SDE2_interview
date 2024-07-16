// Object Manipulation: Invert Key-Value Pairs
// Write a function invertObject(obj) that takes an object and returns a new object with keys and values swapped.

// const obj = { a: 1, b: 2, c: 3 };
// // Output: { '1': 'a', '2': 'b', '3': 'c' }

// const obj = { x: "apple", y: "banana", z: "cherry" };
// // Output: { 'apple': 'x', 'banana': 'y', 'cherry': 'z' }

// const obj = { 1: "one", 2: "two", 3: "three" };
// // Output: { 'one': '1', 'two': '2', 'three': '3' }

const obj = { key1: "value1", key2: "value2" };
// // Output: { 'value1': 'key1', 'value2': 'key2' }

// const obj = {};
// // Output: {}

// 1. Brute force solution
const invertObject = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  //   console.log(keys);
  //   console.log(values);

  const hash = {};

  for (let i = 0; i < keys.length; i++) {
    if (!hash[values[i]]) hash[values[i]] = keys[i];
  }
  return hash;
};

// 2. Optimal solution

// const invertObject = (obj) => {
//   const inverted = {};

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       inverted[obj[key]] = key;
//     }
//   }
//   return inverted;
// };

// 3. Optimal solution
// function invertObject(obj) {
//     return Object.entries(obj).reduce((acc, [key, value]) => {
//         acc[value] = key;
//         return acc;
//     }, {});
// }

console.log(invertObject(obj));
