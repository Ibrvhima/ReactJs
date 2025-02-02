import { useState } from "react";

function Formulair() {
  const [Valeur, setValeur] = useState("");
  const [Erreur, setErreur] = useState("");

  const displayContent = (e) => {
    const nouvelleValeur = e.target.value;
    setValeur(nouvelleValeur);

    // Verification de nombre de caractère
    if (nouvelleValeur.length > 20) {
      setErreur("Le texte doit contenir au moins 5 caractères.");
    } else {
      setErreur("");
    }
  };

  // Function de renitialisation
  const btnRenitialise = () =>{
    setErreur("")
    setValeur("")
  }

  return (
    <div className="contenair">
      <h1>Afficher le contenu en temps réel</h1>
      <div className="flexbox">
      <input
        type="text"
        value={Valeur}
        onChange={displayContent}
        placeholder="here you write something..."
      />

<button
        onClick={btnRenitialise}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
      >
        Réinitialiser
      </button>
      </div>
      <p>contenue :👇</p>
      <span>{Valeur}</span>

      {Erreur && (
        <div  className="error-message"  style={{ color: "red", marginTop: "10px" }}>{Erreur}</div>
      )}
    </div>
  );
}

export default Formulair;
