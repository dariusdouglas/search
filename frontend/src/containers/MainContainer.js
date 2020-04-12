import React from 'react';
import Cards from '../components/Cards';
import Card from '../components/Card';
import logo from '../assets/background-logo.jpg';
import '../styles/MainContainer.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function MainContainer() {
  return (
    <div className="main-container">
      <img className="background-logo" src={logo} alt="BackgroundLogo" />
      <Switch>
        <Route path="/card/:name" component={Card} />
      </Switch>
      <Route path="/" component={Cards} exact />
    </div>
  );
}

export default MainContainer;
