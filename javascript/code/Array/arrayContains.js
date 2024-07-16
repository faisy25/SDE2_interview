// Array Comparison: Check for Containment
// Write a function arrayContains(arr1, arr2) that takes two arrays and returns true if all elements of arr1 are contained within arr2 (regardless of order), and false otherwise.

// let arr1 = [1, 2, 3];
// let arr2 = [3, 2, 1, 4];
// // Expected output: true

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// // Expected output: false

// let arr1 = ["a", "b"];
// let arr2 = ["b", "c", "a"];
// // Expected output: true

// let arr1 = ["a", "b", "d"];
// let arr2 = ["a", "b", "c"];
// // Expected output: false

// let arr1 = [];
// let arr2 = [1, 2, 3];
// // Expected output: true

// let arr1 = [1, 2, 3];
// let arr2 = [];
// // Expected output: false

// let arr1 = [1, 2, 2, 2];
// let arr2 = [2, 1, 2, 3];
// // Expected output: true

// 1. Brute force solution

// const arrayContains = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     let found = false;
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) return false;
//   }
//   return true;
// };

// 1 . Optimal Solution

// const arrayContains = (arr1, arr2) => {
//   const array2 = new Set(arr2);
//   return arr1.every((el) => array2.has(el));
// };

// 2.  Optimal solution

const arrayContains = (arr1, arr2) => {
  const hash = {};

  for (let i = 0; i < arr2.length; i++) {
    if (!(arr2[i] in hash)) {
      // or hash[arr[i]]
      hash[arr2[i]] = 1;
    } else {
      hash[arr2[i]] += 1;
    }
  }

  console.log(hash);

  for (let i = 0; i < arr1.length; i++) {
    if (!(arr1[i] in hash) || arr1.length <= 0) return false;
    hash[arr1[i]] -= 1;
  }
  return true;

  //   return arr1.every((el) => el in hash);
};

console.log(arrayContains(arr1, arr2));
