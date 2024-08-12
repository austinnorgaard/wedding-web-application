import './TravelPageComponent.scss';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';

function TravelPage() {
  return (
    <div className="TravelPage">
      
      <div className="MainContainer" id="TravelMainContainer">
        <MenuBar />
        <h1>Travel Title</h1>
      </div>
    </div>
  );
}

export default TravelPage;