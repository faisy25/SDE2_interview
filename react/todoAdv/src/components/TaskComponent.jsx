import React from "react";
import { data as Data1 } from "../data";

const TaskComponent = () => {
  const data = Data1[0];
  console.log(data);
  return (
    <div className="max-w-lg mx-auto p-3 bg-blueD shadow-md rounded-lg m-2">
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-2">
          <input
            type="checkbox"
            id={`task-${data.id}`}
            className="w-4"
            checked={data.completed}
          />

          <h4 className="text-xl font-semibold text-dark">{data.task}</h4>
        </div>

        <span
          className={`text-sm font-medium px-3 py-1 rounded-full ${
            data.priority === "High"
              ? "bg-red-100 text-red-700"
              : data.priority === "Medium"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {data.priority}
        </span>
      </div>
      <p className="text-sm text-stone-700 mb-2">{data.desc}</p>
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-sm text-stone-700font-medium">Due:</span>
          <span className="text-sm text-stone-700 ml-1">
            {data.dueDate.toLocaleDateString()}
          </span>
        </div>
        <span className="text-sm font-medium text-stone-700">
          {data.category}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        {data.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TaskComponent;
