import '@/app/ui/Styles/CSS/HomePageComponent.css';
import Link from 'next/link';
import Image from 'next/image';
import bgImage from '@/app/ui/Resources/Photos/bg.jpg';

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
            <p id="rsvp">RSVP</p>
          </Link>
        </div>
        <div id="rsvpsectioncont">
        </div>
      </div>
    </div>
  </div>
  );
}