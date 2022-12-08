import React from 'react';
import './Footer_style.css';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import '../../styles/App.css';

function Footer() {
    return (
        <div id="footer">
            <div className="contacts">
                <ul>
                    <li>FOLLOW US ON SOCIAL MEDIA</li>
                </ul>
                <a href="#"><img src={facebook} alt="facebook"/> </a>
                <a href="#"><img src={instagram} alt="instagram"/> </a>
            </div>
            <div className="general_contacts">
                <ul>
                    <li>HENDERSON FURNITURE PLUS</li>
                    <li>sales@hendersonfurnitureplus.com</li>
                    <li>1 (877) 799-7416</li>
                </ul>
            </div>
            <div className="subscribe">
                <p>SUBSCRIBE TO OUR NEWS</p>
                <input type="email" placeholder='email...'/>
            </div>
        </div>
    );
}

export default Footer;

