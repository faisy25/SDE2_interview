// Array Comparison: Subarray Check
// Write a function isSubarray(arr1, arr2) that takes two arrays and returns true if arr1 is a subarray of arr2, and false otherwise.

// const arr1 = [2, 3, 4];
// const arr2 = [1, 2, 3, 4, 5];
// // Output: true

// const arr1 = ["a", "b"];
// const arr2 = ["x", "y", "z", "a", "b", "c"];
// // Output: true

// const arr1 = [7, 8, 5];
// const arr2 = [1, 2, 3, 4, 5];
// // Output: false

// const arr1 = [7, 8];
// const arr2 = [1, 2, 3, 4, 5];
// // Output: false

// const arr1 = ["d", "e"];
// const arr2 = ["a", "b", "c", "d", "e"];
//  // Output: true

const arr1 = ["e", "d"];
const arr2 = ["a", "b", "c", "d", "e"];
// // Output: false

// const arr1 = [3, 4];
// const arr2 = [1, 3, 2, 4, 5];
// // Output : false

// 1. Predefined methods

// const subArrayCheck = (array1, array2) => {
//   const str1 = arr1.join(",");
//   const str2 = arr2.join(",");
//   console.log("str1:", str1, "str2:", str2);

//   return str2.includes(str1);
// };

// 2. Optimal solution

const subArrayCheck = (array1, array2) => {
  let l1 = array1.length;
  let l2 = array2.length;

  for (let i = 0; i <= l2 - l1; i++) {
    let j;
    for (j = 0; j < l1; j++) {
      if (array2[i + j] !== array1[j]) break;
    }

    if (j === l1) return true;
  }
  return false;
};

console.log(subArrayCheck(arr1, arr2));
