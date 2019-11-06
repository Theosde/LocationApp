import React, {useState, useEffect} from 'react';
import Header from "./header";
import Footer from "./footer";
import "../css/info.css";





function Info() {

  const[userData,setUserData] = useState({})

  useEffect(()=>{
    if ( JSON.parse(sessionStorage.getItem("user")) == null ) {
      console.log("localStorage vide");
    }else {
      console.log("localStorage", JSON.parse(sessionStorage.getItem("user")) );
      setUserData(JSON.parse(sessionStorage.getItem("user")))
    }
  },[])


  console.log(userData);


  //DATE LIVRAISON
  var date = new Date(userData.birthday);

  //console.log("date",date)

  var jour = "00";
  var mois = "00";
  var année = date.getFullYear();

  if(date.getDate() < 10){
  jour = '0'+ date.getDate()
  }else{jour = date.getDate()
  }

  if(date.getMonth() < 10){
    mois = '0' + (date.getMonth()+1)
  }else{
    mois = (date.getMonth()+1)
  }




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
            <div className="filled-name">{userData.lastname}</div>
            <div className="filled-surname">{userData.firstname}</div>
            <div className="filled-birthdate">{jour+'/'+mois+'/'+année}</div>
            <div className="filled-phone"><p>{userData.phone}</p></div>
            <div className="filled-mail"><p>{userData.email}</p></div>
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
