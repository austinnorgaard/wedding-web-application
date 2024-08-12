import './PhotoPageComponent.scss'
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import PhotoGallery from '../../Utilities/PhotoGalleryComponent/PhotoGalleryComponent';

function PhotoPage() {
  return (
    <div className="PhotoPage">
      
      <div className="MainContainer" id="PhotoMainContainer">
        <MenuBar id="photomenu"/>
        <h1>Photos Title</h1>
        <PhotoGallery />
      </div>
    </div>
  );
}

export default PhotoPage;