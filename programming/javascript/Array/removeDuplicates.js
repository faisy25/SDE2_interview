// Array Manipulation: Remove Duplicates
// Write a function removeDuplicates(arr) that takes an array and returns a new array with duplicate elements removed.

// Example 1:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

// Example 2:
// Input: [1, 1, 1, 1]
// Output: [1]

// Example 3:
// Input: [5, 4, 3, 2, 1, 5, 3]
// Output: [5, 4, 3, 2, 1]

// Example 4:
// Input: [10, 20, 30, 40, 50]
// Output: [10, 20, 30, 40, 50]

// Example 5:
// Input: []
// Output: []

// 1. Brute force solution

// const removeDuplicates = (arr) => {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) === -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// 2. Brute force solution

// const removeDuplicates = (arr) => {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     let duplicate = false;

//     for (let j = 0; j < newArr.length; j++) {
//       if (arr[i] === newArr[j]) {
//         duplicate = true;
//         break;
//       }
//     }

//     if (!duplicate) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// 1. Optimal solution

// const removeDuplicates = (arr) => {
//   const hash = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!hash[arr[i]]) {
//       hash[arr[i]] = 1;
//     } else {
//       hash[arr[i]] += 1;
//     }
//   }

//   let newArr = Object.keys(hash);
//   return newArr;
// };

// 2. Optimal solution

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
  // let mySet = new Set([1, 2, 3, 4, 5, 5, 5, 5, 5]);
  // console.log(mySet);    to check the properties of sets does not allow duplicate values
};

// let a = [1, 2, 2, 3, 4, 4, 5];
// let a = [1, 1, 1, 1];
// let a = [5, 4, 3, 2, 1, 5, 3];
// let a = [10, 20, 30, 40, 50];
let a = [];

console.log(removeDuplicates(a));
