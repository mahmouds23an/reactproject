import React from "react";
import { useDrop } from "react-dnd";
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
  const [, dropTodo] = useDrop({
    accept: "TODO_ITEM",
    drop: (item) => toggleTaskCompletion(item.index),
  });

  const [, dropDone] = useDrop({
    accept: "TODO_ITEM",
    drop: (item) => toggleTaskCompletion(item.index),
  });

  return (
    <div className="todo-list">
      <h2 style={{ textAlign: "left" }}>
        Tasks to do - {tasks.filter((task) => !task.completed).length}
      </h2>
      <div ref={dropTodo}>
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
      </div>
      <h2 style={{ textAlign: "left" }}>
        Done - {tasks.filter((task) => task.completed).length}
      </h2>
      <div ref={dropDone}>
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
    </div>
  );
};

export default TodoList;
