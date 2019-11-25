import React, { Component } from 'react';
import Hover from './Hover';
import Box from './Box';

export default class RenderProps extends Component {
    render() {
        return (
            <div>
            <h1>Render Props</h1>
            <Hover render={hovering => <Box isHovered={hovering} text='this is a tooltip'/>}/>

            <Hover render={hovering => <div>are you hovering? {hovering ? 'yes' : 'no'}</div>}/>

            </div>
        )
    }
}