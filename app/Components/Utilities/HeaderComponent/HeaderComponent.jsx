import '../../../Styles/CSS/HeaderComponent.css';
import React from 'react';
import leaves from '../../../Resources/Photos/bgleaves.png';
import logo from '../../../Resources/Photos/logo.png';

var saveTheDate = new Date(Date.UTC(2025, 1, 14, 19))
var today = new Date (Date.now())

var countdownDate = ((saveTheDate.valueOf()/1000) / 86400) - (((today.valueOf())/1000) / 86400);

function Header() {

  return (
    <div className="Header">
      
      <div className="MainContainer" id="HeaderMainContainer">
        <img id="bgleaves" src={leaves} alt="bgleaves"/>
        <a href="/" id="bglogoLink"><img id="bgLogo" src={logo} alt="bgLogo"/></a>
        <a href="/" className="HeaderText" id="mobileText">
          <h1 id="headernames">Austin &amp; Jessica</h1>
        </a>
        <div className='HeaderText' id="desktopText">
          <h1 id="headernames">Austin &amp; Jessica</h1>
          <div id="headersavethedate">Friday, February 14, 2025</div>
          <div id="countdown">{countdownDate.toFixed(0)} Days To Go!</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
