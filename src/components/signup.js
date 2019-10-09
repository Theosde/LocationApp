import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../css/suscribe.css";




function Signup() {



  return (

    <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"(500px"}}>

      <div className="body-bg">


        <form className="form-config">

          <div className="form-org-1">
            <div class="form-group">
              <label for="Name">Nom</label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
            </div>
            <div class="form-group">
              <label for="Surname">Prénom</label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
            </div>
          </div>

          <div className="form-org">
          <div class="form-group">
            <label for="Adresse">Adresse</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
          </div>
          <div class="form-group">
            <label for="city">Ville</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
          </div>
          <div class="form-group">
            <label for="cp">Code postal</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
          </div>
        </div>


          <div class="form-group">
            <label for="email">Adresse Mail</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrer votre email"/>
          </div>
          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
          </div>
          <div class="form-group form-check">
            <a href="" class="form-check-label">Se Connecter</a>
          </div>
          <button style={{marginBottom:"15px"}} type="submit" class="btn btn-primary">Sinscrire</button>
        </form>

      </div>

    </div>


  );
}

export default Signup;
