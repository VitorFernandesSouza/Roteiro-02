import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import "./style.css";

const API_URL = "https://to-do-list-bekv.onrender.com/api/tasks"; // Verifique esta URL

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Erro ao buscar tarefas');
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  const addTask = async (task) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      });
      if (!response.ok) {
        throw new Error('Erro ao adicionar tarefa');
      }
      const data = await response.json();
      setTasks([...tasks, data]);
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar tarefa');
      }
      const data = await response.json();
      setTasks(tasks.map(task => (task.id === id ? data : task)));
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Erro ao deletar tarefa');
      }
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
    }
  };

  return (
    <div className="App">
      <h1>ToDoList</h1>
      <div className="container">
        <TaskForm addTask={addTask} />
        <div className="task-list">
          <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default App;
