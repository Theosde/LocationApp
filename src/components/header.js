import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../css/header.css";



function Header() {



  return (

        <div className="header-bg">
            <ul>
              <li>
                <Link className="Link left" to="/"><div className="icon-1"></div><span>Mes Infos</span></Link>
              </li>
              <li>
                <Link className="Link" to="/connection"><div className="icon-2"></div><span>Mes Logements</span></Link>
              </li>
              <li>
                <Link className="Link" to="/connection"><div className="icon-3"></div><span>Mes Documents</span></Link>
              </li>
              <li>
                <Link className="Link right" to="/connection"><div className="icon-4"></div><span>Messagerie</span></Link>
              </li>
            </ul>
        </div>


  );
}

export default Header;
