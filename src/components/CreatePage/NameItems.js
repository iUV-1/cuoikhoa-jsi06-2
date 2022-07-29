import React from 'react'
import { Input } from '@nextui-org/react';
import './NameItems.css'

const NameItems = () => {
    return (
        <div className="ItemNameContainer">
            <div>
                <label className="labelName">Name<span style={{color:'rgb(235, 87, 87)'}}> *</span></label>
            </div>
            <div>
             <Input clearable bordered Placeholder="Item name" className="ItemNameInput" />
            </div>
        </div>
    )
}

export default NameItems;