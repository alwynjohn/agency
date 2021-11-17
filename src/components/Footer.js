import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    height:10%;
    background-color:#111;
    position: relative;
    color:lightgrey;

`


const Wrapper = styled.div`
    padding:20px;
    display: flex;
    justify-content: space-between;

`

const List = styled.ul`
    padding:0;
    margin:0;
    list-style:none;
    display: flex;
`


const ListItems = styled.li`
    margin-right:20px;
    @media only screen and (max-width:480px){
        
        margin-right:10px;
        font-size: 12px;
        
    }

`


const Copyright = styled.span`
    width:100%;
`

function Footer() {
    return (
        <Container>
            <Wrapper>
                <List>
                    <ListItems>Guide</ListItems>
                    <ListItems>Support</ListItems>
                    <ListItems>API</ListItems>
                    <ListItems>Community</ListItems>   
                </List>
                <Copyright>James John DEV &#169;</Copyright>
            </Wrapper>
        </Container>
    )
}

export default Footer
