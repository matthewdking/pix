import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  font-size: 2rem;
  margin: 3rem 0;
`;

const APILink = styled.a``;

export const Header = () => (
  <HeaderContainer>
    A simple app using the{' '}
    <APILink href="https://pixabay.com/api/docs/">pixabay API</APILink>
  </HeaderContainer>
);
