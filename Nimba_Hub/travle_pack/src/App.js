import { useState } from "react";

function PackingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [packedPercentage, setPackedPercentage] = useState(0); // Stocke le pourcentage des objets emballés

  // Fonction pour recalculer le pourcentage
  const calculatePercentage = (updatedItems) => {
    const totalItems = updatedItems.length;
    const packedItems = updatedItems.filter(item => item.packed).length;
    const percentage = totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);
    setPackedPercentage(percentage);
  };

  // Fonction d'ajout d'un nouvel objet
  const addItem = () => {
    if (newItem.trim() !== "") {
      const updatedItems = [...items, { name: newItem, packed: false }];
      setItems(updatedItems);
      setNewItem("");
      calculatePercentage(updatedItems); // Recalcule après ajout
    }
  };

  // Fonction pour marquer un objet comme "emballé"
  const togglePacked = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, packed: !item.packed } : item
    );
    setItems(updatedItems);
    calculatePercentage(updatedItems); // Recalcule après modification
  };

  // Fonction de suppression d'un objet
  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    calculatePercentage(updatedItems); // Recalcule après suppression
  };

  return (
    <div>
      <h2>Liste des affaires de voyage</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Ajouter un objet"
      />
      <button onClick={addItem}>Ajouter</button>

      <h3>Bagages emballés : {packedPercentage}% ✅</h3>

      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ textDecoration: item.packed ? "line-through" : "none" }}>
            {item.name}
            <button onClick={() => togglePacked(index)}>Emballé</button>
            <button onClick={() => removeItem(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
  