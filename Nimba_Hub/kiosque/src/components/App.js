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

  const validerCommande = () => {
    const total = panier.reduce((sum, item) => sum + item.prix, 0);
    setTotalVentes(totalVentes + total);
    setPanier([]);
  };

  const supprimerDuPanier = (index) => {
    const newPanier = [...panier];
    const removedItem = newPanier.splice(index, 1)[0];

    setPanier(newPanier);

    // Rendre l'article au stock
    setBoissons(
      boissons.map((b) =>
        b.id === removedItem.id ? { ...b, stock: b.stock + 1 } : b
      )
    );
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
          supprimerDuPanier={supprimerDuPanier}
        />
      </div>
    </div>
  );
}

export default App;
