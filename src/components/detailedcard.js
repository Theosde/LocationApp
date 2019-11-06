import React, {useState} from 'react';
import Header from "./header";
import Footer from "./footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../css/detailedcard.css";
import "../css/add.css";





function DetailedCard() {

  const[basicState,setbasicState] = useState(false);

console.log(basicState);
  return (
  <div>
    <Header/>
    <div className="body-bg-detailedcard">

      <div className="detailed-name-card"><h1>Loft Parisien - Rue des Lillas</h1></div>

      <div className="detailedcard">
        <div className="detailed-img-container"><img className="detailed-img" src="/images/annonce-img.jpg"></img></div>
      </div>

      <div className="detailed-loc-card">
        <div className="up">
          <input className="add-locataire" placeholder="Ajouter un locataire à mon logement"></input>
          <div className="add-loc-btn">+</div>
        </div>
        <div className="down">
          <div className="locataire">
            <div className="loc-name">Anais Chedania</div>
            <div className="loc-infos">Tél: 07.56.78.90.01 / Mail:Anaiiiis@gmail.com</div>
            <div className="more-infos-btn" onClick={() => setbasicState(!basicState)}></div>
            <div className="delete-loc"></div>
          </div>
          {basicState ?<div className="depliant">
            <div className="garant"> Garant :</div>
            <div className="garant-name">Arnaud REY</div>
            <div className="loc-infos">Tél:07.56.78.90.01</div>
            <div className="loc-infos">Mail:arey@gmail.com</div>
          </div> : <div></div>}

          <div className="locataire">
            <div className="loc-name">Laure St Genis</div>
            <div className="loc-infos">Tél: 06.28.33.20.18 / Mail:LaureStgensi@gmail.com</div>
            <div className="more-infos-btn" onClick></div>
            <div className="delete-loc"></div>
          </div>
          <div className="locataire">
            <div className="loc-name">Charlotte Renard</div>
            <div className="loc-infos">Tél: 06.31.33.28.98 / Mail:LaureStgensi@gmail.com</div>
            <div className="more-infos-btn" onClick></div>
            <div className="delete-loc"></div>
          </div>
        </div>
      </div>

      <div className="detailed-infos-card">
        <div className="bien-infos">
          <div className="complete-infos">Description du bien : </div>
          <div style={{marginBottom:'15px',textAlign: 'justify',textJustify: 'inter-word'}}> Le logement est idéalement situé près d'une zone commerciale et des école supérieurs. Dans un immeuble de moins de 5 ans. Il peut contenir jusqu'à 3 locataires en collocation ou une famille avec 2 enfants. 3 chambres disponible , cuisine , grand salon et sale de bain  et wc séparé ! Un design moderne et épuré dans la décoration.</div>
        </div>
        <div className="adress-infos">
          <div className="complete-adress">Adresse Complète :</div>
          <div><strong>Pays :</strong> France </div>
          <div> <strong>Cp :</strong> 69100 - Villeurbanne </div>
          <div><strong>Rue :</strong> 2 rue de la fraternité</div>
        </div>
        <div className="bien-infos">
          <div className="complete-infos">Détails du bien : </div>
          <div><strong>Type :</strong> T2 </div>
          <div><strong>Meublé :</strong> Oui </div>
          <div><strong>Surface:</strong> 110m2</div>
        </div>
        <div className="location-infos">
          <div className="complete-location">Détails de la location : </div>
          <div><strong>Prix :</strong> 500 Euros/mois </div>
          <div><strong>Charges :</strong> Comprises </div>
          <div><strong>Disponibilité :</strong> Occupée</div>
        </div>
      </div>
      <div className="delete-appart"> Supprimer Cet Appartement</div>

    </div>
    <Footer/>

  </div>

  );

}

export default DetailedCard;
