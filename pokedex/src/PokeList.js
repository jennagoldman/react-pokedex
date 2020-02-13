import React, { Component } from 'react';
import PokeItem from './PokeItem';

export default class PokeList extends Component {
    render() {
        return (
            <main>
                <section className="search-container">

                </section>
                <section className="pokemon-list">
                    <PokeItem />
                </section>
            </main>
        )
    }
}