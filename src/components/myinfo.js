import React from 'react';
import Header from "./header";
import Footer from "./footer";
import "../css/info.css";






function Info() {



  return (
  <div>
    <Header/>
    <div className="body-bg-info">

      <div className="main-info">

        <div className="top-info">
          <div className="left-top-info">
            <div className="name">Nom</div>
            <div className="surname">Prenom</div>
            <div className="birthdate">Date de naissance</div>
          </div>
          <div className="right-top-info">
            <div className="filled-name">REY</div>
            <div className="filled-surname">ARNAUD</div>
            <div className="filled-birthdate">25/02/1987</div>
          </div>
        </div>

        <div className="bottom-info">
          <div className="left-bottom-info">
            <div className="phone">Téléphone</div>
            <div className="mail">Email</div>
            <div className="adress">Adresse</div>
          </div>
          <div className="right-bottom-info">
            <div className="filled-phone"><p>06.28.3.3.20.17</p><p className="modif-btn">Modifier</p></div>
            <div className="filled-mail"><p>arnaud.rey.job@gmail.com</p><p className="modif-btn">Modifier</p></div>
            <div className="filled-adress">2 rue de la fraternité 69100 Villeurbanne</div>
          </div>
        </div>
      </div>


    </div>
    <Footer/>

  </div>

  );

}

export default Info;
