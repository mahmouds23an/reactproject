import React from "react";
import TodoItem from "../components/TodoItem";

const TodoList = ({
  tasks,
  editTaskIndex,
  editTaskText,
  setEditTaskIndex,
  setEditTaskText,
  updateTask,
  toggleTaskCompletion,
  addSubtask,
  toggleSubtaskCompletion,
  deleteTask,
}) => {
  return (
    <div className="todo-list">
      <h2 style={{ textAlign: "left" }}>
        Tasks to do - {tasks.filter((task) => !task.completed).length}
      </h2>
      {tasks.map(
        (task, index) =>
          !task.completed && (
            <TodoItem
              key={index}
              index={index}
              task={task}
              editTaskIndex={editTaskIndex}
              editTaskText={editTaskText}
              setEditTaskIndex={setEditTaskIndex}
              setEditTaskText={setEditTaskText}
              updateTask={updateTask}
              toggleTaskCompletion={toggleTaskCompletion}
              addSubtask={addSubtask}
              toggleSubtaskCompletion={toggleSubtaskCompletion}
              deleteTask={deleteTask}
            />
          )
      )}
      <h2 style={{ textAlign: "left" }}>
        Done - {tasks.filter((task) => task.completed).length}
      </h2>
      {tasks.map(
        (task, index) =>
          task.completed && (
            <TodoItem
              key={index}
              index={index}
              task={task}
              editTaskIndex={editTaskIndex}
              editTaskText={editTaskText}
              setEditTaskIndex={setEditTaskIndex}
              setEditTaskText={setEditTaskText}
              updateTask={updateTask}
              toggleTaskCompletion={toggleTaskCompletion}
              addSubtask={addSubtask}
              toggleSubtaskCompletion={toggleSubtaskCompletion}
              deleteTask={deleteTask}
            />
          )
      )}
    </div>
  );
};

export default TodoList;
