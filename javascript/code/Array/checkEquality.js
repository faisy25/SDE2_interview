// Array Comparison: Check for Equality
// Write a function arraysEqual(arr1, arr2) that takes two arrays and returns true if they are identical
// (same elements in the same order), and false otherwise.

// Example 1
// let arr1 = [1, 2, 3, 4];
// let arr2 = [1, 2, 3, 4];
// Output: true

// Example 2
// let arr1 = [1, 2, 3, 4];
// let arr2 = [1, 2, 3, 5];
// Output: false

const checkEquality = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  //   if (arr1.length && arr2.length === 0) return true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
    else continue;
  }
  return true;
};

let a1 = [1, 2, 3, 4];
let a2 = [1, 2, 3, 4];

// let a1 = [1, 2, 3, 4];
// let a2 = [1, 2, 3, 5];

// let a1 = [1, 2, 3, 4, 5];
// let a2 = [1, 2, 3, 4];

// let a1 = [];
// let a2 = [];

console.log(checkEquality(a1, a2));
