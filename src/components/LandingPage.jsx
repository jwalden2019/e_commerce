import React from 'react'
import "../styles/landingpage.css"
// import Search from "./Search"
import ImageSlider from "./ImageSlider"
import FeatureImage from "./FeatureImage"

export default function LandingPage() {
    return (
        <div className="landing__container">
            <div className="landing__featureImage">
                <FeatureImage />
            </div>
            <div className="landing__imageSlider">
                <ImageSlider />
            </div>
            <div className="landing__searchComponent">
                {/* <Search /> */}
            </div>
        </div>
    )
}
