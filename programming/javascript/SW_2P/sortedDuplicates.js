// # Two Pointer Technique

// Question 2: Remove Duplicates from Sorted Array
// Problem: Given a sorted array, remove the duplicates in-place such that each element appears only once and returns the new length.

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// Output: 5, arr = [0, 1, 2, 3, 4]

const sortedDuplicates = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let l = i;
    let r = i + 1;

    if (arr[l] !== arr[r]) newArr.push(arr[l]);
    else continue;
  }

  return newArr;
};

console.log(sortedDuplicates(arr));
