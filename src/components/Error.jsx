import React from 'react'
import styled from "styled-components"
import "../styles/error.css"

const ErrorMessage = styled.h1`
    color: white;
    text-align: center;
    font-size: 5rem;
`
export default function Error() {
    return (
        <div className="error__container">
            <div className="error__message">
                <ErrorMessage>404: The page you are looking for does not exist.</ErrorMessage>
            </div>
        </div>
    )
}
