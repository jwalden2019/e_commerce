import React from 'react'
import "../styles/footer.css"
import styled from "styled-components"

const aboutLink = styled.h3`
    font-size: x-large;
`

export default function Footer() {
    return (
    <div className="footer__container">
        <div className="footer__aboutLinks">
            <h3 className="footer__title">About Us</h3>
            <aboutLink>About</aboutLink>
            {/* <p className="footer__aboutLink">About</p>
            <p className="footer__aboutLink">Jobs</p>
            <p className="footer__aboutLink">Press</p>
            <p className="footer__aboutLink">Contact</p> */}
        </div>
    </div>
    )
}
