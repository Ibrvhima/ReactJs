import { useState } from 'react';

function Formulair() {
  const [Valeur , setValeur] = useState("");

  const displayContent = (e) =>{
    setValeur(e.target.value)

  }

  return (
    <div className='contenair'>
      <h1>Afficher le contenu en temps réel</h1>
      <input type="text"  value={Valeur} onChange={displayContent} placeholder='here you write something...' />
      <p>contenue :👇</p>
      <span>{Valeur}</span>
    </div>
    
  );
}

export default Formulair;
