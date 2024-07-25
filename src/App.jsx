import React, { useState } from "react";
import TodoCard from "./TodoCard";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState("All");

  const addTodo = () => {
    setTodos([...todos, { name, description, status: "Not Completed" }]);
    setName("");
    setDescription("");
  };

  const updateTodo = (index, updatedTodo) => {
    const newTodos = [...todos];
    newTodos[index] = updatedTodo;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const filteredTodos = todos.filter(
    (todo) => filter === "All" || todo.status === filter
  );

  return (
    <div className="App container">
      <h1 className="my-4">My todo</h1>
      <div className="input-container mb-4 d-flex">
        <input
          type="text"
          className={`form-control me-2 ${!name && "is-invalid"}`}
          placeholder="Todo Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className={`form-control me-2 ${!description && "is-invalid"}`}
          placeholder="Todo Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success" onClick={addTodo}>
          Add Todo
        </button>
      </div>
      <h2>My Todos</h2>
      <div className="filter-container mb-4">
        <label className="me-2">Status Filter:</label>
        <select
          className="form-select w-auto d-inline-block"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>
      <div className="row">
        {filteredTodos.map((todo, index) => (
          <TodoCard
            key={index}
            todo={todo}
            index={index}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
