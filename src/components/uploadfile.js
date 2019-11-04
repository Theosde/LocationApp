import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import "../css/doc.css";

import url from '../config';



function Upload() {

  const[dataFile,setDataFile] = useState({})


  var handleChangeFile = (event) => {
    console.log("data file",event.target.files[0]);
    setDataFile(event.target.files[0])
  }

  var handleClickConfirm = (event) => {

    console.log("hello jai confirmer");

    const data = new FormData()
    data.append('file', dataFile)


    fetch(url+"upload", {
      method: 'post',
      body: data
    }).then(res => {
      console.log(res)
      return res.json()
    }).then(picture => {
      console.log("retour fetch upload",picture)

    }).catch(err => {
      console.log(err)
    })


  }


  return (

    <div>

      <Header/>
      <div className="body-bg-doc">

        <div className="main-info-doc-1">
          <h1> Envoyer un document </h1>
          <div style={{display:"flex",justifyContent:"center"}}>
            <input className="checkbox-upload" type="radio" id="scales" name="scales"></input><label for="scales">Quittance</label>
            <input className="checkbox-upload" type="radio" id="bail" name="scales"></input><label for="scales">Bail</label>
            <input className="checkbox-upload" type="radio" id="courrier" name="scales"></input><label for="scales">Courrier</label>
          </div>
          <div className="choose-file"><input className="choose-file-btn" type="file" name="file" onChange={handleChangeFile}/></div>
          <button className="upload-btn" type="button" onClick={handleClickConfirm}>Envoyer</button>




        </div>

        <div className="main-info-doc-2">
          <h1> Documents reçu </h1>
          <div className="quittance menu">Quittances De Loyer</div>
          <div className="link-list">
            <a href="http://res.cloudinary.com/dyt3mhoy6/image/upload/v1571406071/eoddvew2fhiktk12cak2.pdf">Quittance Novembre 2019</a>
            <a href="http://res.cloudinary.com/dyt3mhoy6/image/upload/v1571406071/eoddvew2fhiktk12cak2.pdf">Quittance Octobre 2019</a>
            <a href="http://res.cloudinary.com/dyt3mhoy6/image/upload/v1571406071/eoddvew2fhiktk12cak2.pdf">Quittance Septembre 2019</a>
          </div>
          <div className="bail menu">Bails de location</div>
          <div className="link-list">
            <a href="http://res.cloudinary.com/dyt3mhoy6/image/upload/v1571406071/eoddvew2fhiktk12cak2.pdf">Bail de location 2018 - 2019</a>
          </div>
          <div className="courriers-divers menu">Courriers</div><div className="link-list">
            <a href="http://res.cloudinary.com/dyt3mhoy6/image/upload/v1571406071/eoddvew2fhiktk12cak2.pdf">Accord travaux</a>
            <a href="http://res.cloudinary.com/dyt3mhoy6/image/upload/v1571406071/eoddvew2fhiktk12cak2.pdf">Rappel d'échéance</a>
          </div>
        </div>




      </div>
      <Footer/>

    </div>


  );
}

export default Upload;
