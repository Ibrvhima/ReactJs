import { FaShoppingCart, FaDollarSign} from "react-icons/fa";

function StatsBanner({ totalVentes, panier }) {
  return (
    <div className="stats-banner">
      <div className="stat-item">
        <FaDollarSign size={30} />
        <h3>Total des Ventes</h3>
        <p>{totalVentes} GNF</p>
      </div>
      <div className="stat-item">
        <FaShoppingCart size={30} />
        <h3> Commandes en cours</h3>
        <p>{panier.length}</p>
      </div>
    </div>
  );
}

export default StatsBanner;
