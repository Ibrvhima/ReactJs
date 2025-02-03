import { useState, useEffect } from "react";
import "./listeTaches.css";
import { FaTrashAlt } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
export default function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearAll = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  return (
    <div className="container">
      <h2>Liste de tâches</h2>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          placeholder="Ajouter une tâche..."
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Ajouter <MdAdd size={20} color="#FFFF" /></button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.completed ? "completed" : ""}
          >
            <span onClick={() => toggleComplete(index)}>{task.text}</span>
            <button className="delete" onClick={() => removeTask(index)}>
              Supprimer <FaTrashAlt size={15} color="#fff" />
            </button>
           

          </li>
        ))}
      </ul>
      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearAll}>
          Tout supprimer <FaTrashAlt size={15} color="#fff" />
        </button>
      )}
    </div>
  );
}
