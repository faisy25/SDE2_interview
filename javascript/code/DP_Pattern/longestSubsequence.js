// Example 2: Longest Increasing Subsequence
// Problem Statement: Given an integer array nums, return the length of the longest strictly increasing subsequence.

// const nums = [10, 9, 2, 5, 3, 7, 101, 18];
// Output: 4

const nums = [0, 1, 0, 3, 2, 3];
// Output: 4

// const nums = [7, 7, 7, 7, 7, 7];
// Output : 1

// Brute Force solution

function lengthOfLIS(nums) {
  // Helper function to find LIS starting from index 'start'
  function findLIS(start, prev) {
    if (start === nums.length) return 0;

    let taken = 0;
    if (nums[start] > prev) {
      taken = 1 + findLIS(start + 1, nums[start]);
    }

    let notTaken = findLIS(start + 1, prev);

    return Math.max(taken, notTaken);
  }

  return findLIS(0, -Infinity); // Number.MIN_SAFE_INTEGER OR -Infinity  For the least min value
}
// Dynamic Programming solution

// const lengthOfLIS = (nums) => {
//   if (nums.length === 0) return 0;

//   let dp = new Array(nums.length).fill(1);

//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//   }

//   return Math.max(...dp);
// };

console.log(lengthOfLIS(nums));
