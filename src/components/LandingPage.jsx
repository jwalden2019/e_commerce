import React from 'react'
import "../styles/landingpage.css"
import FeatureImage from "./FeatureImage"

export default function LandingPage() {
    return (
        <div className="landing__container">
            <div className="landing__featureImage">
                <FeatureImage />
            </div>
        </div>
    )
}
