// 3. Calculating Compound Interest
// Problem: Write a recursive function compoundInterest(P, r, n, t) that returns the amount of money accumulated after t years, including interest. The function should use the formula for compound interest:

// formula = 'A = P (1 + r/n)^(nt)'                         // ^ raise to (nt)
// where:
// P is the principal amount (initial investment)
// r is the annual interest rate (decimal)
// n is the number of times interest is compounded per year
// t is the time the money is invested for in years

function compoundInterest(P, r, n, t) {
  // Base case: when t is 0, return the principal amount
  if (t === 0) {
    return P;
  }
  // Calculate the compound factor for each period
  let compoundFactor = P * Math.pow(1 + r / n, n);
  //   console.log(compoundFactor);
  // Recursive case: calculate the amount for the next period
  return compoundInterest(compoundFactor, r, n, t - 1);
}

console.log(compoundInterest(1000, 0.05, 1, 10).toFixed(2)); // Output: 1628.89
console.log(compoundInterest(1500, 0.04, 4, 6).toFixed(2)); // Output: 1904.60
console.log(compoundInterest(2000, 0.03, 12, 5).toFixed(2)); // Output: 2323.23
