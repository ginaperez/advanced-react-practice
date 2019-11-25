import React from 'react';
import ToolTip from './ToolTip';

export default function Box(props) {
    return (
        <div>
            <h1>box</h1>
            {props.isHovered && <ToolTip {...props} />}
        </div>
    )
}