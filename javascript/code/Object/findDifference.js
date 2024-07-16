// Object Comparison: Find Differences
// Write a function objectDifferences(obj1, obj2) that takes two objects and returns an object describing the differences, including keys that are present in one object but not the other, and keys with different values.

// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { a: 1, b: 3, d: 4 };
// // Expected Output: { b: { inObj1: 2, inObj2: 3 }, c: { inObj1: true, inObj2: false, value: 3 }, d: { inObj1: false, inObj2: true, value: 4 } }

// const obj1 = { x: "apple", y: "banana" };
// const obj2 = { x: "apple", y: "cherry", z: "kiwi" };
// // Expected Output: { y: { inObj1: 'banana', inObj2: 'cherry' }, z: { inObj1: false, inObj2: true, value: 'kiwi' } }

// const obj1 = { name: "Alice", age: 25, city: "Wonderland" };
// const obj2 = { country: "Neverland", profession: "Explorer" };
// // Expected Output: { name: { inObj1: true, inObj2: false, value: 'Alice' }, age: { inObj1: true, inObj2: false, value: 25 }, city: { inObj1: true, inObj2: false, value: 'Wonderland' }, country: { inObj1: false, inObj2: true, value: 'Neverland' }, profession: { inObj1: false, inObj2: true, value: 'Explorer' } }

// const obj1 = { a: 1, b: { x: 10, y: 20 } };
// const obj2 = { c: 5, d: { m: 30, n: 40 } };
// // Expected Output: { a: { inObj1: true, inObj2: false, value: 1 }, b: { inObj1: true, inObj2: false, value: { x: 10, y: 20 } }, c: { inObj1: false, inObj2: true, value: 5 }, d: { inObj1: false, inObj2: true, value: { m: 30, n: 40 } } }

const obj1 = { a: 1, b: { x: 10, y: 20 }, c: 4 };
const obj2 = { c: 5, d: { m: 30, n: 40 } };
// // Expected Output:{
// //     a: { inObj1: true, inObj2: false, value: 1 },
// //     b: { inObj1: true, inObj2: false, value: { x: 10, y: 20 } },
// //     c: { inObj1: 4, inObj2: 5 },
// //     d: { inObj1: false, inObj2: true, value: { m: 30, n: 40 } }
// //   }

// 1 .Brute force solution

// const findDifferences = (obj1, obj2) => {
//   const shallowMerge = { ...obj1, ...obj2 };
//   const differences = {};

//   for (let key in shallowMerge) {
//     if (obj1[key] && !obj2[key]) {
//       differences[key] = { inObj1: true, obj2: false, value: obj1[key] };
//     } else if (!obj1[key] && obj2[key]) {
//       differences[key] = { inObj1: false, obj2: true, value: obj2[key] };
//     } else if (obj1[key] && obj2[key]) {
//       if (obj1[key] === obj2[key]) continue;
//       else if (obj1[key] !== obj2[key]) {
//         differences[key] = {
//           inObj1: obj1[key],
//           obj2: obj2[key]
//         };
//       }
//     }
//   }

//   return differences;
// };

// Optimal solution
const findDifferences = (obj1, obj2) => {
  const differences = {};
  const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

  allKeys.forEach((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (value1 !== value2) {
      if (key in obj1 && key in obj2) {
        differences[key] = { inObj1: value1, inObj2: value2 };
      } else if (key in obj1) {
        differences[key] = { inObj1: true, inObj2: false, value: value1 };
      } else {
        differences[key] = { inObj1: false, inObj2: true, value: value2 };
      }
    }
  });

  return differences;
};

console.log(findDifferences(obj1, obj2));
