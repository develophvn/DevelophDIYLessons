import React from 'react';
import './App.css';
import styled from 'styled-components';
import Square from "./Components/Square/Square"


const COLORS = ['red', 'blue', 'green']
const SquareGroup = styled.div`
  width: ${props => Math.sqrt(props.N) * 50}px;
  height:  ${props => Math.sqrt(props.N) * 50}px;
  display: flex;
  flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
`

function App() {
  return (
    <div className="App">
      <div className="Frame">
        <SquareGroup numerOfSquares={100}>
          <Square color={COLORS[0]} />
        </SquareGroup>
      </div>
    </div>
  );
}

export default App;
