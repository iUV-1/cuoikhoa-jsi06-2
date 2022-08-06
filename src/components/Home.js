import React from 'react';
import { Container } from '@nextui-org/react';
import {AiFillShopping, AiOutlinePlusSquare} from "react-icons/ai";
import {Link as RouterLink} from 'react-router-dom';
import './style/Home.css'

const Home = () => {
    return(
        <div className='HomeContainer'>
            <h1 className='HomeTitle'>this is a NFT store</h1>
            <p className='HomeSubtext'>yep it is a store</p>
            <div className='HomeGotoContainer'>
                <div className='HomeGoto Grid1'>
                    <p className='HomeGotoText'>View Items </p>
                    <AiFillShopping className='HomeGotoIcon'/>
                    <RouterLink to={"Items"} className="HomeGotoLink">Go to store</RouterLink>
                </div>
                <div className='HomeGoto Grid2'>
                    <p className='HomeGotoText'>Create an Item </p>
                    <AiOutlinePlusSquare className='HomeGotoIcon'/>
                    <RouterLink to={"CreateItems"} className="HomeGotoLink">Go to Create</RouterLink>
                </div>
            </div>

        </div>
    )
}

export default Home