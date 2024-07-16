// Array Manipulation: Chunk Array
// Write a function chunkArray(arr, size) that takes an array and splits it into groups of the specified size. For example, chunkArray([1, 2, 3, 4, 5], 2) should return [[1, 2], [3, 4], [5]].

let arr = [1, 2, 3, 4, 5];
let size = 2;
// // Expected output: [[1, 2], [3, 4], [5]]

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let size = 3;
// // Expected output: [[1, 2, 3], [4, 5, 6], [7]]

// let arr = [1, 2, 3, 4, 5];
// let size = 1;
// // Expected output: [[1], [2], [3], [4], [5]]

// let arr = [1, 2, 3, 4, 5];
// let size = 6;
// // Expected output: [[1, 2, 3, 4, 5]]

// let arr = [];
// let size = 3;
// // Expected output: []

// let arr = [1, 2, 3, 4];
// let size = 0;
// // Expected output: undefined (or handle as per preference, like [])

// let arr = [1, 2, 3, 4, 5];
// let size = -2;
// // Expected output: undefined (or handle as per preference, like [])

// 1. Brute Force solution

// const chunkArray = (arr, size) => {
//   if (size <= 0) return [];
//   const chunkArr = [];

//   for (let i = 0; i < arr.length; i += size) {
//     let chunk = arr.slice(i, i + size);
//     chunkArr.push(chunk);
//   }
//   return chunkArr;
// };

// 1. Optimal solution

const chunkArray = (arr, size) => {
  if (size <= 0) return [];
  const chunkArr = [];
  let pushArr = [];
  let count = size;

  for (let i = 0; i < arr.length; i++) {
    if (count > 0) {
      pushArr.push(arr[i]);
      count--;
    }
    if (count === 0 || i === arr.length - 1) {
      chunkArr.push(pushArr);
      pushArr = [];
      count = size;
    }
  }
  return chunkArr;
};

// const chunkArray = (arr, size) => {
//     const chunkArr = [];
//     let index = 0;

//     while (index < arr.length) {
//       let chunk = [];
//       // Build chunk of specified size or until end of array
//       for (let i = 0; i < size && index < arr.length; i++) {
//         chunk.push(arr[index]);
//         index++;
//       }
//       chunkArr.push(chunk);
//     }

//     return chunkArr;
//   };

console.log(chunkArray(arr, size));
