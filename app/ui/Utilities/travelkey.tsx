import '@/app/ui/Styles/CSS/TravelKeyComponent.css';
import markerImg from '@/app/ui/Resources/Photos/marker.png'
import hotelpin from '@/app/ui/Resources/Photos/hotelpin.png'
import foodpin from '@/app/ui/Resources/Photos/foodpin.png'
import funpin from '@/app/ui/Resources/Photos/funpoint.png'
import Image from 'next/image';

export default function TravelKey() {
  return (
    <div className="TravelKey">
      <div className="MainContainer" id="TravelKeyMainContainer">
        <div className='TravelKeyHeaderContainer'>
            <h1 id="keyheader">Map Key</h1>
        </div>
        <div className='TravelKeyItemsContainer'>
            <div className='TravelKeyItemContainer'>
                <Image src={markerImg} alt="wedding venue" />
                <h2> - Wedding Venue</h2>
            </div>
            <div className='TravelKeyItemContainer'>
                <Image src={hotelpin} alt="hotel" />
                <h2> - Hotel</h2>
            </div>
            <div className='TravelKeyItemContainer'>
                <Image src={foodpin} alt="restaurant" />
                <h2> - Restaurant</h2>
            </div>
            <div className='TravelKeyItemContainer'>
                <Image src={funpin} alt="fun" />
                <h2> - Fun / Entertainment</h2>
            </div>
        </div>
      </div>
    </div>
  );
}