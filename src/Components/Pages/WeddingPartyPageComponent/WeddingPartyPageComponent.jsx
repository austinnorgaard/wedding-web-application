import './WeddingPartyPageComponent.scss';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';

function WeddingPartyPage() {
  return (
    <div className="WeddingPartyPage">
      
      <div className="MainContainer" id="WeddingPartyMainContainer">
        <MenuBar />
        <h1>Wedding Party Title</h1>
      </div>
    </div>
  );
}

export default WeddingPartyPage;