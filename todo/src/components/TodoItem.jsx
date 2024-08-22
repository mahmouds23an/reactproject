import React, { useState } from "react";
import { IoMdCloudDone } from "react-icons/io";
import { FaUndo, FaEdit, FaTrash } from "react-icons/fa";

const TodoItem = ({
  task,
  index,
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
  const isEditing = editTaskIndex === index;
  const [subtaskInput, setSubtaskInput] = useState("");

  const handleEditChange = (e) => {
    setEditTaskText(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateTask(index, editTaskText);
    setEditTaskIndex(null);
  };

  const handleSubtaskSubmit = (e) => {
    e.preventDefault();
    if (subtaskInput.trim()) {
      addSubtask(index, subtaskInput);
      setSubtaskInput("");
    }
  };

  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <input
            type="text"
            value={editTaskText}
            onChange={handleEditChange}
            className="edit-input"
          />
          <button type="submit" className="save-btn">
            Save
          </button>
        </form>
      ) : (
        <>
          <span>{task.text}</span>
          <div>
            <button
              onClick={() => toggleTaskCompletion(index)}
              className="complete-btn"
            >
              {task.completed ? (
                <FaUndo className="undo" />
              ) : (
                <IoMdCloudDone className="complete" />
              )}
            </button>
            {!task.completed && (
              <button
                onClick={() => {
                  setEditTaskIndex(index);
                  setEditTaskText(task.text);
                }}
                className="edit-btn"
              >
                <FaEdit />
              </button>
            )}
            <button onClick={() => deleteTask(index)} className="delete-btn">
              <FaTrash />
            </button>
            <form onSubmit={handleSubtaskSubmit}>
              <input
                type="text"
                value={subtaskInput}
                onChange={(e) => setSubtaskInput(e.target.value)}
                placeholder="Add a subtask"
                className="subtask-input"
              />
              <button type="submit" className="subtask-button">
                Add Subtask
              </button>
            </form>
            {task.subtasks.map((subtask, subIndex) => (
              <div key={subIndex} className="subtask-item">
                <span className={subtask.completed ? "completed" : ""}>
                  {subtask.text}
                </span>
                <button
                  onClick={() => toggleSubtaskCompletion(index, subIndex)}
                  className="complete-btn"
                >
                  {subtask.completed ? (
                    <FaUndo className="undo" />
                  ) : (
                    <IoMdCloudDone className="complete" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
