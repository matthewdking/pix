import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import ColorPicker from './components/ColorPicker';
import Gallery from './components/Gallery';
import './style/global';

const AppContainer = styled.section`
  max-width: 50rem;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <ColorPicker />
        <Gallery />
      </AppContainer>
    );
  }
}

export default App;
