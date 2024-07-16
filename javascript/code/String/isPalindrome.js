// Question : Check whether the string is Palindrome.

let str;

// str = "racecar";
// // Output: true

// str = "noon";
// // Output: true

// str = "hello";
// // Output: false

str = "";
// // Output: true

// 1. Brute Force Solution

// const isPalindrome = (str) => {
//   const reverseStr = str.split("").reverse().join("");
//   if (str === reverseStr) return true;
//   else return false;
// };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Optimal Solution  O(n)

const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;

  //   console.log(left, right);

  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else return false;
  }
  return true;
};

console.log(isPalindrome(str));
