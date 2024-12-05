'use client';

import '@/app/ui/Styles/CSS/TravelPageComponent.css';
import TravelList from '@/app/ui/Utilities/travellist';
import TravelKey from '@/app/ui/Utilities/travelkey';
import dynamic from 'next/dynamic'

const TravelMap = dynamic(
  () => import('@/app/ui/Utilities/travelmap'),
  { ssr: false }
)

export default function TravelPage() {
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