// 1. How do you chain Promises, and why is it useful?
// Question: Demonstrate how to chain Promises in JavaScript and explain why chaining Promises is useful. Provide an example where multiple asynchronous operations depend on each other.
// 2. How can you handle errors in a chain of Promises?

const getUser = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const user = { id: 1, name: "John", age: 25 };
      res(user);
    }, 1000);
  });
};

const getPostByUser = (userId) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const posts = [
        { id: 1, post: "Post 1", userId: 1 },
        { id: 2, post: "Post 2", userId: 1 }
      ];
      res(posts);
    }, 1000);
  });
};

const getCommentByPosts = (postId) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const comments = [
        { id: 1, comment: "Comment 1", postId: 1, userId: 1 },
        { id: 2, comment: "Comment 2", postId: 1, userId: 2 }
      ];
      res(comments);
    }, 1000);
  });
};

getUser()
  .then((users) => {
    console.log("User", users);
    return getPostByUser(users.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return getCommentByPosts(posts[0].id);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  })
  .catch((err) => console.log(err)); // Handle error in chain promises, if there is error in any promises the catch fn will handle the error

// USING ASYNC AWAIT
// const fetchAllOnce = async () => {
//   try {
//     const user = await getUser();
//     console.log("User", user);

//     const posts = await getPostByUser(user.id);
//     console.log("Posts", posts);

//     const comments = await getCommentByPosts(posts[0].id);
//     console.log("Comments", comments);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchAllOnce();

// ******** Note : This example is just to understand how can we chain promises.

// const users = [
//   { id: 1, name: "John", age: 25 },
//   { id: 1, name: "Jane", age: 19 }
// ];
// const posts = [
//   { id: 1, post: "Post 1", userId: 1 },
//   { id: 2, post: "Post 2", userId: 1 },
//   { id: 3, post: "Post 3", userId: 2 }
// ];
// const comments = [
//   { id: 1, comment: "Comment 1", postId: 1, userId: 1 },
//   { id: 2, comment: "Comment 2", postId: 1, userId: 2 },
//   { id: 3, comment: "Comment 3", postId: 2, userId: 1 }
// ];
