import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskType, setTaskType] = useState(0);
  const [priorityLevel, setPriorityLevel] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação de descrição com pelo menos 10 caracteres
    if (description.length < 10) {
      alert("A descrição deve ter pelo menos 10 caracteres.");
      return;
    }

    // Validação de nome da tarefa
    if (!name.trim()) {
      alert("O nome da tarefa é obrigatório.");
      return;
    }

    addTask({ 
      name, 
      description, 
      completed: false, 
      dueDate: dueDate ? dueDate : null,
      taskType,
      priorityLevel: priorityLevel ? priorityLevel : null,
      category: category ? category : null
    });

    // Limpar campos do formulário
    setName("");
    setDescription("");
    setDueDate("");
    setTaskType(0);
    setPriorityLevel("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome da Tarefa"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Descrição (mínimo 10 caracteres)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <input
        type="date"
        placeholder="Data de Conclusão"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={taskType} onChange={(e) => setTaskType(parseInt(e.target.value))}>
        <option value={0}>Data</option>
        <option value={1}>Prazo</option>
        <option value={2}>Livre</option>
      </select>
      <input
        type="number"
        placeholder="Nível de Prioridade"
        value={priorityLevel}
        onChange={(e) => setPriorityLevel(parseInt(e.target.value))}
      />
      <input
        type="text"
        placeholder="Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default TaskForm;
