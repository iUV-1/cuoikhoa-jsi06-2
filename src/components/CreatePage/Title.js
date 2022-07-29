import React from 'react'
import './Title.css'

const Title = () => {
    const title = {
        fontSize: "40px",
        fontWeight: "600",
        letterSpacing: "0px",
        color: "rgb(4, 17, 29)",
        marginBottom:"16px",
    }
    return (
        <div className="TitleContainer">
            <h1 style={title}>Create New Item</h1>
            <p style={{
        fontSize: "12px",
        fontWeight: "500",
        color: "rgb(112, 122, 131)",
        marginBottom:'12px'
            }}>Required fields</p>
        </div>
    )
}

export default Title;