import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TodoEdit = () => {
  const { user } = useParams();
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("data"));
  const singleData = data.find((item) => item.username === user);
  console.log(singleData);

  const [username, setUsername] = useState(singleData.username);
  const [title, setTitle] = useState(singleData.title);
  const [task, setTask] = useState(singleData.task);
  const [city, setCity] = useState(singleData.city);
  const [completed, setCompleted] = useState(singleData.completed);
  const [buttonDisabled, setButtonDisabled] = useState(true);

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
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) setCompleted(true);
    else setCompleted(false);
  };

  const updateData = (e) => {
    e.preventDefault();
    // update task to the list
    const newData = data.map((item) =>
      item.username === user ? { username, title, task, city, completed } : item
    );
    localStorage.setItem("data", JSON.stringify(newData));
    setUsername("");
    setTitle("");
    setTask("");
    setCity("");
    setCompleted(completed);
    alert("Task updated successfully!");
    navigate("/");
  };

  const deleteData = (e) => {
    e.preventDefault();
    // delete task from the list
    const newData = data.filter((item) => item.username !== user);
    localStorage.setItem("data", JSON.stringify(newData));
    alert("Task deleted successfully!");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center my-4">
        <h2 className="text-3xl text-medium">Edit Todo</h2>
      </div>

      <div className="my-4 flex flex-col items-center space-y-2">
        <form onSubmit={updateData}>
          <div>
            <label className="block text-lg text-medium">Username</label>
            <input
              name="username"
              type="text"
              className="border-dark border-2 shadow-md border-solid bg-dim p-1 w-64"
              placeholder="Enter your username..."
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          <div>
            <label className="block text-lg text-medium">Title</label>
            <input
              name="title"
              type="text"
              className="border-dark border-2 shadow-md border-solid bg-dim p-1 w-64"
              placeholder="Enter your title..."
              value={title}
              onChange={handleTitleChange}
            />
          </div>

          <div>
            <label className="block text-lg text-medium">Task</label>
            <textarea
              name="task"
              placeholder="Enter your task..."
              className="border-dark border-2 shadow-md border-solid bg-dim p-1 w-64 h-32"
              value={task}
              onChange={handleTaskChange}
            ></textarea>
          </div>

          <div>
            <label className="block text-lg text-medium">City</label>
            <input
              name="city"
              type="text"
              className="border-dark border-2 shadow-md border-solid bg-dim p-1 w-64"
              placeholder="Enter your city..."
              value={city}
              onChange={handleCityChange}
            />
          </div>

          <div className="w-64">
            <div className="flex items-center p-1">
              <input
                type="checkbox"
                className="border-dark border-2 shadow-md border-solid bg-dim p-1 w-4 h-4"
                checked={completed}
                onChange={handleCheckboxChange}
              />
              <label className="block text-lg text-medium ml-2">
                Completed
              </label>
            </div>
          </div>

          <div className="my-6 flex flex-col sm:flex-row justify-around">
            <button
              disabled={buttonDisabled}
              className={`m-2 bg-dark hover:bg-medium text-light py-2 px-6 rounded w-28 ${
                buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Edit
            </button>

            <button
              onClick={deleteData}
              className="m-2 bg-red-500 hover:bg-red-300 text-light py-2 px-6 rounded w-28"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoEdit;
