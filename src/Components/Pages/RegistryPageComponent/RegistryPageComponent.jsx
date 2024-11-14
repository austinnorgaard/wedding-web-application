import '../../../Styles/CSS/RegistryPageComponent.css';
import React, { Suspense, useEffect, lazy } from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
const RegistryGallery = lazy(() => import('../../Utilities/RegistryGalleryComponent/RegistryGalleryComponent'));
import Loading from '../FAQPageComponent/Loading';

function RegistryPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="RegistryPage">
      
        <div className="MainContainer" id="RegistryMainContainer">
          <MenuBar />
          <Suspense fallback={<Loading/>}>
            <RegistryGallery />
          </Suspense>
        </div>
      </div>
  );
}

export default RegistryPage;