import { useState } from "react";

export default function Interupteur() {
  const [isActif, setisActif] = useState(false);
  const [Clic, setClic] = useState(0);

  function gestionClic() {
    if (Clic < 4) {
      setClic(Clic + 1);
      setisActif(!isActif);
    } else {
      alert("l'interrupteur a été eteint apres 5 CLIC");
      setisActif(false);
    }
  }

  return (
    <div className="container">
      <h1>Interrupteur</h1>
      <button
        style={{
          backgroundColor: isActif ? "green" : "red",
          cursor: Clic >= 5 ? "not-allowed" : "pointer",
        }}
        onClick={gestionClic}
        disabled={Clic >= 5}
      >
        {isActif ? "Allumé" : "Eteint"}
      </button>
    </div>
  );
}
