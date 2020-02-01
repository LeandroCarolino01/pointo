import React from 'react';
import Home from './Pages/Home';
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'

const Root = styled(Container)`
  height: 100vh;
  width: 100vw;
`

function App() {
  return (
      <Root>
        <Home/>
      </Root>
    
  );
}

export default App;
