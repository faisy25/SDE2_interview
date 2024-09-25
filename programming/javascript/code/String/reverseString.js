// 5. Question: Reverse String
// Write a function reverseString that takes a string as input and returns the string reversed.

let str;

// str = "hello";
// // Output: "olleh"

// str = "";
// // // Output: ""

// str = "Moon";
// // Output: "nooM"

// str = "a b c d e";
// // Output: "e d c b a"

// 1. Brute Force Solution

// const reverseString = (str) => {
// if ((str.length = 0 || str === " ")) return null;
//   return str.split("").reverse().join("");
// };

// 1. Optimal solution
// const reverseString = (str) => {
// if ((str.length = 0 || str === " ")) return null;
//   let word = "";
//   for (let s of str) {
//     word = s + word;
//   }
//   return word;
// };

const reverseString = (str) => {
  if ((str.length = 0 || str === " ")) return null;
  let word = "";
  for (let s = str.length - 1; s >= 0; s--) {
    word = word + str[s];
  }
  return word;
};

console.log(reverseString(str));
