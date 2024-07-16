// Array Comparison: Compare Frequencies
// Write a function compareFrequencies(arr1, arr2) that takes two arrays and returns true if both arrays have the same frequency of elements (order doesn't matter), and false otherwise.

let arr1 = [1, 2, 3];
let arr2 = [3, 1, 2];
// // Expected output: true

// let arr1 = [1, 2, 2, 3];
// let arr2 = [3, 1, 2, 2];
// // Expected output: true

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4];
// // Expected output: false

// let arr1 = [];
// let arr2 = [];
// // Expected output: true

// let arr1 = [1, 2, 2, 3];
// let arr2 = [3, 1, 2];
// // Expected output: false

// let arr1 = [1, 2, 2, 3];
// let arr2 = [3, 1, 2, 4];
// // Expected output: false

// 1. Brute force solution

// const compareFrequencies = (arr1, arr2) => {
//   const sort1 = arr1.sort((a, b) => a - b);
//   const sort2 = arr2.sort((a, b) => a - b);

//   if (sort1.length !== sort2.length) return false;

//   for (let i = 0; i < sort1.length; i++) {
//     if (sort1[i] !== sort2[i]) return false;
//   }
//   return true;
// };

//  1. Optimal solution

const compareFrequencies = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const count1 = {};
  const count2 = {};

  for (let num of arr1) {
    count1[num] = (count1[num] || 0) + 1;
  }
  for (let num of arr2) {
    count2[num] = (count2[num] || 0) + 1;
  }

  console.log(count1, count2);

  for (let key in count1) {
    if (count1[key] !== count2[key]) return false;
  }
  return true;
};

console.log(compareFrequencies(arr1, arr2));
