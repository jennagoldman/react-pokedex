import React, { Component } from 'react';
import PokeItem from './PokeItem';

export default class PokeList extends Component {

    render() {
        
        return (
            <section className="pokemon-list">
                <ul>
                    {this.props.pokemon.map(pokemon => <PokeItem pokemon={pokemon} key={pokemon._id} />)}
                </ul>
            </section>

        )
    }
}