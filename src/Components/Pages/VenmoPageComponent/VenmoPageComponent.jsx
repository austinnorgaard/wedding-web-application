import './VenmoPageComponent.scss';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import Venmo from '../../Utilities/VenmoComponent/VenmoComponent';

function VenmoPage() {
  return (
    <div className="VenmoPage">
      
      <div className="MainContainer" id="VenmoPageMainContainer">
        <MenuBar />
        <Venmo />
      </div>
    </div>
  );
}

export default VenmoPage;