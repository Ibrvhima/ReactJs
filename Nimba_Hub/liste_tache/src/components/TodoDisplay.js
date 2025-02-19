import React from 'react';
import { FaTrash } from 'react-icons/fa';

function TodoItem ({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className={`todo-list ${todo.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
      <button className='delete' onClick={() => deleteTodo(todo.id)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default TodoItem;
