import React, { Component } from 'react';
import './App.css';
import { getPokemon } from './get-pokemon.js';
import Header from './Header';
import SearchOptions from './SearchOptions';
import Paging from './Paging';
import PokeList from './PokeList';

export default class App extends Component {
  state = {
    pokemon: [],
    totalResults: 0
  };

  async loadPokemon() {
    const response = await getPokemon();
    const pokemon = response.results;
    const totalResults = response.count;
    
    this.setState({
      pokemon: pokemon,
      totalResults: totalResults
    });
  }

  async componentDidMount() {
    window.location.hash = 'sort=id';
    
    await this.loadPokemon();
    
    window.addEventListener('hashchange', async () => {
      console.log("change")
      await this.loadPokemon();
    });
  }
 
  render() {
    const { pokemon, totalResults } = this.state;

    return (
      <div className="App">
        <Header />
        <main>
          <SearchOptions />
          <Paging totalResultsProp={totalResults} />
          <PokeList pokemon={pokemon} />
        </main>
      </div>
    );
  }
}
