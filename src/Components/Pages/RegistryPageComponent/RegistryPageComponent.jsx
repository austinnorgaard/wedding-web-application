import '../../../Styles/CSS/RegistryPageComponent.css';
import React, { useEffect } from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import RegistryGallery from '../../Utilities/RegistryGalleryComponent/RegistryGalleryComponent';

function RegistryPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="RegistryPage">
      
      <div className="MainContainer" id="RegistryMainContainer">
        <MenuBar />
        <RegistryGallery />
      </div>
    </div>
  );
}

export default RegistryPage;