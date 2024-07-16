// Example 1: Pascal's Triangle
// Problem Statement: Given an integer numRows, return the first numRows of Pascal's triangle. In Pascal's triangle, each number is the sum of the two numbers directly above it.

const rows = 5;
// console.log(generate(numRows));
// Output:
// [
//      [1],
//     [1, 1],
//    [1, 2, 1],
//   [1, 3, 3, 1],
//  [1, 4, 6, 4, 1]
// ]

const pascalTraingle = (rows) => {
  const triangle = [];

  for (let i = 0; i < rows; i++) {
    triangle[i] = [];
    triangle[i][0] = 1;

    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
    triangle[i][i] = 1;
  }
  return triangle;
};

console.log(pascalTraingle(rows));
