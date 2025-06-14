import { useEffect, useState } from 'react';
import TodoItem from './components/TodoItem';
import './index.css';

const API = 'http://localhost:5000/api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const fetchTodos = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setTodos(data);
  };

  const addTodo = async () => {
    if (!text.trim()) return;
    const res = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
    setText('');
  };

  const toggleTodo = async (id, completed) => {
    const res = await fetch(`${API}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !completed })
    });
    const updated = await res.json();
    setTodos(todos.map(t => t._id === id ? updated : t));
  };

  const deleteTodo = async (id) => {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    setTodos(todos.filter(t => t._id !== id));
  };

  useEffect(() => { fetchTodos(); }, []);

  return (
    <div className="app">
      <h1>Todos</h1>
      <div className="input-group">
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Add todo..." />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo._id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
