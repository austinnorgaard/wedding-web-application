import '@/app/ui/Styles/CSS/RegistryPageComponent.css';
import { Suspense } from 'react';
import RegistryGallery from '@/app/ui/Utilities/registrygallery';
import Loading from './Loading';

export default async function RegistryPage() {
  return (
    <div className="RegistryPage">
        <div className="MainContainer" id="RegistryMainContainer">
          <div className="MainContainer Registry" id="content">
            <Suspense fallback={<Loading />}>
              <RegistryGallery />
            </Suspense>
          </div>
        </div>
      </div>
  );
}