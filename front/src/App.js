import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';

const App = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

const Container = styled.div`
  background: #FFFFFF;
  height: 100vh;
`;

export default App
