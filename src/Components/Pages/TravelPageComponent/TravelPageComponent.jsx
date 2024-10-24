import './TravelPageComponent.scss';
import React, { useEffect } from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import TravelKey from '../../Utilities/TravelKeyComponent/TravelKeyComponent';
import TravelMap from '../../Utilities/TravelMapComponent/TravelMapComponent';
import TravelList from '../../Utilities/TravelListComponent/TravelListComponent';

function TravelPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="TravelPage">
      
      <div className="MainContainer" id="TravelMainContainer">
        <MenuBar />
        <div className="ContentContainer">
          <TravelKey/>
          <TravelMap/>
          <TravelList/>
        </div>
      </div>
    </div>
  );
}

export default TravelPage;