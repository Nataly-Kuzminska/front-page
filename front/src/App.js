import React from 'react'
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'
import Navbar from './Navbar';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #FFFFFF;
    font-family: Raleway, sans-serif;
    font-size: 18px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, p {
    padding: 0;
    margin: 0;
  }
`;

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
    </Container>
  );
};

const Container = styled.div`
  background: #FFFFFF;
  height: 100vh;
`;

export default App
