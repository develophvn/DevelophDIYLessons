import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Square from "./Components/Square/Square"

const NUMER_OF_SQUARES = 64;
const COLORS = ['red', 'blue', 'green']
const SquareGroup = styled.div`
  width: ${props => Math.sqrt(props.numerOfSquares) * 50}px;
  height:  ${props => Math.sqrt(props.numerOfSquares) * 50}px;
  display: flex;
  flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
`

function App() {
  const [array, setArray] = useState(Array(NUMER_OF_SQUARES).fill(0));
  //[0, 0, ,0, 0, 0 ,0 ]
  const handleClick = (index) => {
    console.log(index);
    let temp = [...array];
    temp[index] = 1;
    setArray(temp);
  }
  return (
    <div className="App">
      <div className="Frame">
        <SquareGroup numerOfSquares={NUMER_OF_SQUARES}>
          {array.map((value, index) => <Square key={index} color={COLORS[value]} index={index} onClick={(index) => handleClick(index)} />)}
        </SquareGroup>
      </div>
    </div>
  );
}

export default App;
