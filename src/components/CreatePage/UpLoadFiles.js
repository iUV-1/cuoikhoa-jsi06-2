import React from 'react'
// import { AiFillPicture } from 'react-icons/fa';
import './UpLoadFiles.css'
import { FaFileImage } from "react-icons/fa"

const UpLoadBox = () => {
 
    return <div className="UpLoadContainer">
        <label style={{fontSize:"16px",fontWeight:"600",marginBottom:"10px"}}>
            Image, Video, Audio, or 3D Model *
        </label>
        <span className="UpLoadExamples">File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</span>
        <div  className ="box">
            {/* <AiFillPicture/> */}
            <input type="file"/>
            <FaFileImage className="icon-upload" />
          
        </div>
    </div>

}

export default UpLoadBox;