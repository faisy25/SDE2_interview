// # Two Pointer Technique

// Question 1: Find Pair with Given Sum
// Problem: Given an array of integers sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

let arr = [1, 2, 3, 4, 6],
  target = 6;
// Output: [1, 3];

const pairSum = (arr, target) => {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    console.log(l, r);
    if (arr[l] + arr[r] > target) {
      r--;
    } else if (arr[l] + arr[r] < target) {
      l++;
    } else return [l, r];
  }
};

console.log(pairSum(arr, target));
