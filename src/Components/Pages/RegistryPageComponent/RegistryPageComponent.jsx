import './RegistryPageComponent.scss';
import React from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import RegistryGallery from '../../Utilities/RegistryGalleryComponent/RegistryGalleryComponent';

function RegistryPage() {
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