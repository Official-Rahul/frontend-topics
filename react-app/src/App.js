import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Calculator from './calculator/Calculator';
import Movie from './movie/Movie';
import Weather from './weather/Weather';

function App() {

  return (
    <Router>
      <div className="sidenav">
        <a href="#">
          <img src='https://granter-staging.paytm.in/public/images/paytm_logo.png' alt='paytm logo'/>
        </a>
        <Link to='calculator'>Calculator</Link>
        <Link to='movie'>Movie App</Link>
        <Link to='weather'>Weather</Link>
      </div>
      <div className="main">
        <Switch>
          <Route path='/calculator'>
            <Calculator />
          </Route>
          <Route path='/movie'>
            <Movie />
          </Route>
          <Route path='/weather'>
            <Weather />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
