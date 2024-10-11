import { useState } from 'react';
import './MenuBarComponent.scss';
import { Link } from 'react-router-dom';
import menuicon from '../../../menu-icon.svg';
import exiticon from '../../../exit.svg';

function MenuBar() {
  const [main_class, setMainClass] = useState ("menuUnclicked");
  const [button, setButtonClass] = useState ("unclicked");
  const [click, setClicked] = useState (false);
  const [icon, setIcon] = useState (menuicon);

  // Toggle button/menu
  function updateMenu () {
    if (!click) {
        setMainClass ("menuClicked");
        setButtonClass ("clicked");
        setIcon (exiticon);
    }
    else {
        setMainClass ("menuUnclicked");
        setButtonClass ("unclicked");
        setIcon (menuicon);
    }
    setClicked (!click);
}

  return (
    <div className="MenuBar" id={main_class}>
      
      <div className="MenuBarMainContainer" id={main_class}>
        <button className={button} onClick={updateMenu} id="menuButton"><img src={icon} alt="hamburgerMenu"/></button>
        <Link onClick={updateMenu} to="/" id="homelink">Home</Link>
        <Link onClick={updateMenu} to="/story" id="storylink">Our Story</Link>
        <Link onClick={updateMenu} to="/photos" id="photoslink">Photos</Link>
        <Link onClick={updateMenu} to="/wedding-party" id="weddingpartylink">Wedding Party</Link>
        <Link onClick={updateMenu} to="/faq" id="faqlink">FAQs</Link>
        <Link onClick={updateMenu} to="/travel" id="travellink">Travel</Link>
        <Link onClick={updateMenu} to="/registry" id="registrylink">Registry</Link>
      </div>
    </div>
  );
}

export default MenuBar;