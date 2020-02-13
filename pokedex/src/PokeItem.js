import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
        return (
            <div className="pokemon-item">
                <h2>Pokemon Name</h2>
                <img src="" alt="" />
                <p>Pokemon HP</p>
                <p>Pokemon Type</p>
            </div>
        )
    }
}