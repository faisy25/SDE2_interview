// 2. Question: Count Character Frequencies
// Implement a function countCharacters that takes a string as input and returns a dictionary where keys are characters and values are their frequencies in the string. Ignore spaces.

let str = "hello world";
// Output: {'h': 1, 'e': 1, 'l': 3, 'o': 2, 'w': 1, 'r': 1, 'd': 1}

// 1. Optimal Solution

const countCharacters = (str) => {
  const hash = {};
  const strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (!hash[strArr[i]]) {
      if (strArr[i] === " ") continue;
      hash[strArr[i]] = 1;
    } else {
      hash[strArr[i]] += 1;
    }
  }
  return hash;
};

// const countCharacters = (str) => {
//   const hash = {};
//   for (const char of str) {
//     if (char === " ") continue; // Skip spaces

//     if (hash.hasOwnProperty(char)) {
//       hash[char]++;
//     } else {
//       hash[char] = 1;
//     }
//   }
//   return hash;
// };

console.log(countCharacters(str));
