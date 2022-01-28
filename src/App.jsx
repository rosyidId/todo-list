import React, {useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {
  getTodoFromLocalStorage,
  saveTodoToLocalStorage
} from './utils/localstorage';


function App() {
  const [todo, setTodo] = useState(getTodoFromLocalStorage("todo") || [ ]);

  // fungsi menambah todo
  const addTodo = (value) => {
    const newTodo = [...todo, {text: value}];
    setTodo(newTodo);
    saveTodoToLocalStorage("todo", newTodo) // save to local storage
  }

  const toggleTodo = (idx) => {
    const newTodo = [...todo];
    newTodo[idx].isCompleted = !newTodo[idx].isCompleted;
    setTodo(newTodo);
    saveTodoToLocalStorage("todo", newTodo) // save to local storage
  }

  const deleteTodo = (idx) => {
    const newTodo = [...todo];
    newTodo.splice(idx, 1);
    setTodo(newTodo);
    saveTodoToLocalStorage("todo", newTodo) // save to local storage
  }

  return (
    <div className='app'>
      <TodoList 
        todos={todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
