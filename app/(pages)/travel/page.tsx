import '@/app/ui/Styles/CSS/TravelPageComponent.css';
import TravelKey from '@/app/ui/Utilities/travelkey';
import TravelMap from '@/app/ui/Utilities/travelmap';
import TravelList from '@/app/ui/Utilities/travellist';

export default async function TravelPage() {
  return (
    <div className="TravelPage">
      <div className="MainContainer" id="TravelMainContainer">
        <div className="ContentContainer">
          <TravelKey/>
          <TravelMap/>
          <TravelList/>
        </div>
      </div>
    </div>
  );
}