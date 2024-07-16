// 1. Iterative fibonacci

const iterative = (n) => {
  let arr = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  //   console.log(arr);
  return arr[n];
};

console.log(iterative(2));

// 1. Recursive fibonacci

const recursive = (n) => {
  if (n < 2) return n;

  return recursive(n - 1) + recursive(n - 2);
};

console.log(recursive(2));
