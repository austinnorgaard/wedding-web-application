import './TravelKeyComponent.scss';
import markerImg from '../../../marker.png'
import hotelpin from '../../../hotelpin.png'
import foodpin from '../../../foodpin.png'
import funpin from '../../../funpoint.png'

function TravelKey() {
  return (
    <div className="TravelKey">
      
      <div className="MainContainer" id="TravelKeyMainContainer">
        <div className='TravelKeyHeaderContainer'>
            <h1>Map Key</h1>
        </div>
        <div className='TravelKeyItemsContainer'>
            <div className='TravelKeyItemContainer'>
                <img src={markerImg} alt="wedding venue"/>
                <h2> - Wedding Venue</h2>
            </div>
            <div className='TravelKeyItemContainer'>
                <img src={hotelpin} alt="hotel"/>
                <h2> - Hotel</h2>
            </div>
            <div className='TravelKeyItemContainer'>
                <img src={foodpin} alt="restaurant"/>
                <h2> - Restaurant</h2>
            </div>
            <div className='TravelKeyItemContainer'>
                <img src={funpin} alt="fun"/>
                <h2> - Fun/Entertainment</h2>
            </div>
        </div>
      </div>
    </div>
  );
}

export default TravelKey;