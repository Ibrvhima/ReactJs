import { useState } from "react";

export default function Compteur() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container">
      <h1 className="headding">Compteur de clics</h1>
      <p className="counter">{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>–</button>
    </div>
    
  );
}

