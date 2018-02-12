import React from 'react';
import renderer from 'react-test-renderer';
import { Gallery } from './Gallery';
import { data } from './testData';

const isFetchingProps = {
  pictures: [],
  fetched: false,
  isFetching: true,
  error: false,
};

const errorProps = {
  pictures: [],
  fetched: false,
  isFetching: false,
  error: true,
};

const fetchedProps = {
  pictures: data,
  fetched: false,
  isFetching: false,
  error: false,
};

const initialProps = {
  pictures: [],
  fetched: false,
  isFetching: false,
  error: false,
};

test('Gallery snapshot fetching', () => {
  const component = renderer.create(<Gallery pictures={isFetchingProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Gallery snapshot error', () => {
  const component = renderer.create(<Gallery pictures={errorProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Gallery snapshot fetched', () => {
  const component = renderer.create(<Gallery pictures={fetchedProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Gallery snapshot initial', () => {
  const component = renderer.create(<Gallery pictures={initialProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
