import React from 'react'
import { SliderData } from '../SliderData'
import "../styles/imageslider.css"


export default function ImageSlider() {
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
