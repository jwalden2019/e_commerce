import React from 'react'
import "../styles/footer.css"
// import styled from "styled-components"

export default function Footer() {
    return (
    <div className="footer__container">
        <div className="footer__aboutLinks">
            <h3 className="footer__aboutTitle">About Us</h3>
            <p className="footer__aboutLink">About</p>
            <p className="footer__aboutLink">Jobs</p>
            <p className="footer__aboutLink">Press</p>
            <p className="footer__aboutLink">Contact</p>
        </div>
        <div className="footer__resourceLinks">
            <h3 className="footer__resourceTitle">Resources</h3>
            <p className="footer__resourceLink">Open Source</p>
            <p className="footer__resourceLink">Blog</p>
            <p className="footer__resourceLink">The Art Genome Project</p>
            <p className="footer__resourceLink">Education</p>
            <p className="footer__resourceLink">Blog</p>
        </div>
        <div className="footer__supportLinks">
            <h3 className="footer__supportTitle">Support</h3>
            <p className="footer__supportLink">Visit our Help Desk</p>
            <p className="footer__supportLink">Buying on ArtMarket</p>
            <p className="footer__supportLink">Get the App</p>
        </div>
    </div>
    )
}
