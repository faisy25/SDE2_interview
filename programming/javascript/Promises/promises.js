// 1. What is a Promise in JavaScript, and how is it used?
// Question: Explain what a Promise is in JavaScript. Provide an example of how you would use a Promise to handle asynchronous operations, such as fetching data from an API.
// Output = Data fetched: { name: 'Jewel', age: 25 }

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Jewel", age: 25 };
      resolve(data);
    }, 2000);
  });
};

fetchData()
  .then((res) => console.log("Data fetched:", res))
  .catch((err) => console.log(err));

// // const promise1 = fetchData()
// //   .then((res) => console.log("Data fetched:", res))
// //   .catch((err) => console.log(err));
// // console.log(promise1); // Print : Promise pending "for 2 seconds" and then resolve or request.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. What are the states of a Promise?
// Question: Describe the different states of a Promise in JavaScript. Illustrate these states with an example of a Promise that simulates a network request.(Pending , resolved , rejected)

const statePromises = () => {
  return new Promise((res, rej) => {
    const success = Math.floor(Math.random() * 50) > 25;

    setTimeout(() => {
      if (success) {
        res("Request Successful");
      } else {
        rej("Request Rejected");
      }
    }, 1000);
  });
};

const promise2 = statePromises();
console.log(promise2);
promise2.then((res) => console.log(res)).catch((err) => console.log(err));

// // Output : Promise { <pending> }
// //         Request Rejected      OR     Request Successful

// NOTE -----    USING ASYNC AWAIT
// const handlePromise = async () => {
//   try {
//     const result = await statePromises();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }
// handlePromise();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. How can you handle multiple Promises simultaneously?
// Question: How can you handle multiple Promises at once in JavaScript? Provide an example using Promise.all to fetch data from multiple APIs.

const fetchUsers = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = { id: 1, name: "John", age: 25 };
      res(data);
    }, 1000);
  });
};

const fetchPosts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = [
        { id: 1, post: "Sense8", character: 8 },
        { id: 2, post: "Dracula", character: 2 }
      ];
      res(data);
    }, 1000);
  });
};

Promise.all([fetchUsers(), fetchPosts()]) // Note : check the order for the data.
  .then(([users, posts]) => {
    console.log("Users - ", users);
    console.log("Posts", posts);
  })
  .catch((err) => console.log(err));

// Output :
//   Users -  { id: 1, name: 'John', age: 25 }
//   Posts - [
//     { id: 1, post: 'Sense8', character: 8 },
//     { id: 2, post: 'Dracula', character: 2 }
//   ]

// // USING ASYNC AWAIT
// const fetchAllData = async () => {
//   try {
//     Promise.all([fetchUsers(), fetchPosts()]);
//     const users = await fetchUsers();
//     console.log("Users:", users);
//     const posts = await fetchPosts();
//     console.log("Posts:", posts);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchAllData();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. What is Promise.race, and when would you use it?
// Question: Explain Promise.race and provide a real-life use case where it would be useful.
// Similar question : How would you ensure a Promise completes within a certain time frame? Provide an example where a Promise is rejected if it takes too long to resolve.

//  ****** NOTE :  The "fetch" function is used to make network requests and is built into modern JavaScript environments. It returns a Promise that resolves to the Response object representing the response to the request.
// But this not work in Nodejs, install ("node-fetch") or ("axios").
// In "index.html" file open browser check the data there.

const promiseRace = (url, timeout) => {
  const promiseOne = fetch(url).then((response) => response.json());
  const promiseTwo = new Promise((_, rej) => {
    setTimeout(() => rej(new Error("Request Timeout")), timeout);
  });
  return Promise.race([promiseOne, promiseTwo]);
};

promiseRace("https://jsonplaceholder.typicode.com/posts", 3000)
  .then((data) => console.log("Data:", data))
  .catch((err) => console.log("Error:", err));

// USING ASYNC
// const promiseRaceHandler = async () => {
//   try {
//     const result = await promiseRace(
//       "https://jsonplaceholder.typicode.com/posts",
//       3000
//     );
//     console.log(result);
//   } catch (error) {
//     console.log(err);
//   }
// };
// promiseRaceHandler();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Understanding syntax using promises in a function and using directly as a variable.

// a. using promises in a function
const usingInFuntion = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const user = { id: 1, name: "John", age: 25 };
      res(user);
    }, 1000);
  });
};

// b. using directly as a variable.
usingInFuntion()
  .then((users) => console.log("User", users))
  .catch((err) => console.log(err));

const usingDirectly = new Promise((res, rej) => {
  setTimeout(() => {
    const user = { id: 1, name: "John", age: 25 };
    res(user);
  }, 1000);
});

// no paranthesis here.
usingDirectly
  .then((users) => console.log("User", users))
  .catch((err) => console.log(err));
