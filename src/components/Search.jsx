import React from 'react'
import "../styles/search.css"

export default function Search() {
    return (
        <div className="search__container">
            <form className="search__form">
                <input className="search__searchField" type="text" placeholder="Search artworks, artists, countries.."/>
            </form>
        </div>
    )
}
