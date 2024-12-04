import '../../../Styles/CSS/PhotoPageComponent.css'
import React, { useEffect } from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import PhotoGallery from '../../Utilities/PhotoGalleryComponent/PhotoGalleryComponent';

function PhotoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="PhotoPage">
      
      <div className="MainContainer" id="PhotoMainContainer">
        <MenuBar id="photomenu"/>
        <PhotoGallery />
      </div>
    </div>
  );
}

export default PhotoPage;