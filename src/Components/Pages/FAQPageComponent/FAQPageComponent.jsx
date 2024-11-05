import '../../../Styles/CSS/FAQPageComponent.css';
import React, { lazy, Suspense } from 'react';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import Loading from './Loading';

function FAQPage() {
  const FAQList = lazy(() => import('../../Utilities/FAQListComponent/FAQListComponent'));

  return (
    <Suspense fallback={<Loading />}>
      <div className="FAQPage">
      
        <div className="MainContainer" id="FAQMainContainer">
          <MenuBar />
          <FAQList />
        </div>
      </div>
    </Suspense>
  );
}

export default FAQPage;