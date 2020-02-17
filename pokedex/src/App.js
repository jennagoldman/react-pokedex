import React, { Component } from 'react';
import './App.css';
import { getPokemon } from './get-pokemon.js';
import Header from './Header';
import SearchOptions from './SearchOptions';
import Paging from './Paging';
import PokeList from './PokeList';

export default class App extends Component {
  state = {
    pokemon: []
  };

  async loadPokemon() {
    const response = await getPokemon();
    const pokemon = response.results;
    const totalResults = response.count;

    console.log(pokemon);
    
    this.setState({
      pokemon: pokemon,
      totalResults: totalResults,
    });
  }

  

  async componentDidMount() {
    window.location.hash = 'sort=id&page=1';
    
    await this.loadPokemon();
    
    window.addEventListener('hashchange', async () => {
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
          <Paging totalResults={totalResults} />
          <PokeList pokemon={pokemon} />
        </main>
      </div>
    );
  }
}
