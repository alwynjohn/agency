import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:50px;
    
`
const Wrapper = styled.div`
  padding:10px 20px;
  display:flex;
  justify-content:space-between;
  
`

const Left = styled.div`
    width:60%;
    display:flex;
    align-items:center;
    justify-content:space-between;
` 
const Logo =styled.h1`
    font-weight:bold;
    text-decoration:underline crimson;
`
const Menu = styled.ul`
    display:flex;

    @media only screen and (max-width:480px){
        display:none;
    }
`
const MenuItem = styled.li`
    margin-right:30px;
    list-style-type:none;
    font-size:20px;
    color:grey;
`
const Button =styled.button`
    border:2px solid #fff;
    padding:10px 15px;
    background-color:crimson;
    color:#fff;
    font-weight:bold;
    cursor:pointer;

`

export const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left><Logo>Agency</Logo>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Services</MenuItem>
                    <MenuItem>Pricing</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>
                </Left>
                <Button>Join Today</Button>

            </Wrapper>
            
        </Container>
    )
}
