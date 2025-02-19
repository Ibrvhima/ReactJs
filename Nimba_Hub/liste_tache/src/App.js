import { useState } from 'react';
import TodoAdd from './components/TodoAdd';
import TodoFilters from './components/TodoFilter';
import TodoStats from './components/TodoStat';
import TodoItem from './components/TodoDisplay';
import "./App.css"
const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => 
    filter === 'all' ? true : filter === 'completed' ? todo.completed : !todo.completed
  );

  return (
    <div className="todo-app">
      <h1>Gestionnaire de Tâches</h1>
      <TodoAdd addTodo={addTodo} />
      <TodoFilters setFilter={setFilter} /> {/* Correction ici */}
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
      <TodoStats todos={todos} /> {/* Correction ici */}
    </div>
  );
};

export default App;
