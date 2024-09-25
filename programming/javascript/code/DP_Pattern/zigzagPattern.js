// # PATTERN PRINTING

// Example 2: Zigzag Pattern
// Problem Statement:
// Given an integer n, create a zigzag pattern using asterisks (*). The pattern should have n rows.

const n = 4;

// Output:
// *   *
//  * *
//   *
//  * *
// *   *

const zigzagPattern = (n) => {
  let N = 2 * n - 1;
  for (let i = 1; i <= N; i++) {
    let row = "";
    for (let j = 1; j <= N; j++) {
      if (i === j || j === N - i + 1) row += "*";
      else row += " ";
    }
    console.log(row);
  }
};

zigzagPattern(n);
