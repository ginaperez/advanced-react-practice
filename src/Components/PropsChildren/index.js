import React, { Component } from 'react';
import Hover from './Hover';
import Box from '../RenderProps/Box';
import ToolTip from '../RenderProps/ToolTip';

export default class PropsChildren extends Component {
    render() {
        return (
            <div>
                <h1>Props.children</h1>

                <Hover>
                    {hovering => <Box isHovered={hovering} text='Gina' />}
                    <ToolTip />
                </Hover>
            </div>
        )
    }
}