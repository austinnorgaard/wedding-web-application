import './Styles/CSS/HomePageComponent.css';

import Header from './Components/Utilities/HeaderComponent/HeaderComponent';
import Footer from './Components/Utilities/FooterComponent/FooterComponent';
import MenuBar from './Components/Utilities/MenuBarComponent/MenuBarComponent';
import Link from 'next/link';
import Image from 'next/image';
import bgImage from './Resources/Photos/bg.jpg';

export default function Home() {
  return (
  <div id="index">
    <div className="HomePage">
      <div className="MainContainer" id="HomeMainContainer">
        <div id="homemenucover"/>
        <div className="HomeImageContainer" id="homeImage">
          <Image id="bgimage" src={bgImage} alt="bgImage"/>
        </div>
        <div id="homefooter">
          <h1 id="homefootertext">Wedding Day</h1>
          <h1 id="homefooterdate">Friday, February 14, 2025</h1>
        </div>
        <div id="rsvpoverhead">
          <Link href="/rsvp" id="rsvpcont">
            <Link href="/rsvp" id="rsvp">RSVP</Link>
          </Link>
        </div>
        <div id="rsvpsectioncont">
        </div>
      </div>
    </div>
  </div>
  );
}