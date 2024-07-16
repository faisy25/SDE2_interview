// Array Manipulation: Rotate Elements
// Write a function rotateArray(arr, k) that takes an array and a number k, and returns a new array with the elements rotated k positions to the right. For example, rotateArray([1, 2, 3, 4, 5], 2) should return [4, 5, 1, 2, 3].

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// // Expected output: [4, 5, 1, 2, 3]

// let arr = [1, 2, 3, 4, 5];
// let k = 0;
// // Expected output: [1, 2, 3, 4, 5]

// let arr = [1, 2, 3, 4, 5];
// let k = 5;
// // Expected output: [1, 2, 3, 4, 5]

// let arr = [1, 2, 3, 4, 5];
// let k = 7;
// // Expected output: [4, 5, 1, 2, 3]

// let arr = [1, 2];
// let k = 3;
// // Expected output: [2, 1]

// let arr = [1];
// let k = 1;
// // Expected output: [1]

let arr = [];
let k = 3;
// // Expected output: []

// Brute Force solution

// const rotateArray = (arr, k) => {
//   if (arr.length === 0) return [];
//   for (let i = 0; i < k; i++) {
//     arr.unshift(arr.pop());
//   }
//   return arr;
// };

// Optimal Solution

// const rotateArray = (arr, k) => {
//   const n = arr.length;
//   k = k % n;
//   if (k === 0) return arr.slice();

//   const result = [];
//   for (let i = 0; i < n; i++) {
//     result[(i + k) % n] = arr[i];
//   }
//   return result;
// };

// Optimal Solution

const rotateArray = (arr, k) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result[(i + k) % arr.length] = arr[i];
  }
  return result;
};

console.log(rotateArray(arr, k));
