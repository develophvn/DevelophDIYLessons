import React, { memo } from 'react';
import styled from 'styled-components'

const SquareComponent = styled.div`
min-height: 46px;
min-width: 46px;
max-height: 46px;
max-width: 46px;
background-color: ${props => props.color};
margin: 2px;
`;

const Square = ({ color, onClick, index }) => {
    return (
        <SquareComponent color={color} onClick={() => onClick(index)} />
    )
}

export default memo(Square);