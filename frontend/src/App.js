import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
import Navigation from './containers/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainContainer />
    </div>
  );
}

export default App;
