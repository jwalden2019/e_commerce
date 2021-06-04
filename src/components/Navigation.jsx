import React from 'react'
import "../styles/navigation.css"
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navigation__container">
            <img className="navigation__logo" src="" alt=""/>
                    <nav className="navigation__links">
                        <Link to="/LandingPage" className="navigation__name">ArtMarket</Link>
                        <Link to="/Products" className="navigation__artworks">Artworks</Link>
                        <Link to="/AboutUs" className="navigation__about">About Us</Link>
                        <Link to="/Card" className="navigation__cart">Cart</Link>
                    </nav>
                
        </div>
    )
}
