// Array Manipulation: Flatten a Nested Array
// Write a function flattenArray(arr) that takes a nested array of any depth and returns a new array with all elements flattened into a single level.

// const nestedArray = [1, [2, [3, [4, [5]]]]];

// o/p1 = [1, 2, 3, 4, 5]

// const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
// o/p2 = [1, 2, 3, 4, 5, 6, 7]

// const nestedArray = [1, [2, [3, [4, 5]]], [6, [7, [8, [9, 10]]]]];
// o/p3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const nestedArray = [[1, 2, [3]], 4, [[5, 6], 7], 8, [9, [10]]];
// o/p4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const nestedArray = [1, [], [2, [], [3, [], [4, [], [5]]]]];
// o/p5 = [1, 2, 3, 4, 5]

// 1. Brute Force Solution

// const flattenArray = (arr) => {
//   const flatArr = arr.flat(Infinity);
//   return flatArr;
// };

// 2. Solution (recursive)

// const flattenArray = (nested) => {
//   const flat = [];

//   const handleFlat = (arr) => {
//     let counter = 0;

//     while (counter < arr.length) {
//       const val = arr[counter];
//       if (Array.isArray(val)) {
//         handleFlat(val);
//       } else {
//         flat.push(val);
//       }
//       counter++;
//     }
//   };
//   handleFlat(nested);
//   return flat;
// };

// 3. Solution

function flattenArray(input) {
  const stack = [...input]; // OR    const stack = input;

  const res = [];
  while (stack.length) {
    // pop value from stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // reverse to restore input order
  return res.reverse();
}

console.log(flattenArray(nestedArray));
