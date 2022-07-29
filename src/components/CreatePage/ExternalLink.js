import React from 'react'
import { Input } from '@nextui-org/react';
import "./ExternalLink.css"

const ExTernalLinks = () => {
    return (
        <div>
            <div clasName="ExternalLabelDes" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}>
            <label className="ExternalLabel">External link</label>
            <span className="ExternalDescriptions">OpenSea will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome <p style={{margin:'0'}}>to link to your own webpage with more details.</p></span>
            </div>
            <div>
             <Input clearable bordered Placeholder="https://yoursite.io/item/123" className="ExternalLinkInput" />
            </div>
        </div>
    )
}

export default ExTernalLinks;