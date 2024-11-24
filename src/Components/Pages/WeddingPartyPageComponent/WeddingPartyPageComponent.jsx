import '../../../Styles/CSS/WeddingPartyPageComponent.css';
import React, { useEffect } from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';

function WeddingPartyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

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