import React from 'react';
import renderer from 'react-test-renderer';
import { ColorPicker, randomSearch } from './ColorPicker';

Math.random = jest.fn(() => 0.5);
// Math.random produces 0.5 for all tests

const searchQueries = [
  'man',
  'mountain',
  'state',
  'ocean',
  'country',
  'building',
  'cat',
  'airline',
  'wealth',
  'happiness',
  'pride',
  'fear',
  'religion',
  'bird',
  'book',
  'phone',
  'rice',
  'snow',
  'water',
];

const store = test('randomSearch returns middle value', () => {
  expect(randomSearch([1, 2, 3])).toBe(2);
  expect(randomSearch(['hello'])).toBe('hello');
  expect(randomSearch(searchQueries)).toBe('happiness');
});

test('ColorPicker snapshot', () => {
  const component = renderer.create(<ColorPicker />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
