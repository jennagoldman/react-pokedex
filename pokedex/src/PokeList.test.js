import React from 'react';
import PokeList from './PokeList';
import pokemonData from './data'
import renderer from 'react-test-renderer';

it('App renders correctly', () => {
  const tree = renderer
    .create(<PokeList data={pokemonData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});