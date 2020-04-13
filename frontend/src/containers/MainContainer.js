import React from 'react';
import Cards from '../components/Cards';
import Card from '../components/Card';
import Cart from '../components/Cart';
import logo from '../assets/background-logo.jpg';
import '../styles/MainContainer.css';
import { Route, Switch } from 'react-router-dom';

function MainContainer() {
  return (
    <div className="main-container">
      <img className="background-logo" src={logo} alt="BackgroundLogo" />
      <Switch>
        <Route path="/card/:name" component={Card} />
        <Route path="/card/:name" component={Cart} />
        <Route path="/" component={Cards} exact />
      </Switch>
    </div>
  );
}

export default MainContainer;
