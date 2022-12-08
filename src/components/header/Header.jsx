import React from 'react';
import './Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faMagnifyingGlass, faHeart} from "@fortawesome/free-solid-svg-icons";
import '../../styles/App.css';

function Header() {
    return (
        <div>
            <div id="header">
                <a href="#"><img
                    src="https://cdn.shopify.com/s/files/1/0550/8775/9469/files/Logo_800_x_300_px_3.png?v=1645170107"
                    alt="logo" className="logo"/></a>
                <p>
                    <a href="#">Sign in</a>
                    <a href="#"><FontAwesomeIcon icon={faMagnifyingGlass}/></a>
                    <a href="#"><FontAwesomeIcon icon={faHeart} style={{color: 'lightcoral'}}/></a>
                    <a href="#"><FontAwesomeIcon icon={faCartShopping}/></a>

                </p>
            </div>
            <nav>
                <ul id="menu">
                    <li><a href="#">HOME</a>
                    </li>
                    <li><a href="#">FURNITURE</a>
                        <ul>
                            <li><a href="#">Lorem ipsum dolor</a></li>
                            <li><a href="#">Maecenas dignissim fermentum luctus</a></li>
                            <li><a href="#">Suspendisse fringilla</a></li>
                            <li><a href="#">Lorem ipsum dolor</a></li>
                            <li><a href="#">Maecenas lacinia sem</a></li>
                            <li><a href="#">Suspendisse fringilla</a></li>
                        </ul>
                    </li>
                    <li><a href="#">LIGHTING</a>
                        <ul>
                            <li><a href="#">Lorem ipsum dolor</a></li>
                            <li><a href="#">Maecenas lacinia sem</a></li>
                            <li><a href="#">Suspendisse fringilla</a></li>
                        </ul>
                    </li>
                    <li><a href="#">OUTDOOR</a>
                        <ul>
                            <li><a href="#">Lorem ipsum dolor</a></li>
                            <li><a href="#">Maecenas dignissim fermentum luctus</a></li>
                            <li><a href="#">Suspendisse fringilla</a></li>
                        </ul>
                    </li>
                    <li><a href="#">ON SALE NOW</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;