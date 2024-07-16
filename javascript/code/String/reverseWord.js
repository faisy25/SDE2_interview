// 1. Question: Reverse Words in a String
// Write a function reverseWords that takes a string as input and reverses the order of words in it while maintaining the order of characters within each word.

// Input: "Hello World"
// Output: "World Hello

// 1. Brute Force Solution

// const reverseWord = (str) => {
//   const wordArr = str.split(" ").reverse().join(" ");
//   return wordArr;
// };

// 2. Optimal Solution

const reverseWord = (str) => {
  const wordArr = str.split(" ");
  let reverseWord = [];
  for (let i = wordArr.length - 1; i >= 0; i--) {
    reverseWord.push(wordArr[i]);
  }
  return reverseWord.join(" ");
};

console.log(reverseWord("Hello World Elon"));
console.log(reverseWord("I love JavaScript")); // Output: "JavaScript love I"
console.log(reverseWord("OpenAI is awesome")); // Output: "awesome is OpenAI"
