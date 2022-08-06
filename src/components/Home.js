import React from 'react';
import { Container } from '@nextui-org/react';
import {AiFillShopping, AiOutlinePlusSquare} from "react-icons/ai";
import {Link as RouterLink} from 'react-router-dom';
import './style/Home.css'

const Home = () => {
    return(
        <>
            <p>You are at: home</p>
            <h1>this is a NFT store</h1>
            <p>yep it is a store</p>
            <div>
                View all item
                <AiFillShopping />
                <RouterLink to={"Items"}>Go to store</RouterLink>
            </div>
            <div>
                Create an Item
                <AiOutlinePlusSquare />
                <RouterLink to={"CreateItems"}>Go to Create</RouterLink>
            </div>
        </>
    )
}

export default Home