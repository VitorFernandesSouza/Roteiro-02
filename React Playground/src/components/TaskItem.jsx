import React from "react";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const handleComplete = () => {
    updateTask(task.id, { ...task, completed: !task.completed });
  };

  return (
    <div className="task-item">
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Status: {task.completed ? "Concluída" : "Pendente"}</p>
      <button onClick={handleComplete}>
        {task.completed ? "Desmarcar" : "Completar"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Deletar</button>
    </div>
  );
};

export default TaskItem;
