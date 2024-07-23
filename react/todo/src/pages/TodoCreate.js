import React from "react";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const TodoCreate = () => {
  // const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [city, setCity] = useState("");
  const [completed, setCompleted] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      try {
        setData(JSON.parse(storedData));
      } catch (e) {
        console.error("Error parsing stored data", e);
        setData([]);
      }
    }
  }, []);

  useEffect(() => {
    const isFormValid = username && title && task && city;
    setButtonDisabled(!isFormValid);
  }, [username, title, task, city]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const addData = (e) => {
    e.preventDefault();
    // add new todo to the list
    const newData = [...data, { username, title, task, city, completed }];

    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
    setUsername("");
    setTitle("");
    setTask("");
    setCity("");
    setCompleted(false);
    // alert("Task added successfully!");
    // navigate("/");
  };

  const handleCheckboxChange = (username) => {
    const updateData = data.map((item) => {
      if (item.username === username) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setData(updateData);
    localStorage.setItem("data", JSON.stringify(updateData));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center my-4">
        <h2 className="text-3xl text-medium">Create Todo</h2>
      </div>
      <div className="my-4 flex flex-col items-center">
        <form onSubmit={addData}>
          <div>
            <label className="block text-lg text-medium">Username</label>
            <input
              value={username}
              onChange={handleUsernameChange}
              type="text"
              className="border-dark border-2 shadow-md border-solid bg-dim p-1 w-64"
              placeholder="Enter your username..."
            />
          </div>

          <div>
            <label className="block text-lg text-medium">Title</label>
            <input
              value={title}
              onChange={handleTitleChange}
              type="text"
              className="border-dark border-2 shadow-md border-solid bg-dim p-1 w-64"
              placeholder="Enter your title..."
            />
          </div>

          <div>
            <label className="block text-lg text-medium">Task</label>
            <textarea
              value={task}
              onChange={handleTaskChange}
              placeholder="Enter your task..."
              className="border-dark border-2 shadow-md border-solid bg-dim p-1 w-64 h-32"
            ></textarea>
          </div>

          <div>
            <label className="block text-lg text-medium">City</label>
            <input
              value={city}
              onChange={handleCityChange}
              type="text"
              className="border-dark border-2 shadow-md border-solid bg-dim p-1 w-64"
              placeholder="Enter your city..."
            />
          </div>

          <button
            disabled={buttonDisabled}
            className={`my-6 bg-dark hover:bg-medium hover:text-dim text-light py-2 px-6 rounded w-64 ${
              buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Add
          </button>
        </form>
      </div>

      <hr />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-8">
        {data ? (
          <table className="w-full text-sm text-left rtl:text-right text-medium">
            <thead className="text-xs text-light uppercase bg-dark">
              <tr>
                <th scope="col" className="p-4">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Task
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                <th scope="col" className="px-6 py-3">
                  Completed
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((user, index) => (
                <tr key={index} className="bg-light border-b hover:bg-gray-50 ">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        checked={user.completed}
                        onChange={() => handleCheckboxChange(user.username)}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-medium whitespace-nowrap">
                    {user.username}
                  </td>
                  <td className="px-6 py-4">{user.title}</td>
                  <td className="px-6 py-4">{user.task}</td>
                  <td className="px-6 py-4">{user.city}</td>
                  <td className="px-6 py-4">{user.completed ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="m-2 text-xl text-medium text-center">
            No data available
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoCreate;
