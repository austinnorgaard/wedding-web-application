import './FAQPageComponent.scss';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';

function FAQPage() {
  return (
    <div className="FAQPage">
      
      <div className="MainContainer" id="FAQMainContainer">
        <MenuBar />
        <h1>FAQ Title</h1>
      </div>
    </div>
  );
}

export default FAQPage;