// Array Comparison: Check for Equality
// Write a function arraysEqual(arr1, arr2) that takes two arrays and returns true if they are identical (same elements in the same order), and false otherwise.

// Example 1
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
// Output: true

// Example 2
// arr1 = [1, 2, 3, 4];
// arr2 = [1, 2, 3, 5];
// Output: false

function checkEquality(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
