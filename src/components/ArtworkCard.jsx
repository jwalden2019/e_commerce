import React from 'react'
import "../styles/artworkcard.css"
import { addToCart } from "../store/actions/cart-actions.js"
import { viewArtwork } from "../store/actions/one-artwork-actions.js"
import { useDispatch, useSelector } from "react-redux"

export default function ArtworkCard({ key, artItem }) {
    useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    return (
        <div className="card__container">
            <img className="card__imageURL" alt="" src={artItem.imageURL}/>
            <p className="card__blurb">{artItem.artist}</p>
            <p className="card__blurb">{artItem.title}</p>
            <p className="card__blurb">{artItem.year}</p>
            <p className="card__blurb">{artItem.price}</p>
        <div className="card__buttons">
            <button className="card__addCartBtn" onClick={() => addToCart(dispatch, artItem)}>Add To Cart</button>
            <button className="card__viewItem" onClick={() => viewArtwork(dispatch, artItem)}>View Artwork</button>
        </div>
        </div>
    )
}
