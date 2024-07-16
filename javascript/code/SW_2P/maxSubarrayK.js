// # Sliding Window Technique

// Question 1: Maximum Sum Subarray of Size K
// Problem: Given an array of integers and a number k, find the maximum sum of a subarray of size k.

// let arr = [2, 1, 5, 1, 3, 2];
// let k = 3;
// // Output: 9

// let arr = [2, 3, 1, 6, 5, 9, 8, 2];
// let k = 4;
// // Output: 28

// 1. Brute Force solution

// const maxSubarrayK = (arr, k) => {
//   if (arr.length < k) return null;
//   let maxNum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;

//     for (let j = i; j < i + k; j++) {
//       sum = sum + arr[j];
//       //   console.log("i : ", i, "j : ", j);
//       //   console.log("SUM : ", sum);
//     }

//     if (sum > maxNum) maxNum = sum;
//   }

//   return maxNum;
// };

// 1. Sliding Window solution

const maxSubarrayK = (arr, k) => {
  if (arr.length < k) return null;

  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum = maxSum + arr[i];
  }

  let currSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    currSum = currSum + arr[i] - arr[i - k];
    // console.log(currSum);
    if (currSum > maxSum) maxSum = currSum;
  }

  return maxSum;
};

console.log(maxSubarrayK(arr, k));
