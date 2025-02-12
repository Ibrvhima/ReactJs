// App.js
import { useState } from "react";
import Header from "./Header";
import StatsBanner from "./StatsBanner";
import MenuSection from "./MenuSection";
import PanierSection from "./PanierSection";

function App() {
  const [boissons, setBoissons] = useState([
    { id: 1, nom: "Jus de Bissap", prix: 5000, stock: 20, image: "bissap.png" },
    {
      id: 2,
      nom: "Jus de Gingembre",
      prix: 6000,
      stock: 15,
      image: "ginginbre.png",
    },
    { id: 3, nom: "Jus de Banane", prix: 7000, stock: 10, image: "banane.png" },
    {
      id: 4,
      nom: "Jus d'ananas",
      prix: 6000,
      stock: 12,
      image: "ananas.png",
    },
  ]);

  const [panier, setPanier] = useState([]);
  const [totalVentes, setTotalVentes] = useState(0);

  const ajouterAuPanier = (boisson) => {
    if (boisson.stock > 0) {
      setPanier([...panier, boisson]);
      setBoissons(
        boissons.map((b) =>
          b.id === boisson.id ? { ...b, stock: b.stock - 1 } : b
        )
      );
    }
  };
  const mettreAJourPanier = (nouveauPanier) => {
  setPanier(nouveauPanier);
};

  const validerCommande = () => {
    const total = panier.reduce((sum, item) => sum + item.prix, 0);
    setTotalVentes(totalVentes + total);
    setPanier([]);
  };

  const supprimerProduit = (nom) => {
    // Trouver tous les exemplaires du produit dans le panier
    const produitsSupprimes = panier.filter((item) => item.nom === nom);
    const quantiteSupprimee = produitsSupprimes.length;
  
    if (quantiteSupprimee === 0) return; // Sécurité : ne rien faire si le produit n'est pas trouvé
  
    // Mettre à jour le stock en ajoutant la quantité supprimée
    setBoissons(boissons.map((boisson) => 
      boisson.nom === nom ? { ...boisson, stock: boisson.stock + quantiteSupprimee } : boisson
    ));
  
    // Retirer tous les exemplaires du produit du panier
    const nouveauPanier = panier.filter((item) => item.nom !== nom);
    setPanier(nouveauPanier);
  };

  const mettreAJourStock = (nom, quantite) => {
    setBoissons(boissons.map((boisson) => 
      boisson.nom === nom ? { ...boisson, stock: boisson.stock + quantite } : boisson
    ));
  };
  
  

  return (
    <div className="container">
      <Header />
      <StatsBanner totalVentes={totalVentes} panier={panier} />
      <div className="flex_components">
        <MenuSection boissons={boissons} ajouterAuPanier={ajouterAuPanier} />
        <PanierSection
          panier={panier}
          validerCommande={validerCommande}
          supprimerProduit={supprimerProduit}
          mettreAJourPanier={mettreAJourPanier}
          mettreAJourStock={mettreAJourStock}
        />
      </div>
    </div>
  );
}

export default App;
