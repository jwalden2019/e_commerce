import React from 'react'
import "../styles/navigation.css"
import { BrowserRouter as Router, Switch, Route, Link, Redirect, } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navigation__container">
            <Router>
                <div className="navigation__links">
                    <img className="navigation__logo" src="" alt=""/>
                    <nav>
                        <Link to="/" className="navigation__name">ArtMarket</Link>
                    </nav>
                </div>
            </Router>
        </div>
    )
}
