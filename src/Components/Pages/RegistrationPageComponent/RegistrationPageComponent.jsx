import '../../../Styles/CSS/HomePageComponent.css';
import React, { useEffect } from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';

function RegistrationPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="RegistrationPage">
      <div className="MainContainer" id="RegistrationMainContainer">
        <MenuBar/>
      </div>
    </div>
  );
}

export default RegistrationPage;
