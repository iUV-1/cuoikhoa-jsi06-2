import React, { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import "./style/CreateItems.css";
import Title from "./CreatePage/Title";
import UpLoadBox from "./CreatePage/UpLoadFiles";
import NameItems from "./CreatePage/NameItems";
import ExTernalLinks from "./CreatePage/ExternalLink";
import DescriptionItems from "./CreatePage/DescriptionItem";
import Price from "./CreatePage/PriceItem";
import ButtonCreate from "./CreatePage/ButtonCreate";
import { FaFileImage } from "react-icons/fa";
import { Input, Textarea } from "@nextui-org/react";
import LoadingStatus from './LoadingStatus.js'


const userData = {
  name: "",
  price: 0.1,
  isSold: "",
  url: undefined,
  des: "",
};
const CreateItems = () => {
  const { publicKey } = useWallet();

  const [values, setValues] = useState(userData);
  const [preview, setPreview] = useState();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!values.url || preview) return;
    const reader = new FileReader();
    reader.readAsDataURL(values.url);
    reader.onloadend = () => {
      setValues({
        ...values,
        url: reader.result,
      });
    };
    const objectUrl = URL.createObjectURL(values.url);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [values.url]);

  const onSelectFile = (e) => {
    const { name } = e.target;
    if (name !== "url") {
      const { value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    } else {
      setValues({
        ...values,
        [name]: e.target.files[0],
      });
    }
  };
  const handleClick = async (event) => {
    event.preventDefault();
    setLoading(true)
    if (!publicKey) {
    setLoading(false)
      alert("please open a wallet first");
      return;
    }
    const payload = {
      ...values,
      isSold: publicKey.toBase58(),
      price: Number(values.price),
      seller: publicKey.toBase58(),
    };

    //Expected payload data:
    // des: "DESCRIPTION"
    // isSold: "4URoFFPB1GvhN52jRuWVLQGFReQnEAtogZDZ78E6u9zr" 
    // name: "PRODUCT NAME" 
    // price: 2 <- In SOL
    // seller: "4URoFFPB1GvhN52jRuWVLQGFReQnEAtogZDZ78E6u9zr" <- SELLER ID
    // url: undefined <- URL OF IMG
    
    //check if one of the content in payload is empty.
    if (!payload.des || !payload.name || !payload.price || !payload.url){
        setLoading(false);
        console.log(payload)
        alert("you must fill in all of the boxes!");
        return;
    }

    console.log(payload);
    const request = await fetch(
      "https://62dcaf7f4438813a26182349.mockapi.io/api/v1/collection/nft"
      ,{
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if(request.status < 400){
        setLoading(false)
        alert("success!");
        return;
    } else {
        setLoading(false)
        alert("something went wrong!");
        console.log("error: ", request.status);
        console.log(request);
    }
  };

  return (
    <div className="Container">
      <Title />
    
      {/* <UpLoadBox /> */}
      <div className="UpLoadContainer">
        <label
          style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px" }}
        >
          Image, Video, Audio, or 3D Model *
        </label>
        <span className="UpLoadExamples">
          File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
          GLB, GLTF. Max size: 100 MB
        </span>
        <label className="box">
          <input
            name="url"
            type="file"
            accept="accept= image/png, image/gif, image/jpeg"
            onChange={onSelectFile}
          />
          <FaFileImage className="icon-upload" />
          {values.url && <img className="imagePreview" src={preview} />}
        </label>
      </div>

      {/* <NameItems /> */}
      <div className="ItemNameContainer">
        <div>
          <label className="labelName">
            Name<span style={{ color: "rgb(235, 87, 87)" }}> *</span>
          </label>
        </div>
        <div>
          <Input
            clearable
            bordered
            placeholder="Item name"
            className="ItemNameInput"
            onChange={onSelectFile}
            name="name"
          />
        </div>
      </div>

      {/* <Price/> */}
      <div className="PriceContainer">
        <label className="labelPrice">Price</label>
        <Input
          clearable
          bordered
          placeholder="Type your price"
          className="PriceInput"
          name="price"
          onChange={onSelectFile}
        />
      </div>

      {/* <DescriptionItems /> */}
      <div>
        <div className="DescriptionItemContainer">
          <label className="DesLabel">Description</label>
          <span className="Description">
            The description will be included on the item's detail page
            underneath its image.{" "}
            <a
              href="https://www.markdownguide.org/cheat-sheet/"
              style={{
                color: "rgb(32, 129, 226)",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Markdown
            </a>{" "}
            syntax is supported.
          </span>
        </div>
        <div>
          <Textarea
            placeholder="Provide a detailed description of your item"
            className="DescriptionTextArea"
            name="des"
            onChange={onSelectFile}
          />
        </div>
      </div>

      {/* <ButtonCreate/> */}
      <div className="CreateButtonContainer">
        <button className="CreateButton" onClick={handleClick}>
          Create
        </button>
      </div>
      <LoadingStatus active={loading} text="handling..."/>
    </div>
  );
};

export default CreateItems;
