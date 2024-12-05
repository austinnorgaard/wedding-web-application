'use client';

import { useState, useEffect, React } from 'react';
import '@/app/ui/Styles/CSS/TravelMapComponent.css';
import postlewaitImg from "@/app/ui/Resources/Photos/postlewaits.png"
import markerImg from '@/app/ui/Resources/Photos/marker.png'
import hotelpin from '@/app/ui/Resources/Photos/hotelpin.png'
import foodpin from '@/app/ui/Resources/Photos/foodpin.png'
import funpin from '@/app/ui/Resources/Photos/funpoint.png'
import lockedLock from '@/app/ui/Resources/Photos/lockedLock.png'
import unlockedLock from '@/app/ui/Resources/Photos/unlockedLock.png'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from "leaflet"
import osm from './Leaflet/osm-providers'
import hotels from './Leaflet/hotels.json'
import restaurants from './Leaflet/food.json'
import fun from './Leaflet/thingsToDo.json'
import "leaflet/dist/leaflet.css"
import Link from 'next/link';
import Image from 'next/image';

export default function TravelMap() {
    /*
    const [lockImg, setLockImg] = useState(lockedLock)
    // eslint-disable-next-line
    const [centerPoint, setCenter] = useState({ lat: 45.180279, lng: -122.721680 })
    const ZOOM_LEVEL = 10;
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
    });
    const foodIcon = new L.icon ({
        iconUrl: foodpin,
        iconSize: [35, 35],
        iconAnchor: [17, 36],
        popupAnchor: [0, -36]
    });
    const funIcon = new L.icon ({
        iconUrl: funpin,
        iconSize: [35, 35],
        iconAnchor: [17, 36],
        popupAnchor: [0, -36]
    });
    const [map, setMap] = useState(null); //state that will contain the map object
    let [editMode, setEditMode] = useState(false); // state to toggle the edit buttons

    useEffect(() => {
        if (map) map.zoomControl.disable();
    }, [map]);


    function lockToggle () {
        if (!editMode) {
            map.doubleClickZoom.enable();
            map.scrollWheelZoom.enable();
            map.keyboard.enable();
            map.zoomControl.enable();
            map.dragging.enable();
            setLockImg(unlockedLock)
            } else {
            map.doubleClickZoom.disable();
            map.scrollWheelZoom.disable();
            map.keyboard.disable();
            map.zoomControl.disable();
            map.dragging.disable();
            setLockImg(lockedLock)
            }
        setEditMode((prevState) => !prevState);
    }
*/
    return (
        <div className="TravelMap">
            <div className="MainContainer" id="TravelMapMainContainer">
                {/*
                <MapContainer 
                    center={centerPoint} 
                    zoom={ZOOM_LEVEL} 
                    ref={setMap} 
                    scrollWheelZoom={false} 
                    className='MapContainer'
                    doubleClickZoom={false} 
                    keyboard={false} 
                    dragging={false}
                >
                    <TileLayer url={osm.matpiler.url} attribution={osm.matpiler.attribution} />
                    <Marker position={centerPoint} icon={markerIcon}>
                        <Popup closeButton={false} className='Postlewait'>
                            <div className='LocationImageContainer'>
                                <Image src={postlewaitImg} alt="postlewait" className='LocationImage' width={100} height={100} objectFit='contain'/>
                            </div>
                            <div className='LocationContainer'>
                                <div className='LocationInfoContainer'>
                                    <p className='LocationName'>Postlewait&apos;s Country Weddings</p>
                                    <div className='LocationRatingContainer'>
                                        <p className='LocationRatingNum'>4.7 Stars - (135)</p>
                                    </div>
                                    <div className='LocationHeroContainer'>
                                        <p className='LocationType'>Wedding venue - </p>
                                        <Image src={markerImg} alt="" className='LocationHeroItem' width={100} height={100} objectFit='contain'/>
                                    </div>
                                </div>
                                <div className='LocationButtonContainer'>
                                    <Link href="https://maps.apple.com/?q=Postlewait's,Canby,OR" target='_blank' className='LocationButton'>Directions</Link>
                                </div>
                            </div>
                        </Popup>
                        {hotels.map((hotel, id) => (
                            <Marker position={[hotel.lat, hotel.lng]} icon={hotelIcon} key={id} id={hotel.name}>
                                <Popup closeButton={false} className={hotel.name}>
                                <div className='LocationImageContainer'>
                                    <Image src={hotel.image_url} alt={hotel.name} className='LocationImage' width={100} height={100} objectFit='contain'/>
                                </div>
                                <div className='LocationContainer'>
                                    <div className='LocationInfoContainer'>
                                        <p className='LocationName'>{hotel.name}</p>
                                        <div className='LocationRatingContainer'>
                                            <p className='LocationRatingNum'>{hotel.rating} Stars - {hotel.price}</p>
                                        </div>
                                        <div className='LocationHeroContainer'>
                                            <p className='LocationType'>{hotel.city} - </p>
                                            <Image src={markerImg} alt="" className='LocationHeroItem' width={100} height={100} objectFit='contain'/>
                                        </div>
                                    </div>
                                    <div className='LocationButtonContainer'>
                                        <Link href={'https://maps.apple.com/?q='+hotel.name+','+hotel.city+','+hotel.state} target='_blank' className='LocationButton'>Directions</Link>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                        ))}
                        {restaurants.map((restaurant, id) => (
                            <Marker position={[restaurant.lat, restaurant.lng]} icon={foodIcon} key={id} id={restaurant.name}>
                                <Popup closeButton={false} className={restaurant.name}>
                                <div className='LocationImageContainer'>
                                    <Image src={restaurant.image_url} alt={restaurant.name} className='LocationImage' width={100} height={100} objectFit='contain'/>
                                </div>
                                <div className='LocationContainer'>
                                    <div className='LocationInfoContainer'>
                                        <p className='LocationName'>{restaurant.name}</p>
                                        <div className='LocationRatingContainer'>
                                            <p className='LocationRatingNum'>{restaurant.rating} Stars - {restaurant.price}</p>
                                        </div>
                                        <div className='LocationHeroContainer'>
                                            <p className='LocationType'>{restaurant.city} - </p>
                                            <Image src={markerImg} alt="" className='LocationHeroItem' width={100} height={100} objectFit='contain'/>
                                        </div>
                                    </div>
                                    <div className='LocationButtonContainer'>
                                        <Link href={'https://maps.apple.com/?q='+restaurant.name+','+restaurant.city+','+restaurant.state} target='_blank' className='LocationButton'>Directions</Link>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                        ))}
                        {fun.map((toDo, id) => (
                            <Marker position={[toDo.lat, toDo.lng]} icon={funIcon} key={id} id={toDo.name}>
                                <Popup closeButton={false} className={toDo.name}>
                                <div className='LocationImageContainer'>
                                    <Image src={toDo.image_url} alt={toDo.name} className='LocationImage' width={100} height={100} objectFit='contain'/>
                                </div>
                                <div className='LocationContainer'>
                                    <div className='LocationInfoContainer'>
                                        <p className='LocationName'>{toDo.name}</p>
                                        <div className='LocationRatingContainer'>
                                            <p className='LocationRatingNum'>{toDo.rating} Stars - {toDo.price}</p>
                                        </div>
                                        <div className='LocationHeroContainer'>
                                            <p className='LocationType'>{toDo.city} - </p>
                                            <Image src={markerImg} alt="" className='LocationHeroItem' width={100} height={100} objectFit='contain'/>
                                        </div>
                                    </div>
                                    <div className='LocationButtonContainer'>
                                        <Link href={'https://maps.apple.com/?q='+toDo.name+','+toDo.city+','+toDo.state} target='_blank' className='LocationButton'>Directions</Link>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                        ))}
                    </Marker>
                </MapContainer>
                <div className='MapLockContainer'>
                    <button className='MapLock' onClick={lockToggle}><Image src={lockImg} alt='lock' width={50} height={50} objectFit='contain'/></button>
                </div>
                */}
            </div>
        </div>
    );
}
