import React from 'react';

import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";
import Index from "./components/index";
import Signup from "./components/signup";
import Card from "./components/card";
import Info from "./components/myinfo";
import Message from "./components/mess";

import Upload from "./components/uploadfile";
import AddAppart from "./components/addAppart";


import url from './config';

import { createBrowserHistory } from "history"

  const history = createBrowserHistory()

function App() {


  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={(props) => <Login {...props} /> } />
          <Route  path="/connection" component={(props) => <Login {...props} /> } />
          <Route  path="/inscription" component={(props) => <Signup {...props} /> } />
          <Route  path="/appart" component={(props) => <Card {...props} /> } />
          <Route  path="/info" component={(props) => <Info {...props} /> } />
          <Route  path="/messages" component={(props) => <Message {...props} /> } />
          <Route  path="/documents" component={(props) => <Upload {...props} /> } />
          <Route  path="/addAppart" component={(props) => <AddAppart {...props} /> } />
        </Switch>
    </Router>
  </div>


  );
}

export default App;
