// Object Manipulation: Merge Objects
// Write a function mergeObjects(obj1, obj2) that takes two objects and returns a new object that combines the properties of both, with properties from obj2 overwriting those from obj1 if there are conflicts.

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// // Output: { a: 1, b: 3, c: 4 }

// const obj1 = { a: 1, b: 2, d: 5 };
// const obj2 = { b: 3, c: 4 };
// // Output: { a: 1, b: 3, d: 5, c: 4 }

// const obj1 = { a: 1, b: { x: 2, y: 3 } };
// const obj2 = { b: { y: 4, z: 5 }, c: 6 };
// // Output: { a: 1, b: { x: 2, y: 4, z: 5 }, c: 6 }

// const obj1 = { a: { p: 1, q: 2 }, b: 3 };
// const obj2 = { a: { q: 3, r: 4 }, c: 5 };
// // Output: { a: { p: 1, q: 3, r: 4 }, b: 3, c: 5 }

///////////// ** NOTE ** ///////////////////////////////////

// // Shallow merge objects
// Object.assign(obj1, obj2);
// { ...obj1, ...obj2 };

// const obj2 = { a: { q: 3, r: 4 }, c: 5 };
//   console.log(obj1.hasOwnProperty("a"));   //true , It has "a" key in the object
//   obj2.a instanceof Object     // true ,since "a" key value is a object
//   obj2.a instanceof Object       // false ,since "a" key value is a number(except Object)

///////////// ** NOTE  END ** ///////////////////////////////////

// 1. Brute Force solution

// You can use Predefined libraries

// 1. Optimal solution (recursive)

const mergeObjects = (obj1, obj2) => {
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
        obj1[key] = mergeObjects(obj1[key], obj2[key]);
      } else {
        obj1[key] = obj2[key];
      }
    }
  }
  return obj1;
};

// .. using spread
// function mergeObjects(obj1, obj2) {
//   const result = { ...obj1 };

//   for (let key in obj2) {
//     if (obj2.hasOwnProperty(key)) {
//       if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
//         result[key] = mergeObjects(obj1[key], obj2[key]);
//       } else {
//         result[key] = obj2[key];
//       }
//     }
//   }
//   return result;
// }

console.log(mergeObjects(obj1, obj2));
