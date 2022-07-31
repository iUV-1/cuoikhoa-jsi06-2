import React from 'react'
import { Textarea } from '@nextui-org/react';
import './DescriptionItem.css';

const DescriptionItems = () => {
    return (
        <div>
            <div className="DescriptionItemContainer">
                <label className="DesLabel">Description</label>
                <span className="Description">The description will be included on the item's detail page underneath its image. <a href="https://www.markdownguide.org/cheat-sheet/" style={{
                    color: 'rgb(32, 129, 226)',
                    textDecoration: 'none',
                    fontWeight:'bold'
            }}>Markdown</a> syntax is supported.</span>
            </div>
            <div>
                <Textarea placeholder="Provide a detailed description of your item" className="DescriptionTextArea"/>
            </div>
        </div>
    )
}

export default DescriptionItems;