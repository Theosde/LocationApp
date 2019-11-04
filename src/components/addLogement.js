import React from 'react';
import "../css/addLogement.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";


function AddLogement() {

  return (
    <div style={{ width: "100%", height:"100vh"}}>
    <Header/>


        <div className="body-bg-addLogement">
          <div className="form-container">
            <input type="text" className="nameInput" id="" placeholder="Nom" value=""></input>
            <textarea placeholder='Description ici' maxlength="250"></textarea>
            <input type="text" className="countryInput" id="" placeholder="Pays" value=""></input>
            <div className="townInput">
              <input type="text" className="cpInput" id="" placeholder="Code Postale" value=""></input>
              <input type="text" className="villeInput" id="" placeholder="Ville" value=""></input>
            </div>
            <input type="text" className="adressInput" id="" placeholder="Adresse" value=""></input>
            <div className="statusCheckbox">
              <label className="addLogement-label">Status :</label>
              <input className="checkbox-upload" type="radio" id="Alouer" name="status"></input><label for="status">A louer</label>
              <input className="checkbox-upload" type="radio" id="occuper" name="status"></input><label for="status">Occupé</label>
            </div>
            <div className="flex-addLogement">
              <label>Type de bien :</label>
              <select name="type" style={{display:"flex",justifyContent:"center"}}>
                <option vlaue=""  selected>- Choisissez un type de bien -</option>
                <option value="T1">T1</option>
                <option value="T2">T2</option>
                <option value="T3">T3</option>
                <option value="T4">T4</option>
                <option value="T5">T5</option>
                <option value="duplex">Duplex</option>
                <option value="suplex">Suplex</option>
                <option value="loft">Loft</option>
              </select>
            </div>

            <div className="statusCheckbox">
              <label className="addLogement-label-2">Avec / Sans meubles :</label>
              <input className="checkbox-upload" type="radio" id="meubler" name="etat"></input><label for="etat">Meublé</label>
              <input className="checkbox-upload" type="radio" id="nonMeubler" name="etat"></input><label for="etat">Non meulé</label>
            </div>

            <div className="supDiv">
              <input type="text" className="superficieInput" id="" placeholder="Superficie" value=""></input>
            </div>

            <div className="statusCheckbox">
              <input type="text" className="priceInput" id="" placeholder="Prix du loyer" value=""></input>
              <input className="checkbox-upload" type="radio" id="cComprise" name="meuble"></input><label className="resp-label" for="meuble">Charges comprises</label>
              <input className="checkbox-upload" type="radio" id="cNonComprise" name="meuble"></input><label className="resp-label" for="meuble">Charges non comprises</label>
            </div>

            <div className="statusCheckbox-2">
              <label className="addLogement-label-3">Type de location :</label>
              <input className="checkbox-upload" type="radio" id="Coloc" name="coloc"></input><label for="coloc">Colocation</label>
              <input className="checkbox-upload" type="radio" id="pasColoc" name="coloc"></input><label for="coloc">Location classique</label>
            </div>
            <div className="maxLoc">
              <label className="addLogement-label-4">Nombre de locataire:</label>
              <input type="text"  className="maxLocInput" id="" placeholder="Nombre max de locataires" value=""></input>
            </div>
            <div className="statusCheckbox">
              <input type="file" name="file"/>
            </div>
            <button className="upload-btn-addlogement" type="button">Valider</button>

            </div>
        </div>


    <Footer/>
  </div>
  );
}



export default AddLogement;
