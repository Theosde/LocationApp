import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../css/header.css";



function Header() {



  return (

        <div className="header-bg">
            <ul>
              <li>
                <Link className="Link left" to="/">Mes Infos</Link>
              </li>
              <li>
                <Link className="Link" to="/connection">Mes Logements</Link>
              </li>
              <li>
                <Link className="Link" to="/connection">Partager ou Télécharger des documents</Link>
              </li>
              <li>
                <Link className="Link right" to="/connection">Messagerie</Link>
              </li>
            </ul>
        </div>


  );
}

export default Header;
