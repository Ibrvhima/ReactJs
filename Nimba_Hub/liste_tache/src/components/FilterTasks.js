import React from 'react';

export default function FilterTasks ({ setFilter }){
  return (
    <div className="filters">
      <button onClick={() => setFilter('all')}>Toutes</button>
      <button onClick={() => setFilter('active')}>À faire</button>
      <button onClick={() => setFilter('completed')}>Terminées</button>
    </div>
  );
};


