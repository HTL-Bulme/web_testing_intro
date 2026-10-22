import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React & Vite basics', completed: false },
    { id: 2, text: 'Set up Selenium WebDriver for Firefox', completed: true }
  ]);
  const [inputText, setInputText] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const newTask = {
      id: Date.now(),
      text: inputText,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setInputText('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="container">
      <header>
        <h1>Student Task Manager</h1>
        <p>React + Vite Application</p>
      </header>

      <form onSubmit={addTask} className="task-form">
        <input 
          id="task-input"
          type="text" 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter a new task..." 
        />
        <button id="add-btn" type="submit">Add Task</button>
      </form>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleTask(task.id)} className="task-text">
              {task.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
