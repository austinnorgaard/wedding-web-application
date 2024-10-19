import './StoryPageComponent.scss';
import React from 'react';
import StoryBoard from '../../Utilities/StoryBoardComponent/StoryBoardComponent';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';

function StoryPage() {
  return (
    <div className="StoryPage">
      
      <div className="MainContainer" id="StoryMainContainer">
        <MenuBar />
        <StoryBoard />
      </div>
    </div>
  );
}

export default StoryPage;