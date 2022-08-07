import React from 'react';

import {AiOutlineWarning} from 'react-icons/ai'

import './style/ErrorHandler.js';

const ErrorHandler = (props) => {
    if(!props.active){
        return;
    }
    return(
        <div>
            <AiOutlineWarning />
            <p>ERROR!</p>
            <p>MSG: {props.code}</p>
        </div>
    )
}

export default ErrorHandler