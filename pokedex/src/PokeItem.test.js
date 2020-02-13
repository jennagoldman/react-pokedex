import React from 'react';
import PokeItem from './PokeItem';
import pokemonData from './data'
import renderer from 'react-test-renderer';

it('App renders correctly', () => {
  const tree = renderer
    .create(<PokeItem pokemon={pokemonData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});