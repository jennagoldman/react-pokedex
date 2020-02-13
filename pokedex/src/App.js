import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import PokeList from './PokeList';

export default class App extends Component {
  state = { data: null };

  render() {
    return (
      <div className="App">
        <Header />
        <PokeList />
      </div>
    );
  }
}
