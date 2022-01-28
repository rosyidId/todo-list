import React, {useState} from "react";

const TodoForm = ({addTodo}) => {
    const [value, setNilai] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setNilai('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                className="todo-input"
                placeholder="Add New Todo"
                value={value}
                onChange={e => setNilai(e.target.value)}
            />
        </form>
    )
}

export default TodoForm;