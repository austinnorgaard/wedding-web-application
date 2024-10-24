import './HomePageComponent.scss';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import bgimage from '../../../Resources/Photos/bg.jpg';

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="HomePage">
      <div className="MainContainer" id="HomeMainContainer">
        <MenuBar/>
        <div id="homemenucover"/>
        <div className="HomeImageContainer" id="homeImage">
          <img id="bgimage" src={bgimage} alt="bgImage"/>
        </div>
        <div id="homefooter">
          <h1 id="homefootertext">Wedding Day</h1>
          <h1 id="homefooterdate">Friday, February 14, 2025</h1>
        </div>
        <div id="rsvpoverhead">
          <Link to="/rsvp" id="rsvpcont">
            <Link to="/rsvp" id="rsvp">RSVP</Link>
          </Link>
        </div>
        <div id="rsvpsectioncont">
        
        </div>
      </div>
    </div>
  );
}

export default HomePage;
