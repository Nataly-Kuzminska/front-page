import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { Navbar } from './Components/Navbar';
import { DisplayData } from './Components/DisplayData';
import { Products } from './Components/Products';

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
    color: #1D1F22;
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

  button {
    cursor: pointer;
  }

  input, button {
    font-family: inherit;
  }
`;

function App(){
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });
  return (
  <ApolloProvider client={client}>
    <BrowserRouter>
        <Switch>
        <Route exact path='/' component={ Navbar } />
          <div className='App'>
          <DisplayData />
          <GlobalStyle/>
          <Navbar />
          <Products/>
          <h2>Category name</h2>
          </div>
        </Switch>
    </BrowserRouter>
  </ApolloProvider>
  );
}

 

export default App
