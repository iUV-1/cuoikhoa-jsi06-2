import React from 'react'
import './PriceItem.css';
import {Input }from'@nextui-org/react';

const Price = () => {
    return (
        <div className="PriceContainer">
            <label className="labelPrice">Price</label>
            <Input clearable bordered placeholder="Type your price"  className="PriceInput"/>
        </div>
    )
}

export default Price