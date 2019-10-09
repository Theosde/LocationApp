import React, {useState, useEffect} from 'react';

import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";

import url from './config';

import Signin from "./components/connection"
import Signup from "./components/inscription"
import Appart from "./components/appart"


import { createBrowserHistory } from "history"

const history = createBrowserHistory()

function App() {


  console.log(history);

  return (
    <div className="App">
      <Router history={history}>
        <Switch>

          <Route exact path="/" component={(props) => <Signin {...props} /> } />
          <Route  path="/connection" component={(props) => <Signin {...props} /> } />
          <Route  path="/inscription" component={(props) => <Signup {...props} /> } />
          <Route  path="/appart" component={(props) => <Appart {...props} /> } />

        </Switch>
    </Router>
  </div>


  );
}

export default App;
