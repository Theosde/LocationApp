import React from 'react';
import "../css/login.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function Login({match}) {

  console.log(match);

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"}}>

      <div className="body-bg-login">


        <form className="form-config-login">
          <div className="form-group">
            <label for="Mail">Adresse Mail</label>
            <input type="email" className="form-control" id="Mail" aria-describedby="emailHelp" placeholder="Entrer votre email"/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Mot de passe</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
          </div>
          <div className="form-group form-check">

            <a href="" className="form-check-label">S'inscrire</a>
          </div>
          <button style={{marginBottom:"15px"}} type="submit" className="btn btn-primary">Connexion</button>
        </form>

      </div>

    </div>
  );
}







export default Login;
