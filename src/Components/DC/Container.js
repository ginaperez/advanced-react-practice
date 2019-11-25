import React, { Component } from 'react';
import axios from 'axios';
import StarWars from './Display';

export default class CharacterContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        axios.get(`https://swapi.co/api/people`).then(characters => {
            this.setState({
                characters: characters.data.results
            })
        })
    }

    render() {
        console.log(this.state)
        return <StarWars characters={this.state.characters} />
    }
}