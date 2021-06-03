import React, { useEffect } from 'react'
import "../styles/products.css"
import { Data } from "../Data/Data"
import { setArtworkData } from '../store/actions/artwork-actions'
import { useDispatch, useSelector } from "react-redux"

export default function Products() {
    const dispatch = useDispatch()
    const artworkData = useSelector(state => state.artworkData)
    const artwork = Data
    console.log(artworkData)
    useEffect(() => {
        setArtworkData(dispatch, artwork)

    }, [])

    return (
        <div className="products__container">
            {artwork.map((artItem) => 
                <h3>{artItem.title}</h3>
            )}
        </div>
    )
}
