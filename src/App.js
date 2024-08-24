import './App.css';
import { useRef, useState } from'react';

function App() {

  const [todos, setTodos] = useState([]);
  const inputRef = useRef()

  const handleAddTask = (e) => {
    const task = inputRef.current.value
    const newItem = {completed: false, task}

    if (task.trim() === '') return

    setTodos([...todos, newItem])
    inputRef.current.value = ''
  }
  
  const handleItemDone = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className='container'>
      <div className="App">
      <h2>To Do List</h2>
      <ul>
      {todos.map(({task, completed}, index) => {
          return <div className='task'>
            <li 
              key={index} 
              className={completed ? "done" : ""} 
              onClick={() => handleItemDone(index)}>
             {task}
             </li>
             <span className='delete' onClick={() => handleDeleteItem(index)}>❌</span>
            </div>
      })}
      </ul>
      <input type="text" placeholder="Add a new task" ref={inputRef} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
    </div>
  );
}

export default App;
