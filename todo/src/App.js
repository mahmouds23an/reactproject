import "./App.css";
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./view/TodoList";
import useTodoController from "./controller/TodoController";

const App = () => {
  const {
    tasks,
    addTask,
    updateTask,
    toggleTaskCompletion,
    addSubtask,
    deleteTask,
  } = useTodoController();

  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");

  return (
    <div className="App">
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        editTaskIndex={editTaskIndex}
        editTaskText={editTaskText}
        setEditTaskIndex={setEditTaskIndex}
        setEditTaskText={setEditTaskText}
        updateTask={updateTask}
        toggleTaskCompletion={toggleTaskCompletion}
        addSubtask={addSubtask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
