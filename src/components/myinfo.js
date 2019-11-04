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


          <div className="generals-infos-col">
            <div className="name">Nom</div>
            <div className="surname">Prenom</div>
            <div className="birthdate">Date de naissance</div>
            <div className="phone">Téléphone</div>
            <div className="mail">Email</div>
          </div>

          <div className="filled-infos-col">
            <div className="filled-name">REY</div>
            <div className="filled-surname">ARNAUD</div>
            <div className="filled-birthdate">25/02/1987</div>
            <div className="filled-phone"><p>06.28.3.3.20.17</p></div>
            <div className="filled-mail"><p>arnaud.rey.job@gmail.com</p></div>
          </div>


          <div className="button-col">
            <p className="modif-btn">Modifier</p>
            <p className="modif-btn">Modifier</p>
          </div>

      </div>

      <div className="main-info-rib">
        <div>R.I.B</div>
        <input type="file" name="file"/>
        <button className="upload-rib-btn" type="button" >Upload</button>
      </div>




    </div>
    <Footer/>

  </div>

  );

}

export default Info;
