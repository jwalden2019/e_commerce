import React from "react";
import { useSelector } from "react-redux";
import "../styles/featurepicture.css"

export default function FeaturePicture() {
  const featuredPicture = useSelector((state) => state.sliderReducer);
  return (
    <div className="feature__container">
        <img className="feature__featuredImage" src={featuredPicture.image} height="900" width="1000" alt=""/>
      </div>
  );
}