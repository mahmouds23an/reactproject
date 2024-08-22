import { useState } from "react";

const useTodoModel = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false, subtasks: [] }]);
  };

  const updateTask = (index, newText) => {
    const newTasks = [...tasks];
    newTasks[index].text = newText;
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const addSubtask = (taskIndex, subtaskText) => {
    const newTasks = [...tasks];
    newTasks[taskIndex].subtasks.push({ text: subtaskText, completed: false });
    setTasks(newTasks);
  };

  const toggleSubtaskCompletion = (taskIndex, subtaskIndex) => {
    const newTasks = [...tasks];
    newTasks[taskIndex].subtasks[subtaskIndex].completed =
      !newTasks[taskIndex].subtasks[subtaskIndex].completed;
    setTasks(newTasks);

    // Check if all subtasks are completed
    const allCompleted = newTasks[taskIndex].subtasks.every(
      (subtask) => subtask.completed
    );
    if (allCompleted) {
      newTasks[taskIndex].completed = true;
      setTasks(newTasks);
    }
  };

  return {
    tasks,
    addTask,
    updateTask,
    toggleTaskCompletion,
    addSubtask,
    toggleSubtaskCompletion,
    deleteTask,
  };
};

export default useTodoModel;
