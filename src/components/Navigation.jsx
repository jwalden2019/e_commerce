import React from 'react'
import "../styles/navigation.css"
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navigation__container">
                    <div className="navigation__nameContainer">
                            <Link to="/LandingPage" className="navigation__name">ArtMarket</Link>
                        </div>
                        <div className="navigation__linkContainer">
                            <Link to="/Products" className="navigation__artworks">Artworks</Link>
                            <Link to="/AboutUs" className="navigation__about">About Us</Link>
                            <Link to="/Cart" className="navigation__cart">Collector</Link>
                        </div>
                    </div>
    )
}
