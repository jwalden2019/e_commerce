import React, { useEffect } from 'react'
import "../styles/products.css"
import { Data } from "../Data/Data"
import { setArtworkData } from '../store/actions/artwork-actions'
import { useDispatch, useSelector } from "react-redux"
import ArtworkCard from './ArtworkCard'

export default function Products() {
    const dispatch = useDispatch()
    useSelector(state => state.artworkData)
    const artwork = Data
    useEffect(() => {
        setArtworkData(dispatch, artwork)
    }, [])

    return (
        <div className="products__container">
            <div className="products__categories">
                <img className="product__imageURL" src="https://bit.ly/3ctDrjw" alt=""></img>
                <img className="product__imageURL" src="https://bit.ly/3geOmyg" alt=""></img>
                <img className="product__imageURL" src="https://bit.ly/3ctkDRp" alt=""></img>
                <img className="product__imageURL" src="https://bit.ly/3513NVI" alt=""></img>
                <img className="product__imageURL" src="https://bit.ly/3wlhifb" alt=""></img>
                <img className="product__imageURL" src="https://bit.ly/3ioRU3U" alt=""></img>
                <p className="product__categoryBlurb1">Contemporary Art</p>
                <p className="product__categoryBlurb2">Abstract-Expressionist Art</p>
                <p className="product__categoryBlurb3">Outsider Art</p>
                <p className="product__categoryBlurb4">Classical Art</p>
                <p className="product__categoryBlurb5">Street Art</p>
                <p className="product__categoryBlurb6">Photography</p>
            </div>
            <div className="products__artworkDataMap">
            {artwork.map((artItem) => 
                <ArtworkCard key={artwork.id} artItem={artItem}/>
            )}
            </div>
        </div>
    )
}
