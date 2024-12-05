import '@/app/ui/Styles/CSS/PhotoPageComponent.css'
import PhotoGallery from '@/app/ui/Utilities/photogallery';
import { Suspense } from 'react';
import Loading from './Loading';

export default async function PhotoPage() {
  return (
    <div className="PhotoPage">
      <div className="MainContainer" id="PhotoMainContainer">
        <div className="PhotoGallery">
          <div className="MainContainer" id="PhotoGalleryMainContainer">
            <div className="Container PhotoGallery PhotoGalleryItems">
              <div className="Container PhotoGallery PhotoGalleryItem ProposalBox">
                <h1>Proposal</h1>
                <Suspense fallback={<Loading />}>
                  <PhotoGallery />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}