import React, { Component } from 'react';
import StarWars from './StarWars';

export default class HigherOrderComponent extends Component {
    render() {
        return (
            <div>
            <h1>Higher Order</h1>
            <StarWars />
            </div>
        )
    }
}