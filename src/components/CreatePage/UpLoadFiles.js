import React,{useState,useEffect} from 'react'
// import { AiFillPicture } from 'react-icons/fa';
import './UpLoadFiles.css'
import { FaFileImage } from "react-icons/fa"

const UpLoadBox = () => {
  const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    return <div className="UpLoadContainer">
        <label style={{fontSize:"16px",fontWeight:"600",marginBottom:"10px"}}>
            Image, Video, Audio, or 3D Model *
        </label>
        <span className="UpLoadExamples">File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</span>
        <label className="box">
            <input type="file" accept="accept=image/png, image/gif, image/jpeg" onChange={onSelectFile} />
            <FaFileImage className="icon-upload"/>
             {selectedFile &&  <img className="imagePreview" src={preview} /> }
            
        </label>
    </div>

}

export default UpLoadBox;