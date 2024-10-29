import '../../../Styles/CSS/LoginPageComponent.css';
import React, { useEffect } from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';

function LoginPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="LoginPage">
      <div className="MainContainer" id="LoginMainContainer">
        <MenuBar/>
        
      </div>
    </div>
  );
}

export default LoginPage;
