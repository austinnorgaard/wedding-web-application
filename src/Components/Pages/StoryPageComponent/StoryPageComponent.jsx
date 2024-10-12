import './StoryPageComponent.scss';
import React from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';

function StoryPage() {
  return (
    <div className="StoryPage">
      
      <div className="MainContainer" id="StoryMainContainer">
        <MenuBar />
        <h1>Story Title</h1>
      </div>
    </div>
  );
}

export default StoryPage;