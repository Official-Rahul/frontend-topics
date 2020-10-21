import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className="sidenav">
        <a href="#">
          <img src='https://granter-staging.paytm.in/public/images/paytm_logo.png' alt='paytm logo'/>
        </a>
        <a href="#">Calculator</a>
        <a href="#">Movie App</a>
        <a href="#">Weather</a>
      </div>
      <div className="main">

      </div>
    </div>
  );
}

export default App;
