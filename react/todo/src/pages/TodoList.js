import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const TodoList = () => {
  const data1 = JSON.parse(localStorage.getItem("data"));
  const [data, setData] = useState(data1);

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

  const handleDeleteTask = (username) => {
    const filteredData = data.filter((item) => item.username !== username);
    setData(filteredData);
    localStorage.setItem("data", JSON.stringify(filteredData));
  };

  return (
    <section className="w-full flex flex-col items-center">
      <div className="flex flex-col w-4/6">
        <div className="mt-6 flex justify-between">
          <h2 className="text-3xl text-medium">Todo List</h2>
          <RouterLink
            to="/create"
            className="bg-dark hover:bg-medium hover:text-dim text-light py-2 px-4 rounded w-20"
          >
            <button className="w-full h-full">New</button>
          </RouterLink>
        </div>

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
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.map((user, index) => (
                  <tr
                    key={index}
                    className="bg-light border-b hover:bg-gray-50 "
                  >
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
                    <td className="px-6 py-4">
                      {user.completed ? "Yes" : "No"}
                    </td>
                    <td className="px-6 py-4">
                      <RouterLink
                        to={`/edit/${user.username}`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Edit
                      </RouterLink>
                      <RouterLink
                        className="font-medium text-red-600 hover:underline ms-3"
                        onClick={(e) => handleDeleteTask(user.username)}
                      >
                        Remove
                      </RouterLink>
                    </td>
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
    </section>
  );
};

export default TodoList;
