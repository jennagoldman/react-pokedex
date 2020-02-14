import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import PokeList from './PokeList';
import request from 'superagent';

export default class App extends Component {
  state = { data: [] };

  async componentDidMount() {
    const pokemonAPIData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    this.setState({ data: pokemonAPIData.body.results });
    console.log(this.state.data);

  };
 
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Search />
          <PokeList data={this.state.data} />
        </main>
      </div>
    );
  }
}
