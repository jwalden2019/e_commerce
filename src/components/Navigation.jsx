import React from 'react'
import "../styles/navigation.css"
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navigation__container">
                    <nav className="navigation__links">
                        <Link to="/LandingPage" className="navigation__name">ArtMarket</Link>
                        <Link to="/Products" className="navigation__artworks">Artworks</Link>
                        <Link to="/AboutUs" className="navigation__about">About Us</Link>
                        <Link to="/Cart" className="navigation__cart">Collection</Link>
                    </nav>
                
        </div>
    )
}
