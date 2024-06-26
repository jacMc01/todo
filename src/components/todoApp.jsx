import React, { useState } from "react";
import Todo from "./todo";

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
  };

    // Delete Todo
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Edit Todo
  const handleEdit = (id, newTitle) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, title:newTitle } : todo));
  };

    // New function to sort todos alphabetically by title
    const sortTodos = () => {
      const sortedTodos = [...todos].sort((a, b) => a.title.localeCompare(b.title));
      setTodos(sortedTodos);
    };

    // Function to sort todos in reverse alphabetical order by title
    const sortTodosReverse = () => {
      const sortedTodos = [...todos].sort((a, b) => b.title.localeCompare(a.title));
      setTodos(sortedTodos);
    };
  

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="font-bold text-6xl mb-24 mt-20">ToDo Aplication</h1>
        <form className="flex gap-6 items-center justify-center p-8" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Create todo..."
            className="px-6 py-3 w-full md:w-2/3 border-4 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-lg transition duration-200"
            onChange={handleChange}
            value={title}
          />
          <input
            type="submit"
            value="Create Todo"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg cursor-pointer transition duration-200 text-lg"
            onClick={handleSubmit}
          />
        </form>
        <div className="flex justify-center mb-10">
          <button 
            onClick={sortTodos} 
            className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg cursor-pointer          transition duration-200 text-lg"
          >
            Sort A-Z
          </button>
          <button 
            onClick={sortTodosReverse} 
            className="mt-4 ml-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg cursor-pointer           transition duration-200 text-lg"
          >
            Sort Z-A
          </button>
        </div>
        <div>
          {todos.map((item) => (
            <Todo key={item.id} item={item} onDelete={handleDelete} onEdit={handleEdit} />
          ))}
        </div>
      </div>
    </>
  );
}
