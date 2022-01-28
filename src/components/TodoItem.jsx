import React from "react";

const TodoItem = ({ todo, idx, toggleTodo, deleteTodo }) => {
    return (
        <div className="todo-item">
            <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
                {todo.text}
            </div>
            <button type="button" className="todo-btn primary" onClick={() => toggleTodo(idx)}>
                toogle
            </button>
            <button type="button" className="todo-btn secondary" onClick={() => deleteTodo(idx)}>
                delete
            </button>
        </div>
    )
}

export default TodoItem;