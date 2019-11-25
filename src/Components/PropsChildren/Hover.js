import React, { Component } from 'react';

export default class Hover extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hovering: false
        }
    }

    mouseOver = () => this.setState({hovering: true})

    mouseOut = () => this.setState({hovering: false})

    render() {
        return (
            <div className='hover-comp hover-holder' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
            {this.props.children(this.state.hovering)}
            </div>
        )
    }
}