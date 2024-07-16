// Array Comparison: Common Elements
// Write a function commonElements(arr1, arr2) that takes two arrays and returns an array containing the elements that are common to both.But it must not have duplicates.

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// // Expected Output: [3, 4, 5]

// const array1 = ["a", "b", "c", "d", "g"];
// const array2 = ["c", "d", "e", "f", "k", "y", "c"];
// // Expected Output: ['c', 'd']

// const array1 = [10, 20, 30, 40];
// const array2 = [15, 25, 35, 45];
// // Expected Output: []

const array1 = [true, false, true];
const array2 = [false, true, false];
// // Expected Output: [true, false]

// //1. Brute Force solution

// const commonElements = (arr1, arr2) => {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         result.push(arr1[i]);
//       }
//     }
//   }

//   return Array.from(new Set(result));
// };

// 2. Optimal solution

// const commonElements = (array1, array2) => {
//   const arr1 = new Set(array1);
//   const result = []; // OR       const result = new Set();

//   //   console.log(arr2.size);
//   for (let i = 0; i < array2.length; i++) {
//     // sets have property of size not length
//     if (arr1.has(array2[i])) {
//       result.push(array2[i]); // OR result.add(array2[i])
//     }
//   }
//   return Array.from(new Set(result)); // OR Array.from(result)
// };

// 3.Optimal solution
const commonElements = (array1, array2) => {
  const arr1 = new Set(array1);
  const arr2 = new Set(array2);
  const result = new Set();

  for (let val of arr1) {
    if (arr2.has(val)) {
      result.add(val);
    }
  }
  return Array.from(result);
};

console.log(commonElements(array1, array2));
