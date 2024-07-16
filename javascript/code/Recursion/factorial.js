// 1. Factorial Iterative

const iterative = (n) => {
  let answer = 1;
  if (n === 2) answer = 2;

  for (let i = 2; i <= n; i++) {
    answer = answer * i;
  }
  return answer;
};

console.log(iterative(5));

// 1. Factorial Recursion

const recursive = (n) => {
  if (n === 2) return 2;

  return (n = n * recursive(n - 1));
};

console.log(recursive(5));
