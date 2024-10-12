import './HomePageComponent.scss';
import React from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import bgimage from '../../../Resources/Photos/bg.jpg';

function HomePage() {
  return (
    <div className="HomePage">

      <div className="MainContainer" id="HomeMainContainer">
        <MenuBar id="homemenu"/>
        <div className="HomeImageContainer" id="homeImage">
          <img id="bgimage" src={bgimage} alt="bgImage"/>
        </div>
        <div id="homefooter">
          <h1 id="homefootertext">Wedding Day</h1>
          <h1 id="homefooterdate">Friday, February 14, 2025</h1>
        </div>
        <div id="rsvpoverhead">
          <button id="rsvpcont">
            <button id="rsvp">RSVP</button>
          </button>
        </div>
        <div id="rsvpsectioncont">
        
        </div>
      </div>
    </div>
  );
}

export default HomePage;
