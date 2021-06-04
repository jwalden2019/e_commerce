import React from 'react'
import "../styles/cart.css"
import { useSelector } from "react-redux"

export default function Cart() {
    const cart = useSelector(state => state.cartReducer)
    return (
        <div className="cart__container">
            {cart.map(artwork => {
                return (
        <div className="cart__artwork">
           <img src={artwork.imageURL} alt="" className="cart__imageURL"/>
            <p className="cart__blurb">{artwork.artist}</p>
            <p className="cart__blurb">{artwork.title}</p>
            <p className="cart__blurb">{artwork.year}</p>
            <p className="cart__blurb">{artwork.price}</p>
        </div>
        )
}       )}
        </div>
    )
}
