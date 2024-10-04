// Question :  Create 2 buttons, that return a promise resolved when clicked resolved and rejected for rejected button is clicked.

const eventPromises = () => {
  return new Promise((res, rej) => {
    const buttonRes = document.getElementById("resolveButton");
    const buttonRej = document.getElementById("rejectButton");

    setTimeout(() => {
      buttonRes.addEventListener("click", () => {
        res("Request Successful");
      });
    }, 1000);

    buttonRej.addEventListener("click", () => {
      res("Request Rejected");
    });
  });
};

// console.log(eventPromises());

eventPromises()
  .then((message) => console.log(message))
  .catch((err) => console.log(err));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question : Make a Api call using promises.

// // USING ASYNC AWAIT
const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log("Data", data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

(async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})();

// USING THEN CATCH
const getData = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      if (!res.ok) throw new Error("Error fetching data");
      return res.json();
    })
    .then((data) => {
      console.log("Data", data);
      return data;
    })
    .catch((err) => {
      console.error("Error fetching data", err);
      throw err;
    });
};

getData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
