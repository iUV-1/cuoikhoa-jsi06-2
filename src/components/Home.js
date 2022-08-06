import React from 'react';
import { Container } from '@nextui-org/react';
import ItemContainer from "./ItemContainer";
import Test from "./Test"

const Home = () => {
    return(
        <Container>
           <ItemContainer/>
           <Test/>
        </Container>
    )
}

export default Home