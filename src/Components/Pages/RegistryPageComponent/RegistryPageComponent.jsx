import './RegistryPageComponent.scss';
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