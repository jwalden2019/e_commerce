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
            <div className="products__artworkDataMap">
            {artwork.map((artItem) => 
                <ArtworkCard key={artwork.id} artItem={artItem}/>
            )}
            </div>
        </div>
    )
}
