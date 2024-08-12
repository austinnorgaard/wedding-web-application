import './HomePageComponent.scss';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import bgimage from '../../../bg.png';

function HomePage() {
  return (
    <div className="HomePage">

      <div className="MainContainer" id="HomeMainContainer">
        <MenuBar id="homemenu"/>
        <img id="bgimage" src={bgimage} alt="bgImage"/>
        <div id="homefooter">
          <h1 id="homefootertext">Wedding Day</h1>
          <h1 id="homefooterdate">Friday, February 14, 2025</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
