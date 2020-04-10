import React from 'react';
import Cards from '../components/Cards';
import logo from '../assets/background-logo.jpg';
import '../styles/MainContainer.css';

function MainContainer(){
    return(
        <div className="main-container">
            <img className="background-logo" src={logo} alt="BackgroundLogo"/>
            <Cards />
        </div>
    )
}

export default MainContainer;