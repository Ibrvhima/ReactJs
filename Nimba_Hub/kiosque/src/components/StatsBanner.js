// StatsBanner.js
function StatsBanner({ totalVentes, panier }) {
     return (
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
     );
   }
   
   export default StatsBanner;
   