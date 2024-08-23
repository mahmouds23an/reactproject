import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TodoForm from "./components/TodoForm";
import TodoList from "./view/TodoList";
import useTodoController from "./controller/TodoController";
import "./App.css";

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
    <DndProvider backend={HTML5Backend}>
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
    </DndProvider>
  );
};

export default App;
