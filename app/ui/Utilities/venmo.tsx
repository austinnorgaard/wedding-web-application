import '@/app/ui/Styles/CSS/VenmoComponent.css';
import venmoqr from "@/app/ui/Resources/Photos/venmoqr.jpg";
import Link from 'next/link';
import Image from 'next/image';

export default function Venmo() {
    return (
        <div className="Venmo">
            <div className="MainContainer" id="VenmoMainContainer">
                <Link href="https://venmo.com/u/Jessica-South-99" target='_blank' id="venmoitem">
                  <Image src={venmoqr} alt="venmo qr" width={700} height={700} style={{objectFit: "contain"}}/>
                  <div className="VenmoTextContainer" id="VenmoText">
                    <h4 id="venmotitle">Newlywed House and Honeymoon Funds</h4>
                    <h4 id="venmogoal">$5000</h4>
                  </div>
                </Link>
            </div>
        </div>
    );
}