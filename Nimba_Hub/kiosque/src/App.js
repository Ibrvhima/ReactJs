import { useState } from 'react';
import './index.css';

function App() {
  // Liste des jus disponibles
  const [boissons, setBoissons] = useState([
    { id: 1, nom: "Jus de Bissap", prix: 5000, stock: 20, image: "/api/placeholder/150/150" },
    { id: 2, nom: "Jus de Gingembre", prix: 6000, stock: 15, image: "/api/placeholder/150/150" },
    { id: 3, nom: "Jus de Baobab", prix: 7000, stock: 10, image: "/api/placeholder/150/150" },
    { id: 4, nom: "Jus d'Ananas", prix: 6000, stock: 12, image: "/api/placeholder/150/150" }
  ]);

  // État pour gérer le panier
  const [panier, setPanier] = useState([]);
  
  // État pour gérer le total des ventes
  const [totalVentes, setTotalVentes] = useState(0);

  // Fonction pour ajouter au panier
  const ajouterAuPanier = (boisson) => {
    if (boisson.stock > 0) {
      setPanier([...panier, boisson]);
      setBoissons(boissons.map(b => 
        b.id === boisson.id ? {...b, stock: b.stock - 1} : b
      ));
    }
  };

  // Fonction pour valider la commande
  const validerCommande = () => {
    const total = panier.reduce((sum, item) => sum + item.prix, 0);
    setTotalVentes(totalVentes + total);
    setPanier([]);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Bissap & Co</h1>
        <p>Les meilleurs jus naturels de Conakry</p>
      </header>

      <div className="stats-banner">
        <div className="stat-item">
          <h3>Total des Ventes</h3>
          <p>{totalVentes} GNF</p>
        </div>
        <div className="stat-item">
          <h3>Commandes en cours</h3>
          <p>{panier.length}</p>
        </div>
      </div>

      <main className="main-content">
        <section className="menu-section">
          <h2>Notre Menu</h2>
          <div className="boissons-grid">
            {boissons.map((boisson) => (
              <div key={boisson.id} className="boisson-card">
                <img src={boisson.image} alt={boisson.nom} />
                <h3>{boisson.nom}</h3>
                <p>{boisson.prix} GNF</p>
                <p>En stock: {boisson.stock}</p>
                <button 
                  onClick={() => ajouterAuPanier(boisson)}
                  disabled={boisson.stock === 0}
                >
                  {boisson.stock === 0 ? 'Rupture' : 'Ajouter'}
                </button>
              </div>
            ))}
          </div>
        </section>

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
                  </li>
                ))}
              </ul>
              <div className="panier-total">
                <p>Total: {panier.reduce((sum, item) => sum + item.prix, 0)} GNF</p>
                <button onClick={validerCommande}>
                  Valider la commande
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;