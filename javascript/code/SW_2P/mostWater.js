// # Two Pointer Technique

// Question 3: Container With Most Water
// Problem: Given n non-negative integers a1, a2, ..., an where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis, forms a container that holds the most water.

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// Output: 49

// // 1. Brute Force solution
// const mostWater = (height) => {
//   let maxArea = 0;

//   for (let i = 0; i < height.length; i++) {
//     for (let j = 0; j < height.length; j++) {
//       let width = Math.abs(j - i);
//       console.log("width", width);
//       if (i !== j) {
//         if (width * Math.max(height[i], height[j]) > maxArea) {
//           console.log(maxArea, height[i], height[j]);
//           maxArea = width * Math.min(height[i], height[j]);
//         }
//       }
//     }
//   }

//   return maxArea;
// };

// 1. Two pointer solution

const mostWater = (height) => {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  //while (left <right) {
  while (left !== right) {
    let currentArea = Math.min(height[left], height[right]) * (right - left);

    if (currentArea > maxArea) {
      maxArea = currentArea;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

console.log(mostWater(height));
