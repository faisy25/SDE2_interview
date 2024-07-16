// 1. Sum of Digits (Using Recursion)
// Problem: Write a recursive function sumOfDigits(n) that returns the sum of the digits of n.

const sumOfDigits = (n) => {
  debugger;
  if (n < 10) return n;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
};

console.log(sumOfDigits(123)); // Output: 6
// console.log(sumOfDigits(4567)); // Output: 22
// console.log(sumOfDigits(9)); // Output: 9
// console.log(sumOfDigits(0)); // Output: 0
// console.log(sumOfDigits(9999)); // Output: 36
// console.log(sumOfDigits(10101)); // Output: 3

// ************************* NOTE ****************************
// Explanation :  For 123

// sumOfDigits(123)
// (n % 10) = 3                             // n % 10 = 12.3 , Remainder 3
// Math.floor(n/10) = 12                    // since floor fn round off 12.3 to 12

// sumOfDigits(12)
// (n % 10) = 2                             // n % 10 = 1.2 , Remainder 2
// Math.floor(n/10) = 1                    // since floor fn round off 1.2 to 1

// AND if it less than 10 return n i.e 1

// Recursive Call Unwinding process

// 1 + sumOfDigits(12) = 1 + 2 = 3
// 3 + sumOfDigits(123) = 3 + 3 = 6
