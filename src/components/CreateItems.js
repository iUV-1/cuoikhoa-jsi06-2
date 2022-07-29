import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/CreateItems.css'
import Title from './CreatePage/Title'
import UpLoadBox from './CreatePage/UpLoadFiles'
import NameItems from './CreatePage/NameItems'
import ExTernalLinks from './CreatePage/ExternalLink'
import DescriptionItems from "./CreatePage/DescriptionItem"
import Price from './CreatePage/PriceItem'
import ButtonCreate from "./CreatePage/ButtonCreate"

const CreateItems = () => {
    return(
        <div className="Container">
            <Title />
            <UpLoadBox />
            <NameItems />
            <ExTernalLinks />
            <Price/>
            <DescriptionItems />
            <ButtonCreate/>
        </div>
    )
}

export default CreateItems