import './FAQPageComponent.scss';
import React, { useEffect } from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import FAQList from '../../Utilities/FAQListComponent/FAQListComponent';

function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="FAQPage">
      
      <div className="MainContainer" id="FAQMainContainer">
        <MenuBar />
        <FAQList />
      </div>
    </div>
  );
}

export default FAQPage;