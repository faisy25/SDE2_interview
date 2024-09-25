// 2. Directory Size Calculation
// Problem: Write a recursive function directorySize(directory) that returns the total size of a directory. The directory can contain files (with a size property) and subdirectories (which are also directories).

const myDirectory = {
  name: "root",
  size: 0, // Size is not directly relevant here
  contents: [
    { name: "file1.txt", size: 1000 },
    { name: "file2.txt", size: 2000 },
    {
      name: "subdir",
      size: 0,
      contents: [
        { name: "file3.txt", size: 3000 },
        { name: "file4.txt", size: 4000 }
      ]
    }
  ]
};
// Output = 10000

// const myDirectory = {
//   name: "root",
//   size: 0, // Size is not directly relevant here
//   contents: [
//     { name: "file1.txt", size: 1000 },
//     { name: "file2.txt", size: 2000 },
//     {
//       name: "subdir",
//       size: 0,
//       contents: [
//         { name: "file3.txt", size: 3000 },
//         { name: "file4.txt", size: 4000 }
//       ]
//     },
//     {
//       name: "subdir2",
//       size: 2000,
//       contents: [
//         { name: "file5.txt", size: 3000 },
//         {
//           name: "subdir4",
//           size: 4000,
//           contents: [
//             { name: "file6.txt", size: 3000 },
//             { name: "file7.txt", size: 4000 }
//           ]
//         }
//       ]
//     }
//   ]
// };
// // Output = 3200   //NOTE subdir4 , subdir2 will be added 2 times

// const codeDirectory = {
//   name: "code",
//   size: 0, // Size is not directly relevant here
//   contents: [
//     {
//       name: "Api_Dom_Functions",
//       size: 0,
//       contents: [
//         { name: "index_setInterval.html", size: 988 },
//         { name: "index_setTimeout.html", size: 295 },
//         { name: "setInterval.js", size: 1475 },
//         { name: "setTimeout.js", size: 1143 }
//       ]
//     },
//     {
//       name: "Array",
//       size: 0,
//       contents: [
//         { name: "arrayContains.js", size: 1901 },
//         { name: "checkEquality.js", size: 916 },
//         { name: "chunkArray.js", size: 2140 },
//         { name: "commonElements.js", size: 1857 },
//         { name: "compareFrequencies.js", size: 1607 },
//         { name: "findMissingElements.js", size: 1269 },
//         { name: "flattenArray.js", size: 1776 },
//         { name: "removeDuplicates.js", size: 1962 },
//         { name: "rotateArray.js", size: 1534 },
//         { name: "subArrayCheck.js", size: 1402 }
//       ]
//     },
//     {
//       name: "ExceptionHandling",
//       size: 0,
//       contents: [{ name: "index.js", size: 1736 }]
//     },
//     {
//       name: "Object",
//       size: 0,
//       contents: [
//         { name: "checkEquality.js", size: 1477 },
//         { name: "checkSubset.js", size: 1274 },
//         { name: "findDifference.js", size: 3329 },
//         { name: "invertObject.js", size: 1449 },
//         { name: "mergeObjects.js", size: 2184 }
//       ]
//     },
//     {
//       name: "Promises",
//       size: 0,
//       contents: [
//         { name: "chainPromises.js", size: 2503 },
//         { name: "eventPromises.js", size: 1892 },
//         { name: "index.html", size: 1327 },
//         { name: "promises.js", size: 6091 },
//         { name: "promisesTricky.js", size: 2564 }
//       ]
//     },
//     {
//       name: "Recursion",
//       size: 0,
//       contents: [
//         { name: "directorySize.js", size: 672 },
//         { name: "factorial.js", size: 382 },
//         { name: "fibonacci.js", size: 406 },
//         { name: "sumOfDigits.js", size: 1164 }
//       ]
//     },
//     {
//       name: "String",
//       size: 0,
//       contents: [
//         { name: "anagram.js", size: 2747 },
//         { name: "countCharacters.js", size: 999 },
//         { name: "isPalindrome.js", size: 911 },
//         { name: "longestPalindrome.js", size: 2876 },
//         { name: "reverseString.js", size: 959 },
//         { name: "reverseWord.js", size: 865 }
//       ]
//     },
//     { name: "ArrayQuestion.txt", size: 2092 },
//     { name: "notes.txt", size: 100 },
//     { name: "ObjectQuestion.txt", size: 1058 },
//     { name: "Recursion.txt", size: 1584 },
//     { name: "stringQuestion.txt", size: 1165 }
//   ]
// };
// // Output = 64071

const directorySize = (directory) => {
  let totalSize = directory.size;
  for (let item of directory.contents) {
    // console.log(totalSize);
    if (item.size !== undefined) totalSize += item.size;
    if (item.contents !== undefined) totalSize += directorySize(item);
  }
  return totalSize;
};

console.log(directorySize(myDirectory));
