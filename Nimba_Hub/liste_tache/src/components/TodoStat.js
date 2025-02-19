import React from 'react';

function TodoStats({ todos }){
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const remaining = total - completed;

  return (
    <div className="todo-stats">
      <p>Total: {total}</p>
      <p>Terminées: {completed}</p>
      <p>À faire: {remaining}</p>
    </div>
  );
};

export default TodoStats;
