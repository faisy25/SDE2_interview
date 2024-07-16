// # Sliding Window Technique

// Question 3: Smallest Subarray with a Given Sum
// Problem: Given an array of positive integers and a positive integer S, find the length of the smallest contiguous subarray whose sum is greater than or equal to S. Return 0 if no such subarray exists.

let arr = [2, 1, 5, 2, 3, 2],
  s = 9;
// Output: 2 ([5, 2])

// // Brute Force Solution
// const subarraySum = (arr, s) => {
//   let minCount = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum = sum + arr[j];
//       if (sum >= s) {
//         minCount = Math.min(minCount, j - i + 1);
//       }
//     }
//   }

//   return minCount === Infinity ? 0 : minCount;
// };

// 1. Optimal Solution (Sliding window)
const subarraySum = (arr, s) => {
  let minCount = Infinity;
  let total = 0;
  let l = 0;

  for (let r = 0; r < arr.length; r++) {
    total += arr[r];

    while (total >= s) {
      minCount = Math.min(minCount, r - l + 1);

      total -= arr[l];
      l++;
    }
  }

  return minCount === Infinity ? 0 : minCount;
};

console.log(subarraySum(arr, s));
