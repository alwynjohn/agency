import React from 'react'
import styled from 'styled-components'
import Search from '../img/search.png'


const Container = styled.div`
    width:100px;
    padding:20px;
    display: flex;
    flex-direction: column;
    box-shadow:1px 1px 4px 0px #dfdede;
    align-items:center;
    
    @media only screen and (max-width:480px){
        width:50px;  
        
    }

`

const Image = styled.img`
    width:20px; 
`

const Text = styled.span`
    margin-top: 10px;
    text-align:center;
    
    @media only screen and (max-width:480px){
        font-size:14px;
        
    }
`



function Minicard() {
    return (
        <Container>
            <Image src={Search}/>
            <Text>
            Lorem Ipsum is simply dummy text printing .        
           </Text>
        </Container>
    )
}

export default Minicard
