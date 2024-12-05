import '@/app/ui/Styles/CSS/VenmoPageComponent.css';
import Venmo from '@/app/ui/Utilities/venmo';

export default async function VenmoPage() {
  return (
    <div className="VenmoPage">
      <div className="MainContainer" id="VenmoPageMainContainer">
        <Venmo />
      </div>
    </div>
  );
}