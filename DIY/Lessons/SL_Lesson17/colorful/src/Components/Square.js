import styled from 'styled-components'

const Square = ({ color }) => {
    const SquareComponent = styled.div`
    height: 50px;
    width: 50px;
    background-color: ${color};
    `;

    return (
        <SquareComponent />
    )
}

export default Square;