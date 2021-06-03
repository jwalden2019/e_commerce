import React, { useState, useEffect} from 'react'
import "../styles/products.css"
import { db } from "../firebase/firebaseConfig.js";

export default function Products() {
    const [artworks, setArtworks] = useState([])
    useEffect(() => {
		db.collection("artwork").onSnapshot(snapshot);
		setArtworks(snapshot.docs.map((doc) => doc.data()));
	}, []);
    return (
        <div className="products__container"></div>
    )
}
