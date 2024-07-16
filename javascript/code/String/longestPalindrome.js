// 4. Question: Longest Palindromic Substring
// Implement a function longestPalindrome that finds the longest palindromic substring in a given string.

let str;

str = "racecar";
// // Output: "racecar"

// str = "abaxyzzyxf";
// // Output: "xyzzyx"

// str = "banana";
// // Output: "anana"
// console.log(str.substring(1, 5));

// str = "a";
// // Output: "a"

// str = "ac";
// // Output: "a"

// 1. Brute Force Solution O(n^3)

// const isPalindrome = (str) => {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) return false;
//     left++;
//     right--;
//   }
//   return true;
// };

// const longestPalindrome = (str) => {
//   if (str.length <= 1) return str;

//   let max_length = 1;
//   let max_string = str.substring(0, 1);

//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       let substring = str.substring(i, j + 1);
//       if (substring.length > max_length && isPalindrome(substring)) {
//         max_length = substring.length;
//         max_string = substring;
//       }
//     }
//   }

//   return max_string;
// };

// 2. Optimize solution
// Better than previous solution O(n^2) Using Dynamic Programming

// const longestPalindrome = (str) => {
//   if (str.length < 1) return "";
//   let start = 0;
//   let end = 0;

//   for (let i = 0; i < str.length; i++) {
//     const len1 = expandAroundCenter(str, i, i); // Odd Numbers
//     const len2 = expandAroundCenter(str, i, i + 1); // Odd Numbers
//     const len = Math.max(len1, len2);

//     if (len > end - start) {
//       start = i - Math.floor((len - 1) / 2);
//       end = i + Math.floor(len / 2);
//     }
//   }
//   return str.substring(start, end + 1);
// };

// const expandAroundCenter = (s, left, right) => {
//   while (left >= 0 && right < s.length && s[left] === s[right]) {
//     left--;
//     right++;
//   }
//   return right - left - 1; // Length of the palindrome
// };

// 3. Optimal Solution O(n^3)

function longestPalindrome(s) {
  let res = "";
  let resLen = 0;

  for (let i = 0; i < s.length; i++) {
    // Odd length palindromes
    let l = i,
      r = i;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLen) {
        res = s.slice(l, r + 1);
        resLen = r - l + 1;
      }
      l--;
      r++;
    }

    // Even length palindromes
    (l = i), (r = i + 1);
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLen) {
        res = s.slice(l, r + 1);
        resLen = r - l + 1;
      }
      l--;
      r++;
    }
  }

  return res;
}

// Optimal Solution O(n) Manchar's Solution
// Not asked in the interview

console.log(longestPalindrome(str));
