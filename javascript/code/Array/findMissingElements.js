// Array Comparison: Find Missing Elements
// Write a function findMissingElements(arr1, arr2) that takes two arrays and returns an array containing the elements that are present in arr1 but missing from arr2.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 3, 5];
// // Expected output: [1, 4]

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5];
// // Expected output: [1, 2, 3]

// let arr1 = [];
// let arr2 = [1, 2, 3];
// // Expected output: []

// let arr1 = [1, 2, 3];
// let arr2 = [];
// // Expected output: [1, 2, 3]

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// // Expected output: []

// let arr1 = ["apple", "banana", "orange"];
// let arr2 = ["banana", "orange"];
// // Expected output: ['apple']

// 1. Brute force solution

const findMissingElements = (arr1, arr2) => {
  const set2 = new Set(arr2);

  return arr1.filter((el) => !set2.has(el));
};

// 1. Optimal solution

// const findMissingElements = (arr1, arr2) => {
//   const hash = {};
//   const result = [];

//   for (let el of arr2) {
//     hash[el] = (hash[el] || 0) + 1;
//   }

//   for (let num of arr1) {
//     if (!(num in hash)) result.push(num);
//   }

//   return result;
// };

console.log(findMissingElements(arr1, arr2));
