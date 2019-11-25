import React from 'react';

export default function ToolTip(props) {
    return (
        <div className='tooltip'>
            <h3 className='tooltip-text'>{props.text}</h3>
            <div className='triangle'></div>
        </div>
    )
}