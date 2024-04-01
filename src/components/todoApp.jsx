import React from "react";
import { useState } from "react";

export default function TodoApp() {

  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    };

    setTodos([...todos, newTodo]);
    console.log(todos);
    console.log(newTodo);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
      <form className="flex gap-4 items-center justify-center p-8" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Create todo..." 
          className="px-4 py-2 w-full md:w-1/2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition      duration-200"
          onChange={handleChange}
          value={title}
        />
        <input 
          type="submit" 
          value="Create Todo" 
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md cursor-pointer transition      duration-200"
          onClick={handleSubmit}
        />
      </form>
      <div>
        {
          todos.map(item => (
            <div key={item.id}>{item.title}</div>
          ))
        }
      </div>
      </div>
    </>
  );
};