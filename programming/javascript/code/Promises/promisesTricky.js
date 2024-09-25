// 1. What happens if you try to resolve or reject a Promise multiple times? Provide an example and explain the behavior.

const promise1 = new Promise((res, rej) => {
  res("case1");
  res("case2");
  rej("rej case1");
});
// console.log(promise1);
promise1.then((res) => console.log(res)).catch((err) => console.log(err));

// output : A Promise can only be resolved or rejected once. Any subsequent calls to resolve or reject are ignored.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Explain how you would convert a function that uses callbacks to handle asynchronous operations into a function that returns a Promise. Provide an example with setTimeout.

// a. Callback
const delayWithCallback = (ms, callback) => {
  setTimeout(() => {
    callback(`Delayed for ${ms}ms`);
  }, ms);
};
delayWithCallback(1000, (message) => console.log("Delay Callback:", message));

// b. Promise
const delayWithPromise = (ms) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Delayed for ${ms}ms`);
    }, ms);
  });
};
delayWithPromise(1000)
  .then((res) => console.log("Delay Promise:", res))
  .catch((err) => console.log(err));

// Output :
// Delay Callback: Delayed for 1000ms
// Delay Promise: Delayed for 1000ms

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question : Achive This

// Output 1 :                                               Output 2 :
// 5                                                        5
// undefined                                                After 3sec
// apple                                                    apple
// { name: 'John', age: 35 }                                { name: 'John', age: 35 }
// After 3sec

// Output 1 Solution
let a1 = 5;
const b1 = () => {
  setTimeout(() => {
    console.log("After 3sec");
  }, 3000);
};
const c1 = "apple";
const d1 = { name: "John", age: 35 };

console.log(a1);
b1();
console.log(c1);
console.log(d1);

// Output 2 Solution
let a2 = 5;
const b2 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("After 3sec");
      res();
    }, 3000);
  });
};
const c2 = "apple";
const d2 = { name: "John", age: 35 };

const run = async () => {
  console.log(a2);
  await b2();
  console.log(c2);
  console.log(d2);
};
run();
