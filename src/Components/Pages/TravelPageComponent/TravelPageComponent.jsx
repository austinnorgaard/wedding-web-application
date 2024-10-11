import './TravelPageComponent.scss';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import TravelMap from '../../Utilities/TravelMapComponent/TravelMapComponent';

function TravelPage() {
  return (
    <div className="TravelPage">
      
      <div className="MainContainer" id="TravelMainContainer">
        <MenuBar />
        <TravelMap/>
      </div>
    </div>
  );
}

export default TravelPage;