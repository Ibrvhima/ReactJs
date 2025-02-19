import React, { useState } from 'react';

function TodoAdd({ addTodo }){
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-add">
      <input 
        type="text" 
        placeholder="Ajouter une tâche..." 
        value={text} 
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TodoAdd;
