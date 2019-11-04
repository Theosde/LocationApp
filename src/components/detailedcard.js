import React from 'react';
import Header from "./header";
import Footer from "./footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../css/detailedcard.css";
import "../css/add.css";





function DetailedCard() {



  return (
  <div>
    <Header/>
    <div className="body-bg-detailedcard">
      <div className="detailed-name-card"><h1>Loft Parisien - Rue des Lillas</h1></div>
      <div className="detailedcard">
        <div className="detailed-img-container"><img className="detailed-img" src="/images/annonce-img.jpg"></img></div>
      </div>

    </div>
    <Footer/>

  </div>

  );

}

export default DetailedCard;
