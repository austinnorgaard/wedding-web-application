import './VenmoComponent.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import venmoqr from "../../../Resources/Photos/venmoqr.jpg";

function Venmo() {
    return (
        <div className="Venmo">
        
            <div className="MainContainer" id="VenmoMainContainer">
                <Link to="https://venmo.com/u/Jessica-South-99" target='_blank' id="venmoitem">
                  <img src={venmoqr} alt="venmo qr"/>
                  <div className="VenmoTextContainer" id="VenmoText">
                    <h4 id="venmotitle">Newlywed House and Honeymoon Funds</h4>
                    <h4 id="venmogoal">$5000</h4>
                  </div>
                </Link>
            </div>
        </div>
    );
}

export default Venmo;