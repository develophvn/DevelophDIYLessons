import React, { memo } from 'react';
import styled from 'styled-components'

const Square = ({ color, onClick, index }) => {
    const SquareComponent = styled.div`
    min-height: 46px;
    min-width: 46px;
    max-height: 46px;
    max-width: 46px;
    background-color: ${color};
    margin: 2px;
    `;
    return (
        <SquareComponent onClick={() => onClick(index)} />
    )
}

export default memo(Square);