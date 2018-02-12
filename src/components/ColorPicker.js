import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchPictures } from '../actions/fetchPictures';

const ColorContainer = styled.section`
  display: flex;
  justify-content: space-around;
`;

const SingleColorWrapper = styled.div`
  height: 3rem;
  width: 3rem;
  display: inline-block;
  cursor: pointer;
`;

const SingleColor = styled.div`
  background-color: ${props => props.color};
  height: 5rem;
  width: 5rem;
  text-align: center;
  line-height: 5rem;
  font-size: 1.4rem;
  border-radius: 1rem;
  border: 0.15rem black solid;
`;

export const randomSearch = searchQueries => {
  return searchQueries[Math.floor(Math.random() * searchQueries.length)];
};

export class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        {
          name: 'Red',
          hex: '#F44336',
        },
        {
          name: 'Yellow',
          hex: '#FFEB3B',
        },
        {
          name: 'Green',
          hex: '#4CAF50',
        },
        {
          name: 'Purple',
          hex: '#9C27B0',
        },
      ],
      searchQueries: [
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
      ],
    };
  }

  render() {
    return (
      <ColorContainer>
        {this.state.colors.map((color, index) => (
          <SingleColorWrapper
            key={index}
            onClick={() => {
              this.props.fetchPictures(
                color.name,
                randomSearch(this.state.searchQueries),
              );
            }}
          >
            <SingleColor color={color.hex}>{color.name}</SingleColor>
          </SingleColorWrapper>
        ))}
      </ColorContainer>
    );
  }
}

const mapDispatchToProps = {
  fetchPictures,
};

const mapStateToProps = state => ({
  pictures: state.pictures,
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
