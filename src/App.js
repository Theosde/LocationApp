import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";
import Index from "./components/index";
import Signup from "./components/connection";
import Card from "./components/card";




import url from './config';



function App() {

console.log(url);

  return (

    <Router>



      <div>
        <Route exact path="/login" component={Login} />
        <Route  path="/connection" component={Signup} />
      </div>

    </Router>


  );
}

export default App;
