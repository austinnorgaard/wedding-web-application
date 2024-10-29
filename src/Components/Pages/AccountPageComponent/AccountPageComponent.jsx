import '../../../Styles/CSS/AccountPageComponent.css';
import React, { useEffect } from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';

function AccountPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="AccountPage">
      <div className="MainContainer" id="AccountMainContainer">
        <MenuBar/>
        
      </div>
    </div>
  );
}

export default AccountPage;
