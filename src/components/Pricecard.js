import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    display: flex;
    padding: 20px;
    box-shadow:0 0 7px 1px #dbdbdb;
    background-color:#fff;
    border-radius:10px;
    flex-direction: column;
    align-items: center;
    margin:50px;
    justify-content: center;

    @media only screen and (max-width:480px){
        
        width:100%;
        margin:10px;
        padding:5px;
    }
`
const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    
`
const Price = styled.span`
    font-weight: bold;
    font-size: 50px;
    @media only screen and (max-width:480px){
        
       font-size:20px;
        
    }
`
const Type = styled.button`
    padding: 10px;
    margin:10px 0;
    border:1px solid crimson;
    color: crimson;
    background-color:#fff;
    border-radius: 20px;
    @media only screen and (max-width:480px){
        margin:5px 0;
        padding:5px;
    }
`
const List = styled.ul`
    list-style: none;
`
const Listitems = styled.li`
    margin: 30px 0;
    @media only screen and (max-width:480px){
        margin:7px 0;
        font-size: 12px;
    }
`
const Button = styled.button`
    border:none;
    background-color: darkblue;
    color:#fff;
    font-size: 16px;
    padding:15px;
    border-radius: 10px;
    cursor:pointer;
    font-weight: bold;

    @media only screen and (max-width:480px){
        
       padding:4px 10px;

        
    }
`

const Pricecard = ({type,price}) => {
    return (
        <Container>
            <PriceContainer>
                $<Price>{price}</Price>/Month
            </PriceContainer>
                <Type>{type}</Type>
                <List>
                    <Listitems>200 Hand-Crafted Templates</Listitems>
                    <Listitems>Exclusive support</Listitems>
                    <Listitems>50+ Prebuilt websites</Listitems>
                    <Listitems>Premium Plugins</Listitems>
                </List>
                <Button>Join Now</Button>
        </Container>
    )
}

export default Pricecard
