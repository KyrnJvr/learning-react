import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text: "Sample", completed: false}
  ]); // List of todos/tasks
  const [newTodo, setNewTodo] = useState(""); // current input text

  const handleAddTask = () => {
    if (!newTodo.trim()) return; // avoid empty tasks

    const newItem = {
      id: Date.now(),
      text: newTodo,
      completed: false
    };

    setTodos([...todos, newItem]); // add new item to the list of tasks/todos

    console.log(todos);
    setNewTodo(""); // clear user input
  }

  return (
    <>
    <div className="app">
      <h1>Todo App</h1>

      <div className="todo-input">
        <input 
          type="text" 
          placeholder='Enter a task...'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      {todos.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul className='todo-list'>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>
        })}
      </ul>)}
    </div>
    </>
  )
}

export default App
