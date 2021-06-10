import React from "react";
import { useSelector } from "react-redux";
import "../styles/featurepicture.css"
import { SET_FEATURE } from "../store/action-types/slider-actions-types.js"
import { SliderData } from '../SliderData'
import { useDispatch } from "react-redux";

export default function FeaturePicture() {
    const dispatch = useDispatch();
    let number = 0
    const setPic = () => {
    setTimeout(() => {
      if (number > 1) {
        number = 0
      }
      dispatch({ type: SET_FEATURE, payload: SliderData[number] });
      setPic();
      number = number + 1
    }, 5000);
  };
  setPic();
  const featuredPicture = useSelector((state) => state.sliderReducer);
  console.log(featuredPicture)
  return (
    <div className="feature__container">
        <img src={featuredPicture.image} height="900" width="1000" alt=""/>
      </div>
  );
}