// # Sliding Window Technique

// Question 2: Longest Substring with K Distinct Characters
// Problem: Given a string, find the length of the longest substring in it with no more than k distinct characters.
// Solution : https://www.youtube.com/watch?v=teM9ZsVRQyc

// let s = "araaci";
let s = "ccdaaabb";
let k = 2;
// Output: 4 ("araa")

// 1. Brute Force solution
// const longestSubstringK = (s, k) => {
//   let maxLength = 0;

//   for (let i = 0; i < s.length; i++) {
//     let hash = {};
//     for (let j = i; j < s.length; j++) {
//       let sub = s[j];
//       let objLength = Object.keys(hash).length;

//       if (hash[sub] || objLength < k) {
//         if (!hash[sub]) hash[sub] = 1;
//         else hash[sub] += 1;

//         objLength = Object.keys(hash).length;

//         if (objLength <= k) maxLength = Math.max(maxLength, j - i + 1);
//       } else break;
//     }
//   }

//   return maxLength;
// };

// 2. Two pointer solution

// const longestSubstringK = (s, k) => {
//   let maxLengh = 0;
//   let hash = {};
//   let l = 0;
//   let r = 0;

//   while (r < s.length) {
//     let rightChar = s[r];

//     if (!hash[rightChar]) hash[rightChar] = 1;
//     else hash[rightChar] += 1;

//     while (Object.keys(hash).length > k) {
//       let leftChar = s[l];
//       hash[leftChar] -= 1;
//       if (hash[leftChar] === 0) delete hash[leftChar];
//       l++;
//     }

//     maxLengh = Math.max(maxLengh, r - l + 1);
//     r++;
//   }
//   return maxLengh;
// };

// 2. Sliding Window solution

const longestSubstringK = (s, k) => {
  let maxLengh = 0;
  let hash = {};
  let l = 0;
  let r = 0;

  while (r < s.length) {
    let rightChar = s[r];

    if (!hash[rightChar]) hash[rightChar] = 1;
    else hash[rightChar] += 1;

    if (Object.keys(hash).length > k) {
      let leftChar = s[l];
      hash[leftChar] -= 1;
      if (hash[leftChar] === 0) delete hash[leftChar];
      l++;
    }

    maxLengh = Math.max(maxLengh, r - l + 1);
    r++;
  }
  return maxLengh;
};

console.log(longestSubstringK(s, k));
