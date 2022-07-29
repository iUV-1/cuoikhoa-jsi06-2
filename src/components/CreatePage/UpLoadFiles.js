import React from 'react'
// import { AiFillPicture } from 'react-icons/fa';
import './UpLoadFiles.css'


const UpLoadBox = () => {
    const box = {
        width: "344px",
        height: "251px",
        border: "3px dashed rgb(204,204,204)",
        cursor: "pointer",
        borderRadius: "10px",
        marginBottom:"10px"
    }
    return <div className="UpLoadContainer">
        <label style={{fontSize:"16px",fontWeight:"600",marginBottom:"10px"}}>
            Image, Video, Audio, or 3D Model *
        </label>
        <span className="UpLoadExamples">File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</span>
        <div style={box}>
            {/* <AiFillPicture/> */}
            
        </div>
    </div>

}

export default UpLoadBox;