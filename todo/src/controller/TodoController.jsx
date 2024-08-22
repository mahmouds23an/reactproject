import useTodoModel from "../model/TodoModel";

const useTodoController = () => {
  const {
    tasks,
    addTask,
    updateTask,
    toggleTaskCompletion,
    addSubtask,
    toggleSubtaskCompletion,
    deleteTask,
  } = useTodoModel();

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

export default useTodoController;
