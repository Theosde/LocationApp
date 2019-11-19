import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import "../css/doc.css";

import url from '../config';

// proprio
// route fetch info user connecter (populate bail courrier quitance )
// route fetch info all locataire (populate bail courrier quitance )

// route fetch info doc proprio ( populate appartement idproprio)

function Upload() {

  const[dataFile,setDataFile] = useState({})
  const[valueInput,setValueInput] = useState("")
  const[userData,setUserData] = useState({})

  useEffect(()=>{
    if ( JSON.parse(sessionStorage.getItem("user")) == null ) {
      console.log("localStorage vide");
    }else {
      console.log("localStorage", JSON.parse(sessionStorage.getItem("user")) );
      setUserData(JSON.parse(sessionStorage.getItem("user")))
    }
  },[])

  var handleChangeFile = (event) => {
    console.log("data file",event.target.files[0]);
    setDataFile(event.target.files[0])
  }

  var handleClickConfirm = (event) => {

console.log("hello jai confirmer");

const data = new FormData()
data.append('file', dataFile)


//IF radio vide IF Select vide IF Fichier vide

fetch(url+"upload-document/"+valueInput+"/"+userData._id+"/"+"5d8e148c6a42de24382f218c", {
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

// ONCHANGE DU SELECT CHOIX DU LOCATAIRE POUR FILTRER LES DOCUMENTS DE CE LOCATAIRE

  // fILTER ONCHANGE(SELECT) DE LOCATAIRE POUR DOCUMENT D UN LOCATAIRE
  // var idLocataire = "5d8e148c6a42de24382f218c"
  // var test = findUser.bail.filter(e => {
  //   console.log("e",e.destinataire._id);
  //   console.log(idLocataire);
  //   return e.destinataire._id == idLocataire
  // } )
  //
  // console.log("test",test);

  return (

<div>

  <Header/>
  <div className="body-bg-doc">

    {userData.statususer=='proprio'?<div className="main-info-doc-3">
      <h1>Selectionner un destinataire</h1>
      <select type='select'>
        <option value="">Laure Saint-Genis</option>
        <option value="">Anais Chedania</option>
        <option value="">Charlotte Renard</option>
        <option value="">Riad Salem</option>
        <option value="">Pierre Chatanay</option>
      </select>

    </div>:<div></div>}

    <div className="main-info-doc-1">

      <h1> Envoyer un document </h1>

      {userData.statususer == "proprio" ? <div style={{display:"flex",justifyContent:"center"}}>

        <input className="checkbox-upload" type="radio" id="quittance" name="radio" data-type="quittance" onChange={(e)=>{
          console.log(e.target.dataset.type);
          var copyRadioData = {...valueInput}
          copyRadioData = e.target.dataset.type
          setValueInput(copyRadioData)
        }}></input><label for="quittance">Quittance</label>

        <input className="checkbox-upload" type="radio" id="bail" name="radio" data-type="bail" onChange={(e)=>{
          console.log(e.target.dataset.type);
          var copyRadioData = {...valueInput}
          copyRadioData = e.target.dataset.type
          setValueInput(copyRadioData)
        }}></input><label for="bail">Bail</label>

        <input className="checkbox-upload" type="radio" id="courrier" name="radio" data-type="courrier" onChange={(e)=>{
          console.log(e.target.dataset.type);
          var copyRadioData = {...valueInput}
          copyRadioData = e.target.dataset.type
          setValueInput(copyRadioData)
        }}></input><label for="courrier">Courrier</label>
      </div> : <div style={{display:"flex",justifyContent:"center"}}>

        <input className="checkbox-upload" type="radio" id="bail" name="radio" data-type="bail" onChange={(e)=>{
          console.log(e.target.dataset.type);
          var copyRadioData = {...valueInput}
          copyRadioData = e.target.dataset.type
          setValueInput(copyRadioData)
        }}></input><label for="bail">Bail</label>

        <input className="checkbox-upload" type="radio" id="courrier" name="radio" data-type="courrier" onChange={(e)=>{
          console.log(e.target.dataset.type);
          var copyRadioData = {...valueInput}
          copyRadioData = e.target.dataset.type
          setValueInput(copyRadioData)
        }}></input><label for="courrier">Courrier</label>

      </div>
      }

      <div className="choose-file"><input className="choose-file-btn" type="file" name="file" onChange={handleChangeFile}/></div>
      <button className="upload-btn" type="button" onClick={handleClickConfirm}>Envoyer</button>
    </div>


    <div className="main-info-doc-2">
      <h1> Documents reçu </h1>
      {userData.statususer=='locataire'?<div><div className="quittance menu">Quittances De Loyer</div>
      <div className="link-list">
        <a href="http://res.cloudinary.com/dyt3mhoy6/image/upload/v1571406071/eoddvew2fhiktk12cak2.pdf">Quittance Novembre 2019</a>
        <a href="http://res.cloudinary.com/dyt3mhoy6/image/upload/v1571406071/eoddvew2fhiktk12cak2.pdf">Quittance Octobre 2019</a>
        <a href="http://res.cloudinary.com/dyt3mhoy6/image/upload/v1571406071/eoddvew2fhiktk12cak2.pdf">Quittance Septembre 2019</a>
      </div></div>:<div></div>}
      <div className="bail menu">Bails de location</div>
      <div className="link-list">
        <a href="http://res.cloudinary.com/dyt3mhoy6/image/upload/v1571406071/eoddvew2fhiktk12cak2.pdf">Bail de location 2018 - 2019</a>
      </div>
      <div className="courriers-divers menu">Courriers</div><div className="link-list">
        <a href="http://res.cloudinary.com/dyt3mhoy6/image/upload/v1571406071/eoddvew2fhiktk12cak2.pdf">Devis travaux</a>
        <a href="http://res.cloudinary.com/dyt3mhoy6/image/upload/v1571406071/eoddvew2fhiktk12cak2.pdf">Suite : Rappel d'échéance</a>
      </div>
    </div>


    {userData.statususer=='proprio'?<div className="main-info-doc-2">
        <h1> Documents envoyés </h1>
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
      :<div className="main-info-doc-2"><h1> Documents envoyés </h1>
      <div className="bail menu">Bails de location</div>
      <div className="link-list">
        <a href="http://res.cloudinary.com/dyt3mhoy6/image/upload/v1571406071/eoddvew2fhiktk12cak2.pdf">Bail de location 2018 - 2019</a>
      </div>
      <div className="courriers-divers menu">Courriers</div><div className="link-list">
        <a href="http://res.cloudinary.com/dyt3mhoy6/image/upload/v1571406071/eoddvew2fhiktk12cak2.pdf">Accord travaux</a>
        <a href="http://res.cloudinary.com/dyt3mhoy6/image/upload/v1571406071/eoddvew2fhiktk12cak2.pdf">Rappel d'échéance</a>
      </div>

    </div>}



  </div>
  <Footer/>

</div>
  );
}

export default Upload;
