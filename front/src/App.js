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

  img {
    max-width: 100%;
    height: auto; 
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

  h2 {
    font-family: Raleway;
    font-size: 42px;
    line-height: 67,2px;
    font-weight: 400;
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
  }
`;

const App = () => {
  return (

    <Container>
      <GlobalStyle/>
      <Navbar />
      <h2>Category name</h2>
    </Container>

  );
};

const Container = styled.div`
  background: #FFFFFF;
  height: 100vh;
`;

export default App
