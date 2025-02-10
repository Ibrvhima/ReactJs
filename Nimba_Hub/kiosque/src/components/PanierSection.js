import { FaTrash } from "react-icons/fa";

function PanierSection({ panier, validerCommande, supprimerDuPanier }) {
  // Regrouper les éléments du panier par nom et compter les quantités
  const panierRegroupe = panier.reduce((acc, item) => {
    const existant = acc.find((el) => el.nom === item.nom);
    if (existant) {
      existant.quantite += 1;
    } else {
      acc.push({ ...item, quantite: 1 });
    }
    return acc;
  }, []);

  return (
    <section className="panier-section">
      <h2>Panier en cours</h2>
      {panierRegroupe.length === 0 ? (
        <p>Le panier est vide</p>
      ) : (
        <div className="panier-content">
          <ul>
            {panierRegroupe.map((item, index) => (
              <li key={index}>
                <span>{item.quantite}</span>
                {item.nom} - {item.prix} GNF 
                <button className="supprimer-btn" onClick={() => supprimerDuPanier(index)}><FaTrash size={15} /></button>
              </li>
            ))}
          </ul>
          
          <div className="panier-total">
            <p>Total: {panier.reduce((sum, item) => sum + item.prix, 0)} GNF</p>
            <button onClick={validerCommande}>Valider la commande</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default PanierSection;
