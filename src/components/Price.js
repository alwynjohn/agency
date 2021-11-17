import React from 'react'
import styled from 'styled-components'
import Pricecard from './Pricecard'

const Container = styled.div`
    height:100%;
    display: flex;
    width:90%;
    margin: auto;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (max-width:480px){
        flex-direction:column;
        width: 80%;
    }
`

const Price = () => {
    return (
        <Container>
            <Pricecard price="10" type="Basic plan"></Pricecard>
            <Pricecard price="20" type="Premium plan"></Pricecard>
            <Pricecard price="30" type="Advanced plan"></Pricecard>
        </Container>
    )
}

export default Price
