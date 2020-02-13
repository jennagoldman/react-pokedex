import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
        return (
                <li className="pokemon-item">
                    <h2>{this.props.pokemon.pokemon}</h2>
                    <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon} />
                    <p>HP: {this.props.pokemon.hp}</p>
                    <p><span>Attack: {this.props.pokemon.attack}</span> | <span>Defense: {this.props.pokemon.defense}</span></p>
                    <p>Type: {this.props.pokemon.type_1}</p>
                </li>
        )
    }
}