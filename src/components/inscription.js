import React, {useState, useEffect} from 'react';
import url from '../config';

import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";

import islog from "./moduleAuth"


function Inscription() {


  const[signInData,setSignInData] = useState({firstname:"",lastname:"",email:"",password:"",confirmPassword:"",phone:"",naissance:""})

  const[verifsession,setVerifsession] = useState(false)


  return (
    <div className="App">
      <label>Firstname: </label>
      <input type="text" value={signInData.firstname} onChange={(e)=> {
          var copysignInData = {...signInData}
          copysignInData.firstname = e.target.value
          setSignInData(copysignInData)
      } }/>
      <label>Lastname: </label>
      <input type="text" value={signInData.lastname} onChange={(e)=> {
          var copysignInData = {...signInData}
          copysignInData.lastname = e.target.value
          setSignInData(copysignInData)
      } }/>
      <label>Email: </label>
      <input type="text" value={signInData.email} onChange={(e)=> {
          var copysignInData = {...signInData}
          copysignInData.email = e.target.value
          setSignInData(copysignInData)
      } }/>
      <label>Password: </label>
      <input type="text" value={signInData.password} onChange={(e)=> {
          var copysignInData = {...signInData}
          copysignInData.password = e.target.value
          setSignInData(copysignInData)
      } }/>
      <label>Confirme Password: </label>
      <input type="text" value={signInData.confirmPassword} onChange={(e)=> {
          var copysignInData = {...signInData}
          copysignInData.confirmPassword = e.target.value
          setSignInData(copysignInData)
      } }/>
      <label>Phone: </label>
      <input type="text" value={signInData.phone} onChange={(e)=> {
          var copysignInData = {...signInData}
          copysignInData.phone = e.target.value
          setSignInData(copysignInData)
      } }/>
      <label>Date de naissance: </label>
      <input type="text" value={signInData.naissance} onChange={(e)=> {
          var copysignInData = {...signInData}
          copysignInData.naissance = e.target.value
          setSignInData(copysignInData)
      } }/>

      <button onClick={()=>{

        islog.signup(signInData.firstname,signInData.lastname,signInData.naissance,signInData.email,signInData.password,signInData.phone,"proprio")

      }} >Inscription</button>

      

      <p>pas de compte <Link to="/connection">Connection</Link></p>

    </div>




  );
}

export default Inscription;
