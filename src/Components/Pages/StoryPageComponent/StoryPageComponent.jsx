import './StoryPageComponent.scss';
import React, { useEffect } from 'react';
import StoryBoard from '../../Utilities/StoryBoardComponent/StoryBoardComponent';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';

function StoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

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