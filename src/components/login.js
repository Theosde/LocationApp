import React from 'react';
import "../css/login.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function Login({match}) {

  console.log(match);

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"(500px"}}>

      <div className="body-bg">


        <form className="form-config">
          <div class="form-group">
            <label for="exampleInputEmail1">Adresse Mail</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrer votre email"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Mot de passe</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
          </div>
          <div class="form-group form-check">

            <a href="" class="form-check-label">S'inscrire</a>
          </div>
          <button style={{marginBottom:"15px"}} type="submit" class="btn btn-primary">Connexion</button>
        </form>

      </div>

    </div>
  );
}







export default Login;
