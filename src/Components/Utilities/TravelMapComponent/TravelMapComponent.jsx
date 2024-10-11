import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TravelMapComponent.scss';
import postlewaitImg from "../../../postlewaits.png"
import markerImg from '../../../marker.png'
import hotelpin from '../../../hotelpin.png'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from "leaflet"
import osm from '../Leaflet/osm-providers'
import hotels from '../Leaflet/hotels.json'
import "leaflet/dist/leaflet.css"

function TravelMap() {
    const [load, setLoad] = useState ("unloaded");
    // eslint-disable-next-line
    const [centerPoint, setCenter] = useState({ lat: 45.180279, lng: -122.721680 })
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();
    const markerIcon = new L.icon ({
        iconUrl: markerImg,
        iconSize: [35, 35],
        iconAnchor: [17, 36],
        popupAnchor: [0, -36]
    })
    const hotelIcon = new L.icon ({
        iconUrl: hotelpin,
        iconSize: [35, 35],
        iconAnchor: [17, 36],
        popupAnchor: [0, -36]
    })

    useEffect(() => {
        document.getElementsByClassName('Postlewait')
        setLoad("loaded")
      }, // eslint-disable-next-line
      [load]);

    return (
        <div className="TravelMap">
        
        <div className="MainContainer" id="TravelMapMainContainer">
            <MapContainer center={centerPoint} zoom={ZOOM_LEVEL} ref={mapRef}>
                <TileLayer url={osm.matpiler.url} attribution={osm.matpiler.attribution} />
                <Marker position={centerPoint} icon={markerIcon}>
                    <Popup closeButton={false} className='Postlewait'>
                        <div className='LocationImageContainer'>
                            <img src={postlewaitImg} alt="postlewait" className='LocationImage'/>
                        </div>
                        <div className='LocationContainer'>
                            <div className='LocationInfoContainer'>
                                <p className='LocationName'>Postlewait's Country Weddings</p>
                                <div className='LocationRatingContainer'>
                                    <p className='LocationRatingNum'>4.7</p>
                                    <p className='LocationRatingStars'>Stars - </p>
                                    <p className='LocationRatingCount'>(135)</p>
                                </div>
                                <div className='LocationHeroContainer'>
                                    <p className='LocationType'>Wedding venue - </p>
                                    <img src={markerImg} alt="" className='LocationHeroItem'/>
                                </div>
                            </div>
                            <div className='LocationButtonContainer'>
                                <Link to="https://maps.apple.com/?q=Postlewait's,Canby,OR" target='_blank' className='LocationButton'>Directions</Link>
                            </div>
                        </div>
                    </Popup>
                    {hotels.map((hotel, id) => (
                        <Marker position={[hotel.lat, hotel.lng]} icon={hotelIcon}>
                            <Popup closeButton={false} className={hotel.name}>
                            <div className='LocationImageContainer'>
                                <img src={hotel.image_url} alt={hotel.name} className='LocationImage'/>
                            </div>
                            <div className='LocationContainer'>
                                <div className='LocationInfoContainer'>
                                    <p className='LocationName'>{hotel.name}</p>
                                    <div className='LocationRatingContainer'>
                                        <p className='LocationRatingNum'>{hotel.rating}</p>
                                        <p className='LocationRatingStars'>Stars - </p>
                                        <p className='LocationRatingCount'>{hotel.price}</p>
                                    </div>
                                    <div className='LocationHeroContainer'>
                                        <p className='LocationType'>{hotel.city} - </p>
                                        <img src={markerImg} alt="" className='LocationHeroItem'/>
                                    </div>
                                </div>
                                <div className='LocationButtonContainer'>
                                    <Link to={'https://maps.apple.com/?q='+hotel.name+','+hotel.city+','+hotel.state} target='_blank' className='LocationButton'>Directions</Link>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                    ))}
                </Marker>
            </MapContainer>
        </div>
        </div>
    );
}

export default TravelMap;
