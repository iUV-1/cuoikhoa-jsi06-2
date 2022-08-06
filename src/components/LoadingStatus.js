import React from 'react';

import Loading from '../img/Loading.svg';

import './style/LoadingStatus.css'

const LoadingStatus = (props) => {

    if(!props.active) {
        return;
    }
    return(
        <div className='LoadingContainer'>
            <p className='LoadingText'>Fetching content...</p>
            <img className="LoadingIcon"src={Loading} />
        </div>
    )
}

export default LoadingStatus