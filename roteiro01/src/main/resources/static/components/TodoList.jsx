import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export const TodoList = ({ task, deleteTodo, toggleComplete, editTodo, editingTodoId, startEditing, cancelEditing, editText, setEditText }) => {
    const handleEditChange = (e) => {
        setEditText(e.target.value);
    };

    const handleEditSave = () => {
        editTodo(task.id);
    };

    return (
        <div className="Todo">
            {editingTodoId === task.id ? (
                <div>
                    <input
                        type="text"
                        value={editText}
                        onChange={handleEditChange}
                    />
                    <button onClick={handleEditSave}><FontAwesomeIcon icon={faCheck} /></button>
                    <button onClick={cancelEditing}>Cancelar</button>
                </div>
            ) : (
                <div>
                    <p
                        className={`${task.completed ? "completed" : "incompleted"}`}
                        onClick={() => toggleComplete(task.id)}
                    >
                        {task.description}
                    </p>
                    <div>
                        <FontAwesomeIcon
                            className="delete-icon"
                            icon={faTrash}
                            onClick={() => deleteTodo(task.id)}
                        />
                        <FontAwesomeIcon
                            className="edit-icon"
                            icon={faPenToSquare}
                            onClick={() => startEditing(task.id, task.description)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
