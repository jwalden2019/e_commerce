import React from 'react'
import { SliderData } from '../SliderData'
import "../styles/imageslider.css"
import { useDispatch } from "react-redux";
import { SET_FEATURE } from "../store/action-types/slider-actions-types.js"

export default function ImageSlider() {
//     function getRandomInt(max) {
//         return Math.floor(Math.random() * max);
//         }
//     const dispatch = useDispatch();
//     const setPic = () => {
//     setTimeout(() => {
//       const number = getRandomInt(3);
//       dispatch({ type: SET_FEATURE, payload: SliderData[number] });
//       setPic();
//     }, 5000);
//   };
//   setPic();
    return (
        <div className="slider__container">
            <div className="slider__mapData">
                {SliderData.map((slide, index) => {
                    return (
                        <img className="slider__image" src={slide.image} alt=""/>
                    )
                })}
            </div>
        </div>
    )
}
