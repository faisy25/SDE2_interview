// 3. Question: Check Anagrams
// Write a function areAnagrams that takes two strings as input and returns true if they are anagrams of each other, false otherwise. Ignore spaces and consider case insensitivity.

let str1, str2;

// str1 = "listen";
// str2 = "silent";
// // Output: true

// str1 = "apple";
// str2 = "pale";
// // Output: false

// str1 = "Dormitory";
// str2 = "Dirty room";
// // Output: true

// str1 = "The eyes";
// str2 = "They see";
// // Output: true

// str1 = "Hello";
// str2 = "Ole lh";
// // Output: true

str1 = "";
str2 = "Ole";
// // Output: false

// 1. Brute Force solution

const anagram = (str1, str2) => {
  // .replace(/\s+/g, '')    to remove spaces
  const string1 = str1
    .replace(/\s+/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  const string2 = str2
    .replace(/\s+/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  //   console.log(string1, string2);

  if (string1 === string2) return true;
  else return false;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Optimal Solutiom

// const anagram = (str1, str2) => {
//   if (str1.length === 0 || str2.length === 0) return false;
//   const hash1 = {};
//   const hash2 = {};

//   const string1 = str1.toLowerCase();
//   const string2 = str2.toLowerCase();

//   for (let s of string1) {
//     if (s === " ") continue;
//     if (!hash1[s]) hash1[s] = 1;
//     else hash1[s] += 1;
//   }

//   for (let s of string2) {
//     if (s === " ") continue;
//     if (!hash2[s]) hash2[s] = 1;
//     else hash2[s] += 1;
//   }

//   for (let key in hash1) {
//     if (key in hash1 && hash1[key] === hash2[key]) continue;
//     else return false;
//   }
//   return true;
// };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Refactor the above code.

// const optimizeString = (str) => {
//   const string = str.toLowerCase();
//   const hash = {};
//   for (let s of string) {
//     if (s === " ") continue;
//     if (!hash[s]) hash[s] = 1;
//     else hash[s] += 1;
//   }
//   return hash;
// };

// const anagram = (str1, str2) => {
//   if (str1.length === 0 || str2.length === 0) return false;

//   const hash1 = optimizeString(str1);
//   const hash2 = optimizeString(str2);

//   for (let key in hash1) {
//     if (key in hash1 && hash1[key] === hash2[key]) continue;
//     else return false;
//   }
//   return true;
// };

console.log(anagram(str1, str2));
