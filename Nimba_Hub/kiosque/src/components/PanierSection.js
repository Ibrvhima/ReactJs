// PanierSection.js
function PanierSection({ panier, validerCommande, supprimerDuPanier }) {
  return (
    <section className="panier-section">
      <h2>Panier en cours</h2>
      {panier.length === 0 ? (
        <p>Le panier est vide</p>
      ) : (
        <div className="panier-content">
          <ul>
            {panier.map((item, index) => (
              <li key={index}>
                {item.nom} - {item.prix} GNF
                <button onClick={() => supprimerDuPanier(index)}>Supprimer</button>
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
