import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './menu';
import "./menu.css"
import "./home.css"
import "./add.css"
import "./technolist.css"
import Home from './home';
import AddTechno from './addTechno';
import TechnoList from './listeTechno';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <Home />
    <AddTechno />
    <TechnoList />
  </React.StrictMode>
);

