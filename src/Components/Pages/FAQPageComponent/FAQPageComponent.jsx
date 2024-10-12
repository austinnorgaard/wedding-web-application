import './FAQPageComponent.scss';
import React from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import FAQList from '../../Utilities/FAQListComponent/FAQListComponent';

function FAQPage() {

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