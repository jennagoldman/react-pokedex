import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
        return (
                <li className="pokemon-item">
                    <h2>{this.props.pokemon.pokemon.toUpperCase()}</h2>
                    <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon} />
                    <p>HP: {this.props.pokemon.hp}</p>
                    <p>Types: 
                        <span> {this.props.pokemon.type_1}</span>
                        <span>, {this.props.pokemon.type_2} </span>
                    </p>
                </li>
        )
    }
}