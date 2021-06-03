import React from 'react'
import "../styles/artworkcard.css"

export default function ArtworkCard({ key, artItem }) {
    return (
        <div className="card__container">
            <img className="card__imageURL" alt="" src={artItem.imageURL}/>
        </div>
    )
}
