import '@/app/ui/Styles/CSS/TravelListComponent.css';
import hotels from './Leaflet/hotels.json'
import restaurants from './Leaflet/food.json'
import fun from './Leaflet/thingsToDo.json'
import Link from 'next/link';

export default function TravelList() {
    let locations: any[] = [];

    hotels.map((hotel) => (
        locations.push(hotel)
    ))
    restaurants.map((restaurant) => (
        locations.push(restaurant)
    ))
    fun.map((toDo) => (
        locations.push(toDo)
    ))

    return (
        <div className="TravelList">
            <div className="MainContainer" id="TravelListMainContainer">
                {locations.map((location, id) => (
                    <div className='TravelListLocations' key={id}>
                        <div className='TravelListLocation'>
                            <div className='TravelListLocationImage'>
                                <img
                                    src={location.image_url}
                                    alt={location.name}
                                />
                            </div>
                            <div className='TravelListLocationRight'>
                                <div className='TravelListLocationInfoContainer'>
                                    <p className='TravelListLocationName'>{location.name}</p>
                                    <div className='TravelListLocationRatingContainer'>
                                        <p className='TravelListLocationRatingNum'>{location.rating} Stars - {location.price}</p>
                                    </div>
                                    <div className='TravelListLocationHeroContainer'>
                                        <p className='TravelListLocationType'>{location.city}, {location.state}</p>
                                    </div>
                                </div>
                                <div className='TravelListLocationButtonContainer'>
                                    <Link
                                        href={'https://maps.apple.com/?q='+location.name+','+location.city+','+location.state}
                                        target='_blank'
                                        className='TravelListLocationButton'>Directions</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
