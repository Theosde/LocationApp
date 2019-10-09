import React, {useState, useEffect} from 'react';
import url from '../config';

import {BrowserRouter as Router, Switch, Link, Route,Redirect} from "react-router-dom";


import islog from "./moduleAuth"


function Connection({match,email,password}) {

  if (!islog.islog) return <Redirect to="/connection" />

  return (
    <div>
      <h1 >APPART</h1>
    </div>
  );
}

export default Connection;
