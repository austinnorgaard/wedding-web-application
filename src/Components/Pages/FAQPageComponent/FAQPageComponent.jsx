import '../../../Styles/CSS/FAQPageComponent.css';
import React, { useEffect } from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import FAQList from '../../Utilities/FAQListComponent/FAQListComponent';

function FAQPage() {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const question = urlParams.get('question')
    if (question === "gifts") {
      window.scrollTo(0, 5000)
    }
    else {
      window.scrollTo(0, 0)
    }
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