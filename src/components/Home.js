import React from 'react';
<<<<<<< HEAD

const Home = () => {
    return(
        <p>
            you are at Home
        </p>
=======
import { Container } from '@nextui-org/react';
import ItemContainer from "./ItemContainer";
import Test from "./Test"

const Home = () => {
    return(
        <Container>
           <ItemContainer/>
           <Test/>
        </Container>
>>>>>>> dad13c79e0e8b25a74772d29c8dcea3167b439bd
    )
}

export default Home