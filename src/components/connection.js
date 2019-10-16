import React, {useState, useEffect} from 'react';
import url from '../config';

import {BrowserRouter as Router, Switch, Link, Route, Redirect} from "react-router-dom";


import islog from "./moduleAuth"

function Connection({match}) {

  const[signInData,setSignInData] = useState({email:"",password:""})

  const[verifsession,setVerifsession] = useState(false)

  useEffect(()=>{

    if ( JSON.parse(localStorage.getItem("user")) == null ) {
      console.log("localStorage vide");
    }else {
      console.log("localStorage", JSON.parse(localStorage.getItem("user")) );
      setSignInData(JSON.parse(localStorage.getItem("user")))
    }

  },[])


  console.log("islog", islog);


  return (
    <div className="App">

      <label>Email: </label>
      <input type="text" value={signInData.email} onChange={(e)=> {
          var copysignInData = {...signInData}
          copysignInData.email = e.target.value
          setSignInData(copysignInData)
      } }/>
      <label>Password: </label>
      <input type="password" value={signInData.password} onChange={(e)=> {
          var copysignInData = {...signInData}
          copysignInData.password = e.target.value
          setSignInData(copysignInData)
      } }/>

      <button onClick={()=>{
        islog.signin(signInData.email,signInData.password,()=>{setVerifsession(!verifsession)})
      }} >Connection</button>

      {
        islog.getResultFetchSignin.error != undefined  ?  <div>{islog.getResultFetchSignin.error}</div>  : <div></div>
      }

      <p>pas de compte <Link to="/inscription">inscription</Link></p>

      {
        islog.islog ? <Redirect to="/appart" /> : <div></div>
      }
    </div>




  );
}

export default Connection;
