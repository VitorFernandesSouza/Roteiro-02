import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { v4 as uuidv4 } from "uuid";

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const [editingTodoId, setEditingTodoId] = useState(null); // Estado para controlar qual tarefa está em modo de edição
    const [editText, setEditText] = useState(""); // Estado para o texto de edição

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            { id: uuidv4(), description: todo, completed: false },
        ]);
    };

    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    const toggleComplete = (id) => {
        const newTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    const editTodo = (id) => {
        const editedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, description: editText } : todo
        );
        setTodos(editedTodos);
        setEditingTodoId(null); // Sair do modo de edição
        setEditText(""); // Limpar o texto de edição
        localStorage.setItem('todos', JSON.stringify(editedTodos));
    };

    const startEditing = (id, initialText) => {
        setEditingTodoId(id);
        setEditText(initialText);
    };

    const cancelEditing = () => {
        setEditingTodoId(null);
        setEditText("");
    };

    return (
        <div className='TodoWrapper'>
            <h1>Lista de Tarefas</h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo) =>
                <TodoList
                    key={todo.id}
                    task={todo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    editTodo={editTodo}
                    editingTodoId={editingTodoId}
                    startEditing={startEditing}
                    cancelEditing={cancelEditing}
                    editText={editText}
                    setEditText={setEditText}
                />
            )}
        </div>
    );
};
