import React from 'react'
import "../styles/artworkpage.css"
import { useSelector } from "react-redux"

export default function IndividualProductPage() {
    const individualArtwork = useSelector(state => state.artworkReducer)
    return (
       <div className="artwork__container">
            {cart.map(artwork => {
                return (
        <div className="artwork__artwork">
           <img src={artwork.imageURL} alt="" className="artwork__imageURL"/>
            <p className="artwork__blurb">{artwork.artist}</p>
            <p className="artwork__blurb">{artwork.title}</p>
            <p className="artwork__blurb">{artwork.year}</p>
            <p className="artwork__blurb">{artwork.price}</p>
        </div>
        )
}       )}
        </div>
    )
}
