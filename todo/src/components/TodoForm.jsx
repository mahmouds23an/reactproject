import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Add a new task"
        className="todo-input"
      />
      <button type="submit" className="todo-button" disabled={!input.trim()}>
        +
      </button>
    </form>
  );
};

export default TodoForm;
