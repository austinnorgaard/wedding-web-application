import '../../../Styles/CSS/VenmoPageComponent.css';
import React, { useEffect } from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import Venmo from '../../Utilities/VenmoComponent/VenmoComponent';

function VenmoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

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