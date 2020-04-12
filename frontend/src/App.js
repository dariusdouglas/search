import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
import Navigation from './containers/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <MainContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
