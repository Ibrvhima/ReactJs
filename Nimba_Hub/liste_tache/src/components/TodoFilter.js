import React from 'react';

function TodoFilters ({ setFilter }){
  return (
    <div className="todo-filters">
      <button onClick={() => setFilter('all')}>Toutes</button>
      <button onClick={() => setFilter('active')}>À faire</button>
      <button onClick={() => setFilter('completed')}>Terminées</button>
    </div>
  );
};

export default TodoFilters;
