// # DYNAMIC PROGRAMMING

// Example 1: House Robber Problem
// Problem Statement: You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// House Robber 1
// const rob1 = (nums) => {
//   if (nums.length === 0) return 0;
//   if (nums.length < 2) return nums[0];

//   let dp = [];

//   dp[0] = nums[0];
//   dp[1] = Math.max(nums[0], nums[1]);

//   for (let i = 2; i < nums.length; i++) {
//     dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
//     dp[i];
//   }

//   return dp[dp.length - 1];
// };

// House Robber 1
// const rob1 = (nums) => {
//   let loot1 = 0;
//   let loot2 = 0;

//   for (let num of nums) {
//     let temp;
//     temp = Math.max(num + loot1, loot2);
//     loot1 = loot2;
//     loot2 = temp;
//   }

//   return loot2;
// };

// console.log(rob1([1, 2, 3, 1])); // 4
// console.log(rob1([2, 7, 9, 3, 1])); // 12
// console.log(rob1([5, 3, 4, 11, 2])); // 16
// console.log(rob1([3, 10, 3, 1, 2])); // 12
// console.log(rob1([6, 7, 1, 30, 8, 2, 4])); // 41
// console.log(rob1([100, 1, 1, 100])); // 200
// console.log(rob1([])); // 0
// console.log(rob1([1, 1, 1, 1, 1, 1, 1, 1])); // 4
// console.log(rob1([2, 4, 8, 9, 9, 3])); // 19
// console.log(rob1([1, 2])); // 2

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Example 2: House Robber 2 Problem
// Problem Statement: You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// First method 1

// const maxRob = (nums) => {
//   if (nums.length === 0) return 0;
//   if (nums.length < 2) return nums[0];
//   let dp = [];
//   dp[0] = nums[0];
//   dp[1] = Math.max(nums[0], nums[1]);
//   for (let i = 2; i < nums.length; i++) {
//     dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
//     dp[i];
//   }
//   return dp[dp.length - 1];
// };

// const rob2 = (arr) => {
//   const [, ...firstArr] = arr;
//   //   console.log(firstArr);
//   let newArr = arr;
//   newArr.pop();
//   const secondArr = newArr;
//   //   console.log(secondArr);

//   const maxRob1 = maxRob(firstArr);
//   const maxRob2 = maxRob(secondArr);

//   return Math.max(maxRob1, maxRob2);
// };

// Second Method

const rob2 = (nums) => {
  if (nums.length === 1) return nums[0];
  if (nums.length === 0) return 0;

  const robLinear = (arr) => {
    let loot1 = 0;
    let loot2 = 0;

    for (let num of arr) {
      let temp = Math.max(num + loot1, loot2);
      loot1 = loot2;
      loot2 = temp;
    }

    return loot2;
  };

  return Math.max(
    robLinear(nums.slice(0, nums.length - 1)),
    robLinear(nums.slice(1))
  );
};

// console.log(rob2([2, 3, 2])); // 3
// console.log(rob2([1, 2, 3, 1])); // 4
// console.log(rob2([0])); // 0
// console.log(rob2([1])); // 1
// console.log(rob2([1, 2])); // 2
// console.log(rob2([1, 2, 3])); // 3
// console.log(rob2([1, 3, 1, 3, 100])); // 103
console.log(rob2([200, 3, 140, 20, 10])); // 340
// console.log(rob2([100, 1, 1, 100, 1])); // 200
// console.log(rob2([1, 2, 3, 1, 1, 2, 3])); // 7
